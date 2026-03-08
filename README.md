# PRISM Design System — Component Library

A multi-brand, accessible component library built for PRISM's family of brands. Components are documented and previewed in Storybook with full theming support across brands, themes, densities, and platforms.

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| Storybook | 10 |
| React Aria Components | 1.16 |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start Storybook (component explorer)
npm run storybook

# Start Vite dev server
npm run dev

# Build for production
npm run build

# Build static Storybook
npm run build-storybook
```

Storybook runs at **http://localhost:6006** by default.

---

## Project Structure

```
src/
  components/
    Button/
      Button.tsx            # Component
      Button.module.css     # CSS Modules styles
      Button.stories.tsx    # Storybook stories
      index.ts              # Public export
    Input/
      TextField.tsx
      PhoneField.tsx
      Input.stories.tsx
      ...
  global.css                # All design tokens
```

---

## Components

### Button

A multi-variant, accessible button built on React Aria.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `leftIcon` | `ReactNode` | — | Icon before label |
| `rightIcon` | `ReactNode` | — | Icon after label |
| `isOnBackground` | `boolean` | `false` | Use on coloured backgrounds |
| `isDisabled` | `boolean` | `false` | Disabled state (from React Aria) |
| `children` | `ReactNode` | — | Button label |

### TextField

A text input field with label and error message support.

### PhoneField

A phone number input with country code selector and format validation.

---

## Multi-Brand Theming

The library supports 6 brands, switchable via the Storybook toolbar:

| Brand | Primary Color |
|-------|--------------|
| `oyo` | Berry / Pink |
| `belvilla` | Emerald |
| `dancenter` | Firebrick |
| `motel-6` | Blue |
| `checkin` | Clay |
| `studio-6` | Scarlet + Marine |

Additional toolbar controls:

- **Theme** — `light` / `dark`
- **Density** — `comfortable` / `dense` / `tight`
- **Platform** — `desktop` / `mobile`

---

## Design Tokens

All tokens live in `src/global.css` and follow a layered cascade:

```
Platform (mobile/desktop)
  → Density (comfortable/dense/tight)
    → Brand (oyo/belvilla/...)
      → Theme (light/dark override)
```

Token categories include spacing, color, typography, border radius, icon size, and component-specific tokens (button, badge, chip).

---

## Accessibility

All interactive components are built on [React Aria Components](https://react-spectrum.adobe.com/react-aria/). This provides keyboard navigation, screen reader support, and ARIA attributes out of the box.

---

## Publishing a New Version

### When you have a new component ready to ship

**1. Export the component from the library entry point**

Add it to `src/index.ts`:
```ts
export { NewComponent } from './components/NewComponent';
export type { NewComponentProps } from './components/NewComponent';
```

**2. Commit your changes**
```bash
git add .
git commit -m "Add NewComponent"
```

**3. Push and merge to main**
```bash
git push
```
Open a PR and merge into `main`.

**4. Switch to main and pull**
```bash
git checkout main
git pull
```

**5. Bump the version**
```bash
npm version patch   # bug fix
npm version minor   # new component or feature
npm version major   # breaking change
```
This updates `package.json` and creates a git tag (e.g. `v0.2.0`) automatically.

**6. Push the commit and tag**
```bash
git push --follow-tags
```

The GitHub Action triggers on the tag, builds the library, and publishes to npm automatically. Monitor progress at [GitHub Actions](https://github.com/RajatKashyapPrism/Component-library/actions).

---

## Design Source

Components are implemented from the [Parent Design System](https://www.figma.com/design/IyriPXG0e0FkwH6iBgMtTm/Parent-Design-system?node-id=5352-34583&m=dev)Figma file. Each component references its Figma node for tokens, states, and specs.
