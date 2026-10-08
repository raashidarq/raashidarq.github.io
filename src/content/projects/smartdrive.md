---
title: "SmartDrive"
shortDescription: "A driving school management prototype inspired by my own experience getting a licence."
date: "2024-2025"
role: "Web application design & development"
status: "beta"
featured: true
order: 3
technologies: ["React", "Node.js", "Supabase / PostgreSQL", "Tailwind CSS"]
category: "Web application prototype"
githubUrl: "https://github.com/raashidarq/smartdrive-frontend"
liveUrl: "https://raashidarq.github.io/smartdrive/"
thumbnail: "/images/smartdrive-student-new.jpg"
heroImage: "/images/smartdrive-student-new.jpg"
gallery:
  - url: "/images/smartdrive-student-new.jpg"
    title: "Student dashboard"
    width: 1434
    height: 992
    caption: "Student dashboard: learning progress and upcoming sessions. Fictional demo data."
    alt: "SmartDrive student dashboard in demo mode"
  - url: "/images/smartdrive-schedule.jpg"
    title: "Book a lesson"
    width: 1440
    height: 996
    caption: "Booking interface: course, instructor, vehicle, date, and time. Fictional demo data."
    alt: "SmartDrive practical lesson scheduling interface"
  - url: "/images/smartdrive-instructor-new.jpg"
    title: "Instructor workspace"
    width: 1434
    height: 992
    caption: "Instructor view: session requests and evaluations. Fictional demo data."
    alt: "SmartDrive instructor scheduling dashboard"
  - url: "/images/smartdrive-admin.jpg"
    title: "Administration"
    width: 1434
    height: 992
    caption: "Admin view: members, courses, and announcements. Fictional demo data."
    alt: "SmartDrive administration dashboard"

---
## I went through the process myself.

Getting my driving licence involved bookings by phone, records kept in books, and queues without a clear order. People waited around, and it felt like a process that could be made much better with software.

For my final-year project, I built SmartDrive to explore that possibility.

## What I built.

The prototype brings together scheduling, learning materials, and fleet management for administrators, instructors, and students.

The aim was to put those related activities into one system, rather than leaving the process spread across calls and manual records.

## Following a booking through the demo

The demonstration keeps shared application state in a React context. When a student submits a practical-session booking, the context adds a session, creates a notification, and appends an activity entry. Changes are persisted in browser local storage so the demonstration can retain its state across a reload.

This connects the booking form to the surrounding dashboard instead of leaving each screen as an isolated mockup. The form collects the course, instructor, date, time, transmission, and pickup location.

The demo uses fictional records and browser-local state. It does not establish server-enforced booking conflicts, production authorization, or a deployed driving-school service. Those boundaries matter when moving from a demonstration to a system people depend on.

## Why I want to revisit it.

With my current skills and motivation, I intend to rebuild parts of SmartDrive into something suitable for practical use. A learner-facing PWA is one possibility.

If the result is ready, I'd like to propose it to the driving school I attended.
