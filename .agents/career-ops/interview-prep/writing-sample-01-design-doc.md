# WRITING SAMPLE: Course Design Document (CDD)
**Project:** IELTS Writing Masterclass — Modular Self-Paced Ecosystem
**Role:** Instructional Designer / LMS Architect
**Target Audience:** Band 5.5—6.0 students aiming for Band 7.0+
**Framework:** Backward Design (Wiggins & McTighe)

---

## 1. DESIRED RESULTS (Stage 1)

### 1.1 Established Goals
The primary goal is to transition learners from "Descriptive Writing" (Band 6.0) to "Analytical Argumentation" (Band 7.0+) by mastering cohesive devices and high-tier lexical resource in an asynchronous environment.

### 1.2 Transfer
Students will be able to independently apply cohesive logic and academic register to any Task 2 prompt type (Opinion, Discussion, Solution, Direct Question) without teacher intervention.

### 1.3 Essential Questions
- How does the logical structure of an essay impact the reader’s ability to follow an argument?
- Where is the line between "Complex Vocabulary" and "Precise Vocabulary"?
- How can conditional completion gating ensure a learner has mastered a foundational skill before moving to advanced synthesis?

---

## 2. ASSESSMENT EVIDENCE (Stage 2)

### 2.1 Performance Task: The Final Synthesis
Learners produce a full 250-word Task 2 essay based on a "High-Difficulty" prompt. 
- **Criteria:** Alignment with official IELTS public descriptors (TR, CC, LR, GRA).
- **Feedback Loop:** Automated rubrics provide immediate criteria-based reflection.

### 2.2 Formative Evidence
- **Logic Checks:** Drag-and-drop activities to re-order randomized body paragraphs (Mastering Cohesion).
- **Register Shifts:** Identifying informal vs. formal sentence structures in MCQ format.
- **Gating mechanism:** Activity completion tied to achieving ≥80% in formative quizzes to unlock the next instructional node.

---

## 3. LEARNING PLAN (Stage 3)

### 3.1 Module Structure (Modular Architecture)
The course is built on a **4-Unit Blueprint** to minimize cognitive load and maximize retention:

| Unit | Title | Learning Outcome | Key Activity |
|---|---|---|---|
| **01** | The Narrative Skeleton | Understand paragraph-level cohesion | Logic-Gating Quiz |
| **02** | Lexical Precision | Transition from generic to academic register | Register Filter Task |
| **03** | Grammatical Stability | Master complex sentence structures (Relative/Conditional) | Grammar Stress Test |
| **04** | Final Synthesis | Integrate all 3 pillars into a full essay | Automated Rubric Submission |

### 3.2 Instructional Strategy: The "Scaffolding" Method
1. **Hook:** Present two essays — one Band 6.0 and one Band 7.5. Ask learners to "Spot the difference" before teaching concepts.
2. **Instruction:** 5-minute modular videos using "Principle-First" approach (explain the 'why' before the 'how').
3. **Practice:** Micro-assessments (formative) after every concept.
4. **Integration:** Conditional access logic ensures learners cannot move to Unit 2 if they fail Unit 1's "Logic Check".

---

## 4. TECHNICAL SPECIFICATIONS (ARCHITECTURAL LAYER)

| Component | Technical Implementation | Rationale |
|---|---|---|
| **LMS Platform** | Moodle | High stability for concurrent users and robust completion tracking. |
| **Asset Type** | HTML5 / SCORM 1.2 | Ensures interoperability and responsive design across mobile/desktop. |
| **Completion Logic** | Grade-based Gating | Prevents "Passive Clicking" (learned behavior common in MOOCs). |
| **Data Tracking** | Activity Completion Reporting | Provides a data-driven view of where learners drop off or struggle. |

---

## 5. DESIGNER REFLECTION
"Building this ecosystem required balancing **Academic Rigor** with **User Autonomy**. By using conditional gating, I created a 'Virtual Tutor' environment where the system itself ensures quality control, allowing the curriculum to scale to hundreds of learners without compromising the Band 7.0+ pedagogical standards."
