# Hackathon: AI-native design system i systemowe projektowanie stron

> **Materiał historyczny — oznaczono 2026-09-06.** Poniższa treść opisuje analizę z 30 lipca 2026 i ówczesne warianty warsztatów. Bieżące ustalenia organizatora znajdują się w [aktualnym kontekście](documents/context/hackathon-ai-native-design-system.md), a zadania w [checkliście przygotowań](documents/przygotowania.md). W razie rozbieżności korzystaj z aktualnego kontekstu. Ten raport nie potwierdza obecnej gotowości technicznej Mecha.

## Kompletny kontekst strategiczny przed rozpoczęciem planowania

- **Status dokumentu:** materiał źródłowy do dalszego planowania
- **Etap:** przed wyborem celu dydaktycznego, ćwiczenia i agendy
- **Planowany czas hackathonu:** około 2 godzin
- **Główna grupa odbiorców:** przede wszystkim designerzy; w zespole jest niewielu developerów, a myślenie systemowe nie jest jeszcze wspólnym standardem
- **Analizowane repozytoria:** `Astro - Design System Starter` oraz `Fitch/fitch-astro`
- **Data analizy lokalnych plików:** 30 lipca 2026

---

## 1. Cel i rola tego dokumentu

Ten dokument ma być źródłem prawdy o:

- filozofii projektowej stojącej za hackathonem;
- doświadczeniach i kompetencjach, z których ta filozofia wynika;
- zmianie sposobu myślenia o relacji design–development–AI;
- architekturze i sposobie działania `Astro - Design System Starter`;
- sposobie, w jaki metodologia została sprawdzona w projekcie Fitch;
- genezie zaproszenia do przeprowadzenia hackathonu;
- specyfice odbiorców, czasu i formatu spotkania;
- możliwych kierunkach dydaktycznych;
- pytaniach, na które trzeba odpowiedzieć przed zbudowaniem właściwego planu.

Dokument **nie wybiera jeszcze finalnego scenariusza hackathonu**. Jego zadaniem jest zabezpieczenie pełnego kontekstu, żeby dalsze decyzje nie były podejmowane na podstawie uproszczonego hasła w rodzaju „warsztat z AI” albo „warsztat z Astro”.

Hackathon ma potencjalnie dotyczyć znacznie większej zmiany sposobu pracy: przejścia od projektowania pojedynczych ekranów i ręcznego odtwarzania ich w kodzie do projektowania systemu reguł, który potrafią wykonywać zarówno ludzie, jak i AI.

---

## 2. Synteza całego kontekstu

Punktem wyjścia jest przekonanie, że dobry design nie jest zbiorem przypadkowo udanych ekranów. Jest konsekwencją powtarzalnych wzorców, ograniczeń i relacji. To właśnie spójność tych reguł tworzy unity, harmonię, styl oraz rozpoznawalny vibe projektu. Reguły mogą być okresowo przełamywane, ale wartościowy wyjątek także musi pozostawać w obrębie określonej konwencji i pełnić świadomą rolę.

Frontend development działa analogicznie. HTML, CSS i JavaScript są systemem zasad, który ma przenieść intencję projektu na zachowanie interfejsu. Jeżeli design został zbudowany jako spójny system, jego wdrożenie może również być systemowe. Jeżeli projekt jest jedynie zbiorem obrazków i lokalnych wyjątków, development staje się próbą ręcznego odgadywania ukrytych decyzji.

Doświadczenie autora metodologii łączy:

- projektowanie wizualne;
- design systems;
- frontend development;
- wdrożenia w Webflow;
- wdrożenia w Astro;
- rozumienie responsywności;
- myślenie komponentowe;
- praktykę pracy z AI w kodzie.

Na styku tych kompetencji powstała hipoteza:

> Design i development nie powinny być traktowane jako dwa odseparowane etapy. W pracy wspieranej przez AI ważniejsze jest zaprojektowanie jawnego systemu decyzji, który może być następnie wykonywany, sprawdzany i rozwijany bezpośrednio w kodzie.

`Astro - Design System Starter` jest techniczną reprezentacją tej hipotezy. Zawiera:

- wielowarstwowy system zmiennych CSS;
- semantyczne zasady kolorów, typografii, sizingu, spacingu i layoutu;
- reużywalne komponenty Astro;
- jawne API wariantów i stanów;
- layout primitives;
- dokumentację dla ludzi;
- reguły operacyjne dla AI;
- rejestr komponentów;
- narzędzia do podglądu grida i nazw komponentów;
- model selektywnego dostarczania kontekstu;
- bramki blokujące przypadkowe tworzenie nowych wzorców;
- walidatory architektury, komponentów i fundamentów;
- osobną warstwę wiedzy o art direction;
- osobny kontrakt tłumaczący intencję konkretnej marki na reguły wykonawcze.

Fitch był praktycznym testem tej hipotezy. Punkt startowy stanowiły content, wireframe’y/prototypy oraz zdefiniowane potrzeby UX, ale bez pełnego procesu brandingu i kompletnego projektu w Figmie. Starter został dostosowany przez zmianę tokenów, fontów, kolorów i charakteru komponentów, a następnie posłużył do zbudowania kompletnego, responsywnego interfejsu. W trakcie pracy powstawały kolejne reużywalne wzorce: section headers, karty, swipery, elementy agendy, modale i inne komponenty wynikające z rzeczywistych potrzeb produktu.

Rezultat został zaprezentowany zespołowi podczas knowledge sharingu. Najbardziej przekonująca nie była sama obecność AI, ale tempo i precyzja pracy wynikające z posługiwania się nazwami istniejących komponentów, tokenów i kontraktów. Według relacji autora:

- umieszczenie konkretnego komponentu w pustej sekcji trwało zwykle około 15–30 sekund;
- globalna zmiana oparta na istniejącym tokenie trwała kilka sekund;
- zmiana contentu w nazwanym komponencie trwała sekundy;
- tworzenie kolejnych sekcji nie wymagało ponownego wymyślania ich HTML, stanów i bazowej responsywności.

Są to rezultaty deklarowane na podstawie realnego workflow, a nie benchmark wykonany w ramach tej analizy. Lokalne pliki potwierdzają jednak, że workflow posiada techniczne warunki umożliwiające taki sposób pracy.

To doświadczenie doprowadziło do zaproszenia autora do przeprowadzenia około dwugodzinnego hackathonu podczas wyjazdu integracyjnego agencji.

---

## 3. Filozofia projektowa stojąca za metodologią

### 3.1. Design jako system wzorców

Fundamentalne założenie brzmi:

> Design jest systemem powtarzalnych wzorców, relacji i decyzji, a nie kolekcją odrębnych ekranów.

Spójność wizualna nie wynika z tego, że każdy element jest identyczny. Wynika z tego, że różne elementy mają wspólną gramatykę:

- korzystają z ograniczonej rodziny proporcji;
- powtarzają określone rytmy;
- respektują wspólne linie wyrównania;
- używają kontrolowanej hierarchii typograficznej;
- posługują się tym samym językiem powierzchni, krawędzi i promieni;
- zachowują spójną logikę stanów i interakcji;
- w podobny sposób wykorzystują kontrast;
- przełamują regularność wyłącznie w celu nadania hierarchii lub znaczenia.

Unity nie oznacza uniformizacji. System może być ekspresyjny, kontrastowy i zaskakujący, jeżeli jego wyjątki są nazwane, ograniczone i wynikają z tej samej logiki.

### 3.2. Środki wizualnego wyrazu

W metodologii design można analizować przez kilka głównych obszarów, określanych jako visual expressions lub środki wizualnego wyrazu:

1. **Typografia**
   - font family;
   - skala;
   - kontrast wielkości;
   - waga;
   - szerokość;
   - line-height;
   - tracking;
   - casing;
   - miara tekstu;
   - relacja tekstu displayowego, funkcjonalnego i technicznego.

2. **Kolor**
   - paleta;
   - kontrast;
   - dominanta;
   - kolor wspierający;
   - akcent;
   - powierzchnie;
   - tekst;
   - bordery;
   - stany;
   - tryby kolorystyczne;
   - proporcje użycia kolorów.

3. **Kompozycja i grid**
   - kontenery;
   - kolumny;
   - span;
   - wyrównania;
   - symetria i asymetria;
   - balans;
   - rytm sekcji;
   - gęstość;
   - puste kolumny;
   - breakpointy;
   - transformacja kompozycji na mobile.

4. **Content wizualny**
   - fotografia;
   - ilustracja;
   - ikonografia;
   - diagramy;
   - patterny;
   - materiały brandowe;
   - wizualizacje danych;
   - motion.

W lokalnej bazie wiedzy startera ten model jest jeszcze bardziej granularny. Osobno opisane są spacing, shape, borders, surface, elevation, motion i component DNA. Nie przeczy to pierwotnemu podziałowi. Pokazuje raczej, że główne środki wizualne można dalej rozłożyć na implementowalne decyzje.

### 3.3. Zasady projektowe jako filtr

Środki wizualne nie są celem samym w sobie. Są materiałem, który przechodzi przez zasady projektowe:

- hierarchię;
- kontrast;
- balans;
- unity;
- rytm i powtórzenie;
- proporcję i skalę;
- alignment;
- proximity i grouping;
- negative space;
- tension;
- zasady Gestalt;
- prawa UX;
- dostępność;
- semantykę;
- logikę interakcji.

Przykłady:

