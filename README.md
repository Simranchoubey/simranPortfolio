# Simran Choubey — Developer Portfolio

A premium, modern developer portfolio inspired by [hamishw.com](https://hamishw.com), built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Animated Hero** — Typing effect, floating particles, parallax scroll
- **Custom Cursor** — Smooth cursor with magnetic follower effect
- **Project Modals** — Click any project card for detailed popup
- **Skill Bars** — Animated progress bars triggered on scroll
- **Glassmorphism UI** — Frosted glass cards with subtle glow accents
- **Dark Theme** — Deep navy/teal aesthetic throughout
- **Sticky Navbar** — Blur effect on scroll
- **Fully Responsive** — Mobile-first design
- **SEO Optimized** — Meta tags, Open Graph, Twitter cards
- **Page Transitions** — Smooth Framer Motion animations

---

## 🗂 Folder Structure

```
simran-portfolio/
├── app/
│   ├── globals.css          # Global styles, custom cursor, fonts
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Animated hero with typing effect
│   │   ├── About.tsx        # Bio, timeline, education card
│   │   ├── Projects.tsx     # Project cards + modal popups
│   │   ├── Skills.tsx       # Skill bars + tools badges
│   │   ├── Achievements.tsx # Achievement cards + DSA stats
│   │   └── Contact.tsx      # Contact links + copy email
│   └── ui/
│       ├── Cursor.tsx       # Custom animated cursor
│       ├── Navbar.tsx       # Sticky blurred navbar
│       └── Footer.tsx       # Footer with links
├── public/                  # Static assets (add your photo here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate into the project
cd simran-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:3000
```

---

## 🌐 Deploy on Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts — Vercel auto-detects Next.js
# Your site will be live at: https://simran-portfolio.vercel.app
```

### Option B — Vercel Dashboard (no CLI)

1. Push your project to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Live in ~60 seconds ✓

### Custom Domain (optional)
- In Vercel dashboard → **Settings → Domains**
- Add `simranchoubey.dev` or your custom domain
- Update DNS records as instructed

---

## 🎨 Customization

### Update your details
All personal data is in the component files:

| What to change | File |
|---|---|
| Hero text, tagline | `components/sections/Hero.tsx` |
| Bio, education, timeline | `components/sections/About.tsx` |
| Projects list | `components/sections/Projects.tsx` |
| Skills & levels | `components/sections/Skills.tsx` |
| Achievements | `components/sections/Achievements.tsx` |
| Contact links | `components/sections/Contact.tsx` |
| SEO metadata | `app/layout.tsx` |

### Add your profile photo
1. Add your photo as `public/avatar.jpg`
2. In `About.tsx`, replace the gradient placeholder with:
```tsx
import Image from 'next/image'
<Image src="/avatar.jpg" alt="Simran Choubey" width={192} height={192} className="rounded-2xl object-cover" />
```

### Color scheme
Edit CSS variables in `app/globals.css`:
```css
/* Main accent (teal) */
--accent: #64ffda → change to any color

/* Secondary accent (purple) */
--accent2: #7b61ff → change to any color
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Google Fonts | Syne + DM Sans + JetBrains Mono |

---

## 📄 License

MIT — free to use, customize, and share.

---

*Built with ⚡ by Simran Choubey*
