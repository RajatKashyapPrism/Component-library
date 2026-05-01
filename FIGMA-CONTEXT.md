# Parent Design System
**File key:** `IyriPXG0e0FkwH6iBgMtTm`

---

## Coverage
- [x] Button — canvas `5352:34583`
- [x] Chip — canvas `460:5339`
- [x] Text Field — canvas `7061:77904`
- [x] Section Header — canvas `7061:77886`
- [x] List Cell V2.0 — canvas `6991:70798`
- [x] Checkbox — canvas `460:5339`
- [x] Radio — canvas `460:5339`
- [x] Toggle / Switch — canvas `460:5339`
- [ ] Select / Dropdown
- [x] Badge / Tag — canvas `6245:40367`
- [x] Alert Badge — canvas `6245:40367`
- [x] Status Badge — canvas `6245:40367`
- [x] Status Dots — canvas `6245:40367`
- [x] Counter — canvas `6245:40367`
- [x] Avatar — canvas `460:5339`
- [ ] Icons
- [x] Divider — canvas `460:5339`
- [x] Snack Bar — canvas `460:5339`
- [x] Sheet Header — canvas `460:5339`
- [x] Stepper — canvas `460:5339`
- [x] Tooltip — canvas `460:5339`
- [x] Map Bubble — canvas `460:5339`
- [x] Navigation (Nav bar · Tab bar · Tab view · Tab) — canvas `460:5339`
- [x] Segment — canvas `460:5339`
- [x] Breadcrumb — canvas `460:5339`
- [x] Slider — canvas `460:5339`
- [x] Table — canvas `460:5339`
- [x] Action Tile — canvas `20115:22960`
- [x] Pricing Strings — canvas `20115:22711`
- [x] Secondary Pricing — canvas `20115:22711`

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

### List Cell V2.0 — canvas `6991:70798`
Component frame: `5349:25644`  
Sizes: `Large` · `Medium` · `Small`  
Overline: `None` · `Badge` · `Text`  
T asset types: `Text block` · `Icon group` · `Button group` · `Switch` · `Graphic`  
L asset types: `Icon` · `Avatar` · `Graphic`  
Key props: `size`, `overline`, `tAsset` (bool, show trailing asset), `tAsset1` (trailing asset type), `lAsset1` (bool, show leading asset), `lAsset2` (leading asset type), `lSubtitle` (bool), `lCaption` (bool), `tChevron` (bool), `tIcon` (bool), `tCaption` (bool), `bottomCtAs` (bool, bottom button row), `slotComponent` (bool), `hasInteracton` (bool, interaction overlay), `lText` (label string), `subtitle`, `lCaption1`, `tText` (trailing text), `tCaption1`

**Overline = None**
| T asset | L asset | Large | Medium | Small |
|---|---|---|---|---|
| Text block | Icon | `5352:33961` | `5485:34920` | `5506:36188` |
| Text block | Avatar | `5400:35165` | `5485:34937` | `5506:36205` |
| Text block | Graphic | `6296:44465` | `6296:44496` | `6296:44527` |
| Icon group | Icon | `5360:34388` | `5485:34954` | `5506:36222` |
| Icon group | Avatar | `5400:35183` | `5485:34969` | `5506:36237` |
| Icon group | Graphic | `6296:44558` | `6296:44585` | `6296:44612` |
| Button group | Icon | `5360:34201` | `5485:34984` | `5506:36252` |
| Button group | Avatar | `5400:35199` | `5485:34998` | `5506:36266` |
| Button group | Graphic | `6296:44639` | `6296:44664` | `6296:44689` |
| Switch | Icon | `5360:34305` | `5485:35012` | `5506:36280` |
| Switch | Avatar | `5400:35214` | `5485:35024` | `5506:36292` |
| Switch | Graphic | `6296:44714` | `6296:44735` | `6296:44756` |
| Graphic | Icon | `6991:70944` | `6991:70953` | `6991:70962` |
| Graphic | Avatar | `6991:70972` | `6991:70981` | `6991:70990` |
| Graphic | Graphic | `6991:70999` | `6991:71008` | `6991:71017` |