- kontrast w typografii może wynikać z połączenia bardzo dużych nagłówków z małym, oszczędnym tekstem pomocniczym;
- hierarchia koloru może być zbudowana przez rzadkie i kontrolowane użycie akcentu;
- spokojna, stabilna kompozycja może korzystać z wyśrodkowania, symetrii i przewidywalnego rytmu;
- techniczny charakter może zostać przeniesiony przez monospaced typography, modułowy grid, powtarzalne interwały i precyzyjne krawędzie;
- kontrolowane przełamanie rytmu może wyróżnić kluczową treść bez niszczenia unity.

### 3.4. Emocjonalny i metaforyczny komunikat marki

Trzecim wymiarem jest to, co marka ma komunikować:

- stabilność;
- profesjonalizm;
- autorytet;
- kreatywność;
- technologię;
- innowacyjność;
- dostępność;
- energię;
- szczęście;
- szaleństwo;
- procesowość;
- modułowość;
- precyzję;
- elegancję;
- inne cechy wynikające ze strategii i creative direction.

Ta sama cecha marki nie musi być wyrażana przez każdy środek wizualny jednocześnie.

Przykład kancelarii prawnej pracującej w obszarze AI:

- kompozycja może odpowiadać za stabilność i przewidywalność;
- typografia może jednocześnie budować autorytet i sygnalizować technologię;
- kolor może pozostać powściągliwy, ale wprowadzać nowoczesny akcent;
- motion może być precyzyjny i sekwencyjny zamiast ekspresyjnie chaotyczny;
- ikonografia może mieć inżynieryjny charakter bez utraty czytelności.

### 3.5. Model łączenia decyzji

Proces twórczy można opisać jako pracę na przecięciu trzech warstw:

```text
Środki wizualne
typografia / kolor / kompozycja / content wizualny / motion / shape

×

Zasady projektowe
hierarchia / kontrast / balans / unity / rytm / Gestalt / UX

×

Intencja marki
np. stabilność / technologia / kreatywność / modułowość

=

Jawny język wizualny projektu
```

Rola projektanta nie polega więc na dekorowaniu gotowej struktury. Polega na komponowaniu tych decyzji jak smaków i przypraw: wybraniu, który środek ma nieść którą część komunikatu, jaką intensywność zastosować oraz gdzie potrzebny jest wyjątek.

### 3.6. Przełożenie na system

Jeżeli decyzje są powtarzalne, powinny otrzymać reprezentację:

- raw value → primitive token;
- współdzielone znaczenie → semantic token;
- stabilna decyzja komponentu → component token;
- wariant, stan, rozmiar, ton lub tryb → prop i `data-*`;
- powtarzalna rola UX → komponent Astro;
- powtarzalna relacja strukturalna → layout primitive albo kompozycja;
- unikalna korekta optyczna → lokalny, udokumentowany CSS komponentu;
- zachowanie → kontrolowany runtime;
- zasada wyboru → agentic rule;
- art direction marki → zatwierdzony kontrakt wizualny.

W ten sposób subiektywny język marki przestaje być bezpośrednim poleceniem typu „zrób bardziej premium”. Najpierw zostaje przetłumaczony na obserwowalne relacje, dopiero potem na kod.

---

## 4. Zmiana paradygmatu design–development–AI

### 4.1. Ograniczenia procesu liniowego

Tradycyjny proces zakłada często:

```text
pełny projekt w Figmie
→ handoff
→ ręczna rekonstrukcja w HTML/CSS/JS
→ responsywne poprawki
→ rozwój komponentów
→ kolejne odstępstwa od projektu
```

Problemy tego modelu:

- wiele decyzji jest zapisanych jedynie wizualnie;
- developer musi odgadnąć, które relacje są zasadami, a które przypadkiem;
- powtarzalne wzorce są ponownie kodowane;
- mobile bywa traktowany jako osobny zestaw ekranów;
- projekt i implementacja szybko się rozjeżdżają;
- Figma może opisywać wygląd, ale nie zawsze semantykę, dostępność, zachowanie i content extremes;
- wiele energii jest przeznaczane na produkcję obrazów zamiast na zaprojektowanie reguł generujących kolejne przypadki.

### 4.2. Proponowany model

Alternatywą jest:

```text
strategia + content + potrzeby UX
→ zasady marki i art direction
→ system tokenów
→ kalibracja kluczowych komponentów
→ reużywalne kontrakty
→ kompozycja stron bezpośrednio w kodzie
→ walidacja w przeglądarce
→ kontrolowane rozszerzanie systemu
```

Nie oznacza to zakazu używania Figmy. Oznacza zmianę jej roli:

- Figma może służyć do eksploracji;
- może pomagać w porównywaniu alternatyw;
- może być miejscem kalibracji wybranych komponentów;
- nie musi być jedynym ani nadrzędnym źródłem prawdy;
- nie musi poprzedzać każdej decyzji implementacyjnej;
- nie powinna zastępować walidacji semantyki, responsywności i stanów w browserze.

W aktualnym starterze Figma jest opcjonalną, wywoływaną jawnie projekcją. Astro pozostaje źródłem prawdy dla produkcyjnych komponentów, tokenów i runtime.

### 4.3. Minimalny wystarczający zakres projektowania

Według metodologii nie zawsze trzeba projektować w pełni wszystkie ekrany przed rozpoczęciem developmentu. Należy zaprojektować przede wszystkim:

- zasady wizualne;
- skalę i relacje typograficzne;
- paletę oraz role kolorów;
- layout i grid;
- density, spacing i shape;
- najważniejsze komponenty biznesowe;
- komponenty o dużej złożoności UX;
- reprezentatywny zestaw bazowych komponentów;
- kilka kluczowych kompozycji potwierdzających art direction;
- zachowania, które nie wynikają automatycznie ze standardów.

Jeżeli produktem jest konfigurator, szczególnie ważne mogą być:

- inputy;
- radio buttons;
- checkboxy;
- filtry;
- boxy wyboru;
- tabele porównawcze;
- stany walidacji;
- zależności między polami.

Po skalibrowaniu tych elementów kolejne ekrany mogą być kompozycją istniejących zasad.

### 4.4. Heurystyka „około 40 komponentów”

W wypowiedzi pojawia się heurystyka, że realna strona korzysta zwykle z ograniczonej liczby komponentów — rzędu około 40. Jej sens nie polega na ustanowieniu sztywnego limitu. Chodzi o to, że konkretna realizacja nie wymaga nieskończonej liczby osobnych wzorców, jeżeli projektant:

- rozpoznaje wspólne role UX;
- odróżnia nowy komponent od nowego wariantu;
- reużywa istniejącą anatomię;
- nie zamienia każdej różnicy wizualnej w nowy publiczny kontrakt.

Obecny starter ma większy katalog, ponieważ jest przekrojową biblioteką dla wielu typów stron, zawiera komponenty dokumentacyjne, narzędzia developerskie i 36 gotowych organizmów sekcyjnych. Nie przeczy to heurystyce dotyczącej pojedynczego projektu.

### 4.5. Responsywność jako konsekwencja systemu

W systemowym podejściu mobile nie musi być całkowicie osobnym projektem. Jeżeli:

- grid ma zdefiniowane przejście `12 → 8 → 4` kolumn;
- komponenty mają kontrolowane breakpointy;
- layout primitives wiedzą, jak się składać;
- typography i spacing mają zachowanie fixed, fluid lub breakpoint-driven;
- content ma określone granice;
- semantyka i hierarchia są poprawne;

to mobile staje się konsekwencją dobrze zaprojektowanego systemu desktopowego i jawnych reguł transformacji. Nadal wymaga walidacji projektowej, ale nie musi być ręcznie odtwarzany jako zupełnie osobny świat.

### 4.6. Browser jako aktywne środowisko projektowe

Workflow zbliża development do projektowania:

- przeglądarka jest miejscem oglądania realnego layoutu;
- grid overlay pełni rolę projektowego odniesienia;
- component info pokazuje język systemu;
- inspector ujawnia semantykę, klasy, atrybuty i strukturę;
- AI wykonuje precyzyjne operacje na nazwanych obiektach;
- zmiany tokenów pozwalają szybko eksplorować kierunek wizualny;
- poprawny kod od razu reprezentuje responsywność i działające stany.

Brakuje jeszcze pełnej bezpośredniości typu drag-and-drop, ale sposób pracy zaczyna łączyć doświadczenie narzędzia projektowego z produkcyjnym wynikiem w kodzie.

---

## 5. Kompetencyjne źródło metodologii

Metodologia nie jest wyłącznie efektem eksperymentu z promptingiem. Wynika z połączenia kilku obszarów:

- doświadczenia projektanta wizualnego;
- rozumienia teorii designu;
- pracy nad design systems;
- znajomości CSS i HTML;
- rozumienia semantyki i dostępności;
- doświadczenia we wdrażaniu stron w Webflow;
- doświadczenia w Astro;
- rozumienia komponentów i API;
- praktyki budowania responsywnych interfejsów;
- świadomości kosztów handoffu;
- praktyki pracy z AI na realnym codebase.

Kluczowa przewaga polega na widzeniu tego samego problemu z dwóch stron:

- designer rozumie, dlaczego system musi mieć charakter, hierarchię i unity;
- developer rozumie, jak te decyzje muszą zostać zapisane, aby były wykonalne i reużywalne;
- osoba pracująca z AI rozumie, że model potrzebuje nazw, granic, źródeł prawdy i kontraktów zamiast nieograniczonego zgadywania.

---

## 6. Astro Design System Starter — czym jest system

### 6.1. Lokalizacja i charakter analizowanego repozytorium

Główne analizowane źródło:

