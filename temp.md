# 🚀 How to Go Live (GitHub & Deployment)

Follow these steps to push your project to GitHub and host it for free so anyone can visit it.

## 1️⃣ Push to GitHub

1. **Create a new repository** on [GitHub](https://github.com/new).
2. **Open your terminal** in the project folder.
3. **Initialize Git** (if not already done):
   ```bash
   git init
   ```
4. **Add all files**:
   ```bash
   git add .
   ```
5. **Commit your changes**:
   ```bash
   git commit -m "Initial commit: Tipsy Toastie Cinematic Experience"
   ```
6. **Link to your GitHub repo**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tipsy-toasties.git
   ```
7. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

---

## 2️⃣ Deploy for Free (Public Link)

We recommend using **Vercel** or **Netlify** for the fastest and easiest deployment.

### Option A: Vercel (Recommended)
1. Go to [Vercel](https://vercel.com/) and sign up with GitHub.
2. Click **"Add New"** -> **"Project"**.
3. Import your `tipsy-toasties` repository.
4. Vercel will automatically detect **Vite** settings.
5. Click **"Deploy"**.
6. **Done!** You'll get a public link like `tipsy-toasties.vercel.app`.

### Option B: Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign up with GitHub.
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select GitHub and pick your repo.
4. Click **"Deploy tipsy-toasties"**.
5. You'll get a link like `tipsy-toasties.netlify.app`.

---

## ⚡ Why these platforms?
- **Automatic Updates**: Every time you push code to GitHub, your website updates automatically.
- **Fast Global Delivery**: Your videos and images will load quickly anywhere in the world.
- **SSL (HTTPS)**: Your site will be secure out of the box.

---
*If you need to update the location link or videos in the future, just edit the files, commit, and push!* 🚀
