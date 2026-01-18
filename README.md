# Rafael Rodrigues | Portfolio

Personal portfolio website built with React, TypeScript, and CSS Modules.

🔗 **Live:** [rafaelrm.dev](https://rafaelrm.dev)

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **CSS Modules** - Scoped styling
- **Framer Motion** - Animations

## Features

- Bilingual support (EN/PT) with browser detection
- Dark theme with emerald accent
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Subtle scroll-triggered animations

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── layout/        # Container, Section
│   └── ui/            # Button, Card, Badge
├── features/          # Page sections
│   ├── header/        # Navigation + language toggle
│   ├── hero/          # Intro section
│   ├── about/         # Bio
│   ├── skills/        # Technical skills
│   ├── experience/    # Work history timeline
│   ├── projects/      # Project cards
│   ├── contact/       # CTA section
│   └── footer/        # Copyright
├── context/           # React contexts (i18n)
├── data/              # Static content
│   ├── translations.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
└── styles/            # Global styles & tokens
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## License

MIT © Rafael Rodrigues
