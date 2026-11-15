# KALAKRITI — Design Contract

## Brand overview
KALAKRITI is a saree storefront presenting Indian traditional and occasion-wear styles, including Paithani, Banarasi, Kanjivaram, Narayan Peth, Gopuram and Sico sarees. The experience should feel premium, heritage-led and easy to shop.

## Design thesis
Let the saree and its weave lead: a royal editorial frame, warm textile-inspired surfaces and clear product pathways.

## Colors
- Deep wine / burgundy — `#541c2a` — brand depth and dark image overlays.
- Warm ivory — `#fff8e9` — card and reading surfaces.
- Antique gold — `#c39a58` — borders, accents and fine details.
- Parchment — `#f4e7cf` — supporting section surface.
- Warm charcoal — `#210d17` — shadow and high-contrast overlay.

## Typography
- Display: Georgia / Times New Roman serif, 600–700 weight, compact line-height, used for editorial headings and product titles.
- Body: theme-configured body family, regular 400 and semibold 600, comfortable 1.5–1.7 line-height.
- Eyebrows and metadata: body family, 700–800 weight, uppercase, tracked lettering.

## Spacing and composition
- Use the theme's page-width rails and responsive `clamp()` spacing.
- Showcase: editorial left text/logo rail with a three-column product-card panel to the right; background saree imagery must remain visible without compromising text contrast.
- Best collections: four premium collection cards in one horizontal desktop row; swipe/scroll horizontally on narrow screens.
- Cards: 4:5 imagery, rounded corners, restrained gold borders, soft shadows and consistent image crops.

## Components
- Brand mark: left-aligned, contained, bright enough to read over the image, never distorted.
- Showcase text: serif headline, concise supporting copy and one clear collection CTA.
- Showcase cards: image first, collection label, short product title and collection link.
- Best-collection cards: large collection image, title and product-count cue; whole card is a single link.
- Product cards: use the theme's native product-card block and product data; preserve prices and purchase links.

## Dos and Don'ts
- Do use real product and collection imagery from the store.
- Do preserve readable contrast and keyboard focus states.
- Do keep collection links connected to their Shopify collection resources.
- Don't use generic decorative stickers, unrelated imagery or hardcoded product URLs.
- Don't hide draft products inside the public product listing.

## Motion philosophy
Use restrained hover lift and image zoom only; disable transitions for `prefers-reduced-motion` and avoid autoplay.
