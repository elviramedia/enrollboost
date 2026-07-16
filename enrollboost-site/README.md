# EnrollBoost

Premium marketing website for **EnrollBoost** — enrollment consultants that help K-12 schools grow enrollment by increasing community awareness.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons. Brand palette: navy `#14213D`, orange `#F5821F`, blue `#2C7BE5` on an off-white canvas.

## Pages

Homepage, About, Services, Case Studies, Resources, Blog, Contact, Privacy Policy, Terms — plus `sitemap.xml`, `robots.txt`, and Organization JSON-LD for SEO.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build`, `npm start`, `npm run typecheck`, `npm run lint`.

## Wire up bookings & leads

The booking + form are placeholders, ready to connect:

- **Booking button:** edit `BOOKING_URL` in `lib/utils.ts` — paste your Calendly or GoHighLevel scheduling link. Every "Book a Strategy Session" CTA uses it.
- **Contact form:** `app/contact/page.tsx` currently handles submit client-side. Point it at your GoHighLevel/Calendly form endpoint, or a Next.js route handler / form service (Formspree, Resend, etc.).
- **Content:** all copy (problems, funnel, case studies, testimonials, FAQ, services) lives in `lib/content.ts` — edit in one place.

## Deploy to Vercel + connect enrollboost.org

1. **Push to GitHub**
   ```bash
   git init && git add . && git commit -m "EnrollBoost site"
   git branch -M main
   git remote add origin https://github.com/<you>/enrollboost.git
   git push -u origin main
   ```
2. **Import to Vercel** — vercel.com → New Project → import the repo. Framework auto-detects as Next.js; defaults are correct. Deploy.
3. **Add the domain** — In the Vercel project: **Settings → Domains → Add** `enrollboost.org` (and `www.enrollboost.org`). Vercel shows the DNS records to add.
4. **Point DNS in Squarespace** — In Squarespace: **Domains → enrollboost.org → DNS Settings → Custom Records**, and add what Vercel gave you:
   - Root `enrollboost.org` → **A record** to Vercel's IP (`76.76.21.21`), **or** the ALIAS/ANAME Vercel provides.
   - `www` → **CNAME** to `cname.vercel-dns.com`.
   Save. Vercel auto-issues SSL once it detects the records (propagation up to 24–48h).

   > Note: connecting the domain to Vercel replaces the Squarespace site at that domain. To keep the Squarespace site live, use a subdomain instead (e.g. add `apply.enrollboost.org` in Vercel and a matching CNAME in Squarespace).

## Structure

```
app/            App Router pages + layout, sitemap, robots
components/     Header, footer, section blocks, UI + motion primitives
components/sections/  Homepage sections
lib/            content.ts (all copy) + utils.ts (BOOKING_URL, SITE_URL)
```