```text
/Users/maciejpostek/Documents/Astro - Design System Starter
```

Repozytorium jest obecnie aktywnie rozwijane i lokalny working tree zawiera wiele niezacommitowanych zmian względem ostatniego commita `3302e69`. Ten raport opisuje **lokalny stan roboczy z 30 lipca 2026**, a nie wyłącznie stan `origin/main`.

Starter jest neutralny contentowo. Strona główna stanowi pusty canvas, natomiast design system, dokumentacja, komponenty, narzędzia i kontekst operacyjny są gotowe do forkowania na potrzeby kolejnego projektu.

### 6.2. Cel frameworka

Cel zapisany w repozytorium:

- kod jest źródłem prawdy;
- decyzje projektowe żyją w tokenach, komponentach i dokumentacji;
- AI rozumie system na tyle, aby przede wszystkim reużywać istniejące wzorce;
- Astro components są podstawowym interfejsem budowania stron;
- dodatkowe integracje, np. CMS, nie powinny niszczyć fundamentu design systemu;
- framework ma ograniczać drift oraz liczbę lokalnych wyjątków.

### 6.3. Model źródeł prawdy

Repozytorium świadomie nie udaje, że jeden plik może być źródłem prawdy dla wszystkiego.

| Obszar | Źródło prawdy |
| --- | --- |
| Surowe i semantyczne wartości | CSS Variables w `src/styles/tokens` |
| Wykonywalne API, semantyka i zachowanie | komponenty Astro w `src/components` |
| Discovery i aktualna gotowość komponentów | `src/data/design-system/componentArchitecture.json` |
| Operacyjne zachowanie AI | `AGENTIC-RULES.json`, `AGENTIC-RULES.md`, `.agentic-rules/` |
| Uniwersalna wiedza o designie | `art-direction/knowledge/` |
| Intencja wizualna konkretnego projektu | zatwierdzony Brand Expression Contract |
| Kontekst biznesowy i contentowy | `project-context/` |
| Opcjonalna reprezentacja projektowa | Figma używana na jawne żądanie |
| Historia zmian | Git |

To rozdzielenie jest ważne dla hackathonu, ponieważ pokazuje, że „danie AI kontekstu” nie oznacza wklejenia jednego ogromnego markdowna. Oznacza ustalenie, który artefakt posiada autorytet w konkretnej sprawie.

### 6.4. Aktualny poziom dojrzałości i zastrzeżenia

Starter jest zaawansowany, ale jego własna dokumentacja określa go jako rozwijaną hipotezę i strategiczny decision record, a nie zamkniętą doktrynę.

Ważne ograniczenia aktualnego stanu:

- neutralny starter nie ma zatwierdzonej marki;
- prawie wszystkie komponenty mają visual readiness `starter`, a nie `approved`;
- repozytorium jest w trakcie dużej przebudowy architektury;
- część plików dokumentuje kierunek docelowy, a część aktualny runtime;
- preferowany model to `class = role`, `data-* = variant/state`, ale w niektórych starszych implementacjach nadal występują modifier classes, np. warianty Buttona;
- liczby komponentów, tokenów i statusów są snapshotem, który może się zmienić;
- przed użyciem na hackathonie potrzebny będzie zamrożony i zwalidowany wariant warsztatowy.

Te zastrzeżenia nie podważają metodologii. Pokazują, że sam starter również jest systemem podlegającym iteracji, refaktoryzacji i upraszczaniu.

---

## 7. Architektura tokenów

### 7.1. Skala systemu

W aktualnych plikach `src/styles/tokens/*.css` znajduje się 607 unikalnych nazw custom properties. Liczba pokazuje szerokość istniejącego systemu, ale wartością nie jest sama ilość. Istotna jest jawna hierarchia i odpowiedzialność warstw.

### 7.2. Główne warstwy

```text
primitive/reference tokens
→ semantic global tokens
→ component-specific tokens
→ CSS komponentu
```

Przykład:

```text
raw accent color
→ semantic accent background
→ button primary background default
→ background właściwego Buttona
```

### 7.3. Zasada znaczenia

Token jest dobierany na podstawie znaczenia, nie chwilowo identycznej wartości.

- primitive mówi, jaka jest wartość;
- semantic mówi, jaką pełni rolę;
- component token mówi, jak ta rola działa w konkretnym powtarzalnym komponencie;
- CSS przypisuje wartość do właściwości.

### 7.4. Zakres tokenów

System obejmuje:

- color primitives;
- semantic colors;
- component colors;
- size primitives;
- semantic sizing;
- component size profiles;
- typography foundations;
- semantic typography;
- layout foundations;
- semantic layout;
- motion;
- elevation;
- design-system documentation tokens.

### 7.5. Kolor

Architektura rozdziela:

- surowe palety;
- powierzchnie;
- tekst;
- bordery;
- ikony;
- statusy;
- stany interakcji;
- role komponentowe;
- light i dark mode.

Paleta nie jest automatycznie rolą. `accent-600` nie mówi jeszcze, czy kolor ma być tłem buttona, borderem czy linkiem.

### 7.6. Sizing i spacing

System rozdziela:

- stałe size primitives;
- section padding;
- component padding;
- gap;
- space;
- radius;
- border widths;
- wspólne profile `small`, `medium`, `large`.

Komponenty współdzielą profile geometrii przez `data-component-size`, zamiast ponownie definiować wysokość, padding, icon size i font size.

### 7.7. Typografia

System definiuje:

- osobną rolę fontu headingowego;
- osobną rolę fontu body;
- opcjonalną rolę mono;
- ograniczoną rodzinę weightów;
- skalę headingów i tekstów;
- line-height;
- letter-spacing;
- pełne semantic text styles;
- niezależność semantyki HTML od wizualnego stylu nagłówka.

To oznacza, że `<h2>` może wizualnie używać innego poziomu stylu bez niszczenia semantyki dokumentu.

### 7.8. Responsywność wartości

Każdy istotny token może wybrać model:

- **fixed** — wartość stabilna;
- **fluid** — płynna zmiana przez `clamp()`;
- **responsive override** — kontrolowany skok na breakpointcie;
- **container-driven** — lokalna zmiana zależna od szerokości komponentu.

Takie rozróżnienie redukuje przypadkowe media queries w komponentach.

---

## 8. Layout i kompozycja

### 8.1. Layout primitives

Publiczny kontrakt kompozycyjny obejmuje:

```text
.l-section
  → .l-container
    → .l-grid | .l-stack | .l-cluster
```

Klasy definiują rolę. `data-*` definiuje wariant:

```html
<section class="l-section" data-padding="large">
  <div class="l-container" data-container="main">
    <div class="l-grid" data-grid="site" data-gap="site">
      ...
    </div>
  </div>
</section>
```

### 8.2. Grid

System ma:

- 12 kolumn na desktopie;
- 8 kolumn na tablecie;
- 4 kolumny na mobile;
- wspólny column gap;
- obliczany kontener;
- płynny site padding;
- jawne spany;
- grid dla świadomej kompozycji;
- osobny `auto-fit` dla kolekcji;
- breakout tracks;
- zasady przejścia na mobile.

Grid nie jest tylko dekoracyjną nakładką. Jest językiem rozmowy z AI i sposobem precyzyjnego opisu relacji:

- „content zaczyna się w kolumnie 3”;
- „element zajmuje 5 kolumn”;
- „secondary track zaczyna się w kolumnie 9”;
- „na mobile oba elementy przechodzą na pełny span”.

---

## 9. Architektura komponentów

### 9.1. Obecny katalog

Rejestr `componentArchitecture.json` zawiera obecnie 136 pozycji:

- 24 atomy;
- 38 molecules;
- 62 organisms;
- 1 template;
- 9 komponentów dokumentacyjnych;
- 2 narzędzia developerskie.

Wśród nich znajduje się 36 gotowych komponentów sekcyjnych.

Według rejestru:

- 135 pozycji ma status `ready`;
- 1 pozycja ma status `review`;
- 135 ma validation `passed`;
- 1 ma validation `partial`;
- 135 ma visual readiness `starter`;
- 1 ma visual readiness `review`.

Słowo `starter` jest istotne: gotowość implementacyjna nie oznacza jeszcze zatwierdzonego charakteru konkretnej marki.

### 9.2. Organizacja

Kod jest organizowany przede wszystkim według atomic layer, a następnie family:

- actions;
- navigation;
- forms;
- cards;
- content;
- text;
- data display;
- media;
- visual;
- disclosure;
- sidepanels;
- timeline;
- sections;
- documentation;
- dev tools.

### 9.3. Komponent jako kontrakt

Komponent nie jest wyłącznie plikiem z markupem. Jego kontrakt może obejmować:

- rolę UX;
- semantyczny element HTML;
- publiczne props;
- sloty;
- warianty;
- stany;
- zależności;
- tokeny;
- atrybuty;
- zasady dostępności;
- zasady contentu;
- responsive behavior;
- źródło dokumentacji;
- agentic rule;
- status implementacji i walidacji.

### 9.4. Przykład: Button

Rejestr i agentic rule opisują:

- `Button.Primary`;
- `Button.Secondary`;
- `Button.Link`;
- kiedy każdego używać;
- kiedy powinien renderować link;
- kiedy powinien renderować button;
- jakie ma stany;
- jaką ma hierarchię;
- kiedy zamiast niego użyć `IconButton`;
- kiedy użyć `ButtonGroup`;
- dlaczego nie tworzyć lokalnych `.cta` i lookalike’ów.

