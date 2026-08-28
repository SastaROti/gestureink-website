# GestureInk Landing Page

A **fully interactive, animated landing page** for **GestureInk** - the gesture-based extension for Instagram Reels, YouTube Shorts, and vertical scroll platforms.

## 🚀 What's New

### Boot Animation
- 3.4-second eye-growing animation on page load
- Smooth fade transition into main content
- Sets the tone for the interactive experience

### Live Scrolling Background
- Animated white & purple gradient stripes
- Connected to scroll position
- Floating particles throughout
- Dynamic gradient orbs that respond to scrolling

### Animated Gestures
- **Real gesture demonstrations** - The eye actually performs each gesture:
  - **Slow Blink**: Eye closes and opens
  - **Head Nod**: Entire face moves down
  - **Eyebrow Raise**: Eyebrow lifts up, eye widens
  - **Smile**: Eyes squint, mouth smiles, blush appears
- All gestures auto-play on 3-second intervals

## 🎨 Design Philosophy

This website mirrors the exact aesthetic and animations from the GestureInk Flutter app:

- **Dark Purple + Black Theme**: Deep blacks (#08080C) with purple (#8B5CF6) accents
- **Sora Font**: Bold, oversized typography matching the app
- **Wave Animations**: Animated background waves throughout
- **SignatureEye Component**: Blinking, floating eye with pupil drift
- **FamPay-level Polish**: Playful luxury design language

## ✨ Features

### Animations
- **InkOcean**: Animated wave background with floating orbs and gradients
- **SignatureEye**: Fully animated eye component with:
  - Random blinking (every 3.5-6 seconds)
  - Floating animation
  - Pupil drift
  - Different moods (calm, happy, excited, focused)
  - Blush marks for happy/excited moods
- **Scroll-triggered animations**: Elements fade and slide in on scroll
- **Smooth transitions**: All interactions are buttery smooth

### Sections
1. **Hero**: Large animated eye, tagline, CTA
2. **Features**: 6 key features with gradient cards
3. **How It Works**: 4-step process with connecting lines
4. **Gestures**: Interactive gesture selector (blink, nod, eyebrow, smile)
5. **Privacy**: 6 privacy guarantees with icons
6. **Download**: CTA section with Play Store link
7. **Footer**: Complete navigation and social links

## 🎯 Color Palette

```css
Background: #08080C (Deep black)
Text: #F4F1FF (Off white)
Subtext: #ADA8BE (Purple grey)
Primary: #8B5CF6 (Purple)
Blue: #6272D9
Gold: #E2C46D
Green: #4ADE80
Pink: #E87BA8
```

## 🚀 Technologies

- **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vite** for build tooling
- **Google Fonts (Sora)**

## 📱 Responsive

Fully responsive design that works on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## 🎭 Animation Details

### InkOcean Background
- 4 layered wave paths with different colors
- Animated using SVG path morphing
- Floating gradient orbs with blur effects
- Speed: 7-10 seconds per cycle

### SignatureEye
- Size: Configurable (default 180px)
- Blink interval: Random 3.5-6 seconds
- Float animation: 3 seconds cycle, ±4.5px vertical
- Pupil drift: 4.5 seconds cycle, subtle x/y movement
- Eyebrow: Positioned based on mood

### Page Transitions
- Fade in + Slide up on scroll
- Staggered delays for sequential elements
- 0.6-0.8 second durations
- Ease-out curves

## 🎪 Playful Elements

- Quotes: "Blinking is now a skill. You're welcome 🫡"
- Emoji usage throughout
- Gradient text effects
- Hover animations on cards
- Floating eye icon on CTA buttons

## 📝 Notes

This is a marketing website - the actual GestureInk app is built in Flutter for Android. This site showcases the app's features, design language, and privacy-first approach.

---

**Made with 👁️ for Instagram lovers**
