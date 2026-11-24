# Inventory Application (Hotel Rooms)

## Introduction

Inventory management web application for hotel rooms.

The project is part of the Node.js course of Full Stack JavaScript path of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Live Preview

**[Click!](https://top-inventory-application-r69t.onrender.com/dashboard)**

## Table Of Contents

- [Introduction](#introduction)
- [Sample Screenshots](#sample-screenshots)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
- [Data Flow Overview](#data-flow-overview)
- [Data Structure (Tables)](#data-structure-tables)
- [Areas To Improve](#areas-to-improve)

## Sample Screenshots

The frontend layer automatically detects user browser's color scheme and adopts respectively.

![View of rooms in Classic standard](./public/screenshots/roomsInClassicStandardDesktop.jpg)

![View of Create Room form](./public/screenshots/createRoomMobile.jpg)

## Tech Stack

**Technologies:**

![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-0A0A0A?style=flat&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)

**Additional tools (dependencies):**

node-postgres (pg), express-validator, prettier-plugin-ejs, dotenv

## Deployment

**Web Service:**

![Render](https://img.shields.io/badge/Render-000000?style=flat&logo=render&logoColor=white)

**Database Hosting:**

![Neon](https://img.shields.io/badge/Neon-34D59A?style=flat&logo=neon&logoColor=white)

## Project Structure

Each folder among `controllers/`, `routes/`, and `views/` contains subfolders `dashboard/`, `rooms/`, and `roomStandards/` to ensure project's clean structure, consistency and optimal DX.

```text
TOP-Inventory_Application/
├── controllers/
├── db/
|   ├── populate/
│   ├── bedTypes.js
│   ├── pool.js
│   ├── queriesRooms.js
│   └── queriesRoomStandards.js
├── public/
│   ├── screenshots/
│   ├── styles/
│   └── favicon.svg
├── routes/
├── views/
├── .gitignore
├── .prettierrc
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL instance (local or cloud-hosted, e.g., Neon)

### Local Installation

**1. Clone the repository:**

```bash
git clone https://github.com/bartolinidev/TOP-Inventory_Application.git
cd TOP-Inventory_Application
```

**2. Install dependencies:**

```bash
npm install
```

**3. Configure environment variables:**

Create a `.env` file in the root directory and set the following variables:

```env
DATABASE_URL="your_database_url"
ADMIN_PASSWORD="your_secret_password"
```

**4. Seed the database:**

```bash
node db/populate/populatedb.js
```

**5. Start dev server:**

```bash
node app.js
```

## Data Flow Overview

```mermaid
flowchart LR
    A[HTTP Request] --> B[Express Router]
    B --> C[Validator & Controller]
    C --> D[DB Query Layer]
    D --> E[(PostgreSQL)]
    E --> D
    D --> C
    C --> F[EJS View / PRG Redirect]
```

## Data Structure (Tables)

```mermaid
erDiagram
    room_standards ||--o{ rooms : "defines standard for"

    room_standards {
        serial id PK
        text name
        boolean coffee_machine
        boolean bathtub
        numeric price
    }

    rooms {
        integer room_number PK
        integer room_standard_id FK
        integer floor
        text bed_type
        boolean accessible
    }
```

## Areas To Improve

- Add advanced authentication (covered in the later part of the curriculum)
- Add API to serve raw data in JSON files
- Add search engine to look find rooms by id/number
- Extract partials like `room.ejs`, and `roomStandard.ejs`