**Overline = Badge**
| T asset | L asset | Large | Medium | Small |
|---|---|---|---|---|
| Text block | Icon | `5360:33787` | `5485:35036` | `5506:36304` |
| Text block | Avatar | `5400:35227` | `5485:35055` | `5506:36323` |
| Text block | Graphic | `6296:44777` | `6296:44812` | `6296:44847` |
| Icon group | Icon | `5360:35894` | `5485:35134` | `5506:36402` |
| Icon group | Avatar | `5400:35279` | `5485:35151` | `5506:36419` |
| Icon group | Graphic | `6296:45044` | `6296:45075` | `6296:45106` |
| Button group | Icon | `5360:36049` | `5485:35074` | `5506:36342` |
| Button group | Avatar | `5400:35247` | `5485:35090` | `5506:36358` |
| Button group | Graphic | `6296:44882` | `6296:44911` | `6296:44940` |
| Switch | Icon | `5360:36220` | `5485:35106` | `5506:36374` |
| Switch | Avatar | `5400:35264` | `5485:35120` | `5506:36388` |
| Switch | Graphic | `6296:44969` | `6296:44994` | `6296:45019` |
| Graphic | Icon | `7091:70218` | `7091:70229` | `7091:70240` |
| Graphic | Avatar | `7091:70251` | `7091:70262` | `7091:70273` |
| Graphic | Graphic | `7091:70284` | `7091:70295` | `7091:70306` |

**Overline = Text**
| T asset | L asset | Large | Medium | Small |
|---|---|---|---|---|
| Text block | Icon | `5360:33931` | `5485:35168` | `5506:36436` |
| Text block | Avatar | `5400:35297` | `5485:35187` | `5506:36455` |
| Text block | Graphic | `6296:45137` | `6296:45172` | `6296:45207` |
| Icon group | Icon | `5360:35909` | `5485:35266` | `5506:36534` |
| Icon group | Avatar | `5400:35349` | `5485:35283` | `5506:36551` |
| Icon group | Graphic | `6296:45404` | `6296:45435` | `6296:45466` |
| Button group | Icon | `5360:36064` | `5485:35206` | `5506:36474` |
| Button group | Avatar | `5400:35317` | `5485:35222` | `5506:36490` |
| Button group | Graphic | `6296:45242` | `6296:45271` | `6296:45300` |
| Switch | Icon | `5360:36237` | `5485:35238` | `5506:36506` |
| Switch | Avatar | `5400:35334` | `5485:35252` | `5506:36520` |
| Switch | Graphic | `6296:45329` | `6296:45354` | `6296:45379` |
| Graphic | Icon | `7091:70545` | `7091:70556` | `7091:70567` |
| Graphic | Avatar | `7091:70578` | `7091:70589` | `7091:70600` |
| Graphic | Graphic | `7091:70611` | `7091:70622` | `7091:70633` |

### Pricing Strings — frame `17417:16538`
Canvas: `20115:22711`  
Props: `isMultinight` (bool), `Stack vertical` (bool), `Size` (md · lg · xl)

| isMultinight | Stack vertical | Size | Node ID |
|---|---|---|---|
| False | False | md | `17417:16539` |
| False | False | lg | `20115:19951` |
| False | False | xl | `20115:19993` |
| True | False | md | `17417:16569` |
| True | False | lg | `20115:20211` |
| True | False | xl | `20115:20229` |
| False | True | md | `17417:16554` |
| False | True | lg | `18916:705` |
| False | True | xl | `18832:8758` |
| True | True | md | `18664:3068` |
| True | True | lg | `20115:20078` |
| True | True | xl | `20115:20060` |

### Secondary Pricing — frame `19644:910`
Canvas: `20115:22711`  
Props: `has /night` (bool), `Has total` (bool), `Size` (sm · md)

