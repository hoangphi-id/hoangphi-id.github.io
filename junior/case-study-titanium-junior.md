# Branching Behavioral Simulator — Articulate Storyline 360

## The Problem

Standard eLearning often only tells us if a learner finished a course — not why they made each decision along the way. For a scenario that simulates high-stakes negotiation, completion data alone isn't enough. The real question is: what does a learner's decision pattern reveal about their thinking?

Most quiz-based assessments give a score. This project was designed to give something more useful — a picture of how a learner thinks under pressure.

## Core Objective

Simulate a "Friday Night Crisis" scenario where a Project Lead must balance client pressure, team capacity, and stakeholder trust across 3 decision stages. Each choice updates a hidden TrustScore variable, which determines the final outcome and feedback the learner receives.

## What I Built

A branching behavioral simulator in Articulate Storyline 360 with:

- **3 decision stages:** Negotiation → Diplomacy → Team Alignment
- **TrustScore and Stress Meter variables** tracking learner choices across the entire scenario
- **State-driven visual feedback** — the interface changes color (Success / Warning / Danger) based on current performance
- **JavaScript trigger logic** connecting Storyline to an external data pipeline (n8n → Google Sheets) for behavioral logging
- **Automated feedback via Gemini AI** — each submission triggers a diagnostic verdict based on the learner's decision pattern

## Design Decisions

**Why branching instead of linear?**
Linear scenarios tell learners what to do. Branching scenarios reveal what learners actually do — and that's the data worth collecting.

**Why track TrustScore across stages?**
A single decision doesn't define a learner's pattern. Tracking cumulative score across 3 stages shows whether a learner is consistently strategic or inconsistent under different types of pressure.

**Why connect to an external pipeline?**
SCORM's built-in reporting only captures completion and score. Connecting to Google Sheets via n8n allowed logging of every decision path — not just the final result.

## What I Learned

- Branching logic requires mapping every decision path before touching the tool. Storyboarding first saves significant rework later.
- Designing the TrustScore variable taught me how to translate abstract learning objectives into measurable, trackable outcomes.
- Connecting SCORM to an external pipeline showed me how behavioral data can inform future course iterations — not just report on past ones.

## Tools Used

Articulate Storyline 360 · JavaScript (ES6) · n8n · Google Sheets · Gemini AI · Moodle (SCORM 1.2 deployment)

---

*[← Back to Portfolio](https://hoangphi-id.github.io/junior/index.html)*
