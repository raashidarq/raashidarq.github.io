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
heroImage: "/images/cropcare-thumbnail.png"
gallery:
  - url: "/images/cropcare-home.png"
    width: 302
    height: 610
    title: "Start a scan"
    caption: "Development capture of the home screen and recent scan records."
    alt: "CropCare home screen with plant scan action and history"
  - url: "/images/cropcare-result.png"
    width: 303
    height: 508
    title: "Inspect a result"
    caption: "Partial development capture showing the result and a low-confidence message. Scores shown are model outputs."
    alt: "CropCare result screen with a low-confidence warning"
  - url: "/images/cropcare-language.png"
    width: 303
    height: 605
    title: "Choose a language"
    caption: "English, Sinhala, and Tamil language selection in the development interface."
    alt: "CropCare language selection dialog"
  - url: "/images/cropcare-storage.png"
    width: 304
    height: 439
    title: "Manage local and cloud records"
    caption: "Partial development capture showing pending synchronization, account status, and restore controls."
    alt: "CropCare offline storage and synchronization controls"

---
## From an agricultural problem to a mobile MVP

My dad suggested agriculture when I joined Ascentic's AI Launchpad. Research helped narrow a large subject into a specific question: could a farmer use a phone to identify a possible plant problem and find a useful next step, even with limited connectivity?

I defined the product scope, user flows, and system design, and used AI to assist implementation. CropCare reached the programme's Top 20 and then the Top 10. I presented the MVP at TRACE, Sri Lanka, on 19th Sep (2026).

## What works today

The core flow starts in guest mode. A farmer captures a plant image, the application checks whether it is suitable for inference, and TensorFlow Lite runs the classifier on the device. The result and scan history are stored locally using Drift and SQLite.

| Flow | Current behaviour |
| --- | --- |
| Scan and classification | On-device inference, preceded by image-quality and content checks. |
| Local guidance | Pre-seeded guidance is available without a cloud request. |
| AI recommendation | An explicit online request adds structured advice; the result is cached locally. |
| Follow-up chat | Diagnosis-scoped conversation with a local transcript and retry behaviour. An online response requires connectivity. |
| Account and sync | Guest-first local records, account upgrade, queued synchronization, and cloud restore. |
| Expert referral | The native share sheet packages the photograph and case details for WhatsApp or another supported app. Sending depends on the chosen app and connectivity. |

The interface supports English, Sinhala, and Tamil, with text-to-speech and adjustable text settings. Available speech features depend on the device's language support.

The MVP is in development. Model evaluation and treatment safeguards remain part of the release work.

## Looking beyond the confidence score

During testing, I selected a photograph from the gallery and the application did not give the expected answer. The issue became clearer later: a confident-looking output did not establish that the classifier had correctly understood the image.

Raising the confidence threshold alone would not address that example. I added checks before inference for file validity, image size, exposure, blur, and vegetation-like colour content. The checks can reject unsuitable images before they reach the model.

After inference, confidence and normalized Shannon entropy help identify uncertain outputs and change how the result is presented. They are additional checks, not proof that a prediction is correct.

The image checks are lightweight heuristics. Their thresholds need evaluation against real field photographs, including diseased leaves and different crops; they are not a trained guarantee that an image contains a plant.

## Local guidance first; AI when requested

Earlier iterations requested AI guidance automatically when opening a result. Reopening a scan could spend another API request, and navigating away during an asynchronous request exposed a closed-state lifecycle error.

The current flow loads local guidance first. A separate “Get AI Recommendation” action makes the online request deliberate, and caching avoids fetching an existing recommendation again. State updates also account for the screen's lifecycle.

This separates the part that can work offline from the optional cloud interaction, while keeping advice available when connectivity fails.

## Testing and current limits

The Flutter test suite includes use cases, state transitions, database repositories, API clients, and widgets. Specific tests cover image validation, localization parity, treatment-guideline coverage, and retaining guidance through online-request failures. The backend has its own test suite for API behaviour.

I also tested the application on a Samsung Galaxy A528B, including the camera, offline use, speech output, and sharing. Application checks and automated tests are separate from evaluating model accuracy on representative field images.

The model pipeline is moving from lab-style PlantVillage data toward field-oriented datasets and a 34-class taxonomy across six crops. The current application uses the field MobileNetV3 model. Classification quality, the rejection thresholds, and treatment safeguards still need further evaluation before a public release.

CropCare is not released on the Play Store.

## The programme and presentation

[Ascentic's eight-week AI Launchpad](https://ascentic.se/ailaunchpad/) combined practical sessions with mentorship. The programme's finalist listing includes CropCare and my mentor, Bamisan.

The experience changed how I approach a project: start with the problem and existing solutions, then decide where the technology belongs. [Read my reflection on Launchpad](/notes/problem-before-technology).
