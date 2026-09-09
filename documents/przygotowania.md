# Hackaton Widelab 2026 — przygotowania

**Stan na 2026-09-06.** Podstawa: [aktualny kontekst organizatora](context/hackathon-ai-native-design-system.md). Data wydarzenia i terminy przygotowań nie zostały jeszcze podane.

## Co mamy, a czego nie potwierdziliśmy

Przed porządkowaniem w projekcie były trzy dokumenty: raport strategiczny z 30 lipca, skrót z 31 lipca i indeks. Raport zachowano z oznaczeniem historycznym; skrót i indeks zaktualizowano. Ten plik jest jedyną nową listą przygotowań.

| Obszar | Potwierdzony stan |
| --- | --- |
| Cel i format | Ustalone: wspólne zespoły przez dwa dni, produkty Mecha z dnia 1, jeden lokalny landing page w dwie godziny dnia 2, bez rywalizacji. |
| Fundament projektowy | Organizator potwierdza istniejący branding Mecha i zaprojektowaną stronę. Raport opisuje starter i Fitch według stanu z lipca. |
| Ankieta, składy grup i dostępy | W tym projekcie nie ma pytań, odpowiedzi, listy grup ani potwierdzeń kont i limitów. |
| Brief i materiały warsztatowe | Przygotowano [fikcyjny brief Mecha Shift](brief-probny-mecha-shift.md) zgodnie z planem zaakceptowanym przez organizatora. Brak plików prototypu, uzgodnionego z prowadzącymi szablonu briefu, instrukcji, prezentacji, promptów i treści wiadomości. |
| Paczka i próba Mecha | W tym projekcie brak raportu gotowości, paczki i wyników próby. Implementacji Mecha nie sprawdzano w ramach tego przeglądu. |
| Dystrybucja | Plan: pliki przez Drive, instrukcje przez Notion lub prezentację. Brak wskazanych lokalizacji i potwierdzeń dostępu. Loom pozostaje opcją. |

**Oznaczenia:** „do przygotowania” = brak materiału w tym projekcie; „do ustalenia” = otwarta decyzja; „do potwierdzenia” = potrzebny wynik sprawdzenia. Nie przesądza to o stanie prac poza tym projektem. `[x]` zaznaczamy dopiero po potwierdzeniu wyniku. Numery O/M/D służą do wskazywania zależności.

## Checklista — organizacja

Koordynacja: prowadzący drugi dzień. Dodatkowe osoby i terminy przypisujemy przy ustaleniu zakresu.

- [ ] **O1 · Do ustalenia — termin i warunki.** Potwierdzić daty obu dni, liczbę uczestników, blok dwóch godzin, warunki pracy i pokazu: internet, zasilanie, ekran oraz osobę do pomocy technicznej. Wynik: dane pozwalające wyznaczyć terminy ankiety, grup, próby i przekazania pakietu.
- [ ] **O2 · Do przygotowania — ankieta i zebranie odpowiedzi.** Krótkie pytania o kompetencje, narzędzia, AI, konta i licencje, role oraz gotowość do obsługi środowiska; uwzględnić system operacyjny osoby składającej stronę. Uzgodnić kanał, termin odpowiedzi i ewentualną pomoc Zosi. Wynik: gotowe pytania, następnie odpowiedzi zebrane przez organizatora.
- [ ] **O3 · Do ustalenia — zespoły.** Na podstawie ankiety uzgodnić z Kasią i Maćkiem grupy około trzyosobowe na oba dni, preferowane role i osobę obsługującą AI w każdej grupie. Wynik: potwierdzone składy przed dniem 1. Zależność: O2, D4.
- [ ] **O4 · Do potwierdzenia — konta, limity i sprzęt.** Z każdą osobą obsługującą AI potwierdzić narzędzie, działający dostęp, limity i komputer do pracy; oszacowanie zużycia oprzeć na próbie. Ewentualny wyższy plan lub budżet przekazać do decyzji organizatora. Wynik: potwierdzenie dla każdej grupy i wykaz braków. Dostępy sprawdzamy po O3; ocenę wystarczających limitów uzupełniamy po M6.
- [ ] **O5 · Do przygotowania — materiały do próby i korekta scenariusza.** Przygotować roboczą instrukcję startu, krótki zestaw promptów i szkic intro obejmujący stronę, bibliotekę i Guides. Po próbie poprawić zakres, role i materiały oraz ustalić podział czasu; wtedy dopracować prezentację i komplet promptów. Wersja próbna korzysta z D1–D3 i M1–M5; finalna powstaje po M6.
- [ ] **O6 · Do przygotowania — prosta ścieżka awaryjna.** Wybrać reakcję na limit AI, problem z uruchomieniem i brak internetu na podstawie znanych dostępów z O4 i sposobu uruchomienia z M5. Przygotować wariant do przetestowania podczas M6, a po próbie go poprawić. Wynik: krótka instrukcja dla grup oraz sprawdzone zasoby wskazane w sekcji propozycji.
- [ ] **O7 · Do przygotowania — pakiet i komunikacja.** Wybrać Notion lub prezentację jako kanał aktualnych instrukcji, ustalić lokalizację plików na Drive, przygotować wiadomości i sprawdzić dostęp z perspektywy uczestnika. Dodać krótką listę inspiracji i opcjonalnych narzędzi po ankiecie, z kosztem, licencją i progiem nauki. Zależność: O2, O5–O6, M7. Udostępnienie i wysyłkę wykonuje organizator.
- [ ] **O8 · Do potwierdzenia — gotowość grup przed wydarzeniem.** Każda grupa pobiera docelową paczkę, uruchamia podgląd i wykonuje jedną zmianę przez AI; organizator zbiera potwierdzenia i rozwiązuje zgłoszone problemy. Zależność: O3–O4, O7, M7. Nie zostawiać pierwszego uruchomienia na dwugodzinny warsztat.

