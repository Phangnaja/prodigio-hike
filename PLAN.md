# Deployment Plan: La Sportiva Prodigio Hike

This plan outlines the steps to deploy the landing page to `https://caveman-store.com/lasportiva/prodigio-hike/`.

## 1. Project Configuration [COMPLETE]
To ensure all images and styles load correctly in a subdirectory, we must update the Vite configuration.
- **Action:** Update `vite.config.js`
- **Change:** Set `base: '/lasportiva/prodigio-hike/'`

## 2. Production Build [COMPLETE]
Generate a new build with the updated asset paths.
- **Command:** `npm run build`
- **Output:** Production-ready files will be in the `dist/` folder.

## 3. Git & GitHub Setup [COMPLETE]
Initialize version control and push the code to GitHub.
- **Action:** Create `.gitignore` to exclude `node_modules` and `dist`.
- **Commands:**
  ```bash
  git init
  git add .
  git commit -m "Configure for subdirectory deployment and finalize assets"
  git branch -M main
  git remote add origin <your-github-repo-url>
  git push -u origin main
  ```

## 4. Final Server Deployment [PENDING]
Upload the build to the `caveman-store.com` server.
- **Step 1:** Connect to your server (FTP/SFTP/File Manager).
- **Step 2:** Navigate to the `/lasportiva/` directory.
- **Step 3:** Create a new folder named `prodigio-hike`.
- **Step 4:** Upload **only the contents** of the `dist/` folder into the `prodigio-hike/` directory.

## 5. Verification [PENDING]
Visit `https://caveman-store.com/lasportiva/prodigio-hike/` to verify:
- [ ] All images (Hero, Technical Specs, Caveman Logo) load correctly.
- [ ] Navigation buttons work.
- [ ] Responsiveness is intact.

---
**Status:** Steps 1-3 Complete. Ready for Step 4 (Manual Server Upload).
