# Palm Gift Card

A modern, professional website for **Palm Gift Card** (Palmcard Trading Limited) - a global gift card, cryptocurrency, and money transfer trading service.

## What's Inside

- **Hero** with an interactive Quick Trade panel - pick a service and start a WhatsApp trade instantly
- **Why Choose Us** - four key value props with watercolor-accented icon cards
- **Services** - three core services (Gift Cards, Crypto, Money Transfers), each with its own custom-built visual: stylized card mockups, animated crypto tokens, or an orbiting currency globe
- **Brands We Trade** - 50+ real brand chips (Apple, Amazon, Steam, Xbox, Visa, Sephora, etc.), filterable by category and searchable
- **About Us** - story + stats over an office photo background with a subtle logo watermark
- **Our Agents** - 9 real agents, each with a direct WhatsApp CTA (no phone numbers ever shown on the page)
- **China Office** - local office info + Diana, the China desk manager
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

## Deploy to Vercel

### Option A - Via Vercel Dashboard (Recommended)

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new
3. Import the GitHub repo.
4. Vercel auto-detects Next.js - defaults are correct.
   - **Framework preset**: Next.js
   - **Build command**: `next build` (auto)
   - **Output directory**: `.next` (auto)
   - **Install command**: `npm install` (auto)
5. Click **Deploy**. Done in ~60 seconds.

### Option B - Via Vercel CLI

```bash
npm i -g vercel
vercel        # follow prompts
vercel --prod # deploy to production
```

## After Deploying

- Update the agent data in `src/components/palm/data.ts` if needed (names, WhatsApp numbers, photos).
- Replace images in `public/images/` with your own if you want to refresh them.
- All agent phone numbers live only in `data.ts` and are used inside `wa.me` links - they are never displayed on the page.

## File Structure

```
├── public/
│   └── images/              # Logo, agent photos, office photos
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind + Palm watercolor palette
│   │   ├── layout.tsx       # Fonts + metadata
│   │   └── page.tsx         # Home page (single route)
│   └── components/
│       └── palm/
│           ├── data.ts              # Team + brand data
│           ├── header.tsx           # Sticky nav with mobile drawer
│           ├── hero.tsx             # Hero + Quick Trade panel
│           ├── why-choose-us.tsx
│           ├── services.tsx         # 3 services with custom visuals
│           ├── brands.tsx           # Filterable brand cloud
│           ├── about.tsx
│           ├── team.tsx             # 9 agents, WhatsApp only
│           ├── china-office.tsx
│           ├── contact.tsx
│           ├── footer.tsx
│           └── floating-whatsapp.tsx
├── package.json
├── next.config.ts
├── tsconfig.json
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

## License

© Palmcard Trading Limited. All rights reserved.
