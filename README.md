# Tipsy Toastie | Edible Art Experience 🍞✨

Welcome to the official repository for **Tipsy Toastie**, a cinematic brand website designed to convert digital scrolls into real-world visits. This isn't just a website; it's a digital extension of the Tipsy Toastie vibe.

## 🔗 Live Experience
**Visit the live site:** [https://tipsy-toasties.netlify.app/](https://tipsy-toasties.netlify.app/)

---

## 🚀 Experience the Vibe
- **Cinematic Visuals**: Dark mode design with neon accents and immersive video backgrounds.
- **Content-First**: Built for the Instagram generation, featuring reel-ready visuals.
- **Fully Responsive**: Optimized for Android, iOS, and Desktop with mobile-first masonry grids.
- **Readability Focused**: Custom text shadows ensure content is visible against dynamic video backgrounds.

## 📁 Project Structure
```text
tipsy-toasties/
├── public/assets/      # High-quality videos, images, and brand assets
├── src/
│   ├── components/     # Modular UI components (Hero, Navbar, Masonry, etc.)
│   ├── pages/          # Individual experience pages (YOU, FOOD, ART, etc.)
│   ├── App.jsx         # Main routing and global layout
│   └── index.css       # Custom styles and design system
└── tailwind.config.js  # Branding and design tokens
```

## 🛠️ Built With
- **React**: For a fast, modular frontend.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Utility-first styling for the cinematic design system.
- **Framer Motion**: Smooth, high-end animations and parallax effects.
- **Lucide React**: Clean, modern iconography.

## 🏁 Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/tipsy-toasties.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```

## 📍 Location
Find us in **St. Julian's, Malta**.
[Get Directions](https://maps.app.goo.gl/vZRKLs6Hhcp37NA27)

## 📸 Follow the Journey
Stay updated with our latest creations on Instagram: [@tipsy.toastie.official](https://www.instagram.com/tipsy.toastie.official/)

---

## ⚠️ Troubleshooting & Common Issues

### 1. Netlify "Permission Denied" (Exit Code 127)
If your build fails on Netlify with `sh: 1: vite: Permission denied`, it's likely because `node_modules` were accidentally committed.
**Fix:**
```bash
git rm -r --cached node_modules
git add .gitignore
git commit -m "Fix: Remove node_modules from tracking"
git push origin main
```

### 2. Video Loading Errors (`net::ERR_ABORTED`)
These are common in development due to browser streaming interruptions or local cache limits. They are usually resolved once the site is deployed to a production environment like Netlify or Vercel.

---
*Eat. Shoot. Repeat.* 🎥🔥
