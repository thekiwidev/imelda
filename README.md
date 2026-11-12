# Imelda Yayala website

Marketing site for Imelda Yayala (study, work and travel abroad consultancy), built from the design canvas "Imelda Yayala — Landing Page" (four boards: Home, Study abroad, Work abroad, Travel and visits).

## Stack and why

- **Astro 7 (static output)**. Chosen because search visibility is the top requirement: every page is pre-rendered to plain HTML at build time, so all copy, headings, FAQ answers, metadata and structured data are in the first HTML response Google receives. No client framework is shipped; each page adds only a few kilobytes of vanilla TypeScript for its interactive widgets.
- **@astrojs/sitemap** generates `sitemap-index.xml` from the pages.
- **React only for the two application forms** (`@astrojs/react` islands with `client:load`). The forms were ported from the previous site, which used React, Formik and Yup; keeping that stack preserves their validation and API behaviour exactly. The forms are still server-rendered to HTML, and no other page loads React.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # astro check (types) + static build into dist/
npm run preview    # serve dist/ locally
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, cPanel). If the domain is not `imeldayayala.com.ng`, change `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`.

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Business facts (address, phone, RC number, socials). The only place to fill in placeholders. |
| `src/layouts/Base.astro` | `<head>`: title, description, canonical, Open Graph/Twitter, fonts, JSON-LD graph. Wraps every page with header and footer. |
| `src/components/` | `Header`, `Footer`, `Logo` (brand logo from `src/assets/logo.png`, optimised to WebP at build), `Photo` (photo slot), `Icon` (inline SVG set), `Breadcrumb`, `FaqAccordion`. |
| `src/assets/logo.png`, `public/logo.png` | Brand logo. The `src` copy is optimised for the header and footer; the `public` copy is the stable URL used by structured data (`logo`) and social previews (`og:image`). |
| `src/pages/index.astro` | Home: photo hero with boarding-ticket destination picker, bento services (row list on mobile), proof band, five-step tabs, client stories with photo and video slots, FAQ, contact form. |
| `src/pages/study-abroad.astro` | Photo hero, level selector section, intake calendar, personal statement, destination table, sponsors, FAQ, form. |
| `src/pages/work-abroad.astro` | Split hero with photo grid, job-offer checker, route tabs, fields, timeline, FAQ, closing. |
| `src/pages/travel-visa.astro` | Wide photo hero with overlapping title card, trip planner section, trip tickets, invitation letter guide, destinations, FAQ, closing. |
| `src/pages/student-application.astro`, `src/pages/travel-application.astro` | The two application forms, at the same URLs as the previous site. |
| `src/components/forms/` | Form islands: `StudentApplicationForm.tsx`, `TravelApplicationForm.tsx`, shared `fields.tsx`, `types.ts` and `validation.ts` (copied unchanged from the old site), `api.ts` (mailer API calls), `toast.ts`. |
| `src/components/ApplicationHero.astro`, `HelpBand.astro` | Top and bottom of the application pages. |
| `src/assets/photos/` | Photos carried over from the previous site, optimised to WebP at build. |
| `src/scripts/ui.ts` | Scroll reveal, hero parallax, shared toggle helpers. |
| `src/styles/global.css` | Design tokens and component styles from the design system (forest, brass, charcoal; Sora, Public Sans, IBM Plex Mono, Newsreader). |

## Application forms

Ported from the previous site (`github.com/thekiwidev/imelda`, `src/view/applications`, `src/api`, `src/hooks`). Same fields, field names, Yup validation (including conditional rules), required checkboxes, success and error toasts, and the same API calls:

| Form | Page | Request |
| --- | --- | --- |
| Student visa | `/student-application/` | `POST {API}/api/mailer/student-application`, JSON body of the Formik values |
| Travel visa | `/travel-application/` | `POST {API}/api/mailer/travel-application`, `multipart/form-data` with three required PDFs (`visaApplication`, `scannedPassport`, `visaTermsAndConditionsDocument`) |

- `{API}` is `https://mailer-api-8dnv.onrender.com` in production builds and `http://localhost:2024` in `npm run dev`, as on the old site. Set `PUBLIC_MAILER_API_URL` to override both.
- axios is kept deliberately: it converts the travel form's values to `FormData` the way the API already expects (arrays as `key[]`, empty values omitted).
- The old site's react-query wrapper was replaced by a small `useSubmit` hook with the same pending flag; nothing else changed.
- The mailer API answered a CORS preflight from `https://imeldayayala.com.ng` with `Access-Control-Allow-Origin: *` (checked 2026-11-12). No test submission was sent, because it would email a real application.

Known issues carried over unchanged from the old site (not fixed, awaiting a decision):
- Follow-up questions appear only when they apply (`ShowWhen` in `fields.tsx`): agent name when "Agent" is chosen, an explanation when "Others", the medical condition when "Yes"; on the travel form, the relative's details and the education history only after "Yes". Validation already required those fields only in the same cases.
- Several fields typed as text are asked as Yes/No questions (`otherNationality`, `permanentResidentCountry`, `visaRefusalDetails`, `clanOrTribe`, `professionalOrganizations`), so the email receives "Yes"/"No" rather than details.
- After a successful submit, Formik values reset but the native checkboxes and file inputs keep their state.

