# SK POP WORKS — Website

Complete False Ceiling & Interior Work With Material.
Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## 1. Project Structure

```
sk-pop-works/
├── app/
│   ├── page.tsx              Home
│   ├── layout.tsx            Root layout (fonts, navbar, footer, WhatsApp button)
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx / MobileMenu.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx / ServiceCard.tsx
│   ├── WhyChooseUs.tsx
│   ├── CompleteSolution.tsx
│   ├── ResidentialCommercial.tsx
│   ├── Process.tsx
│   ├── Gallery.tsx / Lightbox.tsx
│   ├── ServiceArea.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   ├── services.ts
│   └── projects.ts
└── public/images/            Placeholder SVG images (see below)
```

## 2. Installation

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
```

or

```bash
pnpm install
```

## 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 4. Build for production

```bash
npm run build
npm run start
```

This project was built and verified with `next build` (all 5 pages + robots.txt +
sitemap.xml compile with zero TypeScript/ESLint errors). Note: the first build on a
new machine needs a normal internet connection so Next.js can download the Google
Fonts (Fraunces, Manrope) used in `app/layout.tsx`.

## 5. Replacing placeholder images

All images live in `public/images/` and are currently clearly-labelled placeholder
SVGs (e.g. `service-pop-ceiling.svg`, `project-living-room-ceiling.svg`,
`hero-ceiling.svg`) so nothing is broken out of the box.

To use your own photos:

1. Add real photos to `public/images/` (JPG/PNG/WebP recommended).
2. Keep the same filenames (just change the extension), OR
3. Update the `image` path for each entry in `data/services.ts` and
   `data/projects.ts`, and the `src` props in `components/Hero.tsx`,
   `components/About.tsx` and `components/ResidentialCommercial.tsx`.

Recommended sizes: hero 1920×1080+, service/project images 1200×900 (4:3).

## 6. Connecting the contact form to a real backend / email service

The form in `components/ContactForm.tsx` currently validates on the client and
simulates a submit — **no email is actually sent**, and the UI does not claim
otherwise. To connect it to a real service:

**Option A — Simple API route + email provider (e.g. Resend, SendGrid, Nodemailer + Gmail SMTP)**

1. Create `app/api/contact/route.ts`:
   ```ts
   import { NextResponse } from "next/server";

   export async function POST(req: Request) {
     const data = await req.json();
     // send an email here using Resend / SendGrid / Nodemailer, e.g.:
     // await resend.emails.send({ to: "skinteriorsworks95@gmail.com", ... })
     return NextResponse.json({ ok: true });
   }
   ```
2. In `components/ContactForm.tsx`, replace the simulated `setTimeout` block
   inside `handleSubmit` with:
   ```ts
   const res = await fetch("/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(form)
   });
   if (!res.ok) throw new Error("Request failed");
   ```
3. Add your provider's API key as an environment variable in `.env.local`
   (never commit real keys).

**Option B — Form backend service** (Formspree, Web3Forms, Getform, etc.)
Point the same `fetch` call at the service's endpoint instead of a custom
API route — most of these work with zero backend code.

## 7. Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Next.js** (auto-detected). No special build settings needed.
4. Add any environment variables (e.g. email API key) under
   Project Settings → Environment Variables.
5. Click **Deploy**. Vercel will build and host the site automatically, with
   a free `*.vercel.app` URL and support for a custom domain.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- This is a **service-area business** — no physical shop/office address or map
  is shown anywhere on the site, by design.
- WhatsApp button and links open `https://wa.me/918052050846`.
- Call links use `tel:+918052050846`. Email links use
  `mailto:skinteriorsworks95@gmail.com`.
- Testimonials in `components/Testimonials.tsx` are clearly-labelled
  placeholders — replace with real, verified customer feedback before launch.
