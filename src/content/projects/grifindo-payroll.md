---
title: "Grifindo Payroll Management System"
shortDescription: "A desktop enterprise software system built in C# and MS SQL Server for automating complex employee salary structures, tax deductions, and leave balances."
fullDescription: "An enterprise desktop accounting and payroll suite developed using C# .NET and Microsoft SQL Server. Handles complex multi-tiered compensation calculation rules, overtime policies, tax withholdings, and monthly financial ledger generation."
date: "2023"
role: "Software Developer"
status: "archived"
featured: false
order: 4
technologies:
  - "C#"
  - ".NET Framework"
  - "MS SQL Server"
  - "Visual Studio"
  - "T-SQL Stored Procedures"
category: "Desktop Payroll Software with SQL Stored Procedures"
pastelTheme: "purple"
githubUrl: ""
liveUrl: ""
problemSummary: "Manual salary and tax computation errors causing payroll delays and compliance penalties in corporate HR departments."
solutionSummary: "A robust desktop client with transactional database procedures automating multi-allowance calculations and printable pay-slip outputs."
---

## Overview

Developed as a deep exploration of typed object-oriented software design and database transaction integrity. Grifindo automates monthly payroll cycles, tracking base wages, government tax deductions, overtime multipliers, and leave allowances with strict audit trails.

---

## Architectural Focus

- **Stored Procedures & ACID Transactions**: Encapsulated complex financial calculations inside SQL Server stored procedures, guaranteeing that ledger debit/credit balances execute within atomic transactions.
- **Defensive OOP Architecture**: Utilized strong encapsulation, domain entities, and data validation layers in C# to prevent invalid salary or tax rate entries before hitting the storage tier.