Fixed after porting: the travel form labelled `surname` as "First name" and `firstName` as "Last name", so names reached the mailer swapped. Labels now read "Surname (last name)" and "First name"; the field names sent to the API are unchanged.

## How SEO works here

- **All content is in the HTML.** Interactive widgets render every state on the server and JavaScript only shows or hides them: all five "How it works" steps, all three client stories, every work route, every document checklist and every travel plan are present in the page source. FAQs use native `<details>` elements, so answers are in the HTML and open without JavaScript.
- **Reveal animations never hide content from crawlers.** Elements are only faded in when JavaScript has run (`.js` class on `<html>`), and reduced-motion users see everything immediately.
- **Per-page metadata.** Each page sets a unique `<title>` and meta description that repeat the page's H1 (for example "Study Abroad with a Plan You Can Defend"), plus a canonical URL and Open Graph/Twitter tags.
- **Structured data (JSON-LD)** on every page: `ProfessionalService` (the business), `WebPage`, and where relevant `BreadcrumbList`, `FAQPage` (mirrors the visible questions) and `Service`. Contact details (address, phone, email) stay out of the business record until `detailsVerified` is true in `src/data/site.ts`, so Google never indexes example details as facts. The real social profiles from the old site are listed as `sameAs`.
- **Semantics.** One `<h1>` per page, `<h2>` per section, `<h3>` for cards and questions; breadcrumbs as an ordered list; comparison data as a real `<table>` with a caption.
- **Crawl files.** `robots.txt` allows everything and points to the sitemap; URLs are keyword slugs with trailing slashes (`/study-abroad/`, `/work-abroad/`, `/travel-visa/`).

Being in the HTML makes text indexable; whether a search shows the page depends on Google crawling it. After deploying, add the domain to Google Search Console and submit `https://<domain>/sitemap-index.xml`.

## WhatsApp and calls

- Every "Book a consultation", "WhatsApp us" and "Ask about…" button opens WhatsApp with a ready-made message (`waLink` in `src/data/site.ts`, `WaLink.astro`). The Study closing form, the Work offer checker and the Travel planner build the message from what the visitor picked (`openWhatsApp` in `src/scripts/ui.ts`); no data is collected by the site.
- **Set `site.whatsapp`** to the business number (digits only, international format, e.g. `2348031234567`). Until then these buttons scroll to the page's contact section.
- Call buttons only dial once `detailsVerified` is true; until then they behave like the WhatsApp button, so the example number is never dialled.

## Auto-playing showcases

The interactive showcases advance on their own (`autoplay` in `src/scripts/ui.ts`): Home hero destinations (3.5s), How it works steps (5s), client stories (7s); Study levels (4s) and intake calendar (3.5s); Work routes (6s); Travel planner timing (4.5s) and trip type (3s), and the invitation-letter checklist (3.5s). Hovering or focusing inside one pauses it on the item under the pointer; leaving resumes from there. They run only while on screen and never for visitors who prefer reduced motion. The Work offer checker is a quiz and does not auto-play.

## Before launch (example content to replace)

All `[BRACKET]` placeholders were replaced with realistic **example** content so the site reads as finished. Every item below is invented and must be replaced or confirmed before launch:

- `src/data/site.ts`: office address, phone, email, opening hours, `foundedYear` (2015), and the WhatsApp number (empty). Set `detailsVerified: true` once address, phone and email are real.
- Home `STATS`: 2,500+ clients since 2015, 30+ countries, 650+ approvals in 2025, "From our case records · October 2026".
- Client stories and their names (Adaeze O., Chinedu E., Halima B., Tobi A.): invented examples. Publishing invented testimonials as real ones can breach consumer-protection rules; replace them with genuine quotes from consenting clients. The note under the stories says they are verified, which is only true once they are real.
- Home FAQ fees (from ₦150,000 for visitor visas, from ₦450,000 for study packages) and step durations in "How it works".
- The invitation letter on the Travel page uses invented names and addresses as an illustration (UK phone in Ofcom's reserved drama range, `example.com` email).
- Photos from the previous site fill the main slots (they appear to be stock photography; the design asked for real, consenting client photos). The testimonial video slot is still a hatched placeholder. To swap a photo, add it to `src/assets/`, import it, and pass it to `<Photo src=… alt=…>`.
- `public/favicon.svg` is still a generic mark; replace it with a square crop of the logo (for example the green "A").
- Social previews currently use the logo (1251x429). A dedicated 1200x630 Open Graph image would display better.
- Privacy policy, terms and cookie notice pages are linked in the footer but do not exist yet.

## Decisions

- Motion markers, tweak panels and the artefact-opacity slider in the design are design-handoff tools and were not built. Background artefacts are fixed at the design default (5% opacity).
- The design's count-up animation on proof numbers was not built.
- The CAC registration line and the hero address line were removed at the owner's request; the disclaimer now sits under the social links in the footer.
- FAQ accordions allow one open item at a time through the native `details[name]` attribute (older browsers fall back to independent items).
