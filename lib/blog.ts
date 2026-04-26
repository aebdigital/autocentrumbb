export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ako-vypocitat-spotrebu-paliva',
    title: "Ako vypočítať spotrebu paliva vo vašom aute?",
    excerpt: "Spotreba paliva patrí medzi základné ukazovatele efektivity každého vozidla. Ak ju pravidelne sledujete a viete ju správne vypočítať, môžete výrazne o...",
    date: '2025-03-15',
    category: 'Tipy a rady',
    image: 'https://www.autocentrumbb.sk/wp-content/uploads/2025/05/20200111071104-Spotreba01.jpg',
    content: `
Spotreba paliva patrí medzi základné ukazovatele efektivity každého vozidla. Ak ju pravidelne sledujete a viete ju správne vypočítať, môžete výrazne ovplyvniť svoje mesačné náklady, predísť technickým problémom a zároveň prispieť k ekologickejšiemu spôsobu jazdy. V nasledujúcich riadkoch si ukážeme jednoduchý spôsob výpočtu reálnej spotreby paliva a tiež niekoľko praktických tipov, ako ju udržať čo najnižšiu.
## **Ako vypočítať reálnu spotrebu paliva?**
Výpočet spotreby paliva nie je vôbec zložitý – stačí dodržať niekoľko jednoduchých krokov. Najlepšie výsledky získate, ak trasu zahrniete rôzne typy jazdy (mesto, diaľnica, okresné cesty).
### **Postup výpočtu:**
- **Natankujte nádrž do plna** a zaznamenajte aktuálny stav kilometrov (tzv. odometer).
- **Prejdite vybranú trasu**, ideálne minimálne 300 – 500 km, aby bol výpočet presnejší.
- **Opäť natankujte do plna** a zaznamenajte, koľko litrov ste natankovali.
- **Zaznamenajte aj stav kilometrov po tejto jazde** a spočítajte, koľko ste prešli.
Následne použite tento jednoduchý vzorec:
Spotreba (l/100 km) = (spotrebované palivo / najazdené kilometre) × 100
**Príklad:** Ak ste prešli 560 kilometrov a natankovali 42 litrov, výpočet bude:
(42 / 560) × 100 = 7,5 l/100 km
## **Výpočet nákladov na palivo**
Okrem samotnej spotreby je užitočné poznať aj náklady, ktoré vás jazda reálne stojí. Ak poznáte priemernú spotrebu a aktuálnu cenu paliva, veľmi rýchlo zistíte, koľko zaplatíte za 100 kilometrov.
**Vzorec na výpočet nákladov:**
Náklady (€ / 100 km) = Spotreba (l/100 km) × Cena paliva za liter
**Príklad:** Ak je vaša spotreba 7,5 litra a cena paliva 1,65 €/l:
7,5 × 1,65 = 12,38 € / 100 km
Takto si môžete ľahko porovnať efektivitu jednotlivých áut alebo trasu pred plánovanou cestou.
## **Aké**** sú faktory ovplyvňujúce spotrebu paliva?**
- **Agresívna jazda vs. plynulá jazda:** Prudké zrýchľovanie, brzdenie a vysoká rýchlosť výrazne zvyšujú spotrebu paliva. Plynulá jazda s predvídaním a jemným brzdením šetrí palivo.
- **Zanesené vzduchové a palivové filtre:** Obmedzujú prívod vzduchu a paliva do motora, čo môže viesť k neefektívnemu spaľovaniu a zvýšenej spotrebe.
- **Nesprávny tlak v pneumatikách:** Podhustené pneumatiky zvyšujú valivý odpor, čím núti motor pracovať viac a spotrebovať viac paliva. Správny tlak znižuje spotrebu a predlžuje životnosť pneumatík.
- **Opotrebované sviečky zapaľovania:** Vedú k neúplnému spaľovaniu a vynechávaniu zapaľovania, čo zvyšuje spotrebu paliva.
- **Jazda v meste vs. jazda po diaľnici:** Mestská jazda s častými zastávkami a rozjazdmi zvyčajne spotrebuje viac paliva ako plynulá jazda po diaľnici pri optimálnej rýchlosti.
- **Zaťaženie vozidla:** Čím je vozidlo ťažšie, tým viac paliva potrebuje na zrýchlenie a udržanie rýchlosti.
- **Aerodynamika vozidla:** Otvorené okná pri vyšších rýchlostiach a strešný nosič bez nákladu zvyšujú odpor vzduchu a spotrebu paliva.
- **Používanie klimatizácie a iných elektrických spotrebičov:** Klimatizácia najvýraznejšie zvyšuje spotrebu paliva, najmä v mestskej premávke.
Sledovanie a pochopenie týchto faktorov vám pomôže optimalizovať spotrebu paliva vášho vozidla.
## **NEDC verzus WLTP: Prečo sa údaje líšia?**
Ak porovnávate svoju reálnu spotrebu s hodnotami z technického preukazu, môžete si všimnúť výrazné rozdiely. Tie vznikajú najmä v dôsledku rôznych testovacích metód.
- **Vozidlá do roku 2017** uvádzali spotrebu podľa štandardu **NEDC**, ktorý prebiehal v laboratórnych podmienkach a často nereflektoval reálnu spotrebu. Spotreba bola zvyčajne nižšia, než akú vodiči reálne zaznamenali.
- **Od roku 2019** sa prešlo na novú metodiku **WLTP (Worldwide Harmonised Light Vehicle Test Procedure)**. Tá už počíta s dynamickejším štýlom jazdy, vyššími rýchlosťami a reálnejšími podmienkami, preto sa na tieto údaje dá viac spoľahnúť.
Ak sa vám teda spotreba zdá vyššia než udávaná, nemusí to nutne znamenať poruchu – skôr to odráža bežné rozdiely medzi laboratórnymi a reálnymi podmienkami.
## **Tipy, ako znížiť spotrebu paliva**
Chcete jazdiť ekonomickejšie? Tieto jednoduché rady vám pomôžu udržať spotrebu pod kontrolou:
- **Jazdite plynulo** – vyhýbajte sa prudkému zrýchľovaniu a zbytočnému brzdeniu.
- **Sledujte tlak v pneumatikách** – podhustené pneumatiky zvyšujú valivý odpor aj spotrebu.
- **Meníte pravidelne filtre?** Upchatý vzduchový filter výrazne znižuje efektivitu spaľovania.
- **Zaraďujte vyšší prevod včas** – jazda na príliš nízkych otáčkach zvyšuje spotrebu.
- **Vyprázdnite auto od nepotrebného nákladu** – každý kilogram navyše má vplyv.
- **Obmedzte používanie klimatizácie**, najmä v meste.
- **Plánujte svoje trasy** – vyhnite sa zápcham, zbytočnému obchádzaniu a čakania na semaforoch.
## **Záver**
Sledovanie spotreby paliva je jednoduchý návyk, ktorý vám môže ušetriť stovky eur ročne. Navyše vám poskytne lepší prehľad o technickom stave vášho auta a pomôže znížiť jeho ekologickú stopu. Či už si spotrebu počítate ručne, alebo používate online kalkulačku, kľúčové je, že poznáte realitu svojej jazdy. A to je prvý krok k úsporám aj zodpovednejšiemu prístupu k šoférovaniu.
Autocentrumbb
##
    `
  },
  {
    slug: 'odhlasenie-auta',
    title: "Ako a čo treba na odhlásenie auta?",
    excerpt: "Odhlásenie auta je dôležitý administratívny proces, ktorý musíte absolvovať pri dlhodobom nepoužívaní alebo pri jeho vyradení z evidencie. V tomto člá...",
    date: '2025-02-28',
    category: 'Administratíva',
    image: 'https://www.autocentrumbb.sk/wp-content/uploads/2025/05/shutterstock_1707447007.webp',
    content: `
Odhlásenie auta je dôležitý administratívny proces, ktorý musíte absolvovať pri dlhodobom nepoužívaní alebo pri jeho vyradení z evidencie. V tomto článku sa podrobne pozrieme na to, ako celý proces prebieha, aké dokumenty budete potrebovať, aké sú poplatky a ako môžete odhlásenie vykonať aj online.
## **Druhy odhlásenia vozidla**
- **Trvalé vyradenie z evidencie** – vozidlo sa už nebude používať na cestách. Ak sa chystáte vyradiť svoje staré vozidlo z evidencie, máte na výber dve možnosti:
Ak sú doklady vozidla – Osvedčenie o evidencii časť I a II – v poriadku, môžete vyradenie vybaviť priamo na šrotovisku. Tam vozidlo ekologicky zlikvidujú, odhlásia ho z evidencie a vystavia vám potvrdenie o vyradení.
- Ak vám šrotovisko vydá len potvrdenie o recyklácii, vyradenie vozidla si musíte vybaviť sami na dopravnom inšpektoráte. S týmto potvrdením navštívite príslušný úrad a tam vozidlo oficiálne odhlásite z evidencie.
Poplatok za trvalé vyradenie vozidla je 5 €.
- **Dočasné vyradenie z evidencie** – využíva sa v prípadoch keď si majiteľ chce auto ponechať, ale nechce platiť poistenie, technickú a emisnú kontrolu a podobne. V tomto prípade sa auto dá vyradiť na určitý čas, pričom maximálna doba je na 20 rokov. Poplatky za dočasné vyradenie z evidencie sa líšia od doby trvania:
**Do 1 roka** – 5 €
- **1 – 2 roky** – 20 €
- **2 – 4 roky** – 35 €
- **4 – 6 rokov** – 70 €
- **6 – 10 rokov** – 170 €
- **Nad 10 rokov** – 350 €
Po opätovnom zaradení do evidencie musí vozidlo prejsť technickou a emisnou kontrolou do **7 dní** od opätovného zaradenia. Poplatok za zaradenie späť do evidencie je **5 €**.
## **Aké dokumenty budete potrebovať?**
Na úspešné odhlásenie vozidla musíte mať k dispozícii tieto doklady:
- **Občiansky preukaz** – na overenie totožnosti.
- **Osvedčenie o evidencii časť I a II** – technický preukaz vozidla.
- **Splnomocnenie** – ak odhlásenie vykonáva iná osoba ako majiteľ vozidla.
- **Potvrdenie o povinnom zmluvnom poistení (ďalej len PZP) nového majiteľa** – aby bolo zabezpečené poistenie vozidla.
- **Kúpna zmluva alebo doklad o prevode vlastníctva** – v prípade predaja vozidla.
## **Ako prebieha odhlásenie vozidla na dopravnom inšpektoráte?**
- **Rezervácia termínu** – na dopravnom inšpektoráte si môžete rezervovať termín online alebo prísť osobne.
- **Predloženie dokladov** – na úrade odovzdáte všetky potrebné dokumenty.
- **Možnosti pri ****evidenčných číslach vozidla** – môžete sa rozhodnúť, či ečv zostanú na vozidle alebo sa prevedú na iné auto.
- **Platba poplatkov** – odhlásenie je spravidla bezplatné, no kupujúci musí pri prihlásení zaplatiť správne poplatky.
- **Potvrdenie o odhlásení** – po úspešnom vybavení dostanete potvrdenie o vyradení vozidla z evidencie.
## **Odhlásenie vozidla online **
Odhlásiť vozidlo natrvalo alebo dočasne môžete aj elektronicky. Podmienkou je občiansky preukaz s čipom a potrebné aplikácie na elektronické podpisovanie. Stránku, ktorú môžete využiť na tento proces je Slovensko.sk. Na tejto stránke nájdete žiadosť o trvalé alebo dočasné vyradenie vozidla z evidencie.
Po spracovaní žiadosti dostanete potvrdenie o odhlásení do svojej elektronickej schránky.
Po úspešnom odhlásení nezabudnite kontaktovať poisťovňu a zrušiť PZP.
## **Dajte si pozor na najčastejšie chyby pri odhlásení:**
- **Neúplné dokumenty** – chýbajúci technický preukaz alebo PZP.
- **Nesprávne vyplnené žiadosti** – môžu spôsobiť zdržanie.
- **Nesplnenie povinností po odhlásení** – napríklad nezrušenie PZP.
## **Najčastejšie otázky (FAQ)**
- **Ako dlho trvá odhlásenie auta?**
- Osobne: 30 – 60 minút.
- Online: spracovanie trvá niekoľko dní.
- **Môžem auto odhlásiť online?**
- Áno, cez Slovensko.sk.
- **Čo sa stane, ak auto neodhlásim včas?**
- Môžete dostať blokovú pokutu a problémy s evidenciou.
Odhlásenie auta nemusí byť zložité, ak poznáte správne kroky. Dodržujte termíny, pripravte potrebné dokumenty a vyhnite sa zbytočným komplikáciám.
Autocentrumbb
##
    `
  },
  {
    slug: 'splnomocnenie-na-prepis-auta',
    title: "Splnomocnenie na prepis auta 2025: Zadarmo na stiahnutie",
    excerpt: "Splnomocnenie predstavuje poskytnutie oprávnenia druhej osobe na vykonávanie zvolených administratívnych úkonov vo vašom mene. Najčastejší prípad vytv...",
    date: '2025-01-20',
    category: 'Administratíva',
    image: 'https://www.autocentrumbb.sk/wp-content/uploads/2025/05/man-signing-car-document_fd14536d-b5c3-4ce2-a01f-7d6d95eab7a1.jpg',
    content: `
Splnomocnenie predstavuje poskytnutie oprávnenia druhej osobe na vykonávanie zvolených administratívnych úkonov vo vašom mene. Najčastejší prípad vytvárania splnomocnenia je ak nemôžete osobne vybaviť nejaký úkon, ktorý si vyžaduje vašu prítomnosť. Jednou z týchto situácii je aj prepis vozidla
Splnomocnenie na stiahnutie vo formáte PDF a docx (Word)
###
PDF
###
docx (Word)
### **Kedy je potrebné splnomocnenie na prepis auta?**
Splnomocnenie je nevyhnutné v situáciách, keď sa vlastník alebo kupujúci nemôže osobne dostaviť na dopravný inšpektorát. Využíva sa napríklad pri:
- Predaji alebo kúpe auta bez fyzickej prítomnosti jednej zo strán
- Odhlásení vozidla do iného okresu alebo do zahraničia
- Prihlásení dovezeného alebo nového vozidla
- Zmene farby vozidla alebo iných technických údajov
- Vyradení vozidla z evidencie
### **Aké údaje sú potrebné na poskytnutie splnomocnenia?**
Aby splnomocnenie bolo uznané, musí obsahovať tieto náležitosti:
- **Informácie o osobe udeľujúcej splnomocnenie:******Je potrebné uviesť celé **meno, dátum narodenia a adresu trvalého bydliska**. Ak ide o firmu, treba doplniť **obchodný názov, sídlo, identifikačné číslo** (IČO) a **informácie o registrácii v obchodnom registri**.
- **Údaje o splnomocnencovi:******Podobne ako pri splnomocniteľovi, je nutné uviesť taktiež **meno, dátum narodenia a adresu trvalého pobytu**. V prípade právnickej osoby sa uvádza jej **názov, sídlo, IČO a zápis v obchodnom registri**.
- **Informácie o vozidle:**
-
Značka a model
- VIN číslo
- Evidenčné číslo vozidla
- Rok výroby
- Farba
- **Obsah a rozsah splnomocnenia:******Musí byť presne špecifikované, na aké úkony sa splnomocnenie vzťahuje (napríklad zastupovanie na úradoch, podpisovanie zmlúv, prepis auta).
- **Dátum a miesto vystavenia**
- **Podpis splnomocniteľa resp. osoby, ktorá poskytuje splnomocnenie (notársky overený)**
### **Postup pri vystavení splnomocnenia**
- **Získanie formulára** – Môžete si ho stiahnuť z našej stránky alebo si ho vyžiadať na dopravnom inšpektoráte.
- **Vyplnenie** – Vypíšte všetky potrebné údaje, aby sa predišlo komplikáciám.
- **Overenie podpisu** – Musí byť overený notárom, na matrike, v klientskom centre alebo na obecnom, mestskom či okresnom úrade.
- **Doručenie splnomocnenia** – Splnomocnenec predloží originál na dopravnom inšpektoráte.
### **Elektronické splnomocnenie od roku 2025**
Od roku 2025 je možné využiť aj elektronické splnomocnenie cez portál Ministerstva vútra SR. Tento spôsob si vyžaduje kvalifikovaný elektronický podpis, ale prináša výhodu pohodlného vybavenia bez potreby osobnej návštevy notára.
### **Zmeny v prepise vozidla od 1. januára 2023**
Legislatívne zmeny zjednodušili proces prepisu vozidiel:
- **Zrušenie dvojkrokového prepisu** – Všetko sa vybaví na jednom mieste.
- **Celoslovenské evidenčné čísla** – Odstránenie okresných označení na šPZ.
- **Prenositeľnosť značky** – Evidenčné číslo zostáva s vozidlom.
- **Možnosť prepisu na akomkoľvek dopravnom inšpektoráte** – Nezávisle od miesta trvalého pobytu.
### **Postup prepisu vozidla**
- **Príprava dokumentov** – Občiansky preukaz, osvedčenie o evidencii, kúpno-predajná zmluva, PZP, splnomocnenie.
- **Návšteva dopravného inšpektorátu** – Možno vybaviť na ktoromkoľvek.
- **Podanie žiadosti** – Vyplniť formulár o zmene vlastníka.
- **Zaplatenie poplatkov** – Suma závisí od výkonu a veku vozidla.
- **Prevzatie nových dokladov** – Po spracovaní.
Celý postup si môžete prečítať v našom článku: Prepis auta v roku 2025
### **Dôležité upozornenia**
- Pri prepise v rámci okresu musia byť prítomní obaja účastníci alebo ich splnomocnenci.
- Blízki príbuzní nemusia mať splnomocnenie, stačí čestné vyhlásenie.
- Splnomocnenie sa dá kedykoľvek odvolať písomným oznámením.
- PZP (povinné zmluvné poistenie) must mať nový vlastník uzatvorené už pred prepismi.
- Ak sa prepis nevykoná do 30 dní, je potrebné doložiť kontrolu originality vozidla, ktoré nie je staršie viac ako 15 dní.
Autocentrumbb
##
    `
  },
  {
    slug: 'priprava-na-stk-a-ek',
    title: "Ako sa pripraviť na STK a EK",
    excerpt: "## **Ako pripraviť vozidlo na technickú a emisnú kontrolu?** Pravidelná technická kontrola (STK) a emisná kontrola (EK) sú povinné procesy, ktoré pomá...",
    date: '2025-01-05',
    category: 'Tipy a rady',
    image: 'https://www.autocentrumbb.sk/wp-content/uploads/2025/05/paluska_autoskola_STK.jpg',
    content: `
## **Ako pripraviť vozidlo na technickú a emisnú kontrolu?**
Pravidelná technická kontrola (STK) a emisná kontrola (EK) sú povinné procesy, ktoré pomáhajú udržiavať bezpečnosť vozidiel na cestách a minimalizovať ich negatívny vplyv na životné prostredie. Správna príprava pred týmito kontrolami vám môže ušetriť čas, peniaze a nepríjemnosti. Prečítajte si podrobného sprievodcu, ktorý vám pomôže pripraviť vaše vozidlo na tieto dôležité kontroly.
### **Dokumenty potrebné na kontrolu**
Pred návštevou STK alebo EK sa uistite, že máte k dispozícii všetky potrebné dokumenty:
- **Osvedčenie o evidencii vozidla** alebo potvrdenie o jeho zadržaní. Ak ste doklad stratili, predložte výpis z karty vozidla vydaný Políciou.
- **Protokol o montáži plynového zariadenia** (platí pre vozidlá na LPG alebo CNG).
- **Potvrdenie o montáži fólií**, ak sú na oknách vozidla schválené fólie.
- Ak bolo vozidlo **opravované**, predložte **doklad o oprave** vydaný autorizovanou alebo nezávislou opravovňou.
### **Povinná výbava**
Skontrolujte, či je vozidlo vybavené povinnými prvkami:
- **Výstražný trojuholník**, homologizovaný podľa predpisu EHK č. 27.
- **Reflexný odev**, uložený na dosah vodiča.
- **Náhradné koleso** spolu so zdvihákom a kľúčom na matice, prípadne prostriedky na bezdemontážnu opravu pneumatiky.
- **Autolekárnička**, ktorá musí byť kompletná a v rámci doby platnosti.
**Čistota vozidla**
Čistota vášho vozidla je veľmi dôležitá pre úspešné absolvovanie technickej alebo emisnej kontroly. Karoséria vozidla musí byť dôkladne umytá, aby boli viditeľné a čitateľné evidenčné čísla, VIN číslo a výrobný štítok. Nepodceňujte ani čistotu interiéru – najmä oblasť okolo VIN čísla by mala byť bez nečistôt. Zanedbaná čistota môže skomplikovať proces kontroly a spôsobiť zbytočné oneskorenia.
**Stav skiel a viditeľnosť**
Bezpečnosť na cestách začína s dobrým výhľadom vodiča. Na čelnom skle vozidla nesmú byť praskliny väčšie ako 20 mm. Akékoľvek predmety, ktoré by mohli obmedzovať výhľad vodiča, je potrebné odstrániť. Zasklievanie musí byť v bezchybnom stave. Tieniace fólie sú povolené iba na zadných oknách, a to za podmienky, že majú schvaľovaciu značku a potvrdenie o montáži. Dbajte na to, aby čelné a predné bočné okná neobsahovali žiadne tieniace fólie.
**Funkčnosť osvetlenia**
Pred kontrolou sa presvedčte, že všetky svetlá na vašom vozidle fungujú správne. To zahŕňa stretávacie, diaľkové, smerovky, brzdové svetlá a osvetlenie ŠPZ. Ak má vaše vozidlo výbojkové svetlá, musia byť vybavené funkčným automatickým nastavovaním výšky svetiel a systémom čistenia svetlometov. Zanedbané svetlá nielenže môžu viesť k neúspešnej kontrole, ale ohrozujú aj bezpečnosť na cestách.
Tip: Ak si nie ste istí funkčnosťou svetiel, navštívte servis, kde vám ich nastavia správne.
**Kontrola pneumatík a bŕzd**
Stav pneumatík je jedným z najdôležitejších prvkov kontroly. Minimálna hĺbka dezénu je 1,6 mm. Okrem toho by ste mali skontrolovať, či pneumatiky nemajú viditeľné poškodenia. Čo sa týka brzdového systému, skontrolujte hladinu brzdovej kvapaliny, ktorá by mala byť na správnej úrovni. Ručná brzda musí byť plne funkčná a schopná bezpečne udržať vozidlo, najmä na stúpaní.
Odporúčanie: Pravidelne kontrolujte tlak v pneumatikách a dopĺňajte brzdovú kvapalinu podľa potreby. Modernejšie autá vás automaticky upozornia na nesprávny tlak v pneumatikách, pri starších modeloch však odporúčame bezplatnú kontrolu tlaku na čerpacích staniciach.
**Prevádzkové kvapaliny**
Pred kontrolou nezabudnite na kontrolu hladiny všetkých prevádzkových kvapalín. Patria sem motorový olej, chladiaca kvapalina, brzdová kvapalina a kvapalina do ostrekovačov. Taktiež sa uistite, že z vášho vozidla neunikajú žiadne kvapaliny. Únik môže signalizovať vážnejší problém, ktorý by kontrola odhalila.
### **Ďalšie kontroly**
- **Puklice**: Odstráňte ich pred kontrolou, aby boli kolesá a ich upevnenie viditeľné.
- **Zahriatie motora**: Na emisnú kontrolu je potrebné, aby bol motor zahriaty na prevádzkovú teplotu.
- **Ťažné zariadenie**: Ak má vozidlo odnímateľné spojovacie zariadenie, musí byť počas kontroly pevne pripevnené.
Odporúčame si skontrolovať, či máte po ruke všetky potrebné doklady, aby ste predišli zdržaniu.
Vozidlá s pohonom 4×4 absolvujú kontrolu brzdového systému jazdnou skúškou. Počas nej dochádza k prudkému zabrzdeniu, preto odstráňte voľne uložené predmety z vozidla, aby nedošlo k ich poškodeniu.
Hľadáte auto na splátky? Autorro vám ponúka dostupné a flexibilné riešenia, vďaka ktorým si jednoducho zaobstaráte nové vozidlo.
## **Ako sa posudzuje spôsobilosť vozidla počas technickej alebo emisnej kontroly?**
Pri technickej kontrole sa hodnotí technický stav vozidla a funkčnosť jeho systémov na základe troch kategórií chýb:
- **Ľahké chyby:** Tieto nedostatky neohrozujú bezpečnosť ani životné prostredie. Vozidlo je uznané ako spôsobilé, avšak prevádzkovateľ je povinný chyby odstrániť.
- **Vážne chyby:** Ide o problémy, ktoré môžu ovplyvniť bezpečnosť alebo životné prostredie. Vozidlo je označené ako dočasne spôsobilé, pričom majiteľ má 60 dní na opravu a následnú kontrolu.
- **Nebezpečné chyby:** Tieto chyby predstavujú vážne riziko pre bezpečnosť alebo ekologické normy. Vozidlo sa považuje za nespôsobilé a musí byť odtiahnuté na náklady majiteľa.
**Postup pri technickej kontrole:**
- Výsledok sa zaznamenáva do protokolu a informačného systému.
- Technik odstráni nálepku z predchádzajúcej kontroly.
- Pri spôsobilých alebo dočasne spôsobilých vozidlách sa uvedie lehota platnosti technickej kontroly.
**Postup pri emisnej kontrole:**
- Zistenia sa zapisujú do protokolu o emisnej kontrole.
- Ak sú zistené vážne chyby, vozidlo má 60-dňovú lehotu na opravu a opakovanú kontrolu.
- Pri nebezpečných chybách sa vozidlo označí ako nespôsobilé, osvedčenie sa nevydáva a je nutné jeho odtiahnutie.
Prevádzkovateľ je zodpovedný za odstránenie chýb v stanovenej lehote. Ak sa tak nestane, vozidlo stráca možnosť byť legálne prevádzkované na cestách.
### **Prečo je príprava dôležitá?**
Dôkladná príprava vozidla pred technickou a emisnou kontrolou znižuje riziko, že kontrolou neprejdete. Zároveň prispievate k bezpečnosti na cestách a k ochrane životného prostredia. Dodržanie uvedených krokov vám pomôže zabezpečiť hladký priebeh kontroly a ušetriť si starosti.
Tip na záver: Vždy si vopred overte, aké sú aktuálne požiadavky na STK a EK vo vašej oblasti, pretože sa môžu meniť podľa legislatívy.
Autocentrumbb
##
    `
  },
  {
    slug: 'prepis-auta-2025',
    title: "Prepis auta v roku 2025",
    excerpt: "Prepis auta je proces, ktorý umožňuje prevod vlastníctva vozidla na nového majiteľa. Tento krok je nevyhnutný pri kúpe alebo predaji vozidla a je potr...",
    date: '2025-01-10',
    category: 'Administratíva',
    image: 'https://www.autocentrumbb.sk/wp-content/uploads/2025/05/pexels-pixabay-48148-scaled.jpg',
    content: `
Prepis auta je proces, ktorý umožňuje prevod vlastníctva vozidla na nového majiteľa. Tento krok je nevyhnutný pri kúpe alebo predaji vozidla a je potrebné ho vykonať, aby bol nový majiteľ zapísaný v evidencii vozidiel. Aj v roku 2025 platí, že prepis auta je pomerne jednoduchý, avšak existujú niektoré zmeny, ktoré je dobré poznať.
## **Kedy je potrebné vykonať prepis auta?**
Prepis auta je potrebné vykonať v týchto prípadoch:
- **Kúpa nového vozidla**: Ak ste kúpili auto z druhej ruky, musí prebehnúť prepis, aby sa auto stalo oficiálne vaším.
- **Predaj auta**: Ak predávate auto, musíte prepis zabezpečiť, aby ste už neboli považovaný za vlastníka.
- **Darovanie alebo dedičstvo**: Pri prevode vlastníctva vozidla darovaním alebo dedičstvom je tiež potrebný prepis.
- **Zmena majiteľa po dopravnej nehode**: Ak vozidlo nebolo vyradené z evidencie, ale došlo k zmene vlastníka po nehode, tiež sa musí vykonať prepis.
## **Kroky prepisu auta v roku 2025**
Prepis auta prebieha na **dopravnom inšpektoráte** (DI) alebo prostredníctvom **elektronického prepisu**. Tu sú kroky, ktoré budete musieť podniknúť:
**Krok 1: Príprava dokumentov**
Pred samotným prepisom si pripravte nasledujúce dokumenty:
- **Technický preukaz vozidla** (originál)
- **Osvedčenie o evidencii vozidla** (malý technický preukaz)
- **Zmluva o predaji alebo darovaní** (ak ide o predaj alebo darovanie, musí byť zmluva overená)
- **Doklad totožnosti** (občiansky preukaz alebo pas)
- **Potvrdenie o zaplatení poistného** na povinné zmluvné poistenie (POZOR: toto sa bude kontrolovať pri prepisovaní vozidla)
- **Prihláška na prepis vozidla** (formulár si môžete stiahnuť z webu dopravného inšpektorátu alebo vyplniť priamo na mieste)
**Krok 2: Podanie žiadosti o prepis**
Ak idete na dopravný inšpektorát osobne, vyplníte žiadosť o prepis vozidla. Od 1. januára 2023 je možné prepísať vozidlo** na ktoromkoľvek dopravnom inšpektoráte** bez nutnosti návštevy DI podľa miesta trvalého pobytu, čím sa celý proces zjednodušil a všetko dokážete vybaviť na jednom mieste.
Ak využívate online služby na stránke Ministerstva vnútra SR je možnosť prepisu cez **elektronický formulár**. Tento proces je od roku 2024 oveľa jednoduchší a umožňuje pohodlné vybavenie bez nutnosti návštevy úradu.
**Krok 3: Poplatky**
Cena za prepis vozidla sa určuje na základe výkonu motora a ekologického koeficientu. Výsledný poplatok si môžete jednoducho vypočítať buď pomocou online kalkulačky, alebo ručne – podľa sadzieb uvedených v tabuľkách. Nezabudnite, že minimálna suma, ktorú pri prepise auta zaplatíte, je 33 €.
Majitelia elektromobilov majú situáciu jednoduchú – za prepis vozidla zaplatia fixne 33 €
Poplatok za prepis auta – kalkulačka
Výkon motoraPoplatok v €do 80 kw (vrátane)33€nad 80 do 90 kw (vrátane)60€nad 90 do 100 kw (vrátane)90€nad 100 do 110 kw (vrátane)120€nad 110 do 125 kw (vrátane)200€nad 125 do 140 kw (vrátane)300€nad 140 do 155 kw (vrátane)500€nad 155 do 170 kw (vrátane)700€nad 170 do 210 kw (vrátane)900€nad 210 kw1 000 €
**Kto má nárok na zľavu z poplatku?**
V určitých prípadoch je možné získať zľavu až 50 % z poplatku za prepis vozidla. Táto výhoda sa týka nasledovných skupín:
- **Osoby so zdravotným ťažkým postihnutím (ZŤP)** – ak ste držiteľom preukazu ZŤP alebo ZŤP so sprievodcom, alebo ak ide o upravené vozidlo pre potreby ZŤP osoby, pričom nebol poskytnutý príspevok na jeho kúpu. Minimálny poplatok je v tomto prípade 16,50 €.
- **Osoby, ktoré si uplatňujú nárok na prídavok na dieťa **– musíte si uplatňovať nárok na prídavok na dieťa aspoň na štyri deti do veku 19 rokov. Auto, ktoré prepisujete, musí mať minimálne šesť miest na sedenie a výkon do 110 kW. V tomto prípade je poplatok 33 €.
- **Osoby, ktoré vlastnia automobil s pohonom na vodík alebo ide o plug-in hybrid** (PHEV), poplatok za prepis vozidla sa znižuje na 20 % zo základnej sadzby uvedenej podľa výkonu motora.
**Možnosti a ceny nových evidenčných tabuliek pri prepise**
Pri prepise môžete požiadať aj o nové tabuľky s evidenčným číslom. Tu sú základné možnosti a ich ceny:
- **Bežné TEČ (hliníkové)**: 25 € za jednu, 50 € za dve.
- **Zvláštne EČV (napr. pre športové vozidlá)**: 50 € za jednu, 100 € za dve.
- **Vlastné EČV podľa želania (hliník)**: 250 € za jednu, 500 € za dve.
- **Svetielkujúce TEČ (polykarbonát)**: 250 €, vydáva sa len jedna zadná tabuľka.
- **Špeciálne zloženie čísel podľa požiadavky**: 250 € za jednu, 500 € za dve.
- **Duplikát (vydávajú sa vždy dve)**: 200 €.
**Krok 4: Technická kontrola a emisná kontrola**
Ak auto nie je po technickej kontrole alebo emisnej kontrole, budete musieť zabezpečiť tieto kontroly pred podaním žiadosti o prepis. Ak je vozidlo v platnosti po kontrole, nemusíte sa obávať.
**Krok 5: Obdržíte nové dokumenty**
Po úspešnom spracovaní vašej žiadosti dostanete nový **technický preukaz** a **osvedčenie o evidencii vozidla** s vaším menom ako majiteľom. Proces môže trvať od niekoľkých hodín do niekoľkých dní v závislosti od vyťaženosti úradu.
TIP: Ak chcete ušetriť čas, pripravte si všetky dokumenty vopred a skontrolujte ich kompletnosť. Navyše, využite elektronický prepis, ktorý vám umožní vybaviť všetko pohodlne z domu.
## **Kedy môžem začať používať auto po prepise?**
Po úspešnom prepise máte právo začať používať vozidlo okamžite, aj keď sa nový preukaz a tabuľky ešte nevytlačia. Elektronická evidencia je okamžitá a systém aktualizuje záznamy v reálnom čase.
## **Najčastejšie problémy pri prepise auta**
Aj keď je prepis relatívne jednoduchý, môžu sa vyskytnúť určité problémy:
- **Neplatné alebo neúplné dokumenty**: Ak zmluva o predaji nie je správne vyplnená alebo ak chýba nejaký dokument, môže dôjsť k zdržaniu.
- **Nezaplatené pokuty alebo nedoplatky**: Ak na vozidle visí nezaplatený pokutový blok alebo iné nedoplatky, prepis nebude možný, kým tieto záväzky nebudú vyrovnané.
**Tip pre vás:** Ak hľadáte výhodné spôsoby financovania, zvážte **auto na splátky**. Na stránke Autorro nájdete flexibilné možnosti, vďaka ktorým si môžete splniť sen o novom vozidle bez zbytočného stresu.
## **Zhrnutie**
    `
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
