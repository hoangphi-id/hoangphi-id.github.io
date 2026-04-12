#!/usr/bin/env node
/**
 * generate-pdf.mjs — HTML → PDF via Playwright
 * Adapted from santifer/career-ops v1.3.0
 *
 * Usage:
 *   node generate-pdf.mjs <input.html> <output.pdf> [--format=letter|a4]
 *
 * Setup:
 *   npm install playwright
 *   npx playwright install chromium
 */

import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function normalizeTextForATS(html) {
  const replacements = {};
  const bump = (key, n) => { replacements[key] = (replacements[key] || 0) + n; };
  const masks = [];
  const masked = html.replace(
    /<(style|script)\b[^>]*>[\s\S]*?<\/\1>/gi,
    (match) => { const token = `\u0000MASK${masks.length}\u0000`; masks.push(match); return token; }
  );
  let out = ''; let i = 0;
  while (i < masked.length) {
    const lt = masked.indexOf('<', i);
    if (lt === -1) { out += sanitize(masked.slice(i)); break; }
    out += sanitize(masked.slice(i, lt));
    const gt = masked.indexOf('>', lt);
    if (gt === -1) { out += masked.slice(lt); break; }
    out += masked.slice(lt, gt + 1);
    i = gt + 1;
  }
  const restored = out.replace(/\u0000MASK(\d+)\u0000/g, (_, n) => masks[Number(n)]);
  return { html: restored, replacements };

  function sanitize(text) {
    if (!text) return text;
    let t = text;
    t = t.replace(/\u2014/g, () => { bump('em-dash', 1); return '-'; });
    t = t.replace(/\u2013/g, () => { bump('en-dash', 1); return '-'; });
    t = t.replace(/[\u201C\u201D\u201E\u201F]/g, () => { bump('smart-double-quote', 1); return '"'; });
    t = t.replace(/[\u2018\u2019\u201A\u201B]/g, () => { bump('smart-single-quote', 1); return "'"; });
    t = t.replace(/\u2026/g, () => { bump('ellipsis', 1); return '...'; });
    t = t.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g, () => { bump('zero-width', 1); return ''; });
    t = t.replace(/\u00A0/g, () => { bump('nbsp', 1); return ' '; });
    return t;
  }
}

async function generatePDF() {
  const args = process.argv.slice(2);
  let inputPath, outputPath, format = 'a4';
  for (const arg of args) {
    if (arg.startsWith('--format=')) format = arg.split('=')[1].toLowerCase();
    else if (!inputPath) inputPath = arg;
    else if (!outputPath) outputPath = arg;
  }
  if (!inputPath || !outputPath) {
    console.error('Usage: node generate-pdf.mjs <input.html> <output.pdf> [--format=a4|letter]');
    process.exit(1);
  }
  inputPath = resolve(inputPath);
  outputPath = resolve(outputPath);
  if (!['a4', 'letter'].includes(format)) { console.error('Format must be a4 or letter'); process.exit(1); }

  console.log(`📄 Input:  ${inputPath}`);
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📏 Format: ${format.toUpperCase()}`);

  let html = await readFile(inputPath, 'utf-8');
  const fontsDir = resolve(__dirname, 'fonts');
  html = html.replace(/url\(['"']?\.\/fonts\//g, `url('file://${fontsDir}/`);
  html = html.replace(/file:\/\/([^'")\s]+)\.(woff2?|ttf|otf)['"']?\)/g, `file://$1.$2')`);

  const { html: normalizedHtml, replacements } = normalizeTextForATS(html);
  const totalR = Object.values(replacements).reduce((a, b) => a + b, 0);
  if (totalR > 0) console.log(`🧹 ATS normalization: ${totalR} chars normalized`);

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setContent(normalizedHtml, { waitUntil: 'networkidle', baseURL: `file://${dirname(inputPath)}/` });
    await page.evaluate(() => document.fonts.ready);
    const pdfBuffer = await page.pdf({
      format, printBackground: true,
      margin: { top: '0.6in', right: '0.6in', bottom: '0.6in', left: '0.6in' },
      preferCSSPageSize: false,
    });
    await writeFile(outputPath, pdfBuffer);
    const pageCount = (pdfBuffer.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    console.log(`✅ PDF generated: ${outputPath}`);
    console.log(`📊 Pages: ${pageCount}`);
    console.log(`📦 Size: ${(pdfBuffer.length / 1024).toFixed(1)} KB`);
  } finally {
    await browser.close();
  }
}

generatePDF().catch(err => { console.error('❌ Failed:', err.message); process.exit(1); });
