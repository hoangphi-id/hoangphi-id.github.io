# STORY BANK — PHI TONG
*Reusable STAR+R stories for behavioral interviews. Append new stories after each interview.*

---

## STORY 01 — The Moodle Transformation
**Maps to**: "Tell me about a time you led a digital transformation."  
**Archetype fit**: LXA, ID, CS

| | |
|---|---|
| **S (Situation)** | Vietop had 500+ course assets scattered across Google Drive folders, USB drives, and paper handouts. No central system. Teachers couldn't find materials; learners had no consistent access. |
| **T (Task)** | Design and implement a centralized digital learning infrastructure as the sole technical resource at the center. |
| **A (Action)** | Selected Moodle as the LMS. Architected the folder taxonomy, migrated 500+ assets, configured conditional completion gating, and trained 20+ staff to self-manage the system within 6 weeks. |
| **R (Result)** | 100% of course materials accessible digitally. Staff operated the LMS independently within 6 weeks. Zero support tickets after month 2. |
| **Reflection** | I learned that adoption is the hardest part of any technical rollout — not the technology. Training 20 staff one-on-one was what made the difference, not the platform itself. Next time, I'd build the governance documentation before the training, not after. |

---

## STORY 02 — The Simulator Architecture Decision
**Maps to**: "Tell me about a complex technical problem you solved." / "Describe a project where you had to make architectural decisions."  
**Archetype fit**: LXA, ID

| | |
|---|---|
| **S (Situation)** | Standard SCORM-based e-learning tracks completion but cannot measure decision quality or behavioral patterns under pressure. For Storyline-based simulations, there was no way to export learner decision data to an external system. |
| **T (Task)** | Build a behavioral measurement layer for a crisis management simulator that could track, score, and export granular learner decisions. |
| **A (Action)** | Engineered a custom JavaScript ES6 bridge that intercepted Storyline's variable state, packaged decision data with timestamps, and piped it to a Google Sheets API endpoint in real-time — bypassing SCORM's read-only data model. |
| **R (Result)** | First working demo of a behavioral heatmap system that showed which decision nodes had the highest failure rates. L&D teams could now identify exactly where learners broke down, not just whether they passed. |
| **Reflection** | The lesson was: don't accept the constraints of the authoring tool as the constraints of the architecture. SCORM was designed for completion tracking — I needed behavioral measurement, which required going outside the LMS. I'd use xAPI from day 1 next time. |

---

## STORY 03 — Scaling Academic Quality at ZIM
**Maps to**: "Tell me about a time you managed or mentored a team." / "Describe how you set standards for a group."  
**Archetype fit**: LXA, CS, LD

| | |
|---|---|
| **S (Situation)** | ZIM Academy was expanding its HCMC branch rapidly. New teachers were hired with no shared standards for curriculum delivery, grading consistency, or learner feedback quality. |
| **T (Task)** | As Academic Supervisor, establish quality standards and an observation/feedback system for a team of specialists. |
| **A (Action)** | Designed an observation rubric with 8 criteria. Ran bi-weekly classroom observation cycles. Gave written feedback within 24 hours of each observation. Ran calibration sessions where all teachers graded the same essay and we compared scores. |
| **R (Result)** | Maintained 4.8/5.0 student satisfaction rating branch-wide over 2 years. New teacher onboarding time reduced from 4 weeks to 2 weeks through the structured framework. |
| **Reflection** | Standardization only works when teachers see it as protection, not surveillance. Framing the rubric as "what good looks like" rather than "what we check for" changed the adoption rate entirely. |

---

## STORY 04 — The USD 10,000 Scholarship Outcome
**Maps to**: "Give me an example of a high-stakes project." / "Tell me about a result you're proud of."  
**Archetype fit**: CS, LD, LXA

| | |
|---|---|
| **S (Situation)** | A learner at USC arrived with near-zero IELTS Writing ability and a target of Band 7.0 — required for a US university application with a scholarship deadline in 5 months. |
| **T (Task)** | Design an individualized curriculum and assessment framework to bring this learner from Foundation level to Band 7.0 in under 5 months. |
| **A (Action)** | Built a custom 3-phase progression plan: diagnostic assessment → foundational structure drilling → examiner-style timed practice with written feedback. Tracked progress with bi-weekly mini-tests and adjusted pacing based on plateau data. |
| **R (Result)** | Learner achieved IELTS Band 7.0. Successfully secured US university placement with a USD 10,000 merit scholarship. |
| **Reflection** | The data from the bi-weekly tests was the most important tool — it showed exactly which sub-skills were plateauing so I could adjust the curriculum in real time rather than waiting for the final test. Formative assessment is the infrastructure, not the evaluation. |

---

## STORY 05 — Onboarding Architecture for Scale
**Maps to**: "How do you design for users you've never met?" / "Tell me about a time you created something for a broad audience."  
**Archetype fit**: LXA, ID, LD

| | |
|---|---|
| **S (Situation)** | New IELTS teachers at ZIM had no structured onboarding. Each veteran teacher trained new hires differently, creating inconsistent standards from day one. |
| **T (Task)** | Design a self-paced onboarding system that new teachers could complete independently, without relying on senior staff time. |
| **A (Action)** | Built a 3-module Articulate Rise 360 onboarding course covering: institutional standards, grading calibration, and classroom management. Included interactive sorting activities, accordion content for reference, and a reflective scenario with trade-off analysis. Exported as SCORM 1.2 to Moodle for trackable completion. |
| **R (Result)** | Onboarding time reduced from 4 weeks (ad-hoc) to 2 weeks (structured). New teachers could complete the core training asynchronously and arrive on Day 1 with shared vocabulary and standards. |
| **Reflection** | The reflective scenario was the most important module — not the information delivery. New teachers needed to practice judgment calls, not just read policies. If I rebuilt it, I'd extend that scenario into a full branching simulation with consequence feedback. |
