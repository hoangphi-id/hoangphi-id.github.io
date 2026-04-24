# IELTS Teacher Onboarding — Rise 360 Micro-learning

## The Problem

When new IELTS teachers join a center, getting them aligned on marking criteria, lesson structure, and feedback protocols takes time — and usually requires a senior teacher to walk them through everything in person.

The goal of this project was to design a self-paced onboarding experience that new teachers could complete independently before their first class, without needing synchronous handholding.

## Core Objective

Create a 3-module Rise 360 course covering:
1. IELTS marking criteria and Band Descriptors
2. The 120-minute lesson framework used at the center
3. Feedback protocols for Writing and Speaking

Deploy as SCORM 1.2 to Moodle with completion tracking, so the Academic Manager can confirm which teachers have completed onboarding before their first assignment.

## What I Built

A 3-module self-paced onboarding course in Articulate Rise 360 with:

- **Mobile-first design** — all blocks tested for responsiveness across screen sizes
- **Gagne's Nine Events of Instruction** used as the structural framework for each module
- **Interactive blocks** — labeled graphics, sorting activities, and knowledge checks embedded throughout each lesson
- **SCORM 1.2 export** deployed to Moodle with completion tracking and activity gating
- **Content aligned to official IELTS Band Descriptors** — not paraphrased, mapped directly to source material

## Design Decisions

**Why Rise 360 instead of Storyline?**
This content didn't require branching or variable tracking. Rise 360's block-based structure is faster to build and easier to update — which matters for onboarding content that changes when marking criteria are updated.

**Why embed knowledge checks throughout instead of a final quiz?**
Adult learners disengage when all assessment is front-loaded at the end. Embedding short checks after each section keeps the learner actively processing rather than passively reading.

**Why map to official Band Descriptors directly?**
New teachers need a single source of truth, not a paraphrased interpretation. Using the official descriptors means their mental model matches what examiners actually use.

## What I Learned

- Rise 360's block-based structure encourages thinking in modular chunks — each block should serve one clear learning objective, not multiple.
- Gagne's Nine Events provided a useful framework for sequencing content, especially for adult learners who need context and relevance before instruction.
- Deploying to Moodle via SCORM requires testing completion triggers carefully — what counts as "complete" needs to be defined before export, not after.

## Tools Used

Articulate Rise 360 · Moodle 4.x · SCORM 1.2 · IELTS Band Descriptors (official source)

---

*[← Back to Portfolio](https://hoangphi-id.github.io/id/index.html)*
