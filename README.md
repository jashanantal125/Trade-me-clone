# Trade-me - Business Investment & Immigration Consultancy

A modern, static informational website for a New Zealand-based Business Investment & Immigration Consultancy built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Service Pages**: 
  - Property Advisory (Residential & Commercial)
  - Business Investment (9 business types with detail pages)
  - Jobs & Manpower
  - Medical Tourism
- **Static Content**: All content is informational only - no dynamic listings or user accounts
- **Smooth Animations**: Framer Motion for page transitions and scroll animations
- **Contact Form**: Front-end validation and submission handling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About Us page
│   ├── contact/
│   │   └── page.tsx       # Contact/Enquiry page
│   └── services/
│       ├── property/
│       │   └── page.tsx   # Property advisory page
│       ├── business-investment/
│       │   ├── page.tsx   # Business investment listing
│       │   └── [id]/
│       │       └── page.tsx # Individual business type pages
│       ├── jobs-manpower/
│       │   └── page.tsx   # Jobs & Manpower page
│       └── medical-tourism/
│           └── page.tsx   # Medical Tourism page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Navigation component
│   │   └── Footer.tsx     # Footer component
│   └── ui/
│       ├── Button.tsx     # Reusable button component
│       ├── ServiceCard.tsx # Service card component
│       └── SectionHeading.tsx # Section heading component
├── constants/
│   └── content.ts         # Content constants (easily editable)
└── public/                # Static assets
```

## Customization

### Content

All text content is stored in `constants/content.ts` for easy editing. Update the content objects to modify:
- Service descriptions
- Business types and details
- Why New Zealand points
- Why Choose Us points

### Styling

- Colors are defined in `tailwind.config.js` under the `primary` and `accent` color schemes
- Global styles and animations are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Business Types

To add or modify business types, update the `businessTypes` array in `constants/content.ts`. Each business type automatically gets:
- A card on the Business Investment page
- A dedicated detail page at `/services/business-investment/[id]`

## Pages

- **Home** (`/`): Hero section, services overview, Why New Zealand, Why Choose Us
- **Property** (`/services/property`): Residential and commercial property information
- **Business Investment** (`/services/business-investment`): Grid of business types
- **Business Detail** (`/services/business-investment/[id]`): Individual business type details
- **Jobs & Manpower** (`/services/jobs-manpower`): Recruitment services information
- **Medical Tourism** (`/services/medical-tourism`): Medical tourism services and FAQ
- **About Us** (`/about`): Company mission, vision, values, and experience
- **Contact** (`/contact`): Contact form and information

## Notes

- This is a **static informational site** - no backend, no user authentication, no dynamic data
- The contact form currently logs to console - integrate with your preferred form handling service
- All animations use Framer Motion for smooth, performant transitions
- The site is fully responsive and mobile-optimized

## License

Private project - All rights reserved

