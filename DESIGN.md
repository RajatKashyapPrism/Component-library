# Design System

## Overview

A multi-brand, multi-platform component library built for a hospitality group spanning six brands. The system is designed to share a single set of components while allowing each brand to express its own visual identity — colors, typography, border radii, and component sizing — entirely through CSS custom properties. No component code changes when you switch brands.

Axes of variation:
- **Brand** — six distinct identities (oyo, belvilla, dancenter, motel-6, checkin, studio-6)
- **Theme** — light (default) and dark
- **Density** — comfortable, dense, tight
- **Platform** — desktop and mobile

---

## Token Architecture

The token system is built in four cascading layers. Each layer resolves values from the layer above it, so components only ever reference the bottom layer (semantic tokens).

```
[data-platform]  →  raw px values (--fixed-25, --scale-100, …)
        ↓
[data-density]   →  density aliases (--fixed-sm-1, --scale-lg-5, …)
        ↓
[data-brand]     →  semantic tokens (--colour-background-*, --space-*, …)
        ↑
[data-theme]     →  overrides the :root colour palette for dark mode
```

All four `data-*` attributes are applied to a single wrapper element. Switching any one attribute instantly re-resolves all tokens for everything inside.

---

## Layer 1 — Platform (`[data-platform]`)

Defines the raw numeric values for spacing and sizing. Currently mobile and desktop share the same scale, but the separation exists so they can diverge independently in the future.

| Token | Value |
|---|---|
| `--fixed-25` | 2px |
| `--fixed-50` | 4px |
| `--fixed-100` | 8px |
| `--fixed-150` | 12px |
| `--fixed-200` | 16px |
| `--fixed-300` | 24px |
| `--fixed-400` | 32px |
| `--fixed-500` | 40px |
| `--fixed-600` | 48px |
| `--scale-100` … `--scale-1600` | 8px … 128px |

`--fixed-*` tokens are used for values that should not be affected by content scaling (padding, gaps). `--scale-*` tokens are used for values that may respond to content or viewport (widths, heights, layout spacing).

---

## Layer 2 — Density (`[data-density]`)

Maps raw platform tokens to named aliases. Components consume these aliases, not raw tokens, so changing density changes all spacing in the system without touching component code.

| Alias | comfortable | dense | tight |
|---|---|---|---|
| `--fixed-sm-1` | 2px | 0px | 0px |
| `--fixed-sm-2` | 4px | 2px | 0px |
| `--fixed-sm-3` | 8px | 4px | 2px |
| `--fixed-sm-4` | 12px | 8px | 4px |
| `--fixed-sm-5` | 16px | 12px | 8px |
| `--fixed-md-1` | 24px | 16px | 8px |
| `--fixed-md-2` | 32px | 24px | 8px |
| `--fixed-md-3` | 40px | 32px | 24px |
| `--fixed-md-4` | 48px | 40px | 32px |

Scale aliases (`--scale-sm-3` through `--scale-lg-5`) follow the same pattern, stepping down one position per density level.

---

## Layer 3 — Brand (`[data-brand]`)

Each brand defines the full set of semantic tokens. Components reference only semantic tokens, never raw values or palette references directly.

### Semantic Token Namespaces

**Colour — Background**
```
--colour-background-subtle-{intent}        Low-emphasis fill (tinted)
--colour-background-moderate-neutral-{1-3} Mid-emphasis neutral fill
--colour-background-intense-{intent}       High-emphasis fill (solid)
--colour-background-subtle-brand-primary   Tinted brand-primary fill
```
Intent values: `negative`, `alert`, `positive`, `info`, `offer`, `premium`, `neutral-1/2/3`, `brand-primary`, `brand-secondary`, `rating-filled`, `rating-unfilled`

**Colour — Text**
```
--colour-text-intense-neutral              Primary body text
--colour-text-moderate-neutral             Secondary / supporting text
--colour-text-subtle-neutral               Tertiary / placeholder text
--colour-text-intense-{intent}             Coloured text for semantic meaning
--colour-text-intense-on-intense           Text on solid (intense) backgrounds
--colour-text-intense-on-intense-{intent}  Text on intent-coloured intense backgrounds
```

