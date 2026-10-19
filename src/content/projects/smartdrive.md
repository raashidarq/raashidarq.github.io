---
title: "SmartDrive"
shortDescription: "A driving school management prototype inspired by my own experience getting a licence."
date: "2024-2025"
role: "Web application design & development"
status: "beta"
featured: true
order: 4
technologies: ["React", "Supabase (auth)", "Tailwind CSS", "Vite"]
category: "Web application prototype"
githubUrl: "https://github.com/raashidarq/smartdrive"
liveUrl: "https://raashidarq.github.io/smartdrive/"
thumbnail: "/images/smartdrive-student-new.jpg"
---
## I went through the process myself.

Getting my driving licence involved bookings by phone, records kept in books, and queues without a clear order. People waited around, and it felt like a process that could be made much better with software.

For my final-year project, I built SmartDrive to explore that possibility.

## What I built.

The prototype brings together lesson scheduling, learning materials, and course and member administration for administrators, instructors, and students.

The aim was to put those related activities into one system, rather than leaving the process spread across calls and manual records. Accounts use Supabase email authentication, and each role lands on its own dashboard.

## Following a booking through the demo

The demonstration keeps shared application state in a React context. When a student submits a practical-session booking, the context adds a session, creates a notification, and appends an activity entry. Changes are persisted in browser local storage so the demonstration can retain its state across a reload.

This connects the booking form to the surrounding dashboard instead of leaving each screen as an isolated mockup. The form collects the course, instructor, date, time, transmission, and pickup location.

The public demo runs on fictional records and browser-local state, so anyone can try every role without an account. A school relying on it would need the server to own bookings: preventing double-booked instructors and checking who is allowed to change what.

## Where it goes next.

Honestly, as a final-year project it was more hopeful than finished. I'd build it differently now. The first change: move bookings to the server, so conflicts and permissions are enforced there rather than in the browser. After that, a learner-facing PWA.

When it's ready for real use, I'd like to take it back to the driving school I attended.
