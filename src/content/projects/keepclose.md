---
title: "KeepClose"
shortDescription: "An offline Android app for remembering people, recording memories, and understanding how your relationships connect."
date: "In active development"
role: "Product scope, user flows, design & implementation"
status: "in-development"
featured: true
order: 1
technologies: ["Kotlin / Jetpack Compose", "Room / SQLCipher", "Vosk"]
category: "Independent product"
gallery:
  - url: "/images/keepclose-profile.png"
    width: 360
    height: 800
    title: "A person and their connections"
    caption: "Development render with a fictional profile: relationship context, interests, and actions for memories and reminders."
    alt: "KeepClose fictional person profile and relationship path"
  - url: "/images/keepclose-memory.png"
    width: 360
    height: 800
    title: "Capture a memory"
    caption: "Development render showing notes, voice and photo attachments, and an optional follow-up reminder."
    alt: "KeepClose memory editor with fictional records"
  - url: "/images/keepclose-family-tree.png"
    width: 360
    height: 800
    title: "Explore a family connection"
    caption: "Development render of the family-tree view using fictional profiles."
    alt: "KeepClose family tree with two fictional profiles and a relationship connector"
  - url: "/images/keepclose-export.png"
    width: 360
    height: 800
    title: "Choose what to share"
    caption: "Development render of selective CSV export: choose people and fields, then preview before sharing."
    alt: "KeepClose export screen with person and field selection"
---
## It starts with an awkward moment

Someone calls my name. They recognise me, start talking, and I'm still trying to work out who they are. Sometimes it's someone from school. Sometimes a conversation mentions a distant relative I should remember, and I can't quite place them.

I wanted a tool to help me remember. KeepClose is the application I'm building for myself, and for others who recognise that frustration. It keeps relationship context, memories, and follow-ups together on the phone.

## From a name to something worth remembering

The first entry can be just a name. More context can follow: how we met, an interest, a conversation, or a connection to another person. A memory can include a note, photograph, or voice recording, with offline English transcription through Vosk and an optional follow-up reminder.

| Flow | Current behaviour |
| --- | --- |
| Capture and revisit | Create a person, record memories with attachments, and revisit their profile and reminders. |
| Understand connections | Link people with directional relationships, explore family connections, and organise people into circles. |
| Control the data | Select people and fields for CSV export, review imported records and possible duplicates, or create a ZIP archive of records and media. |

The screenshots use fictional records from the development build.

## Relationships between people, not just with me

A list saying how everyone relates to me would miss an important part of the problem. KeepClose models relationships between people as directional edges. Parent and child are opposite descriptions of the same connection; the application can explain a path in terms such as “your mother's cousin”.

The family-tree view supports exploring connections, while circles provide a separate way to organise people and set a reconnect cadence. This keeps family structure and personal grouping from being treated as the same thing.

## Offline by design, with explicit sharing

The application manifest does not request Internet permission. Speech recognition uses a bundled model, and there are no cloud accounts or automatic synchronization. Sharing is an explicit export through another application.

Room stores structured records in a SQLCipher-encrypted database, with a Keystore-backed key-storage implementation. Photos and audio live in app-private files rather than database blobs. That separation keeps large media out of database queries; those files are not encrypted by SQLCipher.

The ZIP backup contains JSON records and media. **The exported ZIP is not encrypted.** CSV exports also contain readable data, so the export flow lets users select records and fields and review the result before sharing.

App-lock options include PIN, pattern, biometrics, and Android device credentials. Native credential confirmation is kept separate from the application's own credentials when switching lock modes.

## Keeping the first version focused

Cloud sync, facial recognition, cloud AI note processing, and live collaborative editing are outside the first-version scope. They would introduce additional data handling, permissions, and conflict-resolution work beyond the local personal-records use case.

Import and export are deliberate file-based actions instead. CSV import includes size and row limits, field mapping, duplicate review, and import provenance. Export handles spreadsheet formula prefixes rather than passing user-entered text straight into spreadsheet expressions.

I defined the scope and user flows, explored designs with UI references and Figma AI, and refined the implementation with AI assistance throughout development.

## Search needs to handle what people actually type

Names and nicknames can contain punctuation and symbols. Passing that input into SQLite full-text-search syntax can produce errors instead of useful results. The current search implementation uses bound literal queries for those lookups, alongside typo-tolerant matching.

The practical requirement is simple: an unusual nickname should still be searchable. The implementation needs to treat it as user text rather than a query expression.

KeepClose brings those details back to the reason I started it: remembering someone, and remembering what matters to them.