**Colour — Border**
```
--colour-border-intense-neutral            Prominent border
--colour-border-moderate-neutral           Default border
--colour-border-subtle-neutral             Subtle / divider border
--colour-border-{intensity}-{intent}       Intent-coloured borders
--colour-border-intense-on-intense         Border on solid backgrounds
```

**Colour — Interaction**
```
--colour-interaction-background-{intensity}-{intent}-hover
--colour-interaction-background-{intensity}-{intent}-pressed
--colour-interaction-border-intense-brand-primary-hover
```

**Colour — Overlay**
```
--colour-overlay-darken-88   rgba(0,0,0,0.88) — heavy scrim
--colour-overlay-darken-64   rgba(0,0,0,0.64) — modal backdrop
--colour-overlay-darken-32   rgba(0,0,0,0.32) — light overlay
--colour-overlay-darken-8    rgba(0,0,0,0.08) — hover tint
```

**Spacing**
```
--space-fixed-sm-1 … --space-fixed-md-4   Fixed spacing (density-responsive)
--space-scale-sm-3 … --space-scale-lg-5   Scalable spacing (density-responsive)
```

**Icons**
```
--icon-size-sm   = --fixed-sm-5  (16px at comfortable)
--icon-size-md   = --fixed-md-1  (24px at comfortable)
--icon-size-lg   = --fixed-md-2  (32px at comfortable)
```

**Border Radius**
```
--size-border-radius-xs … --size-border-radius-xxl   Component radii
--size-border-radius-pill                             Fully rounded
```
Each brand defines its own values for these, enabling sharp-cornered or heavily rounded aesthetics per brand.

**Component-specific sizing**
```
--button-size-border-radius-xs/sm/md/lg
--button-size-border-width-active
--button-size-interaction-border-width-hover/pressed
--badge-size-border-radius-sm/md/lg
--chip-size-border-radius-sm/md/lg
--chip-size-border-width
--chip-size-interaction-border-width-hover/pressed
```

---

## Layer 4 — Theme (`[data-theme="dark"]`)

Dark mode works by inverting the raw colour palette at `:root`. All palette references (e.g. `--berry-600`, `--asphalt-200`) swap to their dark equivalents. Because semantic tokens reference palette tokens, and components reference semantic tokens, dark mode is fully automatic — no component changes required.

Light mode is the default (no attribute). Dark mode is enabled by adding `data-theme="dark"` to the wrapper.

---

## Colour Palettes

The global palette contains full 50–950 ramps for each hue. Brands reference specific steps from these ramps for their semantic tokens.

| Palette | Purpose |
|---|---|
| `asphalt` | Neutral greys — backgrounds, text, borders across all brands |
| `berry` | OYO brand primary (pink-red) |
| `emerald` | Belvilla brand primary (green) |
| `firebrick` | Dancenter brand primary (red) |
| `blue` | Motel 6 brand primary |
| `clay` | Checkin brand primary (warm tan) |
| `scarlet` | Studio 6 brand primary (red) |
| `marine` | Studio 6 brand secondary (dark navy) |
| `crimson` | Negative / error across most brands |
| `amber` | Alert / warning across most brands |
| `sky` | Info across most brands |
| `lavender` | Premium across most brands |
| `tangerine`, `gold`, `teal`, `cocoa`, `mauve`, `forest`, `mirabella`, `azure` | Supporting / offer palettes |

---

## Typography

All brands share the same type scale. OYO, Belvilla, and Motel 6 use Inter for both body and heading. Dancenter and Studio 6 use Optima nova LT Pro for headings. Checkin uses Host Grotesk for body.

| Token | Value |
|---|---|
| `--font-size-h1` | 69px |
| `--font-size-h2` | 50px |
| `--font-size-h3` | 40px |
| `--font-size-h4` | 32px |
| `--font-size-h5` | 25px |
| `--font-size-h6` | 20px |
| `--font-size-subtitle-1` | 16px |
| `--font-size-subtitle-2` | 14px |
| `--font-size-button-1` | 16px |
| `--font-size-button-2` | 14px |
| `--font-size-caption` | 12px |
| `--font-size-overline` | 11px |
| `--font-size-micro` | 10px |