## Checklista — zadania techniczne w Mecha

Poniżej wymagania do przekazania do projektu Mecha, nie deklaracja wykonania. Osoba odpowiedzialna za realizację wymaga przypisania. Kod i dokumentacja techniczna powstają tam; tutaj zapisujemy wynik odbioru.

- [ ] **M1 · Do potwierdzenia — branding i kontekst marki.** Skonfigurować lub potwierdzić typografię, kolory, pozostałe fundamenty Mecha oraz dostęp AI do strategii i tone of voice. Wynik: zaakceptowana baza wizualna oparta na istniejących materiałach.
- [ ] **M2 · Do potwierdzenia — komponenty i ich podgląd.** Przygotować wystarczający zestaw komponentów do różnych produktów, aktualną dokumentację, bibliotekę oraz Guides / Component Info Layer. Wynik: uczestnik znajduje komponent i kopiuje jego nazwę z podglądu bez inspektora.
- [ ] **M3 · Do potwierdzenia — briefy i działanie agentów.** Ustalić miejsce briefu w lokalnej kopii, rozdzielić kontekst marki i produktu grupy, sprawdzić routing oraz reużywanie komponentów. Wynik: AI korzysta z właściwego briefu, tworzy konkretne copy, rozpoznaje braki danych i nie dopisuje niepotwierdzonych faktów. Zależność: D1–D3, M1–M2.
- [ ] **M4 · Do potwierdzenia — strona przykładowa i assety.** Przygotować przykład na briefie próbnym oraz prosty sposób wstawiania grafik i innych materiałów. Wynik: spójna strona do pokazania i wzorzec pracy, który nie narzuca każdej grupie tej samej narracji. Zależność: D3, M1–M3.
- [ ] **M5 · Do potwierdzenia — uruchomienie z paczki.** Przygotować kopię testową z wymaganiami środowiska i sprawdzonymi krokami startu; uwzględnić systemy operacyjne z ankiety. Wynik: uruchomienie świeżo rozpakowanego projektu i edycja przez AI, bez wymogu GitHuba, commitów, branchy i pushy. Zależność: O2, M1–M4.
- [ ] **M6 · Do przygotowania — próba całego procesu i raport.** Przejść w Mecha od przykładowego briefu przez architekturę informacji, copy i komponenty do lokalnej strony, podmiany assetów i poprawek. Zmierzyć czas etapów, zużycie AI, potrzebną pomoc i zachowanie w scenariuszu awaryjnym. Wynik: raport przekazany tutaj z wersją paczki, środowiskiem, problemami i korektami. Zależność: D3, M1–M5 oraz robocze materiały z O5–O6. Jeśli składy grup są jeszcze otwarte, do próby użyć potwierdzonego konta i komputera osoby testującej.
- [ ] **M7 · Do potwierdzenia — finalna paczka warsztatowa.** Wprowadzić poprawki z próby, sprawdzić lokalną stronę na desktopie i mobile oraz ponowne uruchomienie z paczki; oznaczyć wersję i przekazać pliki do dystrybucji. Wynik: jedna wskazana, sprawdzona wersja, zgodna z instrukcją uczestnika. Zależność: M6 i korekty z O5–O6.

## Checklista — ustalenia z prowadzącymi pierwszy dzień

Do uzgodnienia przez organizatora z Kasią i Maćkiem.

