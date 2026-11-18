# Shreya Singh — Personal Developer Portfolio

> **Software Developer | Final Year Artificial Intelligence and Data Science Student**  
> *CMR Institute of Technology, Bengaluru • Final Year (Expected Graduation: July 2027)*  
> **CGPA: 9.53 / 10.0 • Department Topper Across All 6 Semesters**

---

## 🌿 Project Overview

This repository contains the complete, production-ready personal developer portfolio website for **Shreya Singh**. It is built with a **Minimal Editorial + Modern Developer** aesthetic, emphasizing clean typography, balanced whitespace, bespoke technical project architecture, and authentic academic excellence.

### Key Highlights
- **Academic Honors:** 9.53 CGPA, 6-Time Department Topper at CMRIT Bengaluru.
- **Color Palette:** Warm Ivory (`#F8F7F2`), Soft Beige (`#EEECE3`), Sage Green (`#78977A`), Dark Green (`#263D32`), Charcoal (`#252923`).
- **Dark Mode Support:** Refined dark theme with slate-forest charcoal and luminous sage accents.
- **Featured Projects:**
  1. **InfraSense AI Diagnostics:** [github.com/shreya-a12/infrasense-ai](https://github.com/shreya-a12/infrasense-ai) — Telemetry triage engine with rule-based heuristics & Zod validation.
  2. **ContainerGuard:** [github.com/shreya-a12/containerguard](https://github.com/shreya-a12/containerguard) — Container image vulnerability scanner with Trivy and FastAPI.
  3. **Food Recognition & Calorie Prediction:** [github.com/shreya-a12/Foor_Req](https://github.com/shreya-a12/Foor_Req) — ResNet18 (93% accuracy) + regression portion estimator.
  4. **EcoFinds:** [github.com/shreya-a12/Eco-Finds](https://github.com/shreya-a12/Eco-Finds) — Sustainable second-hand marketplace on the MERN stack.
  5. **Mental Health Chatbot:** Conversational NLP agent using TF-IDF vectorization.
- **Beyond Development:** Explorations in Langflow (visual workflows) & Google Teachable Machine (interactive ML).
- **Interactive Capabilities:** Scroll progress indicator, sticky glassmorphic navbar, active section highlighting, category skill filters, project modal with system architecture deep-dive, interactive resume modal, one-click PDF download, and contact form validation.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler / Tooling:** Vite
- **Styling:** Tailwind CSS (custom editorial color system & fonts)
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS transitions
- **Typography:** *Playfair Display* (Editorial Serif) & *Plus Jakarta Sans* (Modern Sans) + *JetBrains Mono*

---

## 📁 Project Directory Structure

```text
shreya-singh-portfolio/
├── public/
│   ├── favicon.svg          # Custom monogram "SS" brand favicon
│   ├── og-image.svg         # Open Graph preview card for social sharing
│   └── resume.pdf           # Downloadable curriculum vitae for Shreya Singh
├── src/
│   ├── assets/              # Static media & illustrations
│   ├── components/
│   │   ├── Navbar.tsx       # Glassmorphic header with scroll progress & theme toggle
│   │   ├── Footer.tsx       # Editorial footer with dynamic year & back-to-top
│   │   ├── ThemeToggle.tsx  # Sun/Moon light/dark mode switch
│   │   ├── SectionHeading.tsx # Numbered editorial section markers (01/ABOUT, etc.)
│   │   ├── ProjectCard.tsx  # Card with banner, tags, and architecture trigger
│   │   ├── ProjectBanner.tsx# Custom SVG metric & telemetry diagram banners
│   │   ├── ProjectModal.tsx # Architectural deep-dive dialog with key features
│   │   ├── SkillCard.tsx    # Categorized skill badges
│   │   ├── ResumeModal.tsx  # Interactive CV preview with download trigger
│   │   └── Toast.tsx        # Notification toast for clipboard copy & form alerts
│   ├── data/
│   │   ├── personalInfo.ts  # Bio, education, CGPA 9.53, topper record, stats
│   │   ├── skills.ts        # 6 core skill categories & tech items
│   │   ├── projects.ts      # 5 featured projects with full technical details
│   │   ├── achievements.ts  # Department rank, certifications, technical clubs
│   │   ├── beyondDevelopment.ts # Langflow & Teachable Machine exploration
│   │   └── socialLinks.ts   # Social links & contact endpoints
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces (Project, Skill, Achievement)
│   ├── sections/
│   │   ├── Hero.tsx         # Two-column hero, portrait frame, floating badges
│   │   ├── About.tsx        # Narrative story, interests, 3 info cards
│   │   ├── Skills.tsx       # Categorized cards with category filter pills
│   │   ├── Projects.tsx     # 3 initial featured projects + View All toggle
│   │   ├── Achievements.tsx # Academic record banner, education, clubs, certs
│   │   ├── BeyondDevelopment.tsx # Emerging AI workflow explorations
│   │   └── Contact.tsx      # Copy email, social links, validated form
│   ├── App.tsx              # Main application shell & modal state
│   ├── main.tsx             # React DOM root mounting
│   └── index.css            # Custom editorial utilities, scrollbar & theme vars
├── standalone-preview.html   # Zero-install single-file browser preview
├── index.html               # Main Vite HTML entry with SEO & OpenGraph tags
├── package.json             # Dependencies and build scripts
├── tailwind.config.js       # Editorial palette & font declarations
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite development server settings
```

---

## 🚀 Running the Project

### Option A: Zero-Install Instant Browser Preview
If you want to view and test the website immediately without running Node/npm:
1. Navigate to the project directory:
   `C:\Users\SHRUTI SINGH\.gemini\antigravity\scratch\shreya-singh-portfolio\`
2. Double-click `standalone-preview.html` to open it directly in Google Chrome, Brave, or Microsoft Edge.
3. Everything is fully interactive (theme toggle, navigation, project banners, resume preview, and contact form).

---

### Option B: Local Development with Vite & React

Once Node.js (v18+) and npm are installed on your system:

```bash
# 1. Navigate into the project folder
cd shreya-singh-portfolio

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

The site will launch at `http://localhost:3000`.

To build the optimized production bundle:
```bash
npm run build
npm run preview
```

---

## 🌐 Connecting to GitHub & Deploying to Vercel

### Step 1: Initialize Git and Push to Your GitHub Account

When you are ready to push to your GitHub account:

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Shreya Singh Developer Portfolio"

# Rename branch to main
git branch -M main

# Add your GitHub remote repository
git remote add origin https://github.com/shreya-a12/shreya_portfolio.git

# Push the code
git push -u origin main
```

---

### Step 2: 1-Click Deployment to Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select the `shreya-singh-portfolio` repository.
3. Framework Preset: **Vite** (detected automatically).
4. Root Directory: `./`
5. Click **"Deploy"**.
6. Your portfolio will be live with free global CDN and HTTPS in under 60 seconds!

---

## 📬 Connecting the Contact Form to Real Email Delivery

By default, the contact form includes client-side validation and informs visitors that it is running in local preview mode.

To receive emails directly in your real inbox when visitors submit the form:

### Option 1: Formspree (Recommended, Free)
1. Sign up at [formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g., `xpzvbxyz`).
3. In `src/sections/Contact.tsx`, update the form submission action or POST to `https://formspree.io/f/<YOUR_FORM_ID>`.

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Add your Service ID, Template ID, and Public Key into `src/data/socialLinks.ts`.

---

## 📄 License & Attribution

Designed and engineered for **Shreya Singh**.  
All rights reserved © 2026.