| Weight token | Value |
|---|---|
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 600 |
| `--font-weight-high` | 700 |
| `--font-weight-heading` | 700 |

Letter spacing is negative for large headings (down to -1.5px at H1) and neutral or positive for small text.

---

## Brands

| Brand | Primary colour | Secondary colour | Heading font | Body font | Border style |
|---|---|---|---|---|---|
| **oyo** | Berry (pink-red) | Asphalt (dark) | Inter | Inter | Moderate radius |
| **belvilla** | Emerald (green) | Asphalt (dark) | Inter | Inter | Slightly more rounded |
| **dancenter** | Firebrick (red) | Asphalt (dark) | Optima nova LT Pro | Inter | Moderate radius |
| **motel-6** | Blue | Asphalt (dark) | Inter | Inter | Moderate radius |
| **checkin** | Clay (warm tan) | Asphalt (dark) | Inter | Host Grotesk | 0px — fully sharp corners |
| **studio-6** | Scarlet (red) | Marine (dark navy) | Optima nova LT Pro | Inter | Moderate radius |

### Brand identity notes
- **Checkin** is the most visually distinct: all border radii are 0px, giving it a strictly rectilinear feel.
- **Belvilla** uses an amber-tinted offer colour rather than the emerald shared by other brands for offer states.
- **Studio 6** uses `--scarlet-base` (#ed1c2e) directly as its brand-primary background, rather than a palette step, to maintain brand-accurate red.
- **Dancenter** and **Studio 6** share the Optima nova LT Pro heading font for a premium, editorial feel.

---

## Components

### Button
- **Variants**: `primary` (solid brand fill), `secondary` (outlined)
- **Sizes**: `xs`, `sm`, `md`, `lg`
- **Props**: `leftIcon`, `rightIcon`, `isOnBackground`, `isDisabled`
- **Radii**: driven by `--button-size-border-radius-{size}` — differ per brand
- **Icon sizes**: xs/sm/md use `--icon-size-sm` (16px), lg uses `--icon-size-md` (24px)
- `isOnBackground` applies alternate colour tokens for use on top of brand-coloured surfaces

### TextField / PhoneField
- Vertical padding: `--space-fixed-sm-4` (density-responsive)
- Horizontal padding: `--space-fixed-sm-5` (density-responsive)
- Label positioning aligns with input text using the same horizontal token
- PhoneField adds a country-code selector with a divider and chevron icon

---

## Usage in Code

Apply all four `data-*` attributes to a wrapping element. The cascade resolves automatically.

```html
<div
  data-brand="oyo"
  data-theme="light"
  data-density="comfortable"
  data-platform="desktop"
>
  <!-- all components inside use resolved tokens -->
</div>
```

In component CSS, reference only semantic tokens:

```css
.button {
  background: var(--colour-background-intense-brand-primary);
  color: var(--colour-text-intense-on-intense-brand-primary);
  border-radius: var(--button-size-border-radius-md);
  padding: var(--space-fixed-sm-3) var(--space-fixed-sm-5);
}

.button[data-hovered] {
  background: var(--colour-interaction-background-intense-brand-primary-hover);
}
```

Never hardcode hex values or raw pixel values in component CSS. If a token does not exist for a use case, the token system should be extended first.

---

## Do's and Don'ts

- **Do** reference only semantic tokens (`--colour-*`, `--space-*`) in component CSS
- **Do** use React Aria data attributes (`[data-hovered]`, `[data-pressed]`, `[data-disabled]`, `[data-focus-visible]`) for interaction states instead of pseudo-classes
- **Do** apply all four `data-*` attributes to the outermost wrapper — never split them across nested elements
- **Don't** use raw palette tokens (`--berry-600`, `--asphalt-200`) in components — only semantic tokens belong in component code
- **Don't** hardcode pixel values or hex colours in component CSS
- **Don't** use `--scale-*` tokens for fixed UI chrome (borders, icon sizes, padding) — those use `--fixed-*`
- **Don't** add `data-theme` for light mode — light is the default; adding the attribute is only for dark
