# Mecha Shift — kontekst strategiczny produktu

**Brief do próby warsztatowej · 6 września 2026**  
**Język briefu:** polski. **Język aplikacji i landing page’a:** angielski.

Mecha Shift jest fikcyjnym produktem przygotowanym do przetestowania procesu hackathonu. Poniższe ustalenia symulują wynik pierwszego dnia: strategię produktu oraz zaprojektowany scenariusz aplikacji. Założenia ćwiczenia zaakceptowano w planie przygotowania briefu; potrzeby odbiorców i wartość biznesowa pozostają hipotezami bez walidacji rynkowej. Dokument pozwala rozpocząć architekturę informacji, konkretne copy i wireframe’y promującej produkt strony.

## 1. Kontekst marki i miejsce produktu

**Kontekst ze źródła.** [Strona referencyjna Mecha](https://mecha-xyz.webflow.io/), odczytana 6 września 2026, przedstawia grupę skupioną na robotyce, fizycznej automatyzacji i zastosowaniu technologii w tradycyjnych branżach. Opisuje działalność inwestycyjną i operacyjną oraz przedsięwzięcia związane m.in. z recyklingiem i robotyką. Jest punktem odniesienia dla marki, a nie dowodem istnienia Mecha Shift. Wyniki prezentowane na tej stronie dotyczą opisanych tam przedsięwzięć i nie stanowią dowodów skuteczności naszego produktu.

**Założenie ćwiczenia.** Mecha Shift to webowa aplikacja B2B do koordynowania sprzątania biurowców, w którym uczestniczą roboty i ludzie. Pomaga połączyć harmonogram z informacją o wykonaniu oraz wskazać osobę odpowiedzialną za rozwiązanie problemu. Korzysta z robotów posiadanych przez firmę; marka i model sprzętu nie zostały wybrane.

W symulacji przyjmujemy etap prototypu demonstracyjnego. Przyjmujemy abonament dla firmy sprzątającej, bez cen i szczegółów rozliczenia. Relacja produktu z Mecha jest założeniem warsztatowym, a nie deklaracją rzeczywistej oferty grupy.

## 2. Odbiorcy i sytuacja użycia

**Klientem** jest firma sprzątająca obsługująca kilka biurowców i wykorzystująca już roboty do części powtarzalnych prac. **Nabywcą** jest osoba zarządzająca operacjami: odpowiada za realizację usług, obsadę i obsługę zgłoszeń klientów. Chce wiedzieć, czy zaplanowana praca została wykonana i czy zespół potrafi reagować na problemy.

**Głównym użytkownikiem** jest koordynator zmiany. Rozpoczyna pracę od sprawdzenia obiektów, zadań i dostępności robotów. W trakcie zmiany śledzi wyjątki, przydziela interwencje pracownikom i przekazuje informacje kolejnej osobie. Pracownik wykonujący interwencję jest uczestnikiem procesu; osobna aplikacja pracownicza nie należy do zakresu prototypu.

W przyjętym scenariuszu koordynator porównuje harmonogram w arkuszu, statusy w panelu robota oraz wiadomości od zespołu. Informacja, że robot przerwał zadanie, nie wyjaśnia jeszcze, kto zajmie się przeszkodą ani czy sprzątanie zostanie dokończone. Na koniec zmiany trzeba odtworzyć przebieg prac z kilku źródeł.

Najważniejsze potrzeby to rozpoznanie zadań wymagających uwagi, przypisanie odpowiedzialności i wiarygodne przekazanie statusu. To hipotezy tego case’u, nie wyniki przeprowadzonych wywiadów. Punktem porównania są arkusze, komunikatory i osobne panele urządzeń; analiza konkretnych konkurentów pozostaje zadaniem zespołu.

## 3. Propozycja wartości i argumenty zakupowe

**Obietnica produktu:** koordynator widzi w jednym miejscu plan, wykonanie i problemy wymagające pomocy człowieka, dzięki czemu może prowadzić zmianę na podstawie wspólnego obrazu sytuacji.

| Funkcja | Korzyść dla użytkownika | Znaczenie dla nabywcy |
| --- | --- | --- |
| Planowanie zadań według obiektu, strefy, czasu i robota | Wiadomo, co ma zostać wykonane i gdzie | Czytelny plan realizacji usług |
| Monitorowanie oraz przypisanie interwencji | Wyjątek ma status i osobę odpowiedzialną | Możliwość sprawdzenia, jak zespół obsługuje problemy |
| Raport zmiany z historią zadań | Łatwiejsze przekazanie pracy i wyjaśnienie zaległości | Wgląd w wykonanie zamiast samej listy zaplanowanych czynności |

Proponowany wyróżnik to powiązanie pracy robota z odpowiedzialnością człowieka za dokończenie zadania. Na stronie można pokazać ten mechanizm poprzez scenariusz aplikacji. Jego przewaga nad konkretnymi rozwiązaniami wymagałaby osobnego sprawdzenia.

Przewidywane obiekcje kupującego dotyczą zgodności z posiadanym sprzętem, dodatkowych obowiązków koordynatora oraz sposobu oceny wykonania. Demonstracja powinna pokazać drogę od alertu do zamknięcia zadania. Nie obiecujemy integracji z każdym robotem, określonych oszczędności ani potwierdzenia jakości sprzątania na podstawie samego statusu urządzenia. Celem komunikacji jest kontrola procesu i współpraca ludzi z robotami; redukcja zatrudnienia nie jest argumentem tego produktu.

## 4. Zakres aplikacji i scenariusz użytkownika

Zakres demonstracyjny obejmuje jedną zmianę w wybranym biurowcu. Koordynator pracuje w przeglądarce, głównie na komputerze. Może zaplanować zadanie, przejrzeć jego stan, przypisać interwencję i sprawdzić raport. Statusy mają nazwy: **Planned**, **In progress**, **Needs attention**, **Completed**.

Przykładowy przebieg:

1. Koordynator wybiera biurowiec i planuje sprzątanie lobby: wskazuje strefę, przedział czasu oraz dostępnego robota. Zadanie trafia do planu jako **Planned**.
2. W symulacji robot rozpoczyna pracę. Zadanie otrzymuje status **In progress**, widoczny na planie zmiany.
3. Na trasie pojawia się przeszkoda. Aplikacja pokazuje **Needs attention**, przyczynę zatrzymania i zadanie wymagające interwencji. Inne zadania zachowują własne statusy.
4. Koordynator przypisuje dostępnego pracownika do usunięcia przeszkody. Po interwencji zapisuje potwierdzenie. Symulowany robot wznawia pracę; zamknięcie zgłoszenia samo w sobie nie oznacza ukończenia sprzątania.
5. Dopiero symulowany komunikat o zakończeniu pracy zmienia status na **Completed**. Raport zachowuje informację o przeszkodzie i interwencji. Nierozwiązany problem pozostawia zadanie nieukończone i widoczne do przekazania kolejnej zmianie.

Powiadomienia, dane urządzeń i reakcje robota są symulowane. Prototyp nie obejmuje rzeczywistego sterowania sprzętem, integracji, optymalizacji tras, rozliczeń, prognoz AI ani autonomicznego przydzielania ludzi do pracy. Odpowiedzialność za decyzję o interwencji pozostaje po stronie koordynatora.

## 5. Zakładany prototyp po pierwszym dniu

**Plan zmiany / Shift overview.** Wybrany obiekt, lista zadań z czasem, strefą, robotem i statusem oraz możliwość dodania zadania. Zadania wymagające uwagi można łatwo odnaleźć. Planowanie odbywa się w tym widoku.

**Szczegóły zadania / Task details.** Informacje o zadaniu, przebieg zdarzeń, przyczyna problemu, przypisana osoba i potwierdzenie interwencji. Ten widok pokazuje różnicę między obsłużeniem zgłoszenia a ukończeniem całej pracy.

**Raport wykonania / Shift report.** Zestawienie zadań ukończonych i nieukończonych oraz historia wyjątków. Widać, co wymaga dalszego działania. Raport dotyczy realizacji zadań; nie jest certyfikatem czystości obiektu.

Wszystkie widoki korzystają z tego samego scenariusza i spójnych danych demonstracyjnych. Sukces prototypu oznacza możliwość przejścia opisanej ścieżki oraz pozostawienia nierozwiązanego wyjątku bez fałszywego oznaczenia sukcesu. Ten brief opisuje zakładany prototyp; jego pliki, zrzuty ekranu i działający link nie zostały jeszcze przygotowane.

## 6. Założenia komunikacyjne landing page’a

Strona ma zainteresować osobę zarządzającą operacjami firmy sprzątającej i doprowadzić do prośby o demonstrację Mecha Shift. **Główne CTA: Book a demo.** Rozmowa ma pozwolić omówić sposób pracy firmy i wymagania dotyczące sprzętu. Formularz, adres kontaktowy i terminarz nie są jeszcze ustalone; w wireframe CTA pozostaje oznaczoną akcją do późniejszego podłączenia.

Hierarchia argumentów: najpierw wspólny obraz pracy ludzi i robotów, następnie obsługa wyjątków z przypisaną odpowiedzialnością, potem możliwość sprawdzenia i przekazania wykonania. Mechanizm działania jest głównym materiałem dowodowym demonstracji. Brakuje klientów, referencji i zmierzonych rezultatów; nie zastępujemy ich wymyślonymi statystykami.

Komunikacja będzie po angielsku, rzeczowa, konkretna i zrozumiała dla osoby operacyjnej. Preferowane pojęcia to *shift, task, site, robot, intervention, completion*. Pokazujemy czynność i jej znaczenie; unikamy ogólników o rewolucji AI i obietnic pełnej autonomii. Są to zasady komunikacji tego przykładu, nie formalny tone of voice całej grupy Mecha.

Zespół wyprowadzi z briefu własną architekturę informacji i finalne teksty. Robocze 2–4 sekcje mają wystarczyć do zrozumienia produktu, jego wartości i następnego kroku; ich liczba oraz układ zależą od próby. Wireframe’y powstają z konkretnym copy przed dopracowaniem warstwy wizualnej.

## 7. Materiał do pracy wizualnej i otwarte kwestie

Zgodnie z ustaleniem organizatora zachowujemy bazowe kolory i typografię Mecha. Moodboard rozwija sposób fotografowania lub ilustrowania sytuacji, prezentację interfejsu i motion. Warto pokazać konkretną sytuację operacyjną: robot wykonuje pracę w biurowcu, człowiek rozwiązuje wyjątek, aplikacja łączy te zdarzenia.

| Potrzebny materiał | Zastosowanie | Stan |
| --- | --- | --- |
| Trzy widoki aplikacji | Pokazanie funkcji i przebiegu pracy | Do zaprojektowania i przygotowania |
| Wizualizacja robota w lobby | Wyjaśnienie fizycznego kontekstu produktu | Do wyboru lub stworzenia; bez deklaracji modelu sprzętu |
| Krótka sekwencja zmiany statusów | Pokazanie obsługi wyjątku | Opcjonalne motion po ustaleniu interfejsu |

Osoba odpowiedzialna za komunikację szuka benchmarków i układa narrację. Druga przygotowuje inspiracje oraz moodboard. Trzecia składa wireframe’y w Astro, a następnie przenosi zaakceptowane inspiracje do strony, wykorzystując istniejące komponenty i wskazując rzeczywiste braki biblioteki.

**Niewiadome:** zgodność ze sprzętem, dostępność danych urządzeń, warunki wdrożenia, ceny i mierzalne efekty. Pozostają tematami do przyszłej walidacji. Kontekst marki z sekcji 1, fikcyjne ustalenia produktu oraz zasady komunikacji są rozdzielone, aby można było później przekazać je do właściwych źródeł kontekstu w Mecha.
