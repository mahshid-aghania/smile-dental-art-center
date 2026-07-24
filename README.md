# CanaDent Education Center (malware-free clone)

Clean Next.js rebuild of [canadent.net](https://canadent.net/) — a dental education centre in North York, ON.

The live WordPress site was compromised with injected obfuscated JavaScript that loaded a remote payload from `get.whitelllshop.icu`. This app does **not** include WordPress, WooCommerce storefront scripts, Jetpack stats, GoDaddy traffic scripts, or any of that malware.

## What’s included

1. **CanaDent site** (`/`) — homepage, about, courses catalogue, course detail pages, conferences, apply/contact forms, privacy & terms
2. **AI smile preview** (`/smile-preview`) — optional selfie → treatment preview via Replicate (unchanged helper tool)

## Prerequisites

- **Node.js 20.9+**
- Optional: [Replicate](https://replicate.com) token for `/smile-preview`
- Optional: Formspree form id for apply/contact forms

## Setup

```bash
cp .env.local.example .env.local
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Malware removed

| Removed | Why |
| --- | --- |
| Obfuscated inline `_0x…` script on every page | Fetched and injected code from `https://get.whitelllshop.icu/landers/tzt.php` |
| WordPress / WooCommerce / Jetpack / Events Calendar JS stacks | Attack surface; not needed for a static+forms rebuild |
| GoDaddy `tccl-tti` traffic script | Third-party tracker unrelated to education content |

Content (copy, course catalogue, branding, address) was taken from the public site/API and rewritten into first-party React pages.

## Project structure

- `app/(canadent)/` — public CanaDent pages
- `components/canadent/` — header, footer, hero, course cards, apply form
- `lib/canadent/` — site copy + course data (from cleaned scrape)
- `public/canadent/` — logo, hero, course images
- `app/smile-preview/` — AI wizard
