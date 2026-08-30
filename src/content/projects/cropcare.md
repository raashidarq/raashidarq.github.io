---
title: "CropCare"
shortDescription: "An offline-first mobile agricultural diagnostic app powered by a custom on-device MobileNetV3 model, Drift SQLite persistence, and cloud LLM advisory integration."
fullDescription: "CropCare puts a working plant disease diagnosis directly in a farmer's hand in seconds with zero connectivity required. Powered by a custom-trained on-device MobileNetV3 model, Drift SQLite local database, and cloud integration with FastAPI, Supabase, Google's Gemini API, and WhatsApp expert escalation."
date: "July 2026 – Present"
role: "Developer"
status: "in-development"
featured: true
order: 1
technologies:
  - "Flutter"
  - "Dart"
  - "MobileNetV3 (TFLite)"
  - "Drift (SQLite)"
  - "FastAPI"
  - "Supabase"
  - "PostgreSQL"
  - "Google Gemini API"
  - "WhatsApp Integration"
  - "Sinhala & Tamil i18n"
category: "Offline-first Mobile App with ML and AI integrations"
pastelTheme: "green"
githubUrl: "https://github.com/raashidarq"
liveUrl: ""
productUrl: ""
demoUrl: ""
problemSummary: "Crop disease is an immediate threat to farmer income and food security, yet expert diagnostic knowledge is geographically scarce and inaccessible in rural areas."
solutionSummary: "On-device sub-second diagnosis via custom MobileNetV3, offline Drift reference fallbacks, Gemini LLM treatment guidance when online, and WhatsApp human expert escalation."
architectureHighlights:
  - "Custom-trained MobileNetV3 on-device inference running with zero internet connectivity."
  - "Layered Flutter architecture with BLoC/Cubit state management, Drift SQLite, and Background Worker+ sync."
  - "FastAPI backend communicating with Supabase (Phone OTP & Postgres) and Google Gemini API for localized treatment advisory."
---

## Overview

CropCare is an offline-first mobile application designed to bridge the agricultural diagnostic gap. It allows farmers to capture a photo of an affected plant and receive an immediate on-device disease classification, clear localized treatment guidance, and direct escalation to agricultural experts.

---

## The Problem

Crop disease is one of the most direct threats to a farmer's income and food security — a disease caught late, or misidentified entirely, can wipe out a season's yield. Diagnosing it correctly requires either specialist knowledge or access to someone who has it, neither of which is reliably available where it's needed most.

---

## Who It Happens To

Smallholder farmers, particularly in rural areas, working the land with limited or no direct access to agricultural extension officers or plant pathologists. 

Farmers often work in regions with inconsistent internet connectivity and operate in local languages — **Sinhala and Tamil**, in this case — rather than the English that most diagnostic tools and documentation are written in.

---

## Why It Happens

Expert agricultural knowledge is scarce and geographically concentrated — extension officers cannot be everywhere a disease breaks out, and by the time a farmer can reach one, real damage may already be done. 

Existing digital tools rarely account for the actual conditions farmers work in: unreliable connectivity, language barriers, and interfaces not designed for quick, practical use in a field.

---

## How CropCare Solves It

CropCare puts a working diagnosis in a farmer's hand, from their own phone, in seconds — **no internet required**. 

- **Sub-Second On-Device Diagnosis**: A photo of an affected plant is analyzed on-device by a custom-trained **MobileNetV3** model via TensorFlow Lite, giving an immediate disease identification even with zero connectivity.
- **Hybrid Treatment Guidance**: When the farmer is online, an LLM (via **Google's Gemini API**) generates clear, localized treatment guidance tailored to that diagnosis; when they're offline, the app falls back to a built-in local reference database powered by **Drift (SQLite)**, so there is always an answer.
- **In-App Follow-Up & WhatsApp Escalation**: Farmers can ask follow-up questions through an in-app chat. When the diagnosis is uncertain, the case can be escalated directly to a human agricultural expert via **WhatsApp** — closing the gap between AI-assisted triage and real human expertise.
- **Accessibility & Inclusivity**: Built-in accessibility features — including adjustable text sizing, multilingual UI (Sinhala, Tamil, English), and speech playback (TTS) — are designed specifically to make the app usable for its actual audience in the field.

---

## System Architecture

Below is the initial system architecture diagram for CropCare, showing the end-to-end data flow from camera input and on-device model execution to background synchronization and cloud advisory services:

<div class="my-8 rounded-xl overflow-hidden border border-border-subtle bg-bg-surface p-2 shadow-sm">
  <img
    src="/images/cropcare-architecture.png"
    alt="System Architecture of CropCare"
    class="w-full h-auto rounded-lg"
    loading="lazy"
  />
</div>

## Current Features Available in the App

- **On-Device Disease Diagnosis**: Instant identification of plant diseases using a custom MobileNetV3 model running via TensorFlow Lite — 100% offline with zero cellular latency.
- **Offline Reference Database**: Built-in fallback database containing disease descriptions, symptom checklists, and standard remedies stored locally via Drift (SQLite).
- **AI-Powered Localized Treatment**: Integration with Google Gemini API when online to generate personalized treatment protocols, organic remedies, and precise pesticide guidelines.
- **In-App Follow-Up Chat**: Context-aware chat interface allowing farmers to ask specific questions regarding symptoms and disease management.
- **WhatsApp Expert Escalation**: Direct one-tap export and case sharing with agricultural extension officers and plant pathologists via WhatsApp when a diagnosis is uncertain.
- **Accessibility & Speech Playback**: Multilingual interface supporting Sinhala, Tamil, and English, along with adjustable text sizing and Text-to-Speech (TTS) audio playback.
- **Background Telemetry Sync**: Automatic batch synchronization of diagnostic history and field logs via Background Worker+ once network connectivity is restored.

---

## Key Decisions & Trade-Offs

| Decision | Why Chosen | Trade-Off & Mitigation |
| :--- | :--- | :--- |
| **Custom MobileNetV3 (On-Device)** | Delivers sub-50ms inference with zero cellular network dependency. | Lower parameter count than cloud Vision Transformers; mitigated through focused dataset curation on regional crop pathologies. |
| **Drift (SQLite) Local Cache** | Strongly typed Dart SQL queries with reactive stream subscriptions. | Requires schema migration management on client app updates. |
| **FastAPI + Supabase Backend** | Asynchronous Python backend paired with managed PostgreSQL and Phone OTP auth. | Decoupled architecture requires idempotent background sync handling. |
| **WhatsApp Expert Escalation** | Leverages the messaging platform farmers already have installed rather than forcing a complex new support portal. | Manual human triage; laid groundwork for future dedicated extension officer portals. |

---

## Future Plans

- **Weather Integration**: Factoring in humidity, rainfall, and forecast conditions to assess disease risk proactively, rather than only reacting after symptoms appear.
- **Latest Market Considerations for Farmers**: Giving farmers visibility into current market conditions, so decisions extend beyond treatment to when and where to sell.
- **TTS and Speech Recognition for Sinhala and Tamil**: Extending the app's voice features beyond English, so farmers more comfortable speaking than reading or typing aren't left out.
- **Features Suited for Agricultural Extension Officers & Researchers**: Evolving today's manual WhatsApp escalation into a proper platform connecting farmers with experts, and giving researchers meaningful, aggregated access to the patterns the app surfaces over time.
