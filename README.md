# Mohammad Ismail Emon - Personal Portfolio

A modern, responsive portfolio website showcasing my expertise as a Digital Operations Manager, Front-End Developer, and Software Support Specialist. Built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo
[https://emonismail.netlify.app](https://emonismail.netlify.app)

## About
I'm a Front-End Developer and Software Support Specialist with a strong foundation in React, HTML, CSS, and JavaScript, and hands-on experience in identifying and resolving front-end bugs, optimizing website performance, and delivering smooth user experiences. Currently at ZiiZii Island (Oasis Outfit), I lead front-end development and provide technical support for web-based platforms, ensuring stability and usability across devices.

With a Bachelor's degree in Computer Science & Engineering from International Islamic University Chittagong, I bring a structured, problem-solving approach to software development and technical troubleshooting.

In addition to my technical role, I support Facebook Pixel setup, analytics tracking, and basic marketing integrations, offering well-rounded support to e-commerce operations.

## Key Skills & Expertise
- React.js, HTML5, CSS3, JavaScript
- Front-End Bug Detection & Resolution
- Software & Technical Support for Web Applications
- Website Performance Optimization
- Cross-Browser & Mobile Compatibility
- Version Control (Git)
- Facebook Pixel & Tracking Integration
- E-commerce Platform Maintenance

## Features

- 🎨 Modern and clean design with 3D effects
- 📱 Fully responsive layout with mobile optimization
- 🌙 Dark mode support with system preference detection
- ⚡ Fast performance with Next.js static export
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized with JSON-LD and meta tags
- 📝 Contact form with EmailJS integration
- 💬 WhatsApp floating button
- 📱 Mobile-first approach
- 🔍 Custom scrollbar styling
- 🎨 Custom color scheme with CSS variables

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript, JavaScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animation**: Framer Motion
- **Icons**: Hero Icons
- **Form Handling**: EmailJS
- **Deployment**: Netlify

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ismailemon/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm run export
   ```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── components/      # Reusable components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Shared components
│   ├── Navbar.tsx       # Navigation bar
│   └── ThemeToggle.tsx  # Dark/Light mode toggle
public/                  # Static assets
├── robots.txt          # Search engine directives
└── sitemap.xml         # Site map for SEO
```

## Customization

1. Update personal information in `src/app/page.tsx`
2. Modify theme colors in `src/app/globals.css`
3. Update projects in the Projects section
4. Customize skills and experience
5. Configure EmailJS in the contact form

## Deployment

- The site is statically exported to the `out` directory and can be deployed to Netlify or any static hosting provider.

## SEO Features

- JSON-LD structured data
- Meta tags for social sharing
- XML sitemap
- robots.txt configuration
- Canonical URLs
- Open Graph tags
- Twitter card support

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS animations with hardware acceleration
- Lazy loading for images
- Static site generation
- Minified CSS and JavaScript

## License

This project is licensed under the MIT License.
