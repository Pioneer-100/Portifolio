# Software Developer Portfolio

A professional, modern portfolio website built with React to showcase your skills, projects, and experience as a software developer.

## Features

- **Stunning Backgrounds**: Hero section with parallax background image and animated particles
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Subtle Patterns**: Each section has unique background patterns for visual depth
- **Multiple Sections**:
  - Hero section with introduction
  - About Me with statistics
  - Skills with progress bars
  - Work Experience timeline
  - Education & Certifications
  - Projects showcase with filtering
  - Blog section
  - Contact form
- **Interactive Navigation**: Smooth scrolling navigation bar
- **Project Filtering**: Filter projects by category
- **Social Media Integration**: Links to your social profiles

## Technologies Used

- React 18
- React Icons
- CSS3 with CSS Variables
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "c:\Users\HomePC\Desktop\PROJECTS\1_R portifolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero/Hero.js`):
   - Replace "Your Name" with your actual name
   - Update the description
   - Add your social media links

2. **About Section** (`src/components/About/About.js`):
   - Update the about text
   - Modify the statistics

3. **Skills Section** (`src/components/Skills/Skills.js`):
   - Add/remove skills
   - Adjust skill levels

4. **Experience Section** (`src/components/Experience/Experience.js`):
   - Add your work experience
   - Update job titles, companies, and descriptions

5. **Education Section** (`src/components/Education/Education.js`):
   - Add your education details
   - Update certifications

6. **Projects Section** (`src/components/Projects/Projects.js`):
   - Add your projects
   - Update project images, descriptions, and links

7. **Blog Section** (`src/components/Blog/Blog.js`):
   - Add your blog posts or articles

8. **Contact Section** (`src/components/Contact/Contact.js`):
   - Update contact information
   - Configure form submission (connect to backend service)

### Styling

The portfolio uses CSS variables for easy theming. Update colors in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... other variables */
}
```

### Adding Your Photo

Replace the placeholder in the Hero section with your actual photo:
1. Add your photo to `public/images/` directory
2. Update the image source in `src/components/Hero/Hero.js`

### Customizing Background Images

The portfolio includes beautiful background images and patterns:

1. **Hero Background**: 
   - Edit `src/components/Hero/Hero.css`
   - Replace the Unsplash URL with your preferred image
   - See `BACKGROUND_INFO.md` for detailed instructions

2. **Animated Particles**:
   - The hero section includes an animated particle effect
   - To disable: Remove `<ParticlesBackground />` from `src/components/Hero/Hero.js`
   - To customize: Edit `src/components/Hero/ParticlesBackground.js`

3. **Section Patterns**:
   - Each section has subtle background patterns
   - Customize in respective CSS files
   - Adjust opacity for more/less visibility

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` directory, ready for deployment.

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the build folder to an S3 bucket

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Experience/
│   ├── Education/
│   ├── Projects/
│   ├── Blog/
│   ├── Contact/
│   └── Footer/
├── App.js
├── App.css
├── index.js
└── index.css
```

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!

---

Made with ❤️ using React

## Troubleshooting

- **Common runtime error:** "Uncaught TypeError: Cannot read properties of undefined (reading 'add')" related to `Helmet` or `HelmetDispatcher`.
   - Cause: This typically happens when `react-helmet-async` is used but the app is not wrapped with a `HelmetProvider` at the root, or there are multiple conflicting helmet packages installed.
   - Fix: Install `react-helmet-async` and wrap your app's root with `HelmetProvider` (usually in `src/index.js`):

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
   <HelmetProvider>
      <App />
   </HelmetProvider>
)
```

- **If you still see the error:**
   - Ensure there is only one helmet implementation installed. Remove `react-helmet` if you're using `react-helmet-async`:

```bash
npm uninstall react-helmet
npm install react-helmet-async
```

- **General debugging tips:**
   - Clear the browser cache and restart the dev server.
   - Check the console stack trace to find which component is rendering `Helmet` without the provider.
   - If using server-side rendering, provide a shared Helmet context on both server and client.

If you'd like, I can add the `HelmetProvider` wrapper for you and fix the app automatically—tell me to proceed.