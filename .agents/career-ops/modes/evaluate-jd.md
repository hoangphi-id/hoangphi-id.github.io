# 🎯 JD EVALUATION ENGINE — PHI TONG EDITION
*Adapted from Santiago Valdarrama's career-ops framework (v1.3.0)*
*Run this protocol every time a JD is provided for evaluation.*

---

## STEP 0 — ARCHETYPE DETECTION
Classify the role into one of these archetypes:

| Archetype | Description | Best CV Version |
|---|---|---|
| **LXA** | Learning Experience Architect — systems thinking, data, LMS infra | `LA` or `LXD` |
| **ID** | Instructional Designer — content creation, curriculum, ADDIE | `ID` |
| **LD** | Learning Designer — UX-focused, learner-centered, blended | `LD` |
| **CS-EdTech** | Customer Success in EdTech — retention, onboarding, stakeholders | `CS` |
| **Gig/Ops** | AI Labeling, Localization, QA, Data Ops | `GIG` |
| **Hybrid** | Combination of 2 archetypes | Use primary + adapt |

---

## BLOCK A — ROLE SUMMARY
Create a table:
- Archetype detected
- Domain (EdTech / Corporate L&D / SaaS / Non-profit / Gov)
- Function (Build / Consult / Manage / Deploy / QA)
- Seniority (Junior / Mid / Senior / Lead / Manager)
- Remote (Full / Hybrid / On-site)
- Location requirements (timezone, country restrictions)
- TL;DR in 1 sentence

---

## BLOCK B — MATCH WITH CV
Read `cv.md`. Map every JD requirement to exact lines from Phi's CV.

**For each requirement:**
- ✅ Strong match → Direct CV evidence
- ⚠️ Partial match → Adjacent experience available
- ❌ Gap → See mitigation plan

**Gap Mitigation Plan (for each ❌):**
1. Is this a hard blocker or nice-to-have?
2. Can Phi demonstrate adjacent experience?
3. Which Case Study partially covers this gap?
4. Concrete mitigation phrase for cover letter or interview.

---

## BLOCK C — SENIORITY FIT & STRATEGY
1. Detected seniority in JD vs Phi's natural level for this archetype.
2. **"Sell Senior Without Lying"** plan: specific phrases to position 10+ years as strategic depth.
3. **Red Flag Handling**: How to answer "You don't have X enterprise tool experience?"

---

## BLOCK D — COMPENSATION & MARKET
Search or estimate:
- Typical salary range for this role (USD/month or annual)
- Company compensation reputation
- Remote-friendliness for Vietnam-based candidates
- Demand trend (growing / stable / declining)

If data unavailable, state clearly — never invent numbers.

---

## BLOCK E — PERSONALIZATION PLAN
| # | Section | Current State | Proposed Change | Why |
|---|---------|--------------|-----------------|-----|
| 1 | Headline | Learning Experience Architect... | ... | ... |
| 2 | Summary | ... | ... | ... |
| 3 | USC bullet | ... | ... | ... |
| ... | ... | ... | ... | ... |

Top 3 CV changes + Top 3 LinkedIn changes to maximize ATS score.

---

## BLOCK F — INTERVIEW PREPARATION
6–8 STAR+R stories mapped to JD requirements:

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|---------------|-------|---|---|---|---|------------|

**Reflection column**: What was learned or what would be done differently. This signals seniority.

**Recommended Case Study to Lead With**: Which of the 3 case studies to open the interview with, and key talking points.

**Red Flag Questions & Responses**:
- "You're Vietnam-based — can you work our timezone?"
- "Do you have experience with [enterprise LMS they use]?"
- "Why are you switching from teaching to [X]?"

---

## BLOCK G — POSTING LEGITIMACY CHECK
Analyze the posting for ghost job signals:

**Signals to check:**
1. Posting age (days since posted)
2. Apply button state (active / expired / generic redirect)
3. Description quality (specific tools mentioned? or generic boilerplate?)
4. Company hiring signals (any recent layoffs? hiring freeze?)
5. Has this role been reposted multiple times?

**Output:**
- **High Confidence** — real, active opening
- **Proceed with Caution** — mixed signals
- **Suspicious** — multiple ghost job indicators

---

## OUTPUT FORMAT

After generating Blocks A–G, save the full report to:
`.agents/career-ops/reports/{###}-{company-slug}-{YYYY-MM-DD}.md`

And log in `data/applications.md`:
`| {###} | {date} | {company} | {role} | {score}/5 | Evaluated | {CV code} | [link] |`

---

## QUICK SCORE (1–5)
After analysis, give an overall match score:
- **5** = Apply immediately, strong match across all blocks
- **4** = Apply with minor CV tweaks
- **3** = Apply if time allows, notable gaps exist
- **2** = Skip unless desperate — significant mismatch
- **1** = Do not apply — archetype mismatch or suspicious posting
