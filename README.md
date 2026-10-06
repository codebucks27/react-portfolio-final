# Build a Stunning Portfolio with React JS using Styled-Components and Motion for awesome Animations

![GitHub stars](https://img.shields.io/github/stars/codebucks27/react-portfolio-final?style=social&logo=ApacheSpark&label=Stars&maxAge=2592000)&nbsp;&nbsp;
![GitHub forks](https://img.shields.io/github/forks/codebucks27/react-portfolio-final?style=social&logo=KashFlow)&nbsp;&nbsp;
![Github Followers](https://img.shields.io/github/followers/codebucks27.svg?style=social&label=Follow&maxAge=2592000)&nbsp;&nbsp;<br />

This repository contains the final code for the Portfolio Website in ReactJS. <br />

For the **Demo** and **Final Code** check out this link 👇: <br />
<a href="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion#overview" target="_blank">Checkout this Responsive Portfolio in ReactJS</a> <br />

If you want to learn how to create it, follow the tutorial below 👇: <br />
https://youtu.be/jcohAIaSy2M <br />
[![YouTube Video Views](https://img.shields.io/youtube/views/jcohAIaSy2M?style=social)](https://youtu.be/jcohAIaSy2M)<br />

---


---

## 🆕 2026 modernization update

The original tutorial code targeted Create React App and an older set of libraries. The current `main` branch has been brought up to date. If you want the **original tutorial code**, check out commit [`5cef54f`](https://github.com/codebucks27/react-portfolio-final/commit/5cef54f) (or any commit before this update) — the older version is preserved in git history.

### What changed

- **Build tool:** removed `react-scripts` (Create React App) and migrated to **Vite 8** with `@vitejs/plugin-react`. Faster dev server, faster builds, plain ES modules.
- **Package manager:** project now uses **Bun** instead of npm/yarn (works fine with either, but `bun.lockb` is the source of truth).
- **React 19** + **react-dom 19** (was React 18).
- **react-router-dom 7** (was 6) — declarative `BrowserRouter` / `Routes` / `Route` API used here is unchanged.
- **framer-motion → motion 12.** The package was renamed; imports moved from `framer-motion` to `motion/react`.
- **styled-components 6** (was 5). All non-DOM props (`click`, `color`, `img`, `top`, `left`, `right`) were converted to **transient props** (`$`-prefixed) so they don't leak onto the DOM.
- **tsparticles 3** with the new **`@tsparticles/react`** wrapper. `react-tsparticles` is deprecated. The component now uses `initParticlesEngine` + `loadFull` and `options` instead of the old `params` prop.
- **Removed unnecessary CRA leftovers:** `reportWebVitals.js`, `setupTests.js`, `App.test.js`, `App.css`, `index.css`, `logo.svg`, `manifest.json`, `logo192.png`, `logo512.png`, `package-lock.json`, plus `data/AllSvg.txt` and `data/Text.txt` scratch files.
- **JSX-bearing files** were renamed from `.js` to `.jsx` (Vite/Rolldown only treats `.jsx` as JSX by default).

### Looking for the old code?

Every previous version is kept in git history. To run the original CRA-based version:

```bash
git checkout 5cef54f
npm install
npm start
```

### Images of The Portfolio Website

![HOME](https://github.com/codebucks27/React-Portfolio-starter-code-files/blob/main/Portfolio%20Images/Home.png)
![Intro](https://github.com/codebucks27/React-Portfolio-starter-code-files/blob/main/Portfolio%20Images/Intro.png)
![Blog](https://github.com/codebucks27/React-Portfolio-starter-code-files/blob/main/Portfolio%20Images/Blog.png)
![Home Mobile](https://github.com/codebucks27/React-Portfolio-starter-code-files/blob/main/Portfolio%20Images/Home-Mobile.png)
![Intro Mobile](https://github.com/codebucks27/React-Portfolio-starter-code-files/blob/main/Portfolio%20Images/Intro-Mobile.png)
![Intro Blog](https://github.com/codebucks27/React-Portfolio-starter-code-files/blob/main/Portfolio%20Images/Blog-Mobile.png)

### Resources Used in This Project

Design in: https://www.figma.com/ <br />
SVG Icons from: https://fontawesome.com/ <br />
Spaceman 3D image from: https://www.figma.com/community/plugin/769588393361258724/Vectary-3D-Elements <br />
Audio: Music by <a href="https://pixabay.com/users/itswatr-12344345/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=1167">Jonas</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=1167">Pixabay</a> <br />
Background photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/news-paper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Getting started

Make sure you have [Bun](https://bun.sh) installed (`bun --version` should print 1.0+).

```bash
bun install
bun run dev      # start the Vite dev server at http://localhost:3000
bun run build    # production build to ./dist
bun run preview  # preview the production build locally
```

The project is plain Vite + React, so `npm install && npm run dev` works too if you'd rather not use Bun.

## Other project

From the creator: [SmartHeadshots AI — AI headshot generator](https://www.smartheadshots.ai/).
