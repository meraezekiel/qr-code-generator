# Activity Log

Rolling log of work on the QR code generator. Newest entry on top. Use this to recover context after a break.

---

## 2026-04-22 (evening)

### Session summary
Added the three bottom sections from the reference layout (Desktop screenshots `2026-04-21 212752`, `212805`, `212815`).

### Changes made
1. `DesignFAQ/` — "Design and creation of QR codes" carousel. 4-card sliding window with prev/next arrows (disabled at ends); clicking a question frames it in green and swaps the answer panel below. Child component `QuestionCard`. Seed FAQs inlined in `useDesignFAQHandler`.
2. `ScanFAQ/` — "Scanning and printing of QR codes" accordion. Vertical stack with single-open behavior (`openId` state); chevron rotates 180° when open. Concentric-ring decoration copied from `AdvancedFeatures`. Child component `AccordionItem`.
3. `CTABanner/` — dark `bg-slate-800` card: "Ready to get started?" + circular white arrow button that turns green on hover.
4. `SiteFooter/` — full-bleed `bg-brand-dark` footer: QR-mark + tagline, three link columns (Service / Company / Help) as placeholder buttons, Register CTA card on the right, copyright + trademark bar below.
5. Wired all four into `src/CreateQR/implementation/CreateQR.tsx` after `<AdvancedFeatures />`.

### Verification
- `npx tsc --noEmit` passes.
- All new folders follow `FILE_STRUCTURE.md` strictly: `Name/index.ts` → `Name/implementation/Name.tsx` + `NameProps.ts` (where props exist) + `useNameHandler.ts`. Child components (`QuestionCard`, `AccordionItem`) sit inside the parent's `/implementation/` with the same shape. FAQ seed data and footer link data live inside the handlers — no stray `data.ts` files.

### Still to visually QA in browser
- Run `npm run dev` and sanity-check responsive breakpoints (DesignFAQ grid collapses to 2 columns on `sm`, 1 on mobile; SiteFooter stacks cleanly below `md`).

---

## 2026-04-22

### Session summary
Experimented with matching the reference layout from online-qr-generator.com (screenshots on Desktop: `Screenshot 2026-04-21 212724.jpg` and `Screenshot 2026-04-22 062517.jpg`). All changes were **reverted** at the end of the session at user's request.

### Changes made then reverted
1. Updated heading in `src/CreateQR/implementation/CreateQR.tsx` from "Easily create a QR code for any occasion in seconds!" to "QR codes that fit your needs" + subtitle paragraph.
2. Replaced the green-arrow + "Choose a QR Type" speech-bubble aside with a dotted-dot SVG pattern.
3. Extracted the heading + subtitle + aside + grid + preview into a new reusable component at `src/CreateQR/implementation/QRTypesSection/`.
4. Rendered `QRTypesSection` twice in `CreateQR.tsx` — once at the top and once below `AdvancedFeatures` — so both instances shared the same `selectedType`/`activeType` state.

### Current state (end of session)
- `CreateQR.tsx` restored to original: H1 "Easily create a QR code for any occasion in seconds!", speech-bubble aside, direct `QRTypeGrid` + `PhonePreview` layout.
- `QRTypesSection/` folder removed.
- Project structure matches pre-session state.
- `npx tsc --noEmit` passes.

### Open todos / ideas for next time
- [ ] Decide whether to adopt the "QR codes that fit your needs" heading + subtitle from the reference site (see Desktop screenshot `2026-04-21 212724.jpg`).
- [ ] Decide whether the QR type selector should appear in a second spot below `AdvancedFeatures` (the original ask), or only at the top.
- [ ] If the section is to be duplicated, reuse via a props-driven component rather than duplicating markup.
- [ ] Dotted pattern vs. green-arrow speech bubble — visual preference not yet settled.

### Reference material
- Desktop/`Screenshot 2026-04-21 212724.jpg` — reference layout from online-qr-generator.com (heading, subtitle, dotted pattern, grid).
- Desktop/`Screenshot 2026-04-22 062517.jpg` — current app's `AdvancedFeatures` section ("Experience the most advanced QR code generator") at localhost:5173.

### Ground rules (from memory)
- Follow `FILE_STRUCTURE.md` strictly: `/ComponentName/index.ts` → `/implementation/ComponentName.tsx` + `ComponentNameProps.ts` + `useComponentNameHandler.ts`. No stray data/util files inside `/implementation/`.

### How to run
```
npm install   # first time only
npm run dev   # vite dev server, usually http://localhost:5173
```
Other scripts: `npm run build`, `npm run preview`, `npm run typecheck`.
