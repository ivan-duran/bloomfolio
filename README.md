# Durandev Portfolio

Personal portfolio for Iván Durán, built with Astro and Tailwind CSS.

## 🛠 Tech Stack
- **Astro 5** - Static site generator
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI 5** - Component library for Tailwind
- **TypeScript** - Type safety
- **i18n** - Multilingual support (es/en)

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to see the portfolio.

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Localization (i18n)
The project supports English and Spanish. 
Content collections have locale suffixes (`-en`, `-es`), and the UI provides a language toggle.
See `src/i18n/` for translation dictionaries.

## 📝 Content Management
Content is managed via Astro Content Collections in `src/content/`:
- `about/` - About section
- `projects/` - Portfolio projects
- `work/` - Work experience
- `education/` - Education history
- `hackathons/` - Hackathon entries
- `blog/` - Blog posts

## 🚀 Deployment
This project can be deployed to any static hosting provider like Vercel, Netlify, or Cloudflare Pages.
Make sure to set the build command to `npm run build` and the output directory to `dist/`.
