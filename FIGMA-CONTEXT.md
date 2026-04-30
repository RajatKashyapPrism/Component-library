# Parent Design System
**File key:** `IyriPXG0e0FkwH6iBgMtTm`

---

## Coverage
- [x] Button — canvas `5352:34583`
- [ ] Chip
- [x] Text Field — canvas `7061:77904`
- [ ] Checkbox
- [ ] Radio
- [ ] Toggle / Switch
- [ ] Select / Dropdown
- [ ] Badge / Tag
- [ ] Avatar
- [ ] Icons

---

## Components & Node IDs

### Button — `32:46`
Variants: `primary` · `secondary` · `tertiary` · `neutral` · `hyperlink` · `underlined`  
Sizes: `xs` · `sm` · `md` · `lg`  
Key props: `variant`, `size`, `isOnBackground`, `isDisabled`, `hasLeadingIcon`, `hasTrailingIcon`, `isSplit`

| Variant | Size | Node ID |
|---|---|---|
| primary | md | `444:5478` |
| secondary | md | `444:5526` |
| tertiary | md | `444:5674` |
| neutral | md | `17382:27443` |
| hyperlink | md | `5328:26577` |
| primary | sm | `444:5332` |
| primary | lg | `444:5722` |
| primary | xs | `5639:38292` |

### FAB — `3197:13268`
Sizes: `Large` · `Medium` · `Small`  
Props: `size`, `text` (show label), `neutral`, `counter` (badge)

| Config | Node ID |
|---|---|
| Large, with text | `3197:13267` |
| Large, icon only | `3197:13269` |
| Medium, with text | `3197:13276` |
| Small, with text | `5725:38326` |

### Text Field — `254:3963`
Sizes: `Default` (64px) · `Compact` (56px)  
States: `Inactive` · `Placeholder` · `Active` · `Error` · `Placeholder_error` · `Disabled`  
Input types: `Single line` · `Multiline` · `Phone input` · `Phone input ii` · `code`  
Props: `size`, `state`, `input`, `lAsset` (leading icon), `tAsset` (trailing icon), `tText` (trailing text), `assistiveText`, `contextualCta`

**Default size · Single line**
| State | Node ID |
|---|---|
| Inactive | `3277:15964` |
| Placeholder | `3277:16080` |
| Active | `3277:16234` |
| Error | `745:6483` |
| Disabled | `3277:16554` |
| Placeholder_error | `14773:2497` |

**Compact size · Single line**
| State | Node ID |
|---|---|
| Inactive | `3277:17171` |
| Active | `3277:17305` |
| Placeholder | `3277:17360` |
| Error | `745:6475` |
| Disabled | `3277:17238` |

**Default size · Multiline**
| State | Node ID |
|---|---|
| Inactive | `7850:27376` |
| Placeholder | `7850:27451` |
| Active | `7850:27361` |
| Error | `7850:27346` |
| Disabled | `7850:27406` |

**Default size · Phone input**
| State | Node ID |
|---|---|
| Inactive | `7597:27279` |
| Active | `7597:27224` |
| Error | `254:4016` |
| Placeholder | `7597:27332` |
| Disabled | `7850:27013` |

**Default size · Code input**
| State | Node ID |
|---|---|
| Inactive | `14971:956` |
| Active | `14972:1239` |
| Error | `14972:1284` |

---

## Session Log
| Date | Added |
|---|---|
| 2026-04-30 | Button, FAB, Text Field (partial) |
| 2026-04-30 | Text Field — full (all sizes, states, input types) |