| has /night | Has total | Size | Node ID |
|---|---|---|---|
| True | False | sm | `19644:909` |
| True | False | md | `22476:594` |
| False | True | sm | `19644:911` |
| False | True | md | `22476:597` |

---

### Action Tile — frame `1518:9928`
Canvas: `20115:22960`  
Props: `Size` (L · M · S), `Subtitle` (bool), `State` (low emphasis · high emphasis · Hover)

| Size | Subtitle | State | Node ID |
|---|---|---|---|
| L | False | low emphasis | `816:5870` |
| L | False | high emphasis | `1738:10081` |
| L | False | Hover | `18046:873` |
| L | True | low emphasis | `1520:9663` |
| L | True | high emphasis | `1738:10069` |
| L | True | Hover | `18046:877` |
| M | False | low emphasis | `1518:9926` |
| M | False | high emphasis | `1738:10066` |
| M | False | Hover | `18046:883` |
| M | True | low emphasis | `1520:9666` |
| M | True | high emphasis | `1738:10073` |
| M | True | Hover | `18046:887` |
| S | False | low emphasis | `1518:9929` |
| S | False | high emphasis | `1738:10063` |
| S | False | Hover | `18046:893` |
| S | True | low emphasis | `1520:9669` |
| S | True | high emphasis | `1738:10077` |
| S | True | Hover | `18046:897` |

---

### Alert Badge — frame `6245:40368`
Canvas: `6245:40367`  
Props: `Platform` (Mobile · Desktop), `style` (Alert · negative · positive · info · neutral · invert)

| Platform | Style | Node ID |
|---|---|---|
| Mobile | Alert | `11735:222793` |
| Desktop | Alert | `11735:222807` |
| Mobile | negative | `13339:67677` |
| Desktop | negative | `14189:7653` |
| Mobile | positive | `14189:7813` |
| Desktop | positive | `14189:7827` |
| Mobile | info | `22450:2547` |
| Desktop | info | `22450:2533` |
| Mobile | neutral | `6245:40627` |
| Desktop | neutral | `6288:41955` |
| Mobile | invert | `11735:223811` |
| Desktop | invert | `11735:223825` |

### Badge — frame `743:6047`
Canvas: `6245:40367`  
Props: `Size` (Extended · Small · Micro), `Type` (neutral · invert · positive · negative · alert · premium · info · offer)

| Size | Type | Node ID |
|---|---|---|
| Extended | neutral | `743:6048` |
| Small | neutral | `743:6062` |
| Micro | neutral | `743:6070` |
| Extended | invert | `11895:219069` |
| Small | invert | `11895:219077` |
| Micro | invert | `11895:219180` |
| Extended | positive | `7635:27311` |
| Small | positive | `7635:27317` |
| Micro | positive | `7635:27321` |
| Extended | negative | `7635:27340` |
| Small | negative | `7635:27346` |
| Micro | negative | `7635:27350` |
| Extended | alert | `7635:27369` |
| Small | alert | `7635:27375` |
| Micro | alert | `7635:27379` |
| Extended | premium | `11895:219121` |
| Small | premium | `11895:219129` |
| Micro | premium | `11895:219138` |
| Extended | info | `22450:418` |
| Small | info | `22450:426` |
| Micro | info | `22450:435` |
| Extended | offer | `22734:1760` |
| Small | offer | `22734:1768` |
| Micro | offer | `22734:1777` |

### Status Badge — frame `8861:43675`
Canvas: `6245:40367`

| Property 1 | Node ID |
|---|---|
| Success | `8861:43676` |
| Caution | `8861:43678` |
| Failure | `8861:43680` |

### Status Dots — frame `11293:233500`
Canvas: `6245:40367`  
Props: `Colour` (Emerald · Crimson · Amber · Asphalt), `Size` (Default · Small)

| Colour | Size | Node ID |
|---|---|---|
| Emerald | Default | `11293:233497` |
| Crimson | Default | `11293:233501` |
| Amber | Default | `11293:233503` |
| Asphalt | Default | `11293:235652` |
| Crimson | Small | `18277:42953` |

