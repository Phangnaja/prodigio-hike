# La Sportiva Prodigio Hike Landing Page

A premium, high-impact product advertising landing page for the La Sportiva Prodigio Hike GTX fast-hiking boot.

## Project Overview
This project delivers a visually rich, modern landing page designed to showcase the technical innovations and brand identity of La Sportiva. It features a "Product Advertising" aesthetic with cinematic visuals, editorial-style typography, and high-end motion.

### Tech Stack
- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (Modern CSS variables, Flexbox, Grid)
- **Base Path:** Configured for relative paths (`./`) to support hosting in any subdirectory.
- **Deployment Ready:** Final production build output to `/dist`

## Key Features
- **Cinematic Hero:** High-impact full-screen hero section featuring the "Trail Speed Hike Feel." headline and action photography.
- **The Conflict:** A compelling "Problem" section detailing the drawbacks of traditional footwear (Weight Fatigue, Thermal Stress, etc.).
- **Anatomy of Breakthrough:** A technical showcase with high-resolution close-ups of the **Integrated Knit**, **Gore-Tex ePE**, and **FriXion® Red** outsole.
- **Meet the Caveman:** A brand story section featuring the Caveman Store (Thailand) with a specialized floating logo badge.
- **Technical Precision:** A dedicated specifications grid for weight, stack height, drop, and materials.
- **Brand Identity:** Official La Sportiva yellow (#FDC300) accent color and seamless logo integration for both La Sportiva and Caveman Store.
- **Modern UI Components:** Capsule-shaped buttons, smooth anchor navigation, and refined transition curves.
- **Responsive Design:** Custom mobile framing for hero imagery and a fully responsive grid for technical details.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository or navigate to the project folder.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server to preview changes in real-time:
```bash
npm run dev
```

### Production Build
Generate optimized static assets in the `/dist` directory:
```bash
npm run build
```

### Preview Production Build
Serve the locally built production files:
```bash
npm run preview
```

## Deployment Note
The project is configured with `base: './'` in `vite.config.js`. This means you can upload the contents of the `/dist` folder to **any directory** on your server (root or subfolder), and all assets will link correctly.

## Credits
- **Brand:** La Sportiva
- **Retailer:** [Caveman Store](https://caveman-store.com/lasportiva/)
- **Images:** Official La Sportiva product and action photography.
