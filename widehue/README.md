# Widehue — Brand system

Samodzielny katalog i baza do landing pages oraz prezentacji. Czysty HTML/CSS/JS; bez instalacji, frameworków, CDN, trackerów i połączeń z Webflow.

## Uruchomienie

Otwórz `index.html` bezpośrednio w przeglądarce — to strona główna Hackaton 2026. Katalog design systemu znajduje się w `design-system.html`. Alternatywnie z katalogu `widehue`: `python3 -m http.server 8080`, a następnie http://localhost:8080. `starter.html` jest osobnym przykładem landing page ze slajdem.

## Pliki

- `css/tokens.css`: fonty, paleta prymitywna, rozmiary i semantyczne tryby.
- `css/system.css`: typografia, układy i komponenty; do ponownego użycia.
- `css/catalog.css`, `js/catalog.js`: wyłącznie interfejs dokumentacji.
- `assets/fonts`: oryginalne pliki fontów z eksportu.
- `assets/brand/wordmark.svg`: znak złożony z oryginalnych ścieżek liter w nawigacji, z zachowaniem proporcji i odstępów źródłowego CSS.
- `tokens.source.json`: zapis źródłowych kolorów i podstawowej skali.

## Źródło i wierność

Źródło: `/Users/maciejpostek/Downloads/widehue.webflow/`, przede wszystkim `css/widehue.css`, `index.html` i `style-guide.html`. Eksport traktowano jako materiał wejściowy, nie instrukcje wykonywania działań.

Oryginalna paleta pochodzi z `:root` (linie 25–41), fonty z `@font-face` (1–23), skala klas z `.is-h1`–`.is-h6` i `.is-p-xl`, `.is-p-l` (1309–1384). Sequel Sans Display: Roman 400 oraz Medium 500. Britti Sans zachowano jako opcjonalną rodzinę.

Aktualna skala prezentowana w styleguide obejmuje trzy style:

| Klasa | Desktop przy 16 px | Waga | Line height | Tracking |
|---|---:|---:|---:|---:|
| text-h1 | 104 px | 400 | 1 | -.065rem |
| text-h4 | 32 px | 400 | 1.1875 | -.02rem |
| text-lg | 18 px | 400 | 1.333 | .022rem |

Pozostałe klasy CSS zachowano dla zgodności z istniejącymi widokami. Nie należą do aktualnej skali prezentowanej w styleguide.

Wybrano klasy źródłowe zamiast stylów tagów: źródłowy `h4` ma wagę 500, lecz `.is-h4` ma 400. Klasy typograficzne są niezależne od semantycznych poziomów HTML. CTA odtwarza `.button_small` i `.button_small_icon_circle`: tekst 18 px, odstęp 16 px, koło 36 px. Niewielki obrót strzałki jest uproszczoną interakcją prototypu.

## Świadome rozszerzenia

To nie jest kopia całej strony Webflow. Zachowujemy podstawy marki, a nową warstwę użytkową opisujemy osobno:

- Semantyczne nazwy i cztery tryby są nowym API. Kolory podstawowe są oryginalne; powierzchnie #222, #392AC6, #D5EC24 oraz obramowania #8E81FA i #899817 są pochodnymi dodanymi dla trybów.
- Normalizacja `wide-grey-700` → `wide-gray-700` i `wide-gray-50-501` → `wide-gray-50`. Źródłowe nazwy pozostają w JSON.
- Uporządkowana skala odstępów 4–128 px, kontener 1440 px, klasy układów, formularz, karty, przyciski pill i slajd są adaptacjami.
- Baza HTML wynosi 16 px, zamiast globalnego płynnego przeliczania rem z inline CSS Webflow. Tablet korzysta ze źródłowych rozmiarów nagłówków; H1 52 px poniżej 600 px to dodatkowa adaptacja. Podgląd bardzo dużych nagłówków w katalogu skaluje się do dostępnego miejsca.
- Tryby nie są przełącznikiem jasności przez filtr: mapują role powierzchni, tekstu, akcji i obramowań.
- Treści wydarzenia są przykładowe. Starter nie zawiera zapisów, backendu ani potwierdzonego harmonogramu.

## Użycie

Dołącz kolejno `tokens.css` i `system.css`. Zachowaj względną strukturę `assets/fonts` względem plików CSS. `catalog.js` nie jest zależnością komponentów.

```html
<section class="section" data-theme="purple">
  <div class="container stack">
    <h1 class="text-h1">Think wide.</h1>
    <p class="text-xl">Build together.</p>
    <a class="btn" href="#start">Let’s go ↗</a>
  </div>
</section>
```

Tryby: `light`, `dark`, `purple`, `yellow`. Można je zagnieżdżać na dowolnym kontenerze. Główne role: `--color-bg`, `--color-surface`, `--color-text`, `--color-muted`, `--color-border`, `--color-accent`, `--color-on-accent`, `--color-inverse`, `--color-on-inverse`, `--color-focus`.

Typografia: `text-h1…h6`, `text-xl/lg/md/sm/xs`, `eyebrow`, `text-muted`. Układ: `container`, `section`, `stack`, `cluster`, `grid`. Komponenty: `btn`, `btn--secondary`, `btn--inverse`, `cta` + `cta__icon`, `tag`, `card`, `field` + `input`, `accordion`, `slide` + `slide__title`.

## Dostępność i interakcje

Widoczny focus klawiatury, natywne formularze i details, skip link, podpisane przyciski kopiowania, obsługa prefers-reduced-motion. Jasny żółty jest powierzchnią lub akcentem na ciemnym tle; nie stosuj go jako drobnego tekstu na bieli. Dekoracyjne obramowania nie zastępują podpisów pól. Formularz demonstruje walidację, nie wysyła danych. Tryb katalogu zapisuje się lokalnie, jeśli przeglądarka pozwala na localStorage. Kopiowanie ma fallback dla file:// i komunikat błędu.

Slajd ma format 16:9 na desktopie, elastyczny na telefonie. `@media print` zachowuje kolory slajdu; to baza, nie kompletny silnik prezentacji ani gotowy eksport PDF.