AI nie musi zgadywać, czy „ten przycisk ma być primary”. Może odnieść decyzję do roli akcji w lokalnym kontekście.

### 9.5. Przykład: SectionHeader

`SectionHeader` łączy:

- eyebrow;
- title;
- semantyczny heading;
- opcjonalny slot actions;
- wariant `section` albo `hero`;
- systemowy bottom spacing;
- responsywne stackowanie.

To bezpośrednio odpowiada obserwacji z projektu Fitch: nagłówek sekcji jest powtarzalną relacją, więc powinien zostać zamknięty jako komponent zamiast być odtwarzany ręcznie w każdej sekcji.

### 9.6. Reuse-first i default-deny

Aktualny runtime domyślnie **nie pozwala tworzyć nowego publicznego komponentu**.

Tworzenie strony lub sekcji nie oznacza automatycznie zgody na:

- nowy globalny token;
- nowy komponent design systemu;
- nowy rekord w rejestrze;
- nowy publiczny prop;
- nowy wzorzec.

Jeżeli istnieje odpowiedni komponent, należy go użyć. Jeżeli istnieje bliska alternatywa, należy ją wskazać. Nowy publiczny komponent powstaje dopiero po:

- jawnej intencji stworzenia reużywalnego wzorca;
- wykazaniu realnej luki w rejestrze;
- przeczytaniu odpowiednich zasad;
- przejściu szerszej walidacji.

To technicznie egzekwuje filozofię: „najpierw sprawdź, czy naprawdę potrzebujesz nowego wzorca UX”.

### 9.7. Renderowana dokumentacja

Starter udostępnia działającą dokumentację w przeglądarce, m.in.:

- overview;
- color;
- sizing;
- typography;
- layout;
- components;
- sections;
- roadmap/readiness;
- brand marks;
- motion;
- elevation;
- illustration;
- media placeholders;
- interaktywną mapę architektury systemu.

Dokumentacja nie jest osobną stroną marketingową. Korzysta z własnych reużywalnych komponentów, prezentuje realne tokeny i API oraz może służyć jako operacyjna biblioteka w trakcie budowania strony. To potencjalnie ważne środowisko warsztatowe: uczestnik może znaleźć nazwę komponentu albo tokena, zobaczyć jego stan i od razu użyć tej tożsamości w rozmowie z AI.

---

## 10. Agentic rules i AI-native runtime

### 10.1. Dokumentacja jako część produktu

Dokumentacja w starterze jest przeznaczona jednocześnie dla:

- designerów;
- developerów;
- AI.

Opisuje nie tylko „co istnieje”, ale:

- kiedy użyć;
- kiedy nie użyć;
- jakie są granice odpowiedzialności;
- co jest źródłem prawdy;
- jakie pliki należy czytać;
- czego nie wolno wnioskować;
- jaki validator należy uruchomić;
- jaki wynik oznacza akceptację lub blokadę.

### 10.2. Główny runtime

```text
Prompt
→ Classify
→ Resolve Context
→ Execute
→ Validate
→ Accepted albo Blocked
```

Aktualny model używa jednego agenta. Profile nie są osobnymi „personami” ani stałymi agentami specjalistycznymi; zmieniają zakres kontekstu, uprawnienia i walidację. To ważna decyzja architektoniczna: systematyzacja zachowania AI wynika tu przede wszystkim z routingu, kontraktów i źródeł prawdy, a nie z mnożenia agentów.

### 10.3. Typy zadań

Każde zadanie jest klasyfikowane jako:

- `exact-edit` — zmiana dokładnie nazwanego tokena, pliku lub właściwości;
- `reuse` — użycie istniejącego komponentu;
- `compose` — złożenie strony lub sekcji z istniejących elementów;
- `repair` — naprawa istniejącego kontraktu;
- `extend` — jawne rozszerzenie publicznego API;
- `create` — jawne stworzenie nowego reużywalnego komponentu.

### 10.4. Selektywny kontekst

System nie zakłada, że AI za każdym razem przeczyta całe repozytorium.

Ma budżety kontekstu:

- tiny — 4 KB;
- small — 12 KB;
- medium — 40 KB;
- large — 100 KB.

Przykładowe polecenie:

```bash
npm run agent:context -- compose SectionHeader GridVisualizer ComponentsGuide Button
```

W lokalnym teście resolver:

- znalazł wskazane komponenty;
- zwrócił ich props, warianty, stany, tokeny i zależności;
- dołączył bezpośrednią zależność `Eyebrow`;
- wskazał pięć plików do przeczytania;
- pominął art direction, family rules i Figmę;
- zmieścił wynik w 4494 bajtach przy limicie 40960.

To jest bardzo konkretna reprezentacja celu „AI nie musi ciągle czytać wszystkiego”.

### 10.5. Task Contract

Router buduje kontrakt zadania zawierający m.in.:

- intent;
- targets;
- możliwość albo zakaz tworzenia komponentów;
- tryb marki;
- budżet kontekstu;
- zakres walidacji;
- maksymalną liczbę prób naprawy;
- pominięte konteksty;
- powód blokady.

Lokalny test bardzo ogólnego polecenia „przeanalizuj i udokumentuj architekturę” został zablokowany, ponieważ nie wskazywał rozpoznawalnego komponentu, tokena, pliku ani zakresu kompozycji. To zamierzone zachowanie: runtime premiuje konkretny target zamiast pozwalać agentowi pozornie działać na nieograniczonym zakresie.

### 10.6. Walidacja proporcjonalna do zmiany

System nie uruchamia zawsze pełnego builda:

- exact token edit → audit dotkniętego fundamentu;
- component reuse → ukierunkowany check;
- page composition → Astro check/build i browser review, gdy zmienił się layout;
- repair → audit rodziny;
- extend/create → registry, family, documentation i build.

### 10.7. Accepted albo blocked

Każda operacja ma skończyć się jasno:

- `accepted`;
- `blocked`.

Wynik ma raportować:

- status;
- intent;
- reused components;
- created components;
- changed files;
- validation;
- missing input.

To zapobiega sytuacji, w której AI ukrywa brak danych za pozornie kompletnym outputem.

### 10.8. Walidacja repozytorium jako systemu

`npm run validate` składa wiele ukierunkowanych kontroli:

- testy agent runtime;
- audit runtime;
- audit architektury;
- audit rejestru komponentów;
- audit agentic rules;
- audit Brand Expression Contract;
- sprawdzenie wygenerowanej dokumentacji kontraktu marki;
- audyty fundamentów;
- audyty rodzin komponentów;
- audyty ikon i assetów;
- audyty website sections;
- Astro check i build.

Walidatory nie oceniają gustu. Mogą natomiast sprawdzić:

- strukturę;
- zgodność źródeł prawdy;
- naming;
- readiness;
- zależności;
- token coverage;
- API;
- dokumentację;
- obecność wymaganych dowodów.

Ocena hierarchy, balance, unity i brand expression nadal wymaga człowieka.

### 10.9. Jawna mapa architektury

`architecture/system-map.json` opisuje obecnie 41 węzłów i 49 relacji. Mapa obejmuje:

- prompt;
- Guides identity;
- classifier;
- Task Contract;
- context resolver;
- źródła prawdy;
- profile wykonania;
- creation gate;
- brand gate;
- human visual approval;
- scoped validation;
- accepted/blocked outputs;
- opcjonalną ścieżkę Figma;
- fundamenty, komponenty i templates.

To dodatkowy dowód, że architektura nie istnieje wyłącznie „w głowie” autora. Jest opisana maszynowo, renderowana w dokumentacji i audytowana.

---

## 11. Warstwa art direction i Brand Expression Contract

### 11.1. Rozdzielenie wiedzy uniwersalnej od marki

Starter rozdziela:

1. uniwersalną wiedzę o projektowaniu;
2. dostarczone dowody i materiały marki;
3. project-specific Brand Expression Contract;
4. tokeny i komponenty wykonujące zatwierdzony kontrakt.

Uniwersalna baza obejmuje:

- hierarchy;
- contrast;
- balance;
- unity;
- rhythm;
- scale;
- alignment;
- proximity;
- negative space;
- tension;
- grid;
- typography;
- color;
- spacing;
- shape;
- surface;
- component DNA;
- imagery;
- iconography;
- motion.

### 11.2. Zakaz bezpośredniego tłumaczenia przymiotników na CSS

Słowa takie jak:

- modular;
- technical;
- editorial;
- premium;
- playful;
- Swiss;

są hipotezami, a nie instrukcjami implementacyjnymi.

Muszą zostać połączone z:

- obserwowalnymi konsekwencjami;
- zatwierdzonymi referencjami;
- counterexamples;
- affected foundations;
- permitted degrees of freedom;
- human approval.

Przykład:

```text
modular
→ repeated alignment units
→ controlled span families
→ recurring edge treatment
→ attachment and separation rules
→ desktop i mobile evidence
```

### 11.3. Calibration set

Przed propagacją kierunku wizualnego repo rekomenduje kalibrację:

- Button;
- Input albo FormField;
- Tag;
- ContentBlock albo SectionHeader;
- jednej reprezentatywnej karty;
- Navigation;
- jednej reprezentatywnej sekcji albo Hero.

To bardzo dobrze odpowiada pierwotnej filozofii: nie trzeba najpierw projektować całej strony. Trzeba zbudować wystarczający zestaw komponentów, który ujawni component DNA i pozwoli sprawdzić unity.

### 11.4. Aktualny stan startera

Aktualny plik:

```text
project-context/brand-foundations/brand-expression/contract.json
```