- [ ] **D1 · Do ustalenia — zawartość briefu.** Potwierdzić wspólny szablon według pól z aktualnego kontekstu: produkt, odbiorca, problem, wartość, funkcje, cel strony, działanie odbiorcy, język i ton, fakty / założenia / niewiadome. Wynik: uzgodniony szablon, który da się wypełnić podczas dnia 1.
- [ ] **D2 · Do ustalenia — sposób przekazania wyników.** Uzgodnić format eksportu z systemu dnia 1, dostęp do prototypu i materiałów, osobę zbierającą komplet oraz moment przekazania. Wynik: jeden jednoznaczny zestaw wejściowy na grupę, dostępny przed dniem 2, oddzielony od pozostałych grup i wspólnej strategii marki.
- [ ] **D3 · Do potwierdzenia — komplet wejścia do próby.** Gotowy [brief Mecha Shift](brief-probny-mecha-shift.md) zawiera fikcyjną strategię, scenariusz i opis trzech widoków aplikacji, zgodnie z planem zaakceptowanym przez organizatora. Można użyć go do próby architektury informacji i copy. Pozostają: potwierdzenie z prowadzącymi zgodności ze spodziewanym wynikiem dnia 1 oraz przygotowanie prototypu lub reprezentatywnego fragmentu do próby z assetami. Wynik: komplet materiałów do M3–M6.
- [ ] **D4 · Do ustalenia — ciągłość zespołów i oczekiwań.** Potwierdzić dobór grup na podstawie ankiety, ten sam skład przez oba dni i sposób wyjaśnienia, jak produkt z dnia 1 przechodzi w stronę promocyjną dnia 2. Wynik: wspólne ustalenie prowadzących, wykorzystane w O3 i komunikacji.

## Najbliższe działania — proponowana kolejność

1. **Domknąć podstawy organizacyjne i wejście z dnia 1:** O1, D1–D2. Przygotować zwięzłą propozycję briefu do omówienia z Kasią i Maćkiem.
2. **Przygotować ankietę i sposób jej zebrania:** O2. Może powstawać równolegle z uzgodnieniami briefu; odpowiedzi odblokują skład grup, wybór narzędzi i sprawdzenie komputerów.
3. **Przekazać wymagania M1–M7 do Mecha i ustalić stan oraz odpowiedzialność za ich realizację.** Dołączyć aktualny kontekst; szczegóły wejścia uzupełnić po D1–D3. Odebrać informację, co już działa, czego brakuje i co blokuje próbę.
4. **Przeprowadzić próbę na zaakceptowanym przykładzie:** D3, robocza część O5, M6. Propozycja: włączyć jedną osobę o niewielkim doświadczeniu technicznym, żeby sprawdzić zrozumiałość instrukcji.
5. **Na podstawie wyników ustalić agendę i zakres, dopracować materiały, wydać paczkę oraz sprawdzić gotowość grup:** O4–O8, M7. Szczegółowej prezentacji i wszystkich promptów nie rozpisujemy na tym etapie.

## Brakujące decyzje i propozycje

| Kiedy potrzebne | Decyzja | Propozycja do rozważenia |
| --- | --- | --- |
| Teraz, do harmonogramu | Data, liczba osób, osoby odpowiedzialne i terminy ankiety, grup oraz próby | Wyznaczyć terminy od daty wydarzenia; grupy muszą być znane przed dniem 1, a próba i test uruchomienia odbyć się przed warsztatem. |
| Przed próbą | Format briefu, eksport prototypu, miejsce i odpowiedzialność za przekazanie | Jeden krótki brief na grupę plus dostępny prototyp; wspólne materiały marki przekazywane osobno. |
| Po ankiecie i próbie | Narzędzie AI dla operatorów, limity, ewentualny budżet i pomoc techniczna | Korzystać z posiadanych narzędzi, dla których sprawdzimy workflow. Dodatkowy koszt oceniać tylko tam, gdzie wykryjemy konkretny brak. |
| Po próbie, przed finalizacją pakietu | Minimalny zakres strony i zachowanie CTA | Pierwsza wersja obejmuje produkt i korzyść, najważniejsze funkcje oraz jasne CTA; liczba sekcji wynika z próby. Wybrać wykonalne lokalnie działanie, aby integracje nie zwiększyły zakresu. |
| Przed dystrybucją | Notion czy prezentacja; czy potrzebny Loom; lokalizacja Drive | Jeden kanał aktualnych instrukcji i jeden folder z oznaczoną wersją paczki. Loom tylko jeśli próba wykaże, że pomaga przy starcie. |
| Przed testem gotowości grup | Wariant awaryjny | Limit AI: wcześniej sprawdzone alternatywne narzędzie lub osoba z dostępnym kontem. Problem ze startem: sprawdzona kopia na komputerze zapasowym. Brak internetu: lokalna wersja przykładowa i materiały do pracy nad treścią oraz assetami. Potwierdzić dostępność i przetestować; ten ostatni wariant ogranicza zakres pracy z AI. |

Odbiór przygotowań opiera się na uzgodnionym wejściu z dnia 1, potwierdzonych zespołach i dostępach, raporcie próby, sprawdzonej paczce oraz gotowych instrukcjach i ścieżce awaryjnej. Otwartych punktów nie zamieniamy w „gotowe” na podstawie samego planu.
