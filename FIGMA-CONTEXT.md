# Parent Design System
**File key:** `IyriPXG0e0FkwH6iBgMtTm`

---

## Coverage
- [x] Button — canvas `5352:34583`
- [ ] Chip
- [x] Text Field — canvas `7061:77904`
- [x] Section Header — canvas `7061:77886`
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

### Section Header — `5521:35923`
Canvas: `7061:77886`  
Sizes: `Small` · `Medium` · `Large`  
Overline: `None` · `Text` · `Graphic`  
T asset types: `Text block` · `Icon group` · `Switch` · `Button group` · `Graphic`  
Key props: `size`, `overline`, `tAsset` (bool, show trailing asset), `tAsset1` (trailing asset type), `lAsset` (bool, leading icon), `lSubtitle` (bool), `lButtons` (bool, show button array), `overlineSlot` (bool), `componentSlot` (bool), `tChevron` (bool), `tIcon` (bool)

**Size × Overline (T asset = Text block)**
| Size | Overline | Node ID |
|---|---|---|
| Small | None | `5521:35980` |
| Medium | None | `5778:39569` |
| Large | None | `5778:39911` |
| Small | Text | `5815:46625` |
| Medium | Text | `5815:46642` |
| Large | Text | `5815:46659` |
| Small | Graphic | `5817:47666` |
| Medium | Graphic | `5817:47683` |
| Large | Graphic | `5817:47700` |

**Size × Overline (T asset = Icon group)**
| Size | Overline | Node ID |
|---|---|---|
| Small | None | `5627:38093` |
| Medium | None | `5778:39586` |
| Large | None | `5778:39928` |
| Small | Text | `5815:46676` |
| Medium | Text | `5815:46692` |
| Large | Text | `5815:46708` |
| Small | Graphic | `5817:47717` |
| Medium | Graphic | `5817:47733` |
| Large | Graphic | `5817:47749` |

**Size × Overline (T asset = Switch)**
| Size | Overline | Node ID |
|---|---|---|
| Small | None | `5778:39030` |
| Medium | None | `5778:39602` |
| Large | None | `5778:39944` |
| Small | Text | `5815:46724` |
| Medium | Text | `5815:46738` |
| Large | Text | `5815:46752` |
| Small | Graphic | `5817:47765` |
| Medium | Graphic | `5817:47779` |
| Large | Graphic | `5817:47793` |

**Size × Overline (T asset = Button group)**
| Size | Overline | Node ID |
|---|---|---|
| Small | None | `5630:38237` |
| Medium | None | `5778:39616` |
| Large | None | `5778:39958` |
| Small | Text | `5815:46766` |
| Medium | Text | `5815:46781` |
| Large | Text | `5815:46796` |
| Small | Graphic | `5817:47807` |
| Medium | Graphic | `5817:47822` |
| Large | Graphic | `5817:47837` |

**Size × Overline (T asset = Graphic)**
| Size | Overline | Node ID |
|---|---|---|
| Small | None | `5775:38588` |
| Medium | None | `5778:39631` |
| Large | None | `5778:39973` |
| Small | Text | `5815:46811` |
| Medium | Text | `5815:46824` |
| Large | Text | `5815:46837` |
| Small | Graphic | `5817:47852` |
| Medium | Graphic | `5817:47865` |
| Large | Graphic | `5817:47878` |

---

## Session Log
| Date | Added |
|---|---|
| 2026-04-30 | Button, FAB, Text Field (partial) |
| 2026-04-30 | Text Field — full (all sizes, states, input types) |
| 2026-05-01 | Section Header — full (all sizes × overline × T asset types) |
