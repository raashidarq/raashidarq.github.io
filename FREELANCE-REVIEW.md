# Portfolio review — indie developer / freelancer lens (13 Oct 2026)

This supersedes §1 ("Positioning") of PORTFOLIO-REVIEW.md. The technical, hygiene and inconsistency findings there still stand.

The test applied here: a small-business owner or individual with a problem lands on the site. Within a minute, do they know (a) what you can build for them, (b) that you've actually built things like it, (c) what working with you is like, and (d) how to start? Everything below is judged against your evidence and your voice, which is warm, story-led and direct.

## What already works — keep it
- **Problem-first stories in your own voice.** The KeepClose opening ("Someone calls my name…") and SmartDrive ("the calls, books, and queues") are the best copy on the site. They sound like you and show a client how you think.
- **The contact page prompts** (the problem, the people, the starting point, the constraints). This is a good client intake. Keep it.
- **Bounded offers.** Three defined scopes are the right instinct for a first freelancer.
- **The Launchpad photo and story.** It's real, external, and it's you. It's your best trust signal.

## The gaps, in order of impact

### 1. The hero names your job, not what you'd do for a visitor
`index.astro:13`: "Raashid Arquil. / Software engineer." and "I build web and mobile applications…"

A client is looking for someone to solve *their* thing. You already wrote the line in your own words (Assignment-Answers): *"I identify the root problem(s) and build a solution intent on solving them. I care that my software has a purpose."* The redesign also proposed "A problem. An idea. Something useful.", which is yours too and is unused.

