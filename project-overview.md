# SlayFit Tracker — Complete Project Overview & Architecture Guide

SlayFit Tracker is a cohesive, client-first interactive showcase application engineered with a striking dark aesthetic (**Midnight Charcoal & Electric Cyan**), modern display typography, and smooth micro-interactions. The application serves to showcase the product vision, performance metrics, and technological foundation of the SlayFit Tracker ecosystem.

---

## 1. Architectural Philosophy

The app is built as a highly modular, performant single-page application (SPA) with React 18, Vite, and Tailwind CSS. Modern React hooks, state lifting patterns, and structural splits are used to maintain high frame-rates and avoid visual lag.

```
                  ┌──────────────────────────────┐
                  │           App.tsx            │
                  │   (Global State / Modals)    │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌────────────────┐     ┌───────────────────┐     ┌───────────────┐
│   Header.tsx   │     │    Tab Router     │     │  Footer.tsx   │
│ (Dynamic Tabs) │     │ (AnimatePresence) │     │ (Policies &)  │
└────────────────┘     └─────────┬─────────┘     │ (System Specs)│
                                 │               └───────────────┘
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌────────────────┐     ┌───────────────────┐     ┌───────────────┐
│  HomeView.tsx  │     │ FeaturesView.tsx  │     │ TechSpecsView │
│ (Rest Timer, ) │     │ (Biometrics Sync, │     │ (Manifest, & )│
│ (Secure Scan, )│     │ (Computer Vision )│     │ (Code Snippet)│
│ (AI Coach Chat)│     └───────────────────┘     └───────────────┘
└────────────────┘                                       │
                                                         ▼
                                                 ┌───────────────┐
                                                 │  FAQView.tsx  │
                                                 │ (Filtered Cues│
                                                 │  & Collapsing)│
                                                 └───────────────┘
```

### Core Web Standards Applied
1. **Dynamic Tab Switching with Motion**: Built using layout animation cues (`AnimatePresence` and `motion.div`) from `motion/react` to prevent sudden page jumps and provide smooth slide-and-fade route transitions.
2. **Zero Polling & Efficient Event States**: Event handlers inside simulators use localized intervals, automatic cleanup states (e.g., in timers), and timed triggers to ensure optimal browser rendering.
3. **Strict Typography and Color System**: Defined in custom `@theme` utilities in `src/index.css`. Tailored for ultra-high contrast readability to serve athletes on low-light tracks and weight rooms.

---

## 2. Shared File Directory Breakdown

Here is a list of each file in the workspace and what it does in detail:

### ───────────────────────────
### 📁 `/` (Root Configuration)
### ───────────────────────────

#### 📄 `metadata.json`
- **Purpose**: Defines standard metadata for the Cloud Run deployment environment.
- **Key Details**: Holds the descriptive app title `"SlayFit Tracker"`, configures proper platform privileges, and lists `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` to represent proper system alignment.

#### 📄 `.env.example`
- **Purpose**: Configuration guide for external deployments.
- **Key Details**: Confirms to the build system that all tracking systems, biometric simulations, and interactive AI responses utilize localized zero-knowledge code engines, requiring no private system environment tokens on client loads.

#### 📄 `package.json`
- **Purpose**: Manifest of core dependencies and build runner scripts.
- **Key Packages**:
  - `react` & `react-dom` (v18+) for UI scaffolding.
  - `motion` (imported from `motion/react`) for layout transition animations.
  - `lucide-react` for responsive hardware, network, and security iconography.
  - `tailwindcss` (v4.0.0+) for hardware-accelerated style builds.

### ───────────────────────────
### 📁 `/src` (Application Source Core)
### ───────────────────────────

#### 📄 `src/types.ts`
- **Purpose**: Declares strict TypeScript interfaces utilized globally throughout the application. Defines data structures for layout controls and mock streams.
- **Types Defined**:
  - `PageTab`: Defines active routes (`'home' | 'features' | 'specs' | 'faq'`).
  - `FAQItem`: Structure for category questions and expandable text bodies.
  - `DependencyItem`: Specifies version metrics, roles, and status levels for the technical dependency manifest.
  - `ChatMessage`: Structures messages for the interactive chat simulator.
  - `ExerciseItem`: Scaffolds compound lift configurations and lockout states.

#### 📄 `src/data.ts`
- **Purpose**: Acts as the centralized local datastore. Houses product and science specifications, eliminating raw content bloat within functional files.
- **Data Collections**:
  - `FAQ_DATA`: Technical answers categorized into Biometric Accuracy, Personal Injury Adapters, Zero-Knowledge Encryption, and Android compatibility.
  - `DEPENDENCY_DATA`: Real dependency list representing target compilation states (Vite, Expo 51, React Native, Garmin listeners).
  - `INITIAL_CHAT`: Diagnostic cues illustrating coaching corrections during deadlift cycles.
  - `EXERCISE_LIBRARY`: Curated compound lists with focus tags mapping strength indices.

