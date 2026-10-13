# CV review and rewrite

Reviewed: `public/resume.pdf` (identical to `public/cv.pdf`), Google Docs export, 1 page.

## Audit (as a screener)

| Area | Verdict | Why |
|---|---|---|
| First impression (6–10s) | Weak | Name + "Full-stack developer" is fine, but the eye then hits a 10-line skills wall. The two strongest signals (First-Class degree, Top 10 in AI Launchpad) are buried or missing. |
| Positioning | Unclear | "Full-stack developer… expanding into mobile" contradicts the site, which leads with Android/Flutter. No target role stated. |
| Technical credibility | Mixed | Skills list claims ~45 tools; projects evidence maybe 15. Oracle PL/SQL, C#, PHP, Power BI, Seaborn, Linear, Excalidraw have no supporting project. Kotlin/Jetpack Compose (your current main project) is absent. |
| Content quality | Mixed | CropCare bullet is good but is one 70-word sentence-block. SmartDrive is a single line with no problem, scale, or outcome. "Campaign management workflow" is unexplained for a driving school. |
| Impact | Missing | No outcomes anywhere: no Top 10 result, no TRACE presentation, no users, no test counts, no "what changed because of this". |
| Structure | Suboptimal | No Experience section at all. Skills sit above projects, so recruiters read claims before evidence. Contact info is in the Docs header, which some ATS parsers skip. |
| ATS | OK–risky | Single column, standard headings (good). Risks: header-region contact block, "||" separators, ligature glyphs ("ﬂ", "ﬁ") in extracted text, no job-title keyword ("Software Engineer"). |
| Differentiation | Under-used | You have a genuinely distinctive story: offline-first apps with on-device ML, an entropy-based uncertainty check, an accelerator Top 10, a hackathon win, and a marketing PG diploma. The CV reads like a generic skills list instead. |

### Specific problems
1. **KeepClose is missing.** It's your most substantial, current, solo engineering work (Kotlin, Compose, Room, SQLCipher, Vosk, graph-modelled relationships). It must be on the CV.
2. **AI Launchpad outcome is missing.** "Currently expanding into… through Ascentic's AI Launchpad" undersells "Top 10 of the cohort; presented at TRACE Expert City, 19 Sep 2026". (Also: "currently" — is the programme still running? If not, fix tense.)
3. **No Experience section.** The Launchpad programme, your Next.js platform collaboration, and the WordPress recruitment exercise can fill this honestly as "Programmes & Collaboration".
4. **Claims that don't match your portfolio or GitHub** (checked against the public repos on 13 Oct 2026):
   - SmartDrive: CV says Node + Supabase + PayPal + email auth; the site and its public demo show a React frontend with local-storage state. Either link the backend repo and keep the claims, or downgrade them.
   - CropCare: CV says you trained a custom MobileNetV3; the site never mentions training. Pick one story — and if you trained it, add the dataset, class count, and validation accuracy. That's the single most impressive line you could add.
   - CropCare: CV says "WhatsApp-based expert escalation"; the site says "native share sheet". Align.
5. **Education location.** "Kingston Upon Thames, United Kingdom" and "Berkshire, United Kingdom": if you studied through a Sri Lankan partner campus (the hackathon was ESOFT intercampus), write "Kingston University (UK) — delivered at ESOFT Metro Campus, Sri Lanka". Interviewers ask, and an inferred overseas study period that didn't happen is a credibility hit.
6. **The CIM footnote** is a good instinct but takes three lines. Fold it into one line.
7. **Skills inflation.** "Applied/Agentic AI", "Model Training & Fine-Tuning", "Clean Architecture" are claims an interviewer will probe. Keep only what you can whiteboard for 10 minutes.
8. **eHab** is fine but lists "PowerPoint" as tech — drop it. Say "won the Software Engineering category" (more specific than "Winner").

## Positioning note (updated)
You're positioning as an indie developer and freelancer while still applying for jobs. The CV is the job-application document, so the rewrite stays role-oriented. For freelance clients, the website is the document. You can still tilt the Profile line per use. For example: "…Independent developer building offline-first Android, Flutter and React apps; available for freelance projects and graduate/junior roles."

