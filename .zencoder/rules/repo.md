---
description: Repository Information Overview
alwaysApply: true
---

# React Portfolio Information

## Summary
A modern, responsive professional portfolio website built with React 18. Features a comprehensive showcase of skills, experience, education, projects, and blog content. The portfolio includes animated sections, smooth scrolling navigation, and is fully optimized for all devices with custom background patterns and styling.

## Structure
The project follows a standard React application structure with component-based organization:

- **public/**: Static assets and HTML template
- **src/**: Main application source code with components for Navbar, Hero, About, Skills, Experience, Education, Projects, Blog, Contact, and Footer
- **package.json**: Project dependencies and scripts configuration

## Language & Runtime
**Language**: JavaScript (ES6+)
**Runtime**: Node.js (v14 or higher recommended)
**Framework**: React 18.2.0
**Build System**: Create React App (react-scripts 5.0.1)
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react@18.2.0 - React library
- react-dom@18.2.0 - DOM rendering
- react-router-dom@6.20.0 - Client-side routing
- react-icons@4.12.0 - Icon library
- react-scripts@5.0.1 - Build tools

**Development Dependencies**: Managed by react-scripts (Babel, Webpack, ESLint)

## Build & Installation

### Commands
- 
pm install - Install dependencies
- 
pm start - Start development server (http://localhost:3000)
- 
pm run build - Create optimized production build
- 
pm test - Run tests in watch mode
- 
pm run eject - Eject from Create React App (irreversible)

## Main Entry Points
**src/index.js** - Application entry point that renders React App to #root div
**src/App.js** - Root component orchestrating all portfolio sections
**public/index.html** - HTML template with root element and CDN fonts

## Components Architecture
All UI components located in src/components/:
- Navbar, Hero, About, Skills, Experience, Education, Projects, Blog, Contact, Footer
- Each component has associated .js and .css files
- Supports smooth scrolling navigation and filtering

## Configuration
- **Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Styling**: CSS with variables for theming in src/index.css
- **Responsiveness**: Mobile-first design with media queries
- **Fonts**: Google Fonts (Inter) loaded via CDN

## Deployment
Supports deployment to Netlify, Vercel, GitHub Pages, or AWS S3 via the build folder