#### 📄 `src/App.tsx`
- **Purpose**: The main application container, layout engine, and context layer.
- **Key State Variables**:
  - `activeTab`: Evaluates which view is presently visible inside the main `<main>` container.
  - `modalOpen`, `modalTitle`, `modalContent`: Governs the global backdrop portal modal, displaying technical sheets or delivery options.
  - `downloadStep`: Drives the simulated F-Droid/APK packet assembler, modeling full verification streams.
- **Core Operations**: Handles scroll restoration on route changes, loads systemic ambient meshes, and serves as the mounting portal for custom hardware prompts.

#### 📄 `src/index.css`
- **Purpose**: Root stylesheet declaring layout metrics, Google Font pairings (Inter & Geist), and the customized theme canvas.
- **Custom Classes**:
  - `.electric-glow`: Glow filter matching high-intensity laser markers.
  - `.glass-card`: Translucent black structures with frosted blurs to elevate the bento design format.
  - `.bento-glow`: Responsive border illumination that reacts seamlessly on element hover states.

### ───────────────────────────
### 📁 `/src/components` (Modularity Layer)
### ───────────────────────────

#### 📄 `src/components/Header.tsx`
- **Purpose**: Top fixed navigation bar.
- **Logic**: Updates active navigation tabs dynamically, keeps clean layout borders with high-contrast blurs, and launches the compiled mobile container modal.

#### 📄 `src/components/Footer.tsx`
- **Purpose**: Secondary index footer housing documentation triggers, legal blocks, and diagnostic summaries.
- **Logic**: Directly invokes systemic modals displaying Zero-Knowledge assurances, local Apache-2.0 agreements, and core hardware specifications.

#### 📄 `src/components/HomeView.tsx`
- **Purpose**: Splash page showcasing primary products and interactive simulators.
- **Major Features**:
  1. **Hero Display Column**: High-resolution smartphone preview paired with clear Call-to-Actions.
  2. **Active Set Rest Timer**: Features a reactive countdown clock tracking set rests. Integrates clean `useEffect` state loops with full cleanup safety check.
  3. **Simulated Fingerprint Sensor**: Animates custom arc rings (`strokeDasharray` & `strokeDashoffset` dynamically mapped to scan speeds) to emulate physical scanning mechanisms.
  4. **Dynamic AI Coach Console**: Interactive chat box allowing real-form checking simulations. Implements natural language recognition parsing sentences for keywords like `bench`, `squat`, `fatigue`, and generating context-aware answers.
  5. **Exercise Filter Board**: Search-enabled library filtering compound exercises with locks over complex technical movements.

#### 📄 `src/components/FeaturesView.tsx`
- **Purpose**: Detailed breakdown of physical, computer-vision, and coaching features.
- **Major Features**:
  1. **Adaptive AI Coaching Console**: Triggers simulated hardware sync events linking native barbell speed trackers to physical metrics.
  2. **Computer Vision Canvas**: Mock video analyzer representing Live Biometrics overlaid with real-time alignment scores.
  3. **Predictive Analytics Gauges**: SVG-rendered radial charts predicting strength growth values over 4-week training blocks.

#### 📄 `src/components/TechSpecsView.tsx`
- **Purpose**: Visual technical documentation guide for performance metrics and build dependencies.
- **Major Features**:
  1. **Cross-Platform Sensor Sandbox**: Displays low-latency sensor code snippets. Includes an interactive Clipboard copy button.
  2. **Victory Native Simulation**: Animated, high-contrast dynamic hardware bar charts rendering system outputs.
  3. **Full Dependency Manifest**: Interactive grid displaying build versions. Clicking a row brings up technical modal definitions detailing specific sensor calibrations.

#### 📄 `src/components/FAQView.tsx`
- **Purpose**: Deep-dive developer center managing system questions.
- **Major Features**:
  1. **Search & Category Matrix**: Enables quick categorical filtering of cues.
  2. **Smooth Collapsing Accordion**: Utilizes nested layouts ensuring zero jitter when lists open and close.

---

## 3. Dynamic Interactive State Logic Summary

| Interaction Target | Controller State | Associated File | UI Response Pattern |
| :--- | :--- | :--- | :--- |
| Set Rest Timer | `timerActive` (boolean) | `HomeView.tsx` | Updates cyan radial progress bar, tracks down with haptic feedback emulator lines. |
| Secure Biometrics | `biometricStatus` (`'idle' \| 'scanning' \| 'success'`) | `HomeView.tsx` | Activates scale loop triggers and completes full SVG path tracking loops. |
| AI Chat Simulator | `isCoachTyping` (boolean) & `chatMessages` (array) | `HomeView.tsx` | Triggers "analysing form" placeholder before returning muscle and velocity suggestions. |
| Library Search | `exerciseQuery` (string) | `HomeView.tsx` | Performs linear substring filtering of compound lists. |
| Dependency Audit | `modalOpen` (boolean) | `App.tsx` | Launches custom bottom portals with detailed licensing sheets. |