ma status:

```json
{
  "status": "not-configured",
  "rules": []
}
```

To jest zamierzone. Starter nie posiada własnej marki klienta.

Konsekwencja:

- dokładne edycje i named reuse są dozwolone;
- otwarta, brand-sensitive kompozycja powinna zostać zablokowana, dopóki nie istnieje zatwierdzony kontrakt;
- AI nie powinno wymyślać art direction na podstawie neutralnego startera;
- człowiek zatwierdza jakość wizualną i zakres propagacji.

Lokalne wywołanie brand context dla ogólnego hero zostało zgodnie z tym zablokowane z informacją o braku zatwierdzonego kontraktu.

---

## 12. Guides: fizyczny interfejs rozmowy z AI

### 12.1. Grid Visualizer

`GridVisualizer`:

- renderuje 12 kolumn;
- korzysta z tych samych tokenów co layout;
- ukrywa nadmiarowe kolumny na mniejszych szerokościach;
- nie przyjmuje pointer events;
- może być włączany i wyłączany;
- ma skrót `Shift + G`;
- pozwala opisywać pozycje w sposób jednoznaczny.

### 12.2. Component Info Layer

Komponenty wystawiają `data-component-name`.

Warstwa:

- wykrywa najbliższy nazwany komponent;
- pokazuje jego nazwę przy kursorze;
- używa fioletowej stylistyki nawiązującej do komponentów w Figmie;
- w aktualnym starterze pozwala również kliknąć komponent i skopiować jego nazwę;
- działa tylko przy aktywnych Guides;
- przy aktywnym trybie przechwytuje kliknięcia, aby nie uruchamiać akcji strony.

W 173 plikach komponentów Astro:

- 159 plików zawiera `data-component-name`;
- występuje 179 deklaracji tego atrybutu.

Nie każdy plik musi być publicznym komponentem, dlatego nie jest to prosty wskaźnik „braków”. Pokazuje jednak skalę zastosowania jawnej tożsamości.

### 12.3. Browser inspector

Trzecią warstwą workflow jest standardowy inspector:

- pokazuje realny DOM;
- pozwala odczytać klasy;
- pokazuje `data-*`;
- ujawnia semantyczne elementy;
- pozwala znaleźć konkretną relację i przekazać ją AI;
- pomaga odróżnić błąd lokalny od systemowego.

### 12.4. Trzy poziomy precyzji

Workflow opiera się na:

1. **precyzji kompozycyjnej** — grid i kolumny;
2. **precyzji obiektowej** — nazwy komponentów;
3. **precyzji implementacyjnej** — inspector, klasy, atrybuty i tokeny.

To zamienia rozmowę:

> „Ta karta wygląda trochę za ciężko”

w operację:

> „W `FitchSpeakerCard` zmień lokalny padding na istniejący token X; nie modyfikuj globalnego `SectionHeader` ani API karty”.

---

## 13. Figma w obecnej architekturze

Starter zawiera rozbudowane `Figma2Astro Agentic Rules`, ale aktualny runtime ustawia Figmę jako:

- explicit-only;
- opcjonalną projekcję;
- narzędzie eksploracji lub porównania;
- nieobowiązkowy element zwykłej pracy Astro;
- niesamodzielne źródło API;
- nieobowiązkowy validator.

Figma page names, kolejność i nesting są nawigacją dla ludzi, nie machine IDs.

To jest ważne dla dalszego planowania hackathonu: można uczyć systemowego projektowania bez stawiania tezy, że Figma jest zbędna. Istotą jest wybór właściwego źródła prawdy dla właściwego typu decyzji.

---

## 14. Fitch jako praktyczny test metodologii

### 14.1. Lokalizacja

```text
/Users/maciejpostek/Documents/Fitch/fitch-astro
```

Materiały wejściowe:

```text
/Users/maciejpostek/Documents/Fitch/prototypes
```

Lokalny working tree Fitch także zawiera niezacommitowane materiały testowe, duplikaty plików z sufiksem `2` i bieżące modyfikacje. Case study powinno więc zostać przygotowane z wybranego, czystego snapshotu, a nie z całego aktualnego katalogu roboczego.

W katalogu prototypów znajdują się dwa rozbudowane prototypy HTML:

- `slo-bermuda-A-prototype-kopia.html`;
- `slo-bermuda-A-chatbot-prototype.html`.

Zawierają m.in.:

- hero;
- about;
- agenda;
- speakers;
- attendees;
- updates;
- venue;
- interakcje i modale.

### 14.2. Punkt startowy według relacji autora

Projekt miał:

- content;
- wireframe’y/prototypy;
- określoną strukturę;
- określone cele UX;
- filtry;
- agendę;
- modale;
- sekcje i potrzeby interakcyjne.

Nie miał:

- pełnego brandingu;
- kompletnego projektu wizualnego;
- całej strony zaprojektowanej wcześniej w Figmie.

Założenie eksperymentu:

> Zamiast najpierw odtwarzać całą stronę w Figmie, należy skonfigurować system zasad, a następnie budować produkcyjny interfejs bezpośrednio w Astro.

### 14.3. Sposób adaptacji startera

W Fitch zachowano architekturę tokenów, ale wprowadzono project-specific decyzje.

Przykłady:

- starterowy Inter został zastąpiony podziałem:
  - heading: `Serrif Collection VF Trial`;
  - body: `Lato`;
- neutralna paleta pozostała fundamentem;
- accent został rozbudowany do palety czerwieni Fitch;
- zakres fluid viewport został ustawiony do `120rem`;
- radius buttonów i tagów został ustawiony na sharp/none;
- hero i sekcje otrzymały własne kompozycje;
- powstały project-specific komponenty Fitch.

To pokazuje różnicę między:

- **fundamentem systemowym**, który można zachować;
- **component DNA marki**, które należy skalibrować;
- **komponentami projektowymi**, które wynikają z realnego produktu.

### 14.4. Składanie strony

Aktualny `src/pages/index.astro` składa stronę z nazwanych sekcji:

- `FitchNavigation`;
- `FitchHero`;
- `FitchAgenda`;
- `FitchSpeakers`;
- `FitchAttendees`;
- `FitchVenue`;
- `FitchFooter`;
- dodatkowy testowany fragment `FitchTest`.

W dalszym rozwoju projekt został również podłączony do:

- Sanity;
- Cloudflare;
- runtime event data;
- systemu alertów;
- danych agenda/speaker/attendee/venue;
- schematów CMS.

To istotne, ponieważ rezultat nie pozostał statycznym mockupem. System stał się bazą realnej aplikacji eventowej.

### 14.5. Reuse widoczny w kodzie

W project-specific sekcjach powtarzalnie używane są:

- `Button`;
- `ButtonGroup`;
- `SectionHeader`;
- `FormField`;
- `Input`;
- `Label`;
- `Tab`;
- `Tag`;
- `Avatar`;
- `LayoutSlotGrid`;
- `SwiperStarter`.

Przykłady:

- Agenda składa `SectionHeader`, `FormField`, `Input`, `Label`, `Tab`, project-specific session cards i modale.
- Attendees składa `SectionHeader`, `FormField`, `Input`, `Button`, rows i modale.
- Speakers oraz Venue używają `SectionHeader` i `SwiperStarter`.
- Hero używa `Button`, `ButtonGroup`, `InfoRow`, `.l-section`, `.l-container`, `.l-grid` i `.l-stack`.

### 14.6. Heurystyczne metryki implementacji Fitch

Analiza plików w `src/components/sections` pokazuje:

- 22 pliki nazwane `Fitch*.astro`;
- 20 plików używa layout primitives;
- 73 wystąpienia `l-section`, `l-container`, `l-grid`, `l-stack` albo `l-cluster`;
- 5 plików importuje `SectionHeader`;
- 5 importuje `Button`;
- 5 importuje `Tag`;
- 5 importuje `Avatar`;
- 3 importują `SwiperStarter`;
- 458 odwołań `var(--...)` w plikach sekcji;
- 4 bezpośrednie literały kolorystyczne w sekcjach;
- 124 wystąpienia `data-component-name` w całym katalogu komponentów.

To są proste metryki statyczne, nie pełny audyt jakości. Pokazują jednak wyraźnie, że systemowy język jest obecny w produkcyjnych komponentach projektu.

### 14.7. Prompt jako dowód sposobu rozmowy

W `prototypes/Prompts library.md` znajduje się precyzyjna notatka:

> „zmniejszmy padding section w hero do `--section-padding-small`”

To mały, ale bardzo reprezentatywny przykład:

- wskazana jest konkretna sekcja;
- wskazana jest konkretna właściwość;
- wskazany jest istniejący token;
- nie ma potrzeby opisywania wartości w pikselach;
- AI nie musi wymyślać nowego rozwiązania.

### 14.8. Projekt jako dowód głównej hipotezy

Fitch potwierdza, że:

- content i UX można oddzielić od stylistyki prototypu;
- interfejs może zostać zbudowany przez system zamiast skopiowania prototypowego CSS;
- globalna zmiana tokenów szybko zmienia charakter wielu komponentów;
- reużywalne komponenty przyspieszają kolejne sekcje;
- projekt może wyglądać jak zaprojektowany i wdrożony w standardowym procesie;
- responsywność może być integralną częścią implementacji od początku;
- AI działa lepiej, gdy porusza się po nazwanym systemie;
- system może później zostać połączony z CMS i produkcyjnym runtime.

### 14.9. Różnica między Fitch a aktualnym starterem

Fitch korzysta ze starszej generacji reguł:

- router Fitch ma wersję `0.1.0`;
- nie posiada jeszcze obecnego reuse-first runtime V1.0;
- część category rules ma status placeholder;
- jego roadmap i organizacja komponentów są starsze;
- obecny starter ma bogatszy rejestr, selektywny resolver, Brand Expression Contract i szersze audyty.

Dlatego Fitch należy traktować jako:

- praktyczny dowód wcześniejszej wersji metodologii;
- źródło konkretnych lekcji;
- case study;
- nie identyczną kopię obecnego startera.

---

## 15. Geneza hackathonu

### 15.1. Poprzedni knowledge sharing

Autor zaprezentował zespołowi workflow na przykładzie realnej strony.

Pokaz obejmował:

- pracę na nazwanych komponentach;
- używanie tokenów;
- szybkie dodawanie sekcji;
- zmianę contentu;
- zmianę globalnych wartości;
- generowanie rezultatów w kilkadziesiąt sekund zamiast kilkudziesięciu minut;
- wykazanie, że wynik nie wygląda jak przypadkowy „AI-generated website”.

### 15.2. Dlaczego agencja poprosiła o hackathon

Zaproszenie nie wynika wyłącznie z zainteresowania nowym narzędziem. Zespół zobaczył:

- realne przyspieszenie;
- systemową jakość;
- możliwość przełożenia design systemu na kod;
- potencjał skalowania stron;
- sposób łączenia designu i developmentu;
- metodę pracy z AI, która jest bardziej precyzyjna niż ogólny prompting.

### 15.3. Kontekst organizacyjny

Hackathon ma odbyć się:

- podczas wyjazdu integracyjnego;
- na żywo;
- przez około dwie godziny;
- z możliwością bezpośredniej współpracy;
- z możliwością wskazywania elementów na ekranie;
- w formule bardziej interaktywnej niż wykładowej.

### 15.4. Relacja z wtorkowymi knowledge sharingami

Istnieje możliwość przygotowania zespołu wcześniej:

- przekazywać teorię zdalnie podczas wtorkowych spotkań;
- omówić podstawy systemowego myślenia;
- pokazać starter;
- przygotować setup;
- udostępnić video;
- przesłać bibliotekę promptów;
- przekazać instrukcję instalacji;
- wyjaśnić komponenty i tokeny.

Wartość spotkania na żywo powinna wynikać z tego, czego nie da się równie dobrze zrobić zdalnie:

- wspólnej analizy;
- pracy w grupach;
- porównania decyzji;
- dyskusji nad wzorcami;
- szybkiej iteracji;
- bezpośredniego feedbacku;
- obserwowania różnych sposobów myślenia.

---

## 16. Odbiorcy i główna hipoteza edukacyjna

### 16.1. Odbiorcy

Główną grupę stanowią designerzy.

W zespole:

- jest mało developerów;
- nawet osoby techniczne niekoniecznie myślą systemowo;
- poziom znajomości Astro, CSS, terminala i narzędzi AI może być różny;
- należy unikać formatu, w którym połowa czasu znika na setup techniczny;
- wartość nie może zależeć wyłącznie od szybkości pisania kodu.

### 16.2. Główna hipoteza autora

Najbardziej fundamentalna rzecz, którą autor chce prawdopodobnie przekazać, brzmi:

> Design jest systemem, a designer w erze AI powinien umieć nie tylko tworzyć ekrany, ale również rozpoznawać, nazywać i przekazywać reguły, z których te ekrany wynikają.

Towarzyszące kompetencje:

- myślenie bardziej inżynieryjne;
- widzenie powtarzalnych wzorców;
- budowanie komponentów;
- rozumienie konsekwencji dla developmentu;
- umiejętność rozmowy z AI technicznym językiem;
- odróżnianie decyzji globalnej od lokalnej;
- odróżnianie komponentu od wariantu;
- odróżnianie brand direction od surowej wartości CSS.

To jest na tym etapie hipoteza, nie finalna decyzja o programie.

---

## 17. Co na pewno powinno pozostać w przekazie

Niezależnie od ostatecznego ćwiczenia warto zachować następujące idee:

1. Design nie jest obrazkiem. Jest systemem relacji.
2. Powtarzalność tworzy unity, a kontrolowane wyjątki tworzą charakter.
3. Design system jest wykonywalną reprezentacją części tych relacji.
4. Kod może być pełnoprawnym medium projektowym.
5. AI najlepiej działa na jawnych nazwach, rolach i kontraktach.
6. Precyzja jest ważniejsza niż długość promptu.
7. Nie każda różnica uzasadnia nowy komponent.
8. Reuse powinien poprzedzać creation.
9. Globalną decyzję należy zapisać globalnie.
10. Subiektywny język marki trzeba przetłumaczyć na obserwowalne zasady.
11. Komponenty wymagają UX role, states, content rules i responsywności, nie tylko wyglądu.
12. Browser pokazuje prawdziwe zachowanie systemu.
13. Figma może być ważnym narzędziem, ale nie musi być jedynym źródłem prawdy.
14. Człowiek nadal odpowiada za creative direction, smak i wizualne zatwierdzenie.
15. AI nie zastępuje systemowego myślenia; zwiększa jego znaczenie.

---

## 18. Możliwe główne kierunki hackathonu

Poniższe kierunki nie są jeszcze rekomendacją. Są mapą przestrzeni decyzyjnej.

### Kierunek A: rozpoznawanie wzorców w projekcie

Uczestnicy analizują projekt lub kilka sekcji i identyfikują:

- repeated patterns;
- component candidates;
- variants;
- layout rules;
- shared content anatomy;
- global vs local decisions;
- exceptions.

**Potencjalna wartość:** bezpośrednio uczy systemowego myślenia.

**Ryzyko:** może pozostać zbyt teoretyczne, jeżeli nie zakończy się wykonaniem.

**Wymagane materiały:** gotowy projekt, wireframe albo zestaw ekranów.

### Kierunek B: tłumaczenie marki na reguły

Uczestnicy dostają:

- branding;
- referencje;
- metaforę;
- cechy marki;
- wireframe.

Ich zadaniem jest stworzenie:

- visual thesis;
- adopt/avoid;
- typography rules;
- color allocation;
- composition grammar;
- component DNA;
- token implications.

**Potencjalna wartość:** uczy przechodzenia od subiektywności do systemu.

**Ryzyko:** dwie godziny mogą być zbyt krótkie na art direction i implementację.

**Wymagane materiały:** dobrze przygotowane evidence i ograniczony scope.

### Kierunek C: tworzenie kontekstu i agentic rules

Uczestnicy uczą się:

- co powinno być źródłem prawdy;
- jak dokumentować komponent;
- jak opisać „when to use” i „when not to use”;
- jak ograniczać AI;
- jak definiować allowed/blocked;
- jak budować mały context pack.

**Potencjalna wartość:** pokazuje, dlaczego system działa lepiej niż luźny prompting.

**Ryzyko:** może być abstrakcyjne dla designerów bez natychmiastowego efektu wizualnego.

**Wymagane materiały:** konkretny komponent i zły/dobry przykład reguły.

### Kierunek D: precyzyjna rozmowa z AI

Uczestnicy pracują w Codex albo Claude i używają:

- nazw komponentów;
- tokenów;
- grid coordinates;
- inspectora;
- precyzyjnych zakresów;
- właściwych modeli, skills i setupów.

**Potencjalna wartość:** natychmiastowa, praktyczna poprawa pracy.

**Ryzyko:** wydarzenie może zostać zredukowane do „kursu promptowania” i ominąć głębszą metodologię.

**Wymagane materiały:** sprawny setup, gotowe repo i zadania.

### Kierunek E: skalowanie projektu z kilku sekcji

Uczestnicy dostają:

- wireframe i content;
- branding;
- trzy lub cztery zaprojektowane sekcje;
- skonfigurowany starter.

Analizują zasady, wyciągają komponenty i budują kolejną stronę lub sekcję.

**Potencjalna wartość:** łączy reverse engineering, component thinking, AI i output.

**Ryzyko:** zakres może być za szeroki na dwie godziny.

**Wymagane materiały:** bardzo mocno przygotowany starter i precyzyjny brief.

### Kierunek F: od wireframe’u do działającego systemu

Uczestnicy zaczynają od contentu i UX, a następnie:

- wybierają visual direction;
- mapują fundamenty;
- konfigurują tokeny;
- kalibrują komponent;
- składają sekcję.

**Potencjalna wartość:** pokazuje cały nowy paradygmat.

**Ryzyko:** zbyt wiele decyzji na raz; duże ryzyko płytkiego rezultatu.

**Wymagane materiały:** silne ograniczenia i częściowo gotowe artefakty.

### Kierunek G: reverse engineering Fitch

Uczestnicy dostają prototyp wejściowy i rezultat Fitch.

Analizują:

- co pochodziło z contentu i UX;
- co zostało zaprojektowane w systemie;
- które elementy są reużywalne;
- jak tokeny zmieniły kierunek;
- gdzie powstały nowe komponenty;
- jak workflow można było przyspieszyć.

**Potencjalna wartość:** realny dowód, mało spekulacji, mocny storytelling.

**Ryzyko:** uczestnicy mogą stać się obserwatorami zamiast twórcami.

**Wymagane materiały:** dobrze przygotowane before/after i zadanie rekonstrukcyjne.

---

## 19. Możliwe punkty startowe ćwiczenia

### Wariant 1: wireframe + content

Uczestnicy muszą stworzyć kierunek i system.

Największa swoboda, ale również największe ryzyko chaosu.

