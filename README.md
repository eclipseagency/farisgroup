# Faris Group — Total Sports Solutions

A full production-ready replication of [farisgroup.net](https://farisgroup.net) built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```
/app                        # Next.js App Router pages
  /about-us                 # About Us page
  /products                 # Products catalog
  /products/sports-equipment
  /fitness-and-gym          # Fitness & Gym page
  /bleachers-and-seating    # Bleachers & Seating page
  /padel-court              # Padel Courts page
  /shooting-range           # Shooting Range page
  /construction             # Construction services
  /supply                   # Supply services
  /contact                  # Contact form
/components
  /layout                   # Navbar, Footer
  /sections                 # Page sections
  /ui                       # Reusable UI components
/public
  /images                   # Static images
  /icons                    # Icons
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero slider, stats, about, services |
| `/about-us` | Company history, values, milestones |
| `/products` | Full product catalog |
| `/fitness-and-gym` | Fitness & gym equipment |
| `/padel-court` | Padel court models (VISION, PANORAMIC, FORTE) |
| `/bleachers-and-seating` | Stadium & arena seating |
| `/shooting-range` | Shooting range equipment |
| `/construction` | Sports facility construction |
| `/supply` | Equipment supply services |
| `/contact` | Contact form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy

Or with CLI:
```bash
npm i -g vercel && vercel --prod
```

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial FarisGroup website replication"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0a1628` | Dark backgrounds |
| Primary Blue | `#1a3a6b` | Main brand color |
| Gold | `#c9a227` | Accents, CTAs |
