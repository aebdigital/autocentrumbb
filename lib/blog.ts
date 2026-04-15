export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ako-vypocitat-spotrebu-paliva',
    title: 'Ako vypočítať spotrebu paliva vo vašom aute?',
    excerpt: 'Jednoduchý návod ako presne vypočítať spotrebu paliva vášho vozidla, pochopiť faktory ktoré ju ovplyvňujú a ušetriť na pohonných hmotách.',
    date: '2025-03-15',
    category: 'Tipy a rady',
    content: `
## Ako vypočítať spotrebu paliva?

Výpočet spotreby paliva je jednoduchý, keď poznáte správny postup.

**Vzorec:** (spotrebované palivo ÷ najazdené kilometre) × 100

### Postup krok za krokom

1. Natankujte nádrž **úplne do plna**
2. Najazdite **300–500 km** po rôznych cestách (mestom aj diaľnicou)
3. Natankujte znova do plna a **zaznamenajte počet litrov**
4. Vypočítajte: (litre ÷ kilometre) × 100

**Príklad:** Natankujete 45 litrov po 600 km → spotreba = (45 ÷ 600) × 100 = **7,5 l/100 km**

### Odhad nákladov na palivo

Vynásobte spotrebu cenou paliva:
- 7,5 l × 1,65 € = **12,38 € na 100 km**

### Faktory ovplyvňujúce spotrebu

- **Štýl jazdy** – agresívne zrýchľovanie a brzdenie zvyšuje spotrebu až o 30 %
- **Tlak v pneumatikách** – podhuštené pneumatiky zvyšujú odpor valenia
- **Stav motora** – opotrebené sviečky, upchatý vzduchový filter
- **Mestská vs. diaľničná jazda** – stop-and-go v meste je náročnejšie
- **Zaťaženie vozidla** – každých 100 kg navyše zvyšuje spotrebu o ~0,5 l/100 km
- **Klimatizácia** – môže zvýšiť spotrebu až o 1–1,5 l/100 km
- **Aerodynamika** – strešný nosič bez záťaže stále vytvára odpor

### Normy merania NEDC vs. WLTP

- **NEDC** – staršie vozidlá, optimistické laboratórne hodnoty
- **WLTP** (od 2019) – realistickejší test zodpovedajúci skutočnej jazde

### Tipy ako ušetriť palivo

✓ Plynulé zrýchľovanie a predvídavá jazda
✓ Pravidelná kontrola tlaku v pneumatikách
✓ Pravidelná výmena vzduchového filtra
✓ Správne radenie prevodov (vyhnite sa nízkym otáčkam)
✓ Zníženie zbytočnej záťaže v aute
✓ Plánovanie trasy – vyhnite sa zbytočným obrátkam
    `,
  },
  {
    slug: 'odhlasenie-auta',
    title: 'Ako a čo treba na odhlásenie auta',
    excerpt: 'Kompletný sprievodca odhlásením vozidla v SR – trvalé aj dočasné odhlásenie, potrebné doklady, poplatky a kde všetko vybaviť.',
    date: '2025-02-28',
    category: 'Administratíva',
    content: `
## Odhlásenie auta – kompletný sprievodca

### Druhy odhlásenia

**Trvalé odhlásenie** – vozidlo sa natrvalo vyradí z evidencie (napr. pri predaji do šrotu).
Poplatok: **5 €**

**Dočasné odhlásenie** – vozidlo zostáva vo vašom vlastníctve, ale nesmie jazdiť po verejných komunikáciách.

| Doba odhlásenia | Poplatok |
|---|---|
| Do 1 roka | 5 € |
| 1–3 roky | 50 € |
| 3–5 rokov | 100 € |
| 5–10 rokov | 200 € |
| Nad 10 rokov | 350 € |

### Potrebné doklady

- Občiansky preukaz (OP)
- Osvedčenie o evidencii vozidla (časť I. aj II.)
- Plnomocenstvo (ak vybavujete za iného)
- Doklad o poistení
- Kúpna zmluva alebo doklad o vlastníctve

### Kde a ako vybaviť

**Osobne na dopravnom inšpektoráte** – čas vybavenia 30–60 minút
**Online cez Slovensko.sk** – vybavenie trvá niekoľko pracovných dní

### Časté chyby

❌ Neúplné doklady
❌ Chybne vyplnená žiadosť
❌ Nezrušenie poistenia po odhlásení

### Máte otázky?

Kontaktujte nás – radi poradíme:
📞 +421 905 241 887
✉️ info@autocentrumbb.sk
    `,
  },
  {
    slug: 'splnomocnenie-na-prepis-auta',
    title: 'Splnomocnenie na prepis auta 2025: Zadarmo na stiahnutie',
    excerpt: 'Splnomocnenie na prepis auta – čo musí obsahovať, kedy ho potrebujete a aké sú novinky v roku 2025 vrátane elektronického splnomocnenia.',
    date: '2025-01-20',
    category: 'Administratíva',
    content: `
## Splnomocnenie na prepis auta v roku 2025

Splnomocnenie umožňuje inej osobe vykonávať administratívne úkony vo vašom mene pri kúpe, predaji alebo prepise vozidla.

### Kedy splnomocnenie potrebujete

- Predaj alebo kúpa vozidla (keď nemôžete byť osobne prítomní)
- Odhlásenie vozidla z evidencie
- Registrácia dovezeného vozidla
- Technické úpravy a zmeny v dokladoch
- Prevzatie vozidla z odťahovej služby

### Čo musí splnomocnenie obsahovať

**Splnomocniteľ (vy):**
- Meno a priezvisko
- Dátum narodenia
- Adresa trvalého pobytu

**Splnomocnenec (osoba konajúca za vás):**
- Meno a priezvisko
- Dátum narodenia
- Adresa trvalého pobytu

**Údaje o vozidle:**
- Značka a model
- VIN číslo
- Evidenčné číslo vozidla (ŠPZ)
- Rok výroby a farba

**Rozsah splnomocnenia** – presný popis povolených úkonov
**Notársky overený podpis** (pri niektorých úkonoch povinný)

### Novinky 2025 – elektronické splnomocnenie

Od roku 2025 je možné udeliť splnomocnenie **elektronicky** cez portál Ministerstva vnútra SR s kvalifikovaným elektronickým podpisom – bez potreby notára.

### Dôležité upozornenia

⚠️ Pri prevode vlastníctva musia byť obe strany prítomné, alebo jedna musí mať notársky overené splnomocnenie.
⚠️ Splnomocnenie môžete kedykoľvek odvolať.
⚠️ Nový majiteľ musí mať aktívne poistenie zodpovednosti.

### Potrebujete pomoc s prevodom?

Naši odborníci vám pomôžu s celým procesom prepisu vozidla.
📞 +421 905 241 887
    `,
  },
  {
    slug: 'priprava-na-stk-a-ek',
    title: 'Ako sa pripraviť na STK a EK',
    excerpt: 'Praktický checklist pre úspešné absolvovanie technickej kontroly (STK) a emisnej kontroly (EK) – čo skontrolovať pred návštevou STK stanice.',
    date: '2025-01-05',
    category: 'Tipy a rady',
    content: `
## Príprava na STK a EK – kompletný checklist

### Potrebné doklady

- Osvedčenie o evidencii vozidla (alebo potvrdenie o jeho zadržaní)
- Protokol o inštalácii plynového zariadenia (LPG/CNG)
- Povolenie na tmavenie okien (ak je aplikované)
- Dokumentácia o opravách v autorizovaných servisoch

### Povinná výbava vozidla

✓ Výstražný trojuholník (podľa predpisu EHK č. 27)
✓ Reflexná vesta prístupná vodičovi
✓ Náhradné koleso s krížovým kľúčom a zdvíhacím zariadením
✓ Lekárnička (v platnosti)

### Čo skontrolovať pred STK

#### Čistota a viditeľnosť
- Evidenčné čísla (ŠPZ) a VIN musia byť čitateľné
- Čisté svetlomety, sklenené plochy bez polepov

#### Sklo a výhľad
- Praskliny na prednom skle väčšie ako **20 mm sú dôvodom na odmietnutie**
- Tmavenie zadného skla len s certifikátom

#### Osvetlenie
- Funkčné všetky svetlá: stretávacie, diaľkové, smerové, brzdové, spätné, osvetlenie ŠPZ
- Správne nastavenie svetlometov

#### Pneumatiky a brzdy
- Minimálna hĺbka dezénu: **1,6 mm** (odporúčame min. 3 mm)
- Stav brzdovej kvapaliny
- Rovnomerné opotrebenie pneumatík

#### Prevádzkové kvapaliny
- Motorový olej, chladiaca kvapalina, brzdová kvapalina, voda do ostrekovačov
- Žiadne viditeľné úniky

### Klasifikácia chýb

| Kategória | Popis | Dôsledok |
|---|---|---|
| **Drobná** | Nesúvisiaca s bezpečnosťou | Opraviť čo najskôr |
| **Vážna** | Ovplyvňuje bezpečnosť | Opraviť do **60 dní** |
| **Nebezpečná** | Vozidlo nie je bezpečné | Okamžité vyradenie |

### Tip od nás

Prineste auto na kontrolu **technicky pripravené** – ušetríte čas aj peniaze za opakovanú prehliadku. Ak si nie ste istí stavom vozidla, kontaktujte nás.
    `,
  },
  {
    slug: 'prepis-auta-2025',
    title: 'Prepis auta v roku 2025 – kompletný sprievodca',
    excerpt: 'Všetko čo potrebujete vedieť o prepise vozidla v roku 2025 – potrebné doklady, poplatky, kde vybaviť a nové elektronické možnosti.',
    date: '2025-01-10',
    category: 'Administratíva',
    content: `
## Prepis auta v roku 2025

Prepis vozidla je povinný pri každom prevode vlastníctva. Kupujúci aj predávajúci musia konať spoločne, alebo využiť notársky overené splnomocnenie.

### Potrebné doklady – predávajúci

- Platný občiansky preukaz
- Osvedčenie o evidencii vozidla (časť I. a II.)
- Protokol o technickej kontrole (STK)
- Potvrdenie o zaplatení diaľničnej známky (ak je relevantné)
- Kúpna zmluva (2 vyhotovenia)

### Potrebné doklady – kupujúci

- Platný občiansky preukaz
- Doklad o uzavretí PZP (povinné zmluvné poistenie)
- Kúpna zmluva

### Poplatky za prepis (2025)

| Výkon vozidla | Poplatok |
|---|---|
| Do 80 kW | 33 € |
| 81–86 kW | 50 € |
| 87–99 kW | 66 € |
| 100–147 kW | 99 € |
| Nad 147 kW | 165 € |

*Vozidlá staršie ako 12 rokov majú poplatok znížený o 50 %.*

### Kde vybaviť prepis

**Osobne:** Na dopravnom inšpektoráte príslušnom podľa miesta trvalého pobytu kupujúceho.

**Online:** Prostredníctvom portálu Slovensko.sk s elektronickým podpisom (obaja musia mať eID).

### Dôležité termíny

- Prepis musí byť vykonaný do **30 dní** od podpisu kúpnej zmluvy
- Predávajúci by mal zrušiť poistenie hneď po predaji
- Kupujúci musí uzavrieť PZP ešte pred jazdou s novým vozidlom

### Potrebujete pomoc s prevodom vozidla?

Naši pracovníci vám poradíme so všetkými formálnosťami spojenými s kúpou alebo predajom auta.

📞 **+421 905 241 887**
✉️ info@autocentrumbb.sk
📍 Zvolenská cesta 141, Banská Bystrica
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