### Wariant 2: wireframe + branding + referencje

Uczestnicy tłumaczą markę na zasady i implementują fragment.

Dobry do nauki translation layer.

### Wariant 3: wireframe + branding + 3–4 gotowe sekcje

Uczestnicy reverse-engineerują system i skalują go na nową sekcję lub podstronę.

Dobry do ćwiczenia pattern recognition i reuse.

### Wariant 4: gotowy starter + określony Brand Expression Contract

Uczestnicy koncentrują się na kompozycji i precyzyjnej pracy z AI.

Redukuje czas potrzebny na creative direction.

### Wariant 5: gotowy system + celowo niesystemowy ekran

Uczestnicy refaktorują ekran:

- mapują lokalne wartości na tokeny;
- zamieniają lookalike’i na komponenty;
- nazywają wyjątki;
- walidują responsywność.

Dobry do nauki odróżniania zasad od przypadków.

### Wariant 6: prototyp Fitch + obecny starter

Uczestnicy odtwarzają mały fragment metodologii na realnym materiale.

Dobry do połączenia historii, dowodu i praktyki.

---

## 20. Warstwa teoretyczna a interaktywna

### Teoria możliwa do przekazania przed wyjazdem

- design jako system;
- visual expressions;
- hierarchy, contrast, balance, unity i rhythm;
- primitive / semantic / component tokens;
- komponent vs wariant;
- global vs local;
- class / `data-*` / CSS Variable;
- źródła prawdy;
- reuse-first;
- Brand Expression Contract;
- podstawy obsługi repozytorium;
- podstawy Codex/Claude;
- nazwy głównych komponentów;
- krótkie demo Guides.

### Wartość zarezerwowana na spotkanie na żywo

- wspólne rozpoznawanie wzorców;
- negocjowanie tego, co jest regułą;
- porównanie kilku rozwiązań;
- krytyka propozycji AI;
- praca w parach albo grupach;
- decyzja „component, variant czy local composition?”;
- testowanie na realnym ekranie;
- szybkie feedback loops;
- prezentacja rezultatów;
- rozmowa o tym, dlaczego różne grupy zbudowały różne systemy.

---

## 21. Potencjalny pre-work i setup

Przed spotkaniem można przygotować:

- repozytorium startowe;
- konkretny branch albo snapshot;
- instrukcję instalacji;
- sprawdzony plik `.env.example`, jeżeli będzie potrzebny;
- zainstalowane dependencies albo gotowy package lock;
- test uruchomienia dev servera;
- instrukcję Codex/Claude;
- listę wspieranych modeli;
- krótkie video z uruchomieniem;
- video o Guides i inspectorze;
- bibliotekę przykładowych promptów;
- glossary komponentów i tokenów;
- jedno zadanie kontrolne;
- backup w formie hostowanej wersji;
- gotowe materiały projektowe;
- content pack;
- branding pack;
- Brand Expression Contract;
- instrukcję, czego nie zmieniać;
- kryteria ukończenia.

Do rozstrzygnięcia pozostaje, ile z tego powinno być obowiązkowe. Nadmierny pre-work może obniżyć udział, ale brak setupu może spalić znaczną część dwugodzinnego spotkania.

---

## 22. Ryzyka, które trzeba uwzględnić

### Ryzyko 1: hackathon stanie się wykładem

Jeżeli większość czasu zajmie tłumaczenie frameworka, interaktywna wartość wyjazdu zostanie niewykorzystana.

### Ryzyko 2: hackathon stanie się kursem terminala

Jeżeli środowiska nie będą przygotowane, uczestnicy skupią się na instalacji zamiast na systemowym projektowaniu.

### Ryzyko 3: hackathon stanie się konkursem na najładniejszy ekran

To może utrwalić dokładnie przeciwny model: ocena powierzchni bez oceny reguł, reuse i skalowalności.

### Ryzyko 4: hackathon stanie się kursem promptów

Same formuły promptów nie wystarczą. Precyzyjny prompt działa dlatego, że istnieje precyzyjny system.

### Ryzyko 5: zakres będzie zbyt szeroki

Branding, design theory, tokeny, komponenty, Astro, AI, responsive i prezentacja rezultatów nie zmieszczą się głęboko w dwóch godzinach bez przygotowania.

### Ryzyko 6: AI wytworzy lokalne wyjątki

Bez reuse-first i ograniczeń model może szybko zbudować efektowny, ale niesystemowy rezultat.

### Ryzyko 7: uczestnicy nie zrozumieją różnicy między systemem a biblioteką

Biblioteka komponentów to tylko jeden element. System obejmuje także zasady, kontekst, źródła prawdy, content, art direction i walidację.

### Ryzyko 8: brak wspólnego kryterium sukcesu

Jeżeli nie będzie wiadomo, czy wygrywa estetyka, szybkość, spójność, reuse, jakość reguł czy działający kod, uczestnicy zoptymalizują się w różnych kierunkach.

### Ryzyko 9: zbyt wysoki próg techniczny dla designerów

Ćwiczenie musi wykorzystywać techniczny język bez wymagania pełnej kompetencji frontendowej od wszystkich.

### Ryzyko 10: aktualny starter zmieni się przed wydarzeniem

Repozytorium jest w intensywnym rozwoju. Potrzebny będzie zamrożony, zwalidowany snapshot warsztatowy.

---

## 23. Kryteria wyboru finalnego scenariusza

Scenariusz należy ocenić według pytań:

1. Czy uczestnik po spotkaniu inaczej patrzy na design?
2. Czy kompetencja jest użyteczna w realnej pracy agencyjnej?
3. Czy da się ją ćwiczyć, a nie tylko opowiedzieć?
4. Czy rezultat da się ukończyć w około dwie godziny?
5. Czy designer bez mocnego backgroundu developerskiego może wnieść realny wkład?
6. Czy AI jest wykonawcą systemu, a nie magicznym generatorem?
7. Czy ćwiczenie pokazuje związek między designem i kodem?
8. Czy uczestnicy muszą podejmować decyzje projektowe?
9. Czy wynik da się ocenić według jasnych kryteriów?
10. Czy materiał może później zostać reużyty w pracy agencji?
11. Czy setup techniczny jest proporcjonalny do wartości?
12. Czy format wykorzystuje obecność na żywo?
13. Czy ćwiczenie prowadzi do wspólnego języka zespołu?
14. Czy można je przygotować etapami na wcześniejszych knowledge sharingach?
15. Czy pokazuje realny workflow, a nie wyidealizowane demo?

---

## 24. Pytania decyzyjne na kolejny etap

### 24.1. Najważniejszy efekt edukacyjny

1. Jakie jedno zdanie uczestnik ma powiedzieć dzień po hackathonie?
2. Jaka jedna kompetencja ma zmienić jego codzienną pracę?
3. Czy nadrzędnym celem jest „design to system”, czy „jak pracować z AI w kodzie”?
4. Czy AI ma być głównym tematem, czy narzędziem ujawniającym wartość systemu?
5. Czy spotkanie ma bardziej zmienić mindset, czy nauczyć konkretnego workflow?
6. Co ma być trwałą wartością, nawet jeżeli używane dziś narzędzie AI się zmieni?

### 24.2. Zakres teorii

7. Jakie elementy teorii designu są konieczne, aby ćwiczenie miało sens?
8. Co można przekazać przed wyjazdem na wtorkowych knowledge sharingach?
9. Czy uczestnicy mają poznać wszystkie visual expressions, czy pracować na dwóch lub trzech?
10. Czy należy formalnie wprowadzić hierarchy, contrast, balance, unity i rhythm?
11. Czy pokazywać pełny model primitive → semantic → component?
12. Czy tłumaczyć Brand Expression Contract przed ćwiczeniem?

### 24.3. Punkt startowy

13. Czy zaczynamy od wireframe’u i contentu?
14. Czy dostarczamy gotowy branding?
15. Czy dostarczamy zatwierdzone referencje i counterexamples?
16. Czy uczestnicy dostają trzy lub cztery gotowe sekcje, z których mają wyciągnąć system?
17. Czy wykorzystujemy Fitch jako case wejściowy?
18. Czy budujemy nowy, neutralny case, aby zespół nie kopiował gotowego rozwiązania?
19. Czy ćwiczenie ma dotyczyć jednej sekcji, podstrony czy całej małej strony?
20. Czy content ma być realistyczny i długi, aby wymusić prawdziwe decyzje?

### 24.4. Rola uczestników

21. Czy wszyscy pracują w jednym repozytorium?
22. Czy grupy dzielą się rolami: art direction, system, AI operator, QA?
23. Czy designerzy mają bezpośrednio edytować kod, czy podejmować decyzje i instruować operatora?
24. Czy w każdej grupie musi być osoba bardziej techniczna?
25. Jak sprawić, żeby uczestnik bez znajomości Astro nie był tylko obserwatorem?
26. Czy grupy mają pracować na tym samym problemie dla porównania, czy na różnych sekcjach dla składania rezultatu?

### 24.5. Zakres techniczny

27. Czy używamy Codex, Claude, obu narzędzi, czy dowolnego agenta?
28. Czy uczymy wyboru modeli i skills, czy dajemy gotowy setup?
29. Czy uczestnicy mają uruchamiać projekt lokalnie?
30. Czy potrzebny jest hostowany backup?
31. Czy każdy ma fork, branch albo osobną kopię?
32. Czy używamy aktualnego pełnego startera, czy uproszczonej wersji warsztatowej?
33. Czy Brand Expression Contract ma być gotowy?
34. Czy aktywujemy obecny agent runtime i context resolver?
35. Czy ćwiczenie ma kończyć się działającym buildem?
36. Jak ograniczyć koszty i opóźnienia modeli podczas wspólnej pracy?

