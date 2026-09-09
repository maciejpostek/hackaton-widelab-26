# Hackathon 2026 — Widehue Light

Finalny wizualny wariant przewodnika uczestnika. Treści i logika pochodzą z `../hackathon-flow-solo/index.html`. Oryginał pozostaje bez zmian. Branding pochodzi z `../widehue/`: lokalne Sequel Sans, logo oraz tokeny kolorów, odstępów i typografii.

## Uruchomienie

Otwórz `index.html` w przeglądarce lub uruchom z folderu `hackathon-guide`:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Otwórz http://127.0.0.1:8080/. Przy przenoszeniu lub udostępnianiu skopiuj cały folder, nie tylko HTML. Nie ma instalacji, frameworka, CDN, backendu ani zewnętrznych zasobów wymaganych do wyświetlenia strony. Linki inspiracji prowadzą do zewnętrznych serwisów.

## Struktura

- `index.html`: zaślepka „In prompt we trust” z datami 11.09 i 12.09; „Zaczynamy” prowadzi do `agenda.html`.
- `intro/`: niezależna kopia stylów i zasobów z `../widelab-hackathon-main/site/`; bez stylów przewodnika.
- `agenda.html`: dotychczasowy przewodnik — trzy etapy, 11 zadań, jeden krok opcjonalny oraz AI tips.
- `css/tokens.css`: kopia tokenów Widehue i lokalnych definicji fontów.
- `css/flow.css`: jasny interfejs; H1, H4 oraz 18 px dla pozostałych tekstów, w tym kodu.
- `js/flow.js`: skrypt wyodrębniony bez zmian z prototypu.
- `assets`: lokalne fonty i logo.

Postęp zapisuje się pod oryginalnym kluczem `hackathon-2026-solo-flow-v1`. Na tym samym originie jest wspólny z prototypem. Nie ma migracji między adresami HTTP, portami ani file://; dostępność zapisu przy bezpośrednim otwarciu zależy od przeglądarki. Niedostępny storage nie zatrzymuje pracy w aktualnej sesji. Otwarcie/zamknięcie accordionów nie jest zapisywane — tak jak w źródle.

## Kwestie przed udostępnieniem

Pozostawione zgodnie ze źródłem, bez wymyślania adresów:

1. Pobranie startera Astro — `data-missing-link="astro-starter"`.
2. Pobranie strategii Markdown — `data-missing-link="strategy-markdown"`.
3. CSS Awards w liście inspiracji — pusty URL.

Kliknięcie tych pozycji wyświetla „Link do uzupełnienia”. Treści o Claude, Mecha i kroku 0 są zachowane dosłownie. Przewodnik nie wykonuje zawartych w nim komend.

## Weryfikacja — 9 września 2026

- Automatyczne porównanie potwierdziło identyczność całego HTML timeline’u, panelu AI tips i kodu JS ze źródłem. Obejmuje teksty, prompty, linki, identyfikatory i kolejność zadań oraz źródła inspiracji.
- Przeglądarka: wykonanie/cofnięcie zadań, odtworzenie po odświeżeniu, ukończenie etapu bez opcjonalnej Figmy, komunikat kopiowania, brakujący link, 6 → 28 inspiracji i ukrycie Load more.
- Panel AI tips: zamknięcie przyciskiem, Escape i kliknięciem poza panelem; focus klawiatury widoczny.
- Szerokości 1440, 768 i 390 px: bez poziomego przepełnienia strony, fonty i logo załadowane, brak błędów konsoli. Sprawdzono dodatkowo viewport 720 × 450, odpowiadający przestrzeni CSS 1440 × 900 przy zoomie 200%; rzeczywistego zoomu przeglądarki nie zmieniano.
- Test funkcji w izolacji: blokada odczytu/zapisu localStorage nie zgłasza wyjątku; fallback kopiowania obsługuje powodzenie i błąd.
- Bezpośredni podgląd file:// został zablokowany przez narzędzie przeglądarkowe; wizualne testy przeprowadzono przez lokalny HTTP. Struktura zasobów jest względna i nie wymaga serwera ani fetch.

## Animacja nazwy na stronie głównej

`intro/brand-reveal.js` wykorzystuje lokalne GSAP i SplitText 3.13.0 (`intro/vendor/`) do zamiany Widehue / Widelab co 10 sekund. Animowany jest cały wiersz. Preferencja reduced motion wyłącza tę animację, a ukrycie karty ją pauzuje. Biblioteki pochodzą z pakietu npm `gsap@3.13.0`, pobranego przez jsDelivr; informacje licencyjne zachowano w nagłówkach plików. Dokumentacja: https://gsap.com/docs/v3/Plugins/SplitText/