### Counter
Canvas: `6245:40367` — `8788:35882`

---

### Divider — frame `7061:78041`
| Variant | Node ID |
|---|---|
| solid | `1088:7673` |
| bar | `1088:7676` |
| Dotted | `1088:7674` |

### Snack Bar — frame `7061:78130`
| Case | Node ID |
|---|---|
| notify | `9257:59250` |
| negative | `13407:45152` |
| alert | `13408:45193` |

### Sheet Header — frame `7061:78149`
| Variant | Node ID |
|---|---|
| Half sheet | `4351:12537` |
| Full sheet | `16768:13245` |

### Checkbox — frame `417:5032`
Props: `style` (List · round · Corner), `Is disabled` (bool), `Selected` (bool)

| Style | Disabled | Selected | Node ID |
|---|---|---|---|
| List | False | True | `417:5035` |
| List | True | True | `21560:755` |
| List | False | False | `417:5033` |
| List | True | False | `10436:247998` |
| round | False | True | `18374:14032` |
| Corner | False | True | `16427:781` |
| Corner | True | True | `21560:769` |
| Corner | False | False | `16427:784` |

### Radio — frame `417:5025`
| State | Node ID |
|---|---|
| Selected | `417:5028` |
| Unselected | `417:5026` |
| Disabled | `10436:248004` |

### Switch — frame `417:5016`
| State | Node ID |
|---|---|
| On | `417:5021` |
| Off | `417:5017` |
| Disabled | `10436:248006` |

### Stepper — frame `19505:70150`
Props: `Size` (sm · md), `Encapsulation` (bool)

| Size | Encapsulation | Node ID |
|---|---|---|
| sm | True | `417:5212` |
| md | True | `19505:70151` |
| sm | False | `21591:2633` |
| md | False | `21591:2629` |

### Avatar — frame `419:4784`
Props: `Type` (Initials · Icon · Image), `Size` (XXS · XS · S · M · L · XL)

| Type | Size | Node ID |
|---|---|---|
| Initials | XXS | `21868:8996` |
| Initials | XS | `2138:12155` |
| Initials | S | `6428:47180` |
| Initials | M | `419:4783` |
| Initials | L | `819:5890` |
| Initials | XL | `1106:8966` |
| Icon | XS | `2138:12157` |
| Icon | S | `6428:47182` |
| Icon | M | `419:4781` |
| Icon | L | `819:5887` |
| Icon | XL | `1106:8963` |
| Image | XS | `2138:12159` |
| Image | S | `6428:47184` |
| Image | M | `419:4782` |
| Image | L | `819:5885` |
| Image | XL | `1106:8961` |

### Tooltip — frame `1787:10052`
Props: `Anchor` (Left · Right · Top · Bottom · Uni), `Dismis` (bool), `Size` (Small · Large)

| Anchor | Dismiss | Size | Node ID |
|---|---|---|---|
| Left | False | Small | `1787:10053` |
| Left | False | Large | `21406:9878` |
| Left | True | Small | `1787:10058` |
| Right | False | Small | `1787:10073` |
| Right | False | Large | `21406:9902` |
| Right | True | Small | `1787:10078` |
| Top | False | Small | `1787:10083` |
| Top | False | Large | `21406:9913` |
| Top | True | Small | `1787:10088` |
| Bottom | False | Small | `1787:10063` |
| Bottom | False | Large | `21406:9889` |
| Bottom | True | Small | `1787:10068` |
| Uni | False | Small | `1787:10094` |
| Uni | False | Large | `21406:9924` |
| Uni | True | Small | `1787:10096` |

### Map Bubble — frame `21465:8227`
| Variant | Node ID |
|---|---|
| Default | `19334:87616` |
| Variant2 | `21465:8228` |

### Navigation — frame `7083:69814`

**Nav bar** (frame `6595:47861`)
| Platform | Node ID |
|---|---|
| Mobile | `176:3656` |
| Desktop | `6595:47862` |

