# John Lembke for City Council

A modern, responsive campaign website built with React, TypeScript, and Vite.

## About the Campaign

John Lembke is running for City Council with a platform focused on:

- 💰 Fiscal Responsibility
- 🏘️ Smart Housing & Development
- 🚦 Infrastructure Investment
- 🌱 Environmental Protection
- 🏪 Economic Development
- 👥 Community Safety

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type Safety**: Written in TypeScript for better code quality
- **Accessibility**: Designed with accessibility best practices

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd johm-for-council
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Docker Deployment

For containerized deployment:

**Production:**
```bash
npm run docker:prod
```
Access at `http://localhost:3000`

**Development:**
```bash
npm run docker:dev
```
Access at `http://localhost:5173`

See [DOCKER.md](./DOCKER.md) for detailed Docker deployment instructions.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

### Docker Scripts
- `npm run docker:prod` - Build and run production container
- `npm run docker:dev` - Start development environment with hot reloading
- `npm run docker:build` - Build production Docker image
- `npm run docker:run` - Run production container
- `npm run docker:stop` - Stop and remove containers

## Deployment

To deploy the website:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder will contain the built website ready for deployment

## Customization

### Content Updates

- Update candidate information in `src/App.tsx`
- Modify styling in `src/App.css`
- Replace placeholder contact information with real details

### Adding Features

The project is built with modern React practices and can be easily extended with:

- Contact form integration
- Event calendar
- Donation processing
- News/blog section
- Photo gallery

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and grid/flexbox
- **ESLint** - Code quality and consistency

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Contributing

This is a campaign website project. For updates or modifications, please contact the campaign team.

## License

All rights reserved. This website is for the John Lembke for City Council campaign.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
