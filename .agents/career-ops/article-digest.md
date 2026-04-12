# Article Digest — Phi Tong Portfolio Proof Points
# Compact proof points from portfolio projects.
# career-ops reads this file at evaluation time. Takes precedence over cv.md for metrics.
# Last updated: 2026-04-11

---

## The Deadline Crisis Simulator — Storyline 360 + JavaScript (2026)

**URL:** https://hoangphi-id.github.io/case-study-titanium.html
**Live demo:** https://share.articulate.com/pJOEwYqzhkawJg5nEXF4U

**Hero metric:** First behavioral simulation with real-time decision tracking via custom JS data bridge — exported to external cloud warehouse (Google Sheets API)

**Architecture:**
- Storyline 360 simulator → custom JavaScript ES6 bridge → variable state capture → Google Sheets API endpoint
- Branching scenario engine: 3 acts, 12+ decision nodes, consequence cascades
- TrustScore variable: real-time tracking of cumulative decision quality (0–100 scale)
- Performance heatmap: identifies which nodes have highest failure rates across learner population

**Key architectural decisions:**
- Bypassed SCORM's read-only data model by injecting JS directly into Storyline's HTML layer
- Used Google Sheets as data warehouse (free, accessible, real-time) rather than LRS
- Decoupled pedagogy from LMS constraints — behavioral data flows regardless of LMS used

**Proof points:**
- Demonstrates JavaScript ES6 proficiency in an authoring tool context (uncommon in L&D)
- Evidence of systems thinking: designed the data architecture before building the content
- Architectural Reflection: "SCORM was designed for completion tracking. Behavioral measurement required going outside the LMS. I'd use xAPI from day 1 next time."

**Best case study for:** LXA, ID roles requiring evidence of complex technical architecture, data pipeline mindset, behavioral measurement beyond completion tracking

---

## Remote Work Onboarding — Articulate Rise 360 (2026)

**URL:** https://hoangphi-id.github.io/case-study-onboarding.html

**Hero metric:** 3-module scalable onboarding system — SCORM 1.2 export to Moodle, mobile-first UX, modular asset architecture reducing maintenance overhead by ~40%

**Architecture:**
- Rise 360: 3 modules with accordion, timeline, sorting activity, and reflective scenario
- SCORM 1.2 packaging → Moodle LMS deployment with completion tracking
- Branching scenario with trade-off analysis (no binary right/wrong — models nuanced judgment)
- Mobile-first responsive design verified across device types

**Key design decisions:**
- Modular structure: each module independently deployable, reducing risk of single-point failure
- Reflective scenario over knowledge quiz: tests judgment, not recall
- SCORM 1.2 chosen over xAPI for Moodle compatibility across older installations

**Proof points:**
- Demonstrates full ID pipeline: instructional strategy → storyboard → Rise build → SCORM export → LMS deployment
- Branching scenario design: non-trivial trade-off structure (not just correct/incorrect branches)
- Architectural Reflection: "Modularizing assets reduced maintenance overhead. Design for scalability from Day 0."

**Best case study for:** ID, LD, CS-EdTech roles requiring evidence of corporate L&D, UX consistency, SCORM/LMS deployment experience

---

## IELTS Writing Masterclass — Moodle LMS (2026)

**URL:** https://hoangphi-id.github.io/case-study-moodle.html

**Hero metric:** 4-unit self-paced ecosystem — automated rubrics, sequential completion gating, conditional activity logic across 500+ course assets

**Architecture:**
- MoodleCloud deployment: 4 units, sequential unlock via completion requirements
- Automated rubric: 4-criteria IELTS band descriptor alignment (Task Achievement, Coherence, Lexical Resource, Grammar)
- MCQ formative assessment: tied to completion triggers, not just viewed
- Conditional gating: Unit N+1 unlocked only on Unit N completion — enforces curriculum sequence

**Key LMS decisions:**
- Completion requirements set to "grade" not "view" — prevents passive clicking through
- Rubric aligned to official IELTS examiner descriptors — defensible pedagogically
- Course structured for 100% self-managed progression — no teacher dependency

**Proof points:**
- Moodle administration demonstrated at design level: activity settings, grade book, completion tracking, conditional access
- Academic QA mindset: rubric criteria traceable to external standards, not subjective
- Architectural Reflection: "Technical stability over visual complexity ensured uptime for concurrent learners. Systematic redundancy beats ad-hoc design."

**Best case study for:** LXA, ID roles requiring LMS administration, academic quality assurance, institutional compliance, EdTech infrastructure experience