**Tab view** — `6512:48995`  
**Tab bar** — `805:6043`

**Tab** (frame `805:6013`) — props: `For` (Nav bar · Tab bar · Tab view), `Active` (bool), `Platform` (Mobile · Desktop)
| For | Active | Platform | Node ID |
|---|---|---|---|
| Nav bar | True | Desktop | `6624:47917` |
| Nav bar | False | Desktop | `6624:47914` |
| Nav bar | True | Mobile | `176:3618` |
| Nav bar | False | Mobile | `176:3623` |
| Tab bar | True | Mobile | `805:5969` |
| Tab bar | False | Mobile | `805:6012` |
| Tab view | True | Mobile | `6512:48753` |
| Tab view | False | Mobile | `6512:48767` |

### Chip — frame `39:1834`
Props: `State` (Active · Hover · Disabled · Pressed), `Size` (Small · Medium)

| State | Size | Node ID |
|---|---|---|
| Active | Small | `39:1854` |
| Active | Medium | `17310:9897` |
| Hover | Small | `17225:55074` |
| Hover | Medium | `17310:9901` |
| Disabled | Small | `9188:54651` |
| Disabled | Medium | `17310:9905` |
| Pressed | Small | `39:1838` |
| Pressed | Medium | `17310:9909` |

### Segment — frame `462:5460`
Props: `isActive` (bool), `Size` (md · lg)  
Segment group (full bar) — `462:5554`

| isActive | Size | Node ID |
|---|---|---|
| True | md | `462:5461` |
| False | md | `462:5477` |
| True | lg | `462:5464` |
| False | lg | `462:5480` |

### Breadcrumb
Breadcrumb (full) — `16055:9289`  
**Breadcrumb link** (frame `16055:9251`) — prop: `variant` (previous · current · hover)

| Variant | Node ID |
|---|---|
| previous | `16055:9250` |
| current | `16055:9252` |
| hover | `16055:9256` |

### Slider — frame `2065:12229`
Props: `Labels` (bool), `Single head` (bool), `Stepped` (bool), `Multicolor` (bool)

| Labels | Single head | Stepped | Multicolor | Node ID |
|---|---|---|---|---|
| True | False | False | False | `2064:12016` |
| False | False | False | False | `2065:12228` |
| False | True | False | False | `2066:12737` |
| False | True | True | False | `2150:11992` |
| False | False | True | False | `2154:12109` |
| False | True | True | True | `3495:13295` |

**Slider handle** (frame `3479:13137`)
| Notch | Node ID |
|---|---|
| False | `3479:13132` |
| True | `3479:13138` |

### Table — frame `18504:17245`
**Table cell** (frame `18504:16903`) — props: `Type` (Cell · Header), `Size` (Default · Small · switch)

| Type | Size | Node ID |
|---|---|---|
| Cell | Default | `18504:16904` |
| Cell | switch | `22279:812` |
| Cell | Small | `18504:16918` |
| Header | Default | `18504:16932` |

**Table row** — `22833:9985`

---

## Session Log
| Date | Added |
|---|---|
| 2026-04-30 | Button, FAB, Text Field (partial) |
| 2026-04-30 | Text Field — full (all sizes, states, input types) |
| 2026-05-01 | Section Header — full (all sizes × overline × T asset types) |
| 2026-05-01 | List Cell V2.0 — full (all sizes × overlines × T assets × L assets, 135 variants) |
| 2026-05-01 | Generic canvas — Divider, Snack Bar, Sheet Header, Checkbox, Radio, Switch, Stepper, Avatar, Tooltip, Map Bubble, Navigation, Chip, Segment, Breadcrumb, Slider, Table |
| 2026-05-01 | Alert badge canvas — Alert Badge, Badge (all sizes × types), Status Badge, Status Dots, Counter |
| 2026-05-01 | Action Tile — 18 variants (3 sizes × subtitle × 3 states) |
| 2026-05-01 | Pricing blocks — Pricing Strings (12 variants), Secondary Pricing (4 variants) |
