# Design System Guidelines

This directory is the authoritative reference for placing components on Figma canvas using the Parent Design System library (file key: `IyriPXG0e0FkwH6iBgMtTm`).

## Purpose

Each file here covers everything needed to correctly instantiate and configure one component via Figma MCP:
- Which node ID to use for a given variant combination
- Exact Figma prop names and accepted values (case-sensitive)
- Internal layer names for instance overrides
- When to use which variant
- Composition and spacing rules

## How to use

1. Identify the component needed
2. Open the relevant `components/<name>.md`
3. Use the decision tree to pick the right variant
4. Look up the node ID for that variant
5. Place via `create_component_instance` with that node ID
6. Apply overrides via `set_instance_overrides` using exact layer names from the file

## File index

### Foundations
- [layout.md](foundations/layout.md) — frame setup, grid, spacing between components
- [composition.md](foundations/composition.md) — screen archetypes, stacking rules

### Components
- [button.yaml](components/button.yaml)
- [fab.md](components/fab.md)
- [text-field.md](components/text-field.md)
- [section-header.md](components/section-header.md)
- [list-cell.md](components/list-cell.md)
- [chip.md](components/chip.md)
- [badge.md](components/badge.md)
- [alert-badge.md](components/alert-badge.md)
- [status-badge.md](components/status-badge.md)
- [status-dots.md](components/status-dots.md)
- [counter.md](components/counter.md)
- [avatar.md](components/avatar.md)
- [divider.md](components/divider.md)
- [snack-bar.md](components/snack-bar.md)
- [sheet-header.md](components/sheet-header.md)
- [checkbox.md](components/checkbox.md)
- [radio.md](components/radio.md)
- [switch.md](components/switch.md)
- [stepper.md](components/stepper.md)
- [tooltip.md](components/tooltip.md)
- [map-bubble.md](components/map-bubble.md)
- [navigation.md](components/navigation.md)
- [segment.md](components/segment.md)
- [breadcrumb.md](components/breadcrumb.md)
- [slider.md](components/slider.md)
- [table.md](components/table.md)
- [action-tile.md](components/action-tile.md)
- [pricing-strings.md](components/pricing-strings.md)
- [secondary-pricing.md](components/secondary-pricing.md)

## Figma file
**File key:** `IyriPXG0e0FkwH6iBgMtTm`
Node IDs in this repo use `:` separator (convert `-` to `:` from Figma URLs).
