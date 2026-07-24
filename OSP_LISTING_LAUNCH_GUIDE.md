# OSP Signature Property Collection — Listing Launch Guide

This repository is the working model for future OSP luxury listing microsites.

## Reusable buyer experience

Every OSP Signature Property Collection site should include:

- cinematic hero presentation and property status
- verified price, bedrooms, bathrooms and square footage
- architecture and lifestyle narrative
- floor-plan viewer
- approved photography or renderings only
- selections and finish collection
- community story and amenities
- buyer brochure
- common buyer questions
- one-tap SMS contact actions
- an approved-information property concierge
- brokerage attribution, rendering notices and controlling-document language
- canonical metadata, social-sharing image, structured data, sitemap and robots file
- mobile, tablet and desktop testing

## New-listing intake

Provide:

1. Property address, preferred subdomain and listing status.
2. Verified price, bedroom/bath count, heated square footage and total under roof.
3. MLS, Zillow or other public listing URL.
4. Eight to twenty approved images or renderings.
5. Floor plans.
6. Selection boards and finish specifications when applicable.
7. Buyer brochure or offering memorandum.
8. Community and amenity information.
9. Agent names, mobile numbers and approved SMS message.
10. Brokerage attribution, image-use authorization and required disclaimers.

## Production workflow

1. Copy this repository into a new public repository named for the property.
2. Replace the values recorded in `listing-data.json`.
3. Replace the approved files in `assets/` and the brochure in `downloads/`.
4. Update the copy, FAQ answers, concierge answers, metadata and structured data in `index.html` and `script.js`.
5. Set the property hostname in `CNAME`, `robots.txt` and `sitemap.xml`.
6. Validate every image, link, modal, text action, concierge answer and responsive breakpoint.
7. Publish from the repository's default branch with GitHub Pages.
8. In GoDaddy DNS, create one property-specific CNAME pointing to `gavigan.github.io`.
9. Enforce HTTPS after DNS is verified.
10. Add the microsite URL to the OSP website, MLS/Zillow, social posts, email signatures and QR-coded print materials.

## Naming standard

- Repository: `osp-listing-<street-number>-<street-name>`
- Subdomain: a short address without punctuation, such as `2blakelane.osprealestate.com`
- Hero image: `front-rendering.jpeg` or `hero-exterior.jpeg`
- Floor plans: `main-level-plan.jpeg`, `upper-level-plan.jpeg`
- Brochure: `<address>-buyer-brochure.pdf`

## Guardrails

- Do not publish unapproved renderings or old selection imagery.
- Keep estimates labeled as estimates.
- Keep availability and pricing tied to the live public listing or direct agent confirmation.
- Direct purchase terms, contract, legal, availability and project-specific decisions to the agents.
- Do not expose API keys in browser code. A future AI concierge must use a secure server-side service.
- Use one explicit DNS record per property. Do not use a wildcard listing subdomain.

## Launch acceptance checklist

- [ ] Public URL opens without a sign-in wall.
- [ ] HTTPS is active.
- [ ] Hero, gallery, floor plans and selection board load.
- [ ] Only approved imagery is present.
- [ ] Zillow/MLS and brochure links open.
- [ ] Text Stacey and Text Billy open a prewritten SMS message.
- [ ] Concierge answers approved topics and routes contract questions to the agents.
- [ ] No horizontal overflow exists at phone width.
- [ ] Page title, description, canonical URL and social image match the property.
- [ ] Schema address, price, bedroom/bath count and square footage are current.
- [ ] Sitemap and robots file use the final hostname.
- [ ] Rendering and controlling-document notices are visible.
- [ ] OSP home/listing directory links to the microsite.