Suggestion, built only from your words:
> *Eyebrow:* Independent developer · Kandy, Sri Lanka
> **A problem. An idea. Something useful.**
> I'm Raashid. I build websites and mobile apps — my own products, and for people with a problem worth solving. I start by understanding what's actually difficult, then build what helps.
> [Start a project] [See what I've built]

Make "Start a project" the primary button. Right now the primary CTA is "Explore the work" and the project CTA is a secondary text link.

### 2. Your proof doesn't match your offers
Each service links to evidence. Check what a client finds when they click:

| Offer | Linked proof | What the client finds |
|---|---|---|
| 01 Websites (incl. WordPress/Elementor) | none | No website or WordPress example anywhere on the site. |
| 02 Web applications | SmartDrive | A live sandbox they can try. **This is good.** |
| 03 Mobile prototypes | KeepClose | Four screenshots, no demo, no video, no repo. |

Fixes, using only evidence you have:
- **Websites.**
  - The WordPress/Elementor travel-agency build from the recruitment exercise is real work done to a brief and on time. If you still have screenshots, show it honestly: "Travel agency website — built to a brief as a paid-role trial (WordPress/Elementor)." That single item turns offer 01 from a claim into evidence.
  - This portfolio is itself a coded website. Say so: "This site: Astro, built and designed by me."
- **Web apps.** Link straight to the live sandbox ("Try the SmartDrive demo"), not only to the case study. A client clicking around a working dashboard beats reading about one.
- **Mobile.**
  - Link CropCare as well as KeepClose. It's further along, has a public repo, and has an outside result.
  - Add the 1-minute CropCare video you already have. "Not bad" is good enough; a moving app persuades far more than a still.

### 3. The services copy isn't in your voice
The project pages sound like you. The services page sounds like a contract:
- "Agreed data connections and integration boundaries."
- "Clear separation between prototype scope and release work."
- "Scope changes are discussed separately."
- "These describe how I intend to structure an engagement. Availability, costs, and support depend on the agreed project."

The last one is the biggest problem: it's a disclaimer where a promise should be. The honest version is also the better pitch:
> I'm early in my freelance work, so I take on a small number of projects at a time and give each one proper attention. Every project starts with a conversation about the problem — not a quote.

That's true, it's warm, and it turns "no track record" into "you get my full attention". Put the same plainness into each offer. For example, instead of "Agreed data connections and integration boundaries" → "We'll decide together what it connects to, and what it doesn't need to."

### 4. Each offer is missing who it's for
You told me who: *small businesses and individuals who need a developer to help their situation.* Each offer should name a person and a situation, not a deliverable. For example:
- *Websites:* "For a small business or someone launching something, who needs a clear, fast site people can find and contact."
- *Web apps:* "For a team running something on spreadsheets, phone calls or a notebook — like the driving school that inspired SmartDrive."
- *Mobile:* "For someone with an app idea who wants a working first version to test with real people."

The SmartDrive origin story *is* the pitch for offer 02. Use it.

### 5. Price signals (needed before you aim for $1K+)
There's no indication of cost anywhere, so a client can't tell whether you're for them. You don't have to publish rates yet, but decide one of these and say it:
- "Most first projects are small and fixed-scope," or
- "Websites start from $___" once you've decided.

A "From" anchor filters out mismatched enquiries and makes $1K+ conversations easier later. Don't invent a number for the site; FREELANCE-DECISIONS.md Q4 and Q8 are the decisions to make first.

### 6. Trust signals are scattered
For a client with no testimonials to read, credentials stand in. Today they're split between About and the homepage. Add one quiet line under the hero, or on Services:
> First-Class Computer Science (Kingston University) · Top 10, Ascentic AI Launchpad · Hackathon category winner

All three are true; none needs a testimonial. When your first client is happy, ask for one sentence and add it.

### 7. "Indie developer" means showing products as products
For an indie identity, KeepClose and CropCare should feel like products with a future, not case studies with caveats:
- **Status line.** Give each one: "KeepClose — in development, Play Store planned" and "CropCare — working MVP, improving model accuracy before release". That's honest without seven repeated limitations.
- **Follow along.** Add "Follow along: LinkedIn" or a "notify me when it launches" mailto. Indie developers build an audience before launch.
- **Notes.** Notes are your build-in-public channel. Remove the "Preview" labels and "Publication dates remain unconfirmed". Use the dates of the original LinkedIn posts, which you know.

### 8. Navigation and contact
- **Navigation.** Work · Services · About · Notes · Contact is right for this positioning. Keep Services. Consider renaming it "Work with me", which is warmer and clearer.
- **Contact.**
  - Add a realistic reply expectation, e.g. "I usually reply within two working days", but only if true.
  - Since you're in Sri Lanka, local clients often expect WhatsApp. Add it if you're comfortable sharing it.
  - Fix the `?topic=website` bug: spaces become "+" in the email body.
- **Résumé link.** Keep it in About and the footer. Recruiters still find it, and clients aren't distracted.

## Recommended content order on the homepage
1. Hero (problem → build → useful), with "Start a project" first.
2. One-line credentials strip.
3. **Products:** CropCare, KeepClose, each with a status line. Add the video and screenshots in phone frames, not the typographic covers.
4. **For clients:** the three offers, each with a person, a situation and a clickable proof (SmartDrive demo, WordPress build, CropCare video).
5. Launchpad story and photo.
6. Notes, dated, without "Preview".
7. Contact banner.

## GitHub — clients and recruiters both click it
Reviewed https://github.com/raashidarq (8 public repos, 180 contributions in the last year).

**Fix now (credibility or security):**
1. **Committed secrets.**
   - `smartdrive/.env`: Supabase URL and anon key.
   - `Fundr/.env`: Supabase URL, anon key and a client ID.
   - `Fundr/src/Components/Donation/fake accounts.env`: an email and password (PayPal-sandbox style).
   - These keys are low-risk, but committed secrets in public repos are the first thing a technical client notices. Remove the files, add them to `.gitignore`, rotate the keys, and check that Supabase row-level security is on.
2. **cropcare README contradicts itself.** It prints demo login credentials, then says "We are not publishing a shared demo password in this public repo." Remove one.
3. **Broken link.** The `smartdrive` repo's homepage field points to `/smartdrive-frontend/` (404); the live demo is `/smartdrive/`. The portfolio's `smartdrive.md` links `smartdrive-frontend`, which only works through GitHub's rename redirect. Update it to `raashidarq/smartdrive`.
4. **Committed bytecode.** `cropcare-backend` has about 35 `__pycache__/*.pyc` files committed.

**Positioning:**
- **Bio.** "CompSci Grad. 💻 | 22" says student. Something like: "Independent developer — web & mobile apps. Building KeepClose and CropCare. Kandy, Sri Lanka." Turn on "Available for hire".
- **Profile README.** It reads "Actively learning… Become production-ready as a developer" and has leftover `rvvshid04` links. Rewrite it in the site's voice: who you are, two or three products with screenshots and links, and how to start a project.
- **Pin 4–6 repos:** cropcare, cropcare-backend, smartdrive and the portfolio. There is no public Kotlin repo, so KeepClose has no code evidence. That's fine for a product you'll sell, but say "private repository" on its page.
- **Clean up:**
  - Archive or make private `Fundr` (unedited Create React App README).
  - Fix the `rvvshid04` URLs in `weather-app-fe`.
  - Add descriptions to `cropcare-backend`, `weather-app-fe` and `Fundr`.
- **CropCare metrics.** The training notebooks are committed with no outputs, and `docs/HANDOVER.md` still describes the old MobileNetV2 model. Running the notebooks and committing a small results table (validation accuracy, accuracy on the held-out PlantDoc set) would be your strongest single piece of technical evidence anywhere.

## LinkedIn
Not reviewed: LinkedIn requires sign-in and I won't log in on your behalf. Paste your headline, About and Experience text, or ask me to open it in your own Chrome (Claude in Chrome), and I'll review it against this positioning.

## Reference sites: hammadh.dev and saadsifar.com

**hammadh.dev.** A terminal/file-system theme with a long homepage plus /work, /blog, /now, /uses and /resume (an HTML page that prints to PDF).
- **Strengths.** The case studies are the model to follow: role, stack, timeline and a live link, then the problem, release history, technical decisions (including *why this pricing*), an honest outcome, and "what I'd keep / change". Every claim can be checked: live products, version numbers, dated posts. There are no invented metrics.
- **Weaknesses.** The first screen doesn't say who he works for or what they get. The activity section is empty. The terminal theme is a well-worn developer trope that hides the hierarchy from non-developer buyers. The résumé lists roles with no bullets.

**saadsifar.com.** A 3D hero borrowed from Bruno Simon, then About, Projects, Experience, Photos and Contact.
- **Strengths.** The About page is the best part: past, present and future, with concrete and slightly unflattering details. It reads like a real person. The résumé bullets lead with a verb and end with a number.
- **Weaknesses.** Unverified numbers ("100% satisfaction", user counts that differ between the site and the résumé). "Read More" links go to a placeholder page. Eleven shallow project cards. The first screen has no offer.

**Borrow:**
- Hammadh's case-study shape, especially a "Decisions" section and a "Keep / change" ending.
- A **/now** page that holds the freelance and job-search status together.
- Saad's past/present/future About structure.
- A label on every project: client, personal, academic or hackathon.
- Later, an HTML résumé that prints to PDF.

**Don't copy:**
- Unverifiable numbers.
- Placeholder pages.
- Themed gimmicks (terminal, 3D) that would replace your editorial identity.
- A first screen without an offer. Both sites miss this, and your new hero now covers it.
