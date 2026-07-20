# Palm Gift Card

A modern, professional website for **Palm Gift Card** (Palmcard Trading Limited) - a global gift card, cryptocurrency, and money transfer trading service.

## What's Inside

- **Hero** with an interactive Quick Trade panel - pick a service and start a WhatsApp trade instantly
- **Why Choose Us** - four key value props with watercolor-accented icon cards
- **Services** - three core services (Gift Cards, Crypto, Money Transfers), each with its own custom-built visual: stylized card mockups, animated crypto tokens, or an orbiting currency globe
- **Brands We Trade** - real gift card slideshow (16 generated cards) + collapsible filterable brand cloud with 50+ brands
- **About Us** - story + stats over an office photo background with a subtle logo watermark
- **Our Agents** - 9 real agents + 1 boss (Sisi, display-only). Each agent has a direct WhatsApp CTA (no phone numbers ever shown on the page)
- **China Office** - local office info + Sisi as boss, with a WhatsApp button that rotates through all 9 agents every 10 seconds
- **Contact** - final CTA with reassurances
- **Footer** - quick links, services, contact info
- **Floating WhatsApp button** with an agent picker popover - pick any agent from anywhere on the site

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** with custom watercolor palette
- **Framer Motion** for animations
- **Lucide React** for icons
- Google Fonts: **Cormorant Garamond** (serif headings) + **Inter** (body)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (Recommended)

This project is pre-configured to deploy cleanly on Vercel with **zero configuration**.

### Step 1 - Push to GitHub

1. Unzip `palm-gift-card.zip` to a folder on your computer
2. Create a new GitHub repository (e.g. `palm-gift-card`)
3. Push the folder contents to the repo:
   ```bash
   cd palm-gift-card
   git init
   git add .
   git commit -m "Initial commit - Palm Gift Card"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/palm-gift-card.git
   git push -u origin main
   ```

### Step 2 - Import to Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository** and pick your `palm-gift-card` repo
3. Vercel auto-detects Next.js - **leave all defaults as-is**:
   - Framework Preset: **Next.js** (auto)
   - Build Command: `next build` (auto - already in `package.json`)
   - Output Directory: `.next` (auto)
   - Install Command: `npm install` (auto)
4. Click **Deploy**
5. Wait ~60 seconds - your site is live!

### Step 3 - (Optional) Custom Domain

After deployment, go to **Settings → Domains** in Vercel to add your custom domain.

## Build Verification

This zip has been verified to build cleanly with the EXACT same workflow Vercel uses:

```bash
npm install   # ✓ 509 packages installed
npm run build # ✓ Build succeeded, TypeScript passed, static pages generated
```

If you ever want to verify locally before deploying:

```bash
cd palm-gift-card
npm install
npm run build
```

## After Deploying

- Update agent data (names, WhatsApp numbers, photos) in `src/components/palm/data.ts`
- Replace images in `public/images/` with your own if you want to refresh them
- All agent phone numbers live only in `data.ts` and are used inside `wa.me` links - they are never displayed on the page
- The boss (Sisi) has `phoneDigits: null` - she is display-only with no WhatsApp button

## File Structure

```
├── public/
│   └── images/
│       ├── cards/              # 16 generated gift card images for slideshow
│       ├── logo.jpeg
│       ├── team-boss-sisi.png  # Boss photo (display only)
│       ├── team-boss-lousie.jpeg (Lousie is now a Senior Trade Agent)
│       ├── team-*.jpeg         # 8 other agent photos
│       └── office-*.jpg        # Office photos
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind + Palm watercolor palette
│   │   ├── layout.tsx          # Fonts + metadata
│   │   ├── page.tsx            # Home page (single route)
│   │   └── api/route.ts        # Health check endpoint
│   └── components/
│       ├── ui/                  # shadcn/ui components (button, card, dialog, etc.)
│       └── palm/                # Palm Gift Card components
│           ├── data.ts          # Team + brand data
│           ├── header.tsx       # Sticky nav with mobile drawer
│           ├── hero.tsx         # Hero + Quick Trade panel
│           ├── why-choose-us.tsx
│           ├── services.tsx     # 3 services with custom visuals
│           ├── brands.tsx       # Real gift card slideshow + filterable brand cloud
│           ├── about.tsx
│           ├── team.tsx         # 9 agents + Sisi boss (display only)
│           ├── china-office.tsx # Rotating WhatsApp button every 10s
│           ├── contact.tsx
│           ├── footer.tsx
│           └── floating-whatsapp.tsx
├── package.json                 # Only deps actually used (no prisma, no z-ai-sdk)
├── next.config.ts               # Minimal - reactStrictMode + poweredByHeader off
├── tsconfig.json                # Standard Next.js TS config
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Customization Quick Reference

- **Brand colors**: `src/app/globals.css` - `:root` and `.dark` variables
- **Team members**: `src/components/palm/data.ts` - `team` array
- **Brand list**: `src/components/palm/data.ts` - `brands` array
- **Crypto tokens**: `src/components/palm/data.ts` - `cryptoTokens` array
- **Transfer currencies**: `src/components/palm/data.ts` - `transferCurrencies` array
- **Slideshow cards**: `src/components/palm/data.ts` - `cardSlides` array
- **Rotation interval (China Office)**: `src/components/palm/china-office.tsx` - `ROTATE_INTERVAL_MS` constant (default 10000 = 10s)

## License

© Palmcard Trading Limited. All rights reserved.