Also: the PDF auto-linked "Draw.io" (it's a hyperlink to draw.io). Remove the link.

## Positioning note (updated)
You're positioning as an indie developer and freelancer while still applying for jobs. The CV is the job-application document, so the rewrite stays role-oriented. For freelance clients, the website is the document. You can still tilt the Profile line per use. For example: "…Independent developer building offline-first Android, Flutter and React apps; available for freelance projects and graduate/junior roles."

Also: the PDF auto-linked "Draw.io" (it's a hyperlink to draw.io). Remove the link.

## Rewritten CV

Placeholders in `[brackets]` need your confirmation — don't ship them unresolved.

---

**RAASHID ARQUIL**
Software Engineer — Mobile & Web
Kandy, Sri Lanka · +94 78 165 3552 · raashid.arq@gmail.com
raashidarq.github.io · linkedin.com/in/raashid-arquil · github.com/raashidarq

*(Put this in the document body, not the Google Docs header.)*

### PROFILE
First-Class Computer Science graduate building offline-first Android, Flutter and React applications. Designed and shipped an on-device crop-disease classifier that placed in the Top 10 of Ascentic's AI Launchpad. Currently building KeepClose, an encrypted, offline Android app in Kotlin and Jetpack Compose. Seeking graduate / junior software engineering roles (on-site in Sri Lanka, remote or hybrid).

### TECHNICAL SKILLS
- **Languages:** Kotlin, Dart, TypeScript/JavaScript, Python, SQL, Java
- **Mobile:** Jetpack Compose, Room, SQLCipher, Flutter, Drift/SQLite, offline-first design
- **Web & backend:** React, Next.js, Tailwind CSS, Node.js/Express, FastAPI, REST APIs
- **Data & ML:** TensorFlow Lite, MobileNetV3 (transfer learning), Gemini API, Supabase/PostgreSQL, MySQL
- **Tooling:** Git/GitHub, GitHub Actions, Postman, Figma, Vercel, Render

*(Removed: PHP, C#, Oracle PL/SQL, MS SQL, Power BI, Pandas/Seaborn, Notion/Linear, Excalidraw/Draw.io, Axios, Bootstrap, HTML/CSS — either unevidenced or assumed. Re-add any that a specific job ad asks for and you can defend.)*

### PROJECTS

**CropCare** — Offline-first crop disease diagnosis app · Flutter, TensorFlow Lite, FastAPI, Supabase, Gemini API · [GitHub link] · Jul 2026 – present
- Placed **Top 10 of [N] teams** in Ascentic's AI Launchpad and presented the product at TRACE Expert City, Colombo (Sep 2026).
- Researched the problem with Sri Lankan agriculture as the target domain; defined scope, user flows, system architecture and database schema.
- Fine-tuned a MobileNetV3 classifier on 34 crop/disease classes from Kaggle datasets (Paddy Doctor, Cassava, PlantVillage), [reaching X% validation / Y% on held-out PlantDoc], and deployed it on-device with TensorFlow Lite so diagnosis works without connectivity.
- Rejected unreliable predictions using Shannon entropy and a confidence threshold, routing uncertain cases to an expert instead of showing a wrong diagnosis.
- Built opt-in AI treatment guidance with the Gemini API, returning structured responses that are cached locally for offline reuse; Supabase handles auth and sync.

**KeepClose** — Encrypted offline relationship-memory app for Android · Kotlin, Jetpack Compose, Room, SQLCipher, Vosk · 2026 – present
- Designing and building a solo Android product, from problem definition and user flows through UI and data layer.
- Modelled relationships as a directional graph so the app can explain indirect links in plain language (e.g. "your mother's cousin") and render a family tree.
- Encrypted the local database with SQLCipher and kept the app fully offline, including on-device speech-to-text with Vosk for voice memories.
- Implemented selective CSV export, import with duplicate detection, and full ZIP backup of records and media.

**SmartDrive** — Driving school management system (final-year project) · React, Tailwind CSS, Supabase · github.com/raashidarq/smartdrive · raashidarq.github.io/smartdrive · 2024–2025
- Built role-based dashboards for students, instructors and administrators covering lesson scheduling, learning progress and fleet management, replacing a paper-and-phone booking process.
- Implemented Supabase email authentication with role-based routing, plus a guest demo mode backed by local storage so anyone can try every role without an account.
- [Designed the Supabase/PostgreSQL schema.] ← *keep only if true.*

### ACHIEVEMENTS & PROGRAMMES
- **Ascentic AI Launchpad** — Top 20, then Top 10 cohort finalist; mentored product build of CropCare ([Month] – Sep 2026).
- **ESOFT Intercampus Hackathon** — Won the Software Engineering category with *eHab*, a mental-health app concept (team of 5). Led user research and built the Figma prototype under time constraints (Oct 2023).
- [**Collaboration** — Co-developing a [type of] platform with Next.js and [stack]; responsible for [X]. ([Month] 2026 – present)] ← *add only once you can describe your part concretely.*

### EDUCATION
**B.Sc. (Hons) Computer Science — First Class** · Kingston University [— delivered at ESOFT Metro Campus, Sri Lanka] · Sep 2025
[Relevant modules / final-year project: SmartDrive]

**Postgraduate Diploma in Professional Marketing (Level 7) — Merit** · Chartered Institute of Marketing · Mar 2024
Market research and strategic analysis — applied to product scoping in CropCare and KeepClose.

---

## Before you export
1. Resolve every `[bracket]`. If you can't support a claim in an interview, cut it.
2. Make SmartDrive and CropCare tell the same story on the CV and the website.
3. Keep it to one page. Export from Google Docs as PDF, then copy-paste the PDF text into a plain editor; if the order or words come out garbled, so will the ATS.
4. Replace `public/resume.pdf` and delete the duplicate `public/cv.pdf`.
5. Tailor the Profile and Skills order per application. Lead with Kotlin for Android roles, React/TypeScript for web roles and Python/TFLite for ML-adjacent roles.
