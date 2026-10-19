---
title: "CropCare"
shortDescription: "An offline-first mobile MVP for possible crop pest and disease identification, local guidance, and sharing uncertain cases with an expert."
date: "In development"
role: "Research, product scope, system design & implementation"
status: "in-development"
featured: true
order: 2
technologies: ["Flutter", "MobileNetV3 / TensorFlow Lite", "FastAPI", "Drift / SQLite", "Supabase", "Google Gemini API"]
category: "Ascentic Launchpad project"
githubUrl: "https://github.com/raashidarq/cropcare"
youtubeId: "Bp4e-0Tyqxw"
youtubeTitle: "Presenting CropCare at TRACE · 12 min"
youtubeCaption: "My CropCare presentation as an Ascentic AI Launchpad Top 10 finalist at TRACE, Sri Lanka, on 19 September 2026. Published by Ascentic on YouTube."
---
## From an agricultural problem to a mobile MVP

My dad suggested agriculture when I joined Ascentic's AI Launchpad. Research helped narrow a large subject into a specific question: could a farmer use a phone to identify a possible plant problem and find a useful next step, even with limited connectivity?

I defined the product scope, user flows, and system design, trained the classifier, and used AI to assist implementation. CropCare reached the programme's Top 20 and then the Top 10. I presented the MVP at TRACE, Sri Lanka, on 19 September 2026.

## What works today

The core flow starts in guest mode. A farmer captures a plant image, the application checks whether it is suitable for inference, and TensorFlow Lite runs the classifier on the device. The result and scan history are stored locally using Drift and SQLite.

| Flow | Current behaviour |
| --- | --- |
| Scan and classification | On-device inference, preceded by image-quality and content checks. |
| Local guidance | Pre-seeded guidance is available without a cloud request. |
| AI recommendation | An explicit online request adds structured advice; the result is cached locally. |
| Follow-up chat | Diagnosis-scoped conversation with a local transcript and retry behaviour. An online response requires connectivity. |
| Account and sync | Guest-first local records, account upgrade, queued synchronization, and cloud restore. |
| Expert referral | The native share sheet packages the photograph and case details for WhatsApp or another supported app. |

The interface supports English, Sinhala, and Tamil, with text-to-speech and adjustable text settings.

## Looking beyond the confidence score

During testing, I selected a photograph from the gallery and the application did not give the expected answer. The issue became clearer later: a confident-looking output did not establish that the classifier had correctly understood the image.

Raising the confidence threshold alone would not address that example. I added checks before inference for file validity, image size, exposure, blur, and vegetation-like colour content. The checks can reject unsuitable images before they reach the model.

After inference, confidence and normalized Shannon entropy flag uncertain outputs, and the result screen says so instead of presenting a guess as a diagnosis. The image checks are lightweight heuristics for now; their thresholds still need tuning against real field photographs.

## Local guidance first; AI when requested

Earlier iterations requested AI guidance automatically when opening a result. Reopening a scan could spend another API request, and navigating away during an asynchronous request exposed a closed-state lifecycle error.

The current flow loads local guidance first. A separate “Get AI Recommendation” action makes the online request deliberate, and caching avoids fetching an existing recommendation again. State updates also account for the screen's lifecycle.

This separates the part that can work offline from the optional cloud interaction, while keeping advice available when connectivity fails.

## Testing, and what's next

The Flutter test suite includes use cases, state transitions, database repositories, API clients, and widgets. Specific tests cover image validation, localization parity, treatment-guideline coverage, and retaining guidance through online-request failures. The backend has its own test suite for API behaviour.

I also tested the application on a Samsung Galaxy A528B, including the camera, offline use, speech output, and sharing.

The classifier is a MobileNetV3 model I trained on a 34-class taxonomy across six crops, moving from lab-style PlantVillage photos toward field datasets such as Paddy Doctor and Cassava, with PlantDoc held out for testing.

It works. Real world, it could do better, which is why it isn't on the Play Store yet. Next: measure accuracy on real field photographs, calibrate the rejection thresholds against those results, and put better guardrails on the treatment guidance.

## The programme and presentation

[Ascentic's eight-week AI Launchpad](https://ascentic.se/ailaunchpad/) combined practical sessions with mentorship. The programme's finalist listing includes CropCare and my mentor, Bamisan. Ascentic published my presentation at TRACE: [watch it here](#video) (12 minutes).

The experience changed how I approach a project: start with the problem and existing solutions, then decide where the technology belongs. [Read my reflection on Launchpad](/notes/problem-before-technology/).
