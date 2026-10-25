# Amritanshu Shandilya — Modern Developer Portfolio

A production-ready, modern developer portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an Awwwards-inspired dark aesthetic, subtle glassmorphism, responsive grid layouts, and strict data centralization.

---

## 🚀 Live Demo & Preview

- **Developer**: Amritanshu Shandilya
- **Headline**: Full-Stack Developer | AI Enthusiast | Problem Solver
- **Education**: B.E. in Electronics & Communication Engineering, Siddaganga Institute of Technology (CGPA: 8.7)
- **Verified GitHub**: [https://github.com/AmritShan06](https://github.com/AmritShan06)
- **Verified LeetCode**: [https://leetcode.com/u/AmritShan/](https://leetcode.com/u/AmritShan/)

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router, Server Components by default) |
| **Language** | TypeScript (Strict type checking) |
| **Styling** | Tailwind CSS with custom glassmorphism and theme variables |
| **Animations** | Framer Motion & CSS keyframe micro-interactions |
| **Icons** | Lucide React |
| **Typography** | Geist Sans & Geist Mono via `next/font/local` |
| **Deployment** | Vercel (zero-config, high-performance edge network) |
| **Package Manager** | npm |

---

## ✨ Features

- **Awwwards-Inspired Dark Theme**: Deep near-black/navy backgrounds (`#030712`), electric cyan, sky, and indigo accents, and clean light-mode toggle.
- **Interactive Developer Hero**: Dynamic code console blueprint with live status and floating animated badges for AI Vector RAG, Full-Stack Systems, and DSA Problem Solving.
- **Academic Timeline**: Verified educational milestones (Siddaganga Institute of Technology, Trident Public School, DAV Public School) with authentic CGPA and percentages.
- **Verified Technical Competencies**: Filterable tech stack categorized into Programming Languages, CS Fundamentals, Web Development, Databases, AI/Retrieval/Infrastructure, and Developer Tools.
- **Featured Projects Showcase**:
  1. **Codebase RAG**: Natural-language codebase querying with Qdrant vector embeddings, hybrid retrieval, and FastAPI.
  2. **FlowAI**: Interactive drag-and-drop architecture visualizer with React Flow, MySQL, and JWT auth.
  3. **SnapChat**: Real-time bidirectional messaging platform with Socket.IO, Express, and MongoDB.
- **Leadership Experience**: Design Team Lead at **Team PathFinder** (Event Management Club), featured on the About page.
- **Multi-Page App Router**: Dedicated routes for Home, About, Skills, Projects (with `/projects/[slug]` detail pages), and Contact.
- **Contact Center & Form**: Direct email with copy-to-clipboard, mailto CTA, and an accessible message form with honeypot protection. Form submission sends email when `RESEND_API_KEY` is configured; otherwise users are directed to `mailto:`.
- **SEO & Web Vitals**: Automatic `sitemap.xml`, `robots.txt`, SVG monogram favicon, OpenGraph card metadata, Twitter card, canonical tags, and JSON-LD Person schema.

---

## 📁 Project Architecture

```text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Secure contact form API route with honeypot
│   ├── fonts/                   # Geist Sans & Mono variable fonts
│   ├── globals.css              # Dark/light theme variables & glass utilities
│   ├── icon.svg                 # AS Monogram high-DPI favicon
│   ├── layout.tsx               # Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx                 # Concise landing page
│   ├── about/page.tsx
│   ├── skills/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── robots.ts                # Dynamic robots.txt generation
│   └── sitemap.ts               # Dynamic sitemap.xml generation
├── components/
│   ├── about.tsx                # Bio narrative & academic foundation timeline
│   ├── contact.tsx              # Contact details, copy address, & form
│   ├── footer.tsx               # Monogram brand, quick links, & back-to-top
│   ├── hero.tsx                 # High-impact hero screen with interactive canvas
│   ├── leadership.tsx           # Team PathFinder Design Lead showcase
│   ├── navbar.tsx               # Glass sticky header, scrollspy, theme toggle
│   ├── project-card.tsx         # Interactive project card with custom UI mockup
│   ├── projects.tsx             # Responsive 3-column project showcase grid
│   ├── section-heading.tsx      # Reusable styled section headers
│   └── theme-provider.tsx       # Dark-first theme context with zero flash
├── data/
│   └── portfolio.ts             # Centralized verified data store
├── lib/
│   └── utils.ts                 # Tailwind class merger utility (cn)
├── public/                      # Static assets
├── tailwind.config.ts           # Custom color palette, animations, and tokens
├── tsconfig.json                # TypeScript strict configuration
└── package.json                 # Project dependencies and npm scripts
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js (v18.17.0 or later, v20+ recommended)
- npm (v9+ or v10+)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/AmritShan06/portfolio.git

# Navigate into project directory
cd portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

### 4. Build and Production Preview
```bash
# Build the optimized production bundle
npm run build

# Start the local production server
npm run start
```

---

## ⚙️ Environment Variables (Optional)

Create a `.env.local` file in the root directory if you wish to customize canonical URLs or wire up transactional email sending:

```env
# Configurable Production URL for SEO canonical and OpenGraph links
NEXT_PUBLIC_SITE_URL=https://amritanshu.dev

# Optional: Resend API key to receive emails directly from the contact form
RESEND_API_KEY=re_123456789...

# Optional: Recipient email address (defaults to verified email)
CONTACT_EMAIL=amritanshu.1si23ec002@gmail.com
```

> **Note**: If `RESEND_API_KEY` is not provided, the contact form shows an error with a one-click `mailto:` fallback (no fake success state).

---

## ✏️ Updating Portfolio Data

All information is strictly isolated in `data/portfolio.ts`. To update any information:
1. Open `data/portfolio.ts`.
2. Edit personal information, education, skill tags, project details, or leadership experience.
3. Replace repository and live demo links as new projects are deployed:
```typescript
{
  id: "codebase-rag",
  title: "Codebase RAG",
  githubUrl: "https://github.com/AmritShan06/codebase-rag", // Update when repo is public
  liveUrl: "https://codebase-rag.vercel.app",               // Optional live demo
}
```
If `liveUrl` is omitted or set to `undefined`, the button is automatically hidden without showing broken links.

---

## 🚢 Deploying to Vercel

The portfolio is preconfigured for continuous deployment with zero manual server configuration.

### Deployment Steps:
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio website"
   git push origin main
   ```
2. **Import to Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New...** > **Project**.
   - Select your `portfolio` GitHub repository.
3. **Verify Settings**:
   - **Framework Preset**: Next.js (automatically detected).
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. **Environment Variables**:
   - Add `NEXT_PUBLIC_SITE_URL` with your custom production domain (e.g., `https://amritanshu.dev`).
   - (Optional) Add `RESEND_API_KEY` for email forwarding.
5. **Deploy**:
   - Click **Deploy**. Vercel will build and deploy the application worldwide on its global edge network.

---

## 📄 License

MIT &copy; Amritanshu Shandilya
#   P o r t f o l i o  
 