### 24.6. Pattern recognition i komponenty

37. Czy głównym zadaniem jest identyfikacja wspólnych wzorców?
38. Czy uczestnicy mają zdecydować „component, variant czy local composition”?
39. Czy wolno im tworzyć nowe komponenty?
40. Jak mają udowodnić, że nowy komponent jest potrzebny?
41. Czy oceniana będzie redukcja duplikacji?
42. Czy oceniana będzie jakość nazewnictwa?
43. Czy uczestnicy mają napisać krótkie agentic rules dla jednego komponentu?

### 24.7. Art direction i marka

44. Czy uczestnicy mają tworzyć creative direction, czy jedynie wykonać gotowy kierunek?
45. Jeżeli tworzą kierunek, ile swobody jest bezpieczne w dwóch godzinach?
46. Jakie dowody marki otrzymają?
47. Czy mają opisać adopt/avoid?
48. Czy każda grupa może zinterpretować tę samą markę inaczej?
49. Czy oceniamy jakość wizualną, jakość systemu, czy oba obszary osobno?
50. Kto ma prawo zatwierdzić kierunek wizualny?

### 24.8. Format interaktywny

51. Ile czasu przeznaczyć na wprowadzenie?
52. Ile na pracę grupową?
53. Ile na prezentacje i omówienie?
54. Czy przewidzieć live demo?
55. Czy live demo ma być wykonane na początku, czy dopiero po samodzielnej próbie uczestników?
56. Czy prowadzący pracuje na wspólnym ekranie?
57. Czy zespoły pokazują prompt history i decyzje, czy tylko rezultat?
58. Czy warto wprowadzić moment zmiany wymagań, aby sprawdzić elastyczność systemu?

### 24.9. Kryteria sukcesu

59. Co dokładnie oznacza „ukończone”?
60. Czy rezultat musi być responsywny?
61. Czy musi używać określonej liczby istniejących komponentów?
62. Czy może zawierać nowe tokeny?
63. Czy musi posiadać agentic rule?
64. Czy musi przejść build lub audit?
65. Jak ocenić unity i spójność bez sprowadzania oceny do gustu?
66. Czy liczy się czas wykonania?
67. Czy mierzymy liczbę lokalnych wyjątków?
68. Czy oceniamy zdolność skalowania na drugi ekran?

### 24.10. Pre-work

69. Czy pre-work jest obowiązkowy?
70. Ile maksymalnie czasu może zająć?
71. Czy wystarczy 10-minutowe video i test uruchomienia?
72. Czy repo powinno być pobrane i uruchomione przed wyjazdem?
73. Czy należy przesłać bibliotekę promptów?
74. Czy należy wcześniej nauczyć zespół obsługi Grid Visualizera, Component Info Layer i inspectora?
75. Czy warto wcześniej zrobić małe ćwiczenie exact edit na tokenie?
76. Kto sprawdzi środowiska przed wydarzeniem?

### 24.11. Wartość po hackathonie

77. Co ma pozostać po wydarzeniu?
78. Czy powstanie wewnętrzny playbook?
79. Czy starter ma stać się agencyjnym standardem?
80. Czy zespół ma później rozwijać wspólne agentic rules?
81. Czy powstanie biblioteka promptów?
82. Czy wybrane komponenty lub kontrakty zostaną przeniesione do realnych projektów?
83. Jak zbierzemy feedback?
84. Jak sprawdzimy po miesiącu, czy mindset wszedł do codziennej pracy?

---

## 25. Najważniejsze napięcia do świadomego rozstrzygnięcia

### Mindset vs tool training

Czy uczymy trwałego modelu myślenia, czy bieżącej obsługi Codex/Claude?

### Creative direction vs execution

Czy uczestnicy mają wymyślić reguły, czy zastosować gotowe reguły?

### System design vs page production

Czy sukcesem jest dobry system, czy gotowa strona?

### Designer-first vs code-first

Jak wykorzystać kod jako medium bez zamieniania warsztatu w szkolenie developerskie?

### Reuse vs creation

Czy pozwalamy grupom tworzyć nowe wzorce, czy każemy udowodnić każdą nową potrzebę?

### Real case vs neutral case

Czy Fitch zwiększy wiarygodność, czy ograniczy eksplorację?

### Pre-work vs dostępność

Ile przygotowania jest konieczne, a ile stanie się barierą udziału?

### Depth vs completeness

Czy lepiej głęboko przepracować jedną sekcję i jeden komponent, czy płytko pokazać cały proces?

---

## 26. Wstępna definicja problemu projektowego hackathonu

Na tym etapie problem można sformułować tak:

> Jak w około dwie godziny, podczas spotkania na żywo, dać głównie designerskiemu zespołowi praktyczne doświadczenie pokazujące, że design jest systemem reguł, że reguły można przełożyć na tokeny i komponenty oraz że AI potrafi szybko wykonywać ten system, jeżeli otrzyma precyzyjny język, właściwy kontekst i ograniczenia?

Ta definicja zachowuje:

- głęboką ideę;
- rolę AI;
- rolę design systemu;
- rolę kodu;
- ograniczenie czasowe;
- profil odbiorców;
- interaktywny charakter spotkania.

Nie rozstrzyga jeszcze:

- od jakiego artefaktu startujemy;
- czy projektujemy kierunek;
- czy implementujemy;
- czy pracujemy w grupach;
- czy używamy Fitch;
- jaka jest definicja ukończenia.

---

## 27. Następny etap pracy

Na bazie tego dokumentu należy teraz podjąć decyzje w następującej kolejności:

1. Zdefiniować **jeden nadrzędny efekt edukacyjny**.
2. Wybrać **jedną główną czynność uczestnika**.
3. Określić **punkt startowy** i zakres dostarczonych materiałów.
4. Ustalić **rolę AI, prowadzącego i grup**.
5. Zdefiniować **artefakt końcowy i kryteria sukcesu**.
6. Podzielić teorię między pre-work, knowledge sharingi i spotkanie na żywo.
7. Zamrozić **warsztatowy snapshot startera**.
8. Przygotować setup i backup.
9. Zbudować minutową agendę.
10. Przeprowadzić próbę czasową na jednej grupie lub samodzielnie.

Dopiero po tych decyzjach warto tworzyć:

- finalną agendę;
- prezentację;
- instrukcję dla uczestników;
- repo warsztatowe;
- prompt library;
- materiały projektowe;
- scoring;
- plan prowadzenia i facylitacji.

---

## 28. Lokalne źródła przeanalizowane przy tworzeniu raportu

### Astro Design System Starter

- `AGENTS.md`
- `AGENTIC-RULES.json`
- `AGENTIC-RULES.md`
- `DESIGN-SYSTEM-FRAMEWORK.md`
- `VARIABLE-ARCHITECTURE.md`
- `WORKFLOW.md`
- `COMPONENTS.md`
- `.agentic-rules/00-framework.md`
- `.agentic-rules/08-brand-expression.md`
- wybrane component agentic rules
- `art-direction/README.md`
- `art-direction/knowledge/*`
- `project-context/brand-foundations/brand-expression/contract.json`
- `architecture/system-map.json`
- `architecture/README.md`
- `src/data/design-system/componentArchitecture.json`
- `src/styles/tokens/*`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/dev/GridVisualizer.astro`
- `src/components/dev/ComponentInfoLayer.astro`
- `src/components/dev/ComponentsGuide.astro`
- `src/components/atoms/actions/Button.astro`
- `src/components/molecules/text/SectionHeader.astro`
- `package.json`

### Fitch

- `AGENTS.md`
- `AGENTIC-RULES.json`
- `.agentic-rules/06-design-system-verification.md`
- `README.md`
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- wybrane komponenty `src/components/sections/*`
- `src/components/dev/ComponentInfoLayer.astro`
- `src/components/guides/GridVisualizer.astro`
- `src/styles/tokens/*`
- `src/data/*`
- historia Git;
- prototypy HTML w `Fitch/prototypes`;
- `prototypes/Prompts library.md`.

---

## 29. Końcowe podsumowanie

Hackathon wyrasta z realnego połączenia teorii designu, praktyki frontendowej, design systems i pracy z AI. Jego największa potencjalna wartość nie polega na pokazaniu, że AI szybko generuje kod. Polega na pokazaniu, **dlaczego może generować wartościowy kod szybko i spójnie**:

- ponieważ decyzje zostały nazwane;
- ponieważ system ma źródła prawdy;
- ponieważ komponenty mają role i granice;
- ponieważ tokeny reprezentują znaczenie;
- ponieważ layout ma jawny język;
- ponieważ AI otrzymuje tylko potrzebny kontekst;
- ponieważ creation jest trudniejsze niż reuse;
- ponieważ art direction jest tłumaczone na obserwowalne reguły;
- ponieważ człowiek nadal zatwierdza smak, sens i jakość;
- ponieważ browser weryfikuje prawdziwy rezultat.

Najważniejsze pytanie następnego etapu nie brzmi więc:

> „Co jeszcze pokazać o AI?”

Brzmi:

> „Jakie jedno doświadczenie pozwoli zespołowi samodzielnie odkryć, że projektowanie systemu jest potężniejsze niż projektowanie kolejnego odizolowanego ekranu — i jak wykorzystać AI, aby tę różnicę natychmiast zobaczyć w działaniu?”
