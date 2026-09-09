# Hackathon Mecha — flow warsztatu i scenariusz prowadzącego

**Status:** roboczy materiał do zbudowania strony dla uczestników, prezentacji i speechu.  
**Założenie:** drugi dzień hackathonu, około 2 godzin, praca w grupach nad landing page’em produktu stworzonego poprzedniego dnia.

## 1. Cel spotkania

Uczestnicy mają zaprojektować i zbudować w Astro fragment landing page’a promującego produkt opracowany dzień wcześniej. Korzystają z gotowego startera Mecha z design systemem, komponentami, assetami i regułami dla agenta AI.

To nie jest szkolenie z Astro ani konfiguracji agentów. Celem jest twórcza praca na gotowym systemie: eksperymentowanie, łączenie kompetencji zespołu i stworzenie dwóch dopracowanych sekcji o wyraźnym pomyśle komunikacyjnym i wizualnym. Dwie sekcje są celem rekomendowanym, ponieważ pozwalają zbudować krótkie doświadczenie scrollowania. Jedna bardzo dobra sekcja jest akceptowalnym minimum.

### Najważniejsze komunikaty

- Nie budujemy całego, wielostronicowego serwisu.
- Celem są dwie dopracowane sekcje; jedna działająca sekcja jest minimum.
- AI nie ma „zrobić strony za nas”. Człowiek wybiera kierunek, ocenia efekt i prowadzi iteracje.
- Pracujemy sekcja po sekcji, podając agentowi konkretny kontekst, inspiracje i oczekiwany układ.
- Strony poszczególnych grup mogą być zupełnie różne. Można używać 3D, animacji, gotowych skryptów i zewnętrznych narzędzi, o ile zespół kontroluje zakres i licencję materiałów.
- To również test rozwijanego systemu Mecha. Błędy są możliwe, a feedback uczestników jest częścią wartości hackathonu.

## 2. Proponowana agenda — 120 minut

| Czas | Etap | Rezultat |
| --- | --- | --- |
| 0:00–0:02 | Okładka i cel | Wszyscy wiedzą, co budujemy i dlaczego. |
| 0:02–0:05 | Mapa procesu i strona warsztatowa | Uczestnicy wiedzą, gdzie są pliki, kroki, prompty i linki. |
| 0:05–0:10 | Starter i design system | Rozumieją, co już dostali i po co jest dokumentacja. |
| 0:10–0:15 | Grid Guides, praca wielowątkowa i Figma MCP | Potrafią precyzyjnie wskazać agentowi element, rozdzielić zadania i pobrać node z Figmy. |
| 0:15–0:20 | Krótkie pytania, check-in i uruchomienie | Każda grupa rozumie flow i widzi lokalny projekt w przeglądarce. |
| 0:20–0:35 | Import strategii, koncept i architektura informacji | AI pracuje, zespół podejmuje decyzję, a efektem jest plan dwóch sekcji. |
| 0:35–1:43 | Praca zespołowa i iteracje | Powstają dwie dopracowane sekcje tworzące krótki scroll experience. |
| 1:43–1:55 | Dobrowolne prezentacje | Chętne grupy pokazują rezultat i krótko omawiają proces. |
| 1:55–2:00 | Zamknięcie i ankieta | Zebrany feedback i jasny sposób zachowania rezultatów. |

Jeżeli przygotowanie techniczne odbywa się dopiero na sali, blok 0:15–0:20 może się wydłużyć. Nie należy skracać końcowego zapisu rezultatów i ankiety; lepiej wcześniej ograniczyć zakres do jednej sekcji.

## 3. Scenariusz krok po kroku

### Etap 0 — preflight przed wydarzeniem

Najlepiej wcześniej zidentyfikować osoby, na których komputerach będą działały projekty Astro, i wysłać im krótką instrukcję przygotowania. Instalacja Node.js może być szybka, więc pojedyncze braki da się uzupełnić na miejscu, ale wcześniejsze przygotowanie zmniejszy ryzyko różnic systemowych i problemów z uprawnieniami.

Każda grupa powinna mieć:

- komputer osoby, która będzie obsługiwała projekt;
- zainstalowane Node.js w wersji wymaganej przez starter;
- działające narzędzie AI i wystarczający limit użycia;
- pobraną oraz rozpakowaną paczkę startera w jednoznacznie nazwanym folderze, np. `[NAZWA-PRODUKTU]-landing`;
- możliwość otwarcia tego folderu jako projektu w Claude;
- dostęp do strategii/PDF-u, prototypu z dnia 1, brandingu Mecha i Figmy;
- autoryzowane połączenie Figma MCP, jeżeli grupa chce z niego korzystać;
- sprawdzone uruchomienie projektu oraz jedną próbną zmianę.

Na stronie warsztatowej trzeba podać dokładną wymaganą wersję Node.js, instrukcję dla macOS/Windows, właściwą komendę instalacji zależności — jeśli jest potrzebna — oraz sposób rozpoznania, że projekt uruchomił się poprawnie.

### Etap 1 — intro: po co tu jesteśmy

**Widok:** okładka strony warsztatowej.

**Proponowany speech:**

> Celem dzisiejszego hackathonu jest zaprojektowanie landing page’a dla produktu, który stworzyliście wczoraj. Będziemy pracować w Astro na gotowym starterze Mecha. Starter zawiera przygotowany design system i kontekst marki, więc nie zaczynamy od pustej kartki. Nie uczymy się dziś Astro ani nie konfigurujemy całego systemu od zera. Używamy go jako narzędzia do szybkiego, kreatywnego prototypowania. Naszym celem są dwie dopracowane sekcje, które razem stworzą krótkie doświadczenie scrollowania. Jeżeli powstanie jedna naprawdę dobra i działająca sekcja, to także jest wartościowy rezultat.

Następnie krótko zapowiedz przebieg spotkania:

> Najpierw pokażę Wam cel, starter i sposób pracy z systemem. Potem zrobimy krótką sekcję pytań, uruchomicie projekty i przejdziecie przez trzy krótkie prompty: import strategii, wybór konceptu i plan dwóch sekcji. Kiedy AI będzie wykonywało pierwsze większe zadanie, ja i Maciek przejdziemy po sali. Pomożemy grupom, którym brakuje elementu setupu albo u których coś trzeba jeszcze uruchomić lub poprawić. Chcemy, żeby po tej pierwszej rundzie każda grupa mogła już działać samodzielnie.

Warto od razu powiedzieć, że nie jest to konkurs i że różnorodność rezultatów jest pożądana.

Po demonstracji systemu zostaw 2–3 minuty na pytania dotyczące przebiegu i uruchomienia. Pytania projektowe najlepiej rozwiązywać później przy konkretnych rezultatach grup, aby nie przedłużać wspólnego intro.

### Etap 2 — orientacja na stronie warsztatowej

**Widok:** mapa całego flow.

Pokaż, że strona jest wspólnym centrum warsztatu i zawiera:

- paczkę startera do pobrania;
- strategię marki i materiały produktu;
- kolejne kroki procesu;
- trzy krótkie prompty prowadzące przez strategię, koncept i architekturę informacji oraz prompty pomocnicze do implementacji;
- linki do inspiracji, bibliotek i narzędzi;
- troubleshooting i instrukcję oddania rezultatu;
- link do ankiety końcowej.

**Proponowany speech:**

> To jest Wasza mapa warsztatu. Nie musicie zapamiętywać całej instrukcji. Znajdziecie tu pliki, kroki, prompty i materiały pomocnicze. Prompty są punktem startowym, nie sztywnym scenariuszem. Możecie je modyfikować zgodnie z kierunkiem swojej grupy.

### Etap 3 — co znajduje się w starterze

**Widok:** dokumentacja design systemu.

Najpierw opisz system ogólnie, a dopiero potem pokaż przykłady. Nie wyliczaj na początku wszystkich zasobów.

Starter zawiera między innymi:

- fundamenty: typografia, kolory, sizing, spacing, layout i motion;
- `brand.md` opisujący wizualny język marki;
- komponenty z krótką dokumentacją ich roli komunikacyjnej i UX-owej;
- assety: logotypy, ikony Mecha, Material Symbols, social media, flagi i wizuale z istniejącej strony;
- podgląd komponentów oraz ich stanów;
- agentic rules i routing wskazujący agentowi, jaki kontekst ma przeczytać przed tworzeniem i modyfikowaniem sekcji.

**Sedno wyjaśnienia:** przewaga tego setupu nie polega tylko na gotowych kolorach i stylach. Agent zna przeznaczenie komponentów, fundamenty marki i lokalizację kontekstu strategicznego, dzięki czemu powinien pracować spójniej i bardziej przewidywalnie.

Dodaj uczciwe zastrzeżenie: system jest rozwijany i agent czasem może użyć niewłaściwego komponentu albo coś zepsuć. Uczestnicy powinni oceniać rezultat, cofać się do ostatniej działającej wersji i zgłaszać problemy w ankiecie.

### Etap 4 — jak precyzyjnie współpracować z agentem

**Widok:** działający starter z włączonym Grid Guides.

Pokaż na żywo jedną małą zmianę:

1. Włącz ikonę **Grid Guides** w prawym dolnym rogu.
2. Pokaż 12-kolumnowy grid.
3. Najedź na komponent, aby zobaczyć jego nazwę.
4. Kliknij komponent, aby skopiować identyfikator w formacie zbliżonym do `component-name tag`.
5. Wklej identyfikator do promptu i poproś o jedną konkretną zmianę.

Wyjaśnij, że grid służy również do komunikowania kompozycji, np. „tekst w kolumnach 1–4, główny wizual w kolumnach 5–12”. Dzięki temu grupa może świadomie budować asymetrię, rytm i hierarchię zamiast prosić ogólnie o „ładniejszy layout”.

**Wzorzec dobrego polecenia:**

> Zaktualizuj `[IDENTYFIKATOR KOMPONENTU]`. Na desktopie umieść blok tekstowy w kolumnach 1–4, a wizual w kolumnach 5–12. Zachowaj tokeny i istniejące komponenty design systemu. Użyj załączonej inspiracji jako wskazówki dotyczącej kompozycji, nie kopiuj jej dosłownie. Najpierw krótko opisz plan zmiany, potem ją zaimplementuj i sprawdź rezultat.

### Etap 5 — Figma MCP i materiały zewnętrzne

Jeżeli grupa chce użyć elementu z Figmy:

1. Otwiera właściwy plik i zaznacza konkretny node.
2. Kopiuje link do zaznaczonego elementu przez **Share / Copy link**.
3. Wkleja link agentowi i precyzuje, czy chce pobrać asset, odtworzyć komponent, czy potraktować element jako referencję.

Nie każda grupa musi korzystać z MCP. Jeżeli autoryzacja nie działa, eksport assetu ręcznie jest szybszą ścieżką awaryjną niż diagnozowanie integracji podczas warsztatu.

### Etap 5A — praca wielowątkowa z AI

Nie prowadźcie całego projektu w jednym, coraz dłuższym wątku. Zakładajcie osobne wątki dla jasno wydzielonych zadań, na przykład:

- kierunek i poprawki typografii;
- komponent `eyebrow`;
- hero i jego kompozycja;
- copy konkretnej sekcji;
- asset lub animacja;
- kontrola mobile i końcowy QA.

Dzięki temu kontekst każdego zadania pozostaje czytelny, a niezależne elementy mogą powstawać równolegle. Grupa nie musi czekać, aż jeden agent skończy całe zadanie, zanim rozpocznie kolejne. Na początku wystarczą 2–3 aktywne wątki. Nie chodzi o tworzenie kilkunastu lub kilkudziesięciu rozmów, nad którymi zespół straci kontrolę.

**Zasada bezpieczeństwa:** równoległe wątki powinny mieć rozłączne zakresy. Nie należy zlecać dwóm agentom jednoczesnej edycji tego samego komponentu, pliku ani wspólnych tokenów. Każdy wątek powinien otrzymać konkretny zakres, informację, czego nie zmieniać, oraz kryterium zakończenia. Jedna osoba w grupie odpowiada za integrację i po każdej zakończonej zmianie sprawdza wspólny podgląd.

**Proponowany sposób pracy:**

1. Nazwij wątek zgodnie z zadaniem, np. `Hero — layout i motion`.
2. Podaj agentowi nazwę projektu, cel zadania i konkretny komponent.
3. Zaznacz pliki lub obszary, których nie wolno zmieniać.
4. Uruchamiaj równolegle tylko zadania, które nie dotykają tego samego kodu.
5. Po zakończeniu każdej zmiany sprawdź stronę przed rozpoczęciem kolejnej rundy.

**Wzorzec promptu otwierającego wątek:**

> Ten wątek dotyczy wyłącznie `[OBSZAR / KOMPONENT]` w projekcie `[NAZWA]`. Celem jest `[REZULTAT]`. Najpierw przeczytaj właściwą dokumentację systemu i sprawdź aktualną implementację. Możesz zmieniać `[DOZWOLONY ZAKRES]`. Nie modyfikuj `[PLIKI / KOMPONENTY WSPÓŁDZIELONE]` ani pozostałych sekcji. Po każdej zmianie sprawdź, czy projekt nadal działa, i krótko podsumuj zmienione pliki.

**Proponowany speech:**

> Traktujcie wątki jak osobne stoliki robocze. Typografia może mieć swój wątek, eyebrow swój, a animacja hero jeszcze inny. Zacznijcie od dwóch lub trzech aktywnych wątków i pilnujcie, żeby nie dotykały jednocześnie tego samego miejsca. Nie chodzi o to, żeby otworzyć 25 rozmów i przestać wiedzieć, co się gdzie dzieje. Jedna osoba powinna pilnować integracji. I oczywiście róbmy to rozsądnie — chcemy przyspieszyć pracę, a nie ustanowić dziś rekord zużycia tokenów.

### Etap 6 — check-in techniczny i start projektu

Poproś każdą grupę o potwierdzenie dopiero wtedy, gdy:

- paczka znajduje się w docelowym folderze;
- dokładnie ten folder jest otwarty jako projekt w Claude;
- terminal działa w katalogu projektu;
- uruchomiono `npm run dev`;
- lokalny adres otwiera się w przeglądarce i widać stronę startową.

Na ekranie warto wyświetlić checklistę oraz oczekiwany adres/port. Prowadzący lub wyznaczona osoba techniczna pomaga tylko grupom, które nie potwierdziły gotowości.

### Etap 7 — przeniesienie strategii do startera

**Prompt 0: import strategii** — jego ostateczna treść powinna odpowiadać faktycznej strukturze plików startera.

Przed uruchomieniem promptu poproś uczestników o wybranie mocnego modelu, który dobrze radzi sobie z analizą wielu plików i złożonym rozumowaniem. W Twoim środowisku OpenAI/Codex mogą to być używane przez Ciebie modele Astra lub Sol. Dostępność i dokładne nazwy modeli trzeba sprawdzić w dniu warsztatu; uczestnicy korzystający z innego narzędzia powinni wybrać jego odpowiednik o wysokich możliwościach rozumowania.

Mocniejszy model wybieramy tu przede wszystkim dla jakości analizy strategii i architektury informacji. Nie należy obiecywać identycznego czasu wykonania: zależy on od narzędzia, modelu, obciążenia, limitów i wielkości kontekstu. Żeby uniknąć niepotrzebnie długiej pracy, prompt powinien mieć jasny zakres i konkretny rezultat.

#### Jak dobierać model do zadania

| Rodzaj zadania | Rekomendacja |
| --- | --- |
| Analiza strategii, wybór konceptu i architektura informacji | Mocniejszy model — ważniejsza jest jakość rozumowania i spójność decyzji. |
| Budowa lub większa przebudowa komponentu, złożona animacja | Mocniejszy model, zwłaszcza gdy zadanie obejmuje kilka zależności lub plików. |
| Poprawa jednego tekstu, koloru, odstępu lub drobnego zachowania | Szybszy, lżejszy model — rezultat powinien pojawić się szybciej i taniej. |
| Prosta eksploracja kilku wariantów | Lżejszy model do wariantów, mocniejszy dopiero do dopracowania wybranego kierunku. |

**Zasada:** nie używamy najmocniejszego modelu automatycznie do każdej kosmetycznej poprawki. Dobieramy koszt i czas do trudności decyzji.

Roboczy wzorzec:

> Przeczytaj załączony PDF ze strategią produktu stworzonego podczas pierwszego dnia. Najpierw zapoznaj się z dokumentacją projektu i regułami dotyczącymi plików strategicznych. Przenieś istotny kontekst produktu do właściwych plików w starterze, zachowując rozdział między potwierdzonymi faktami, założeniami i brakującymi informacjami. Nie twórz jeszcze interfejsu. Na końcu podsumuj, jakie pliki utworzyłeś lub zmieniłeś, oraz wskaż pytania i luki, które mogą wpłynąć na landing page.

Jeżeli copy lub ton komunikacji są słabe, grupa może wrócić do tych plików i dopracować strategię lub tone of voice. To jest źródło dla kolejnych sekcji, nie jednorazowy import.

#### Obchód techniczny podczas pracy AI

Gdy wszystkie grupy uruchomią pierwszy prompt, Ty i Maciek przechodzicie po sali. Jest to celowo zaplanowane okno na wyrównanie gotowości technicznej bez zatrzymywania całego warsztatu.

Sprawdzacie przede wszystkim:

- czy otwarty jest właściwy folder projektu;
- czy lokalny serwer nadal działa i podgląd jest dostępny;
- czy PDF został poprawnie załączony;
- czy wybrano właściwy model i zadanie faktycznie się wykonuje;
- czy grupa ma dostęp do dokumentacji, Figmy i potrzebnych materiałów;
- czy nie pojawił się problem z limitem, autoryzacją lub konfiguracją.

Nie przerywajcie działającego zadania tylko dlatego, że innej grupie skończyło się szybciej. Grupy, które zakończą wcześniej, mogą przeczytać podsumowanie agenta, oznaczyć braki w strategii i przygotować się do promptu o architekturę informacji.

### Etap 8 — koncept komunikacyjny

Zanim agent zaproponuje strukturę lub zacznie cokolwiek implementować, zespół powinien ustalić ogólny koncept prezentacji produktu. To osobna decyzja: jaki jest główny komunikat, co ma poczuć odbiorca, czym produkt ma się wyróżniać i jaki kierunek kreatywny najlepiej to wyrazi.

**Prompt 1: propozycje konceptu.**

> Na podstawie strategii produktu i kontekstu marki zaproponuj 3 różne koncepty komunikacyjne landing page’a. Dla każdego podaj: główną ideę w jednym zdaniu, obietnicę dla odbiorcy, proponowany ton, możliwy motyw wizualny oraz ryzyko lub kompromis. Nie twórz jeszcze architektury strony ani kodu. Odpowiedź przedstaw jako krótką, numerowaną listę możliwą do omówienia przez zespół.

Po otrzymaniu propozycji zespół nie przechodzi automatycznie dalej. Powinien:

1. omówić kierunki;
2. wybrać jeden albo połączyć najlepsze elementy;
3. dopisać własne pomysły i inspiracje;
4. zatwierdzić jednozdaniowy koncept, który będzie podstawą strony.

### Etap 9 — architektura informacji

**Prompt 2: plan dwóch sekcji.**

Do tego zadania również warto użyć modelu o wysokich możliwościach rozumowania. Agent musi połączyć strategię produktu, zasady marki, cele odbiorcy i ograniczony czas wykonania w jedną sensowną strukturę — jest to ważniejsza decyzja niż późniejsza kosmetyczna korekta pojedynczego komponentu. Przy prostych, lokalnych poprawkach można później przełączać się na szybszy i tańszy model.

Po uruchomieniu promptu o architekturę informacji AI może pracować przez kilka minut, a czas będzie różny między grupami. To jest główne okno na dalszy obchód sali: Ty i Maciek pomagacie dokończyć setup, sprawdzacie problemy i upewniacie się, że wszystkie grupy będą mogły dalej działać samodzielnie. Grupy nie powinny biernie patrzeć na ekran — w tym czasie mogą dzielić role, zbierać inspiracje i wybierać możliwe kierunki wizualne.

Roboczy wzorzec:

> Na podstawie plików strategicznych i zatwierdzonego konceptu zaproponuj architekturę informacji w formie krótkiej, numerowanej listy. Skup się na dwóch sekcjach, które razem stworzą logiczne doświadczenie scrollowania. Dla każdej podaj: cel komunikacyjny, główny komunikat, proponowaną treść, potrzebny dowód lub asset, rolę w przejściu do następnej sekcji oraz oczekiwaną akcję odbiorcy. Oznacz elementy wymagające niepotwierdzonych danych. Nie implementuj jeszcze strony i nie generuj komponentów.

Po otrzymaniu wyniku grupa:

1. sprawdza, czy struktura rzeczywiście komunikuje produkt;
2. poprawia słabe, generyczne albo nieprawdziwe teksty;
3. potwierdza dwie sekcje do wykonania albo świadomie ogranicza zakres do jednej;
4. ustala, po czym pozna, że efekt jest wystarczająco dobry.

**Komunikat prowadzącego:** pierwszy wynik nie będzie wizualnie skończoną stroną — i tak ma być. System wspiera pracę człowieka, a nie zastępuje decyzje projektowe.

### Etap 10 — podział ról i produkcja

Grupa sama dopasowuje role do umiejętności. Możliwe odpowiedzialności:

- osoba prowadząca agenta i integrująca zmiany w Astro;
- osoba odpowiedzialna za strategię, strukturę i copy;
- osoba szukająca inspiracji i budująca kierunek artystyczny;
- osoba tworząca lub pozyskująca assety, 3D, motion albo kod animacji;
- osoba sprawdzająca spójność, responsywność i działanie strony.

W mniejszej grupie jedna osoba może pełnić kilka ról. Ważne, aby jedna osoba była właścicielem aktualnej wersji projektu i żeby zespół uzgadniał kierunek przed równoległym produkowaniem assetów.

Jeżeli zespół pracuje w wielu wątkach AI, integrator pilnuje dodatkowo, aby zakresy edycji się nie nakładały oraz aby kolejny wątek zaczynał od aktualnego stanu projektu.

Inspiracje należy zbierać w jednym miejscu, np. w folderze `references` wewnątrz projektu, z krótką nazwą opisującą ich zastosowanie. Wklejając inspirację agentowi, trzeba powiedzieć, co dokładnie z niej bierzemy: kompozycję, rytm, typografię, zachowanie w ruchu czy sposób ekspozycji produktu.

### Etap 11 — główny blok pracy

Rekomendowana pętla dla każdej sekcji:

1. Zdefiniuj cel sekcji i jedno zdanie, które odbiorca ma zrozumieć.
2. Wybierz właściwe komponenty i assety z systemu.
3. Dodaj 1–3 konkretne inspiracje.
4. Opisz layout za pomocą gridu i zachowania na desktopie oraz mobile.
5. Poproś o implementację jednej sekcji.
6. Obejrzyj rezultat w przeglądarce.
7. Wskaż agentowi konkretny komponent i jedną grupę zmian.
8. Sprawdź treść, responsywność, czytelność i podstawowe interakcje.
9. Zachowaj działającą wersję przed większą iteracją.

**Przykładowy prompt do sekcji:**

> Zbuduj sekcję `[NAZWA]`, której celem jest `[CEL KOMUNIKACYJNY]`. Odbiorca po jej obejrzeniu ma zrozumieć `[JEDEN KOMUNIKAT]`. Skorzystaj z istniejących komponentów i tokenów Mecha. Na desktopie `[OPIS KOLUMN]`, na mobile `[KOLEJNOŚĆ I ZACHOWANIE]`. Załączone referencje wykorzystaj w następujący sposób: `[CO BIERZEMY Z KAŻDEJ REFERENCJI]`. Nie zmieniaj pozostałych sekcji. Po implementacji sprawdź stronę i wymień kompromisy lub brakujące assety.

**Przykładowy prompt do iteracji:**

> Pracuj tylko nad `[IDENTYFIKATOR KOMPONENTU]`. Obecny problem to `[KONKRETNY PROBLEM]`. Zmień `[ZAKRES]`, zachowując `[ELEMENTY, KTÓRYCH NIE WOLNO ZMIENIAĆ]`. Oceń efekt na desktopie i mobile. Nie przebudowuj całej strony.

W czasie pracy prowadzący może zrobić dwa krótkie checkpointy, bez zatrzymywania wszystkich grup:

- około 45. minuty: czy każda grupa ma wybrany zakres i działającą pierwszą sekcję;
- około 85. minuty: zamrożenie zakresu, dopracowanie, mobile i przygotowanie do pokazu.

### Etap 12 — prezentacje rezultatów

Na 15 minut przed końcem ogłoś koniec dodawania nowych funkcji. Chętne grupy pokazują projekt przez maksymalnie 2–3 minuty i odpowiadają na trzy pytania:

1. Co produkt komunikuje i którą część landing page’a zbudowaliście?
2. Jaka decyzja wizualna lub interakcyjna jest dla Was najciekawsza?
3. Co w systemie i pracy z AI pomogło, a co przeszkadzało?

Brak pełnej strony nie jest porażką. Pokaz może dotyczyć jednej dobrej sekcji, ciekawego assetu, animacji albo wartościowego eksperymentu.

### Etap 13 — zamknięcie

Na końcu:

- wskaż sposób zapisania i przekazania projektu;
- poproś o link lub spakowany folder według jednej ustalonej konwencji;
- pokaż kod QR/link do krótkiej ankiety;
- podziękuj za test systemu i wyjaśnij, że feedback posłuży do jego dalszego rozwoju.

## 4. Co powinno znaleźć się na stronie dla uczestników

Strona powinna być kompletnym, prostym i uporządkowanym przewodnikiem, z którego uczestnicy mogą korzystać samodzielnie. Może zawierać więcej kontekstu niż prezentacja. Speech prowadzącego obejmuje tylko najważniejsze decyzje, demonstrację i momenty wspólnego przejścia dalej; reszta informacji pozostaje na stronie do przeczytania w odpowiednim kroku.

1. **Okładka:** cel, czas, oczekiwany rezultat.
2. **Start tutaj:** krótka checklista gotowości i download paczki.
3. **Mapa flow:** setup → import strategii → wybór konceptu → architektura dwóch sekcji → budowa → iteracja → pokaz.
4. **Starter i design system:** skrócony opis oraz link do dokumentacji.
5. **Grid Guides:** krótka instrukcja, animowany przykład lub screenshot.
6. **Praca wielowątkowa:** kiedy tworzyć nowy wątek, jak rozdzielać zakres i unikać konfliktów.
7. **Figma MCP:** autoryzacja, kopiowanie linku do node’a, wariant ręczny.
8. **Prompty:** import strategii, warianty konceptu, plan dwóch sekcji oraz małe prompty zadaniowe z przyciskiem „kopiuj”.
9. **Inspiracje i narzędzia:** pogrupowane według zastosowania, nie jedna długa lista.
10. **Troubleshooting:** najczęstsze problemy i szybka ścieżka awaryjna.
11. **Oddanie projektu i feedback:** instrukcja, deadline, ankieta i opcjonalny pokaz.

### Kategorie linków do uzupełnienia

Nie publikować przypadkowej listy. Dla każdego narzędzia podać zastosowanie, dostępność, koszt/licencję oraz próg wejścia.

- inspiracje i kuracja stron: Awwwards, Curated Design, Pinterest, inne wybrane źródła;
- animacje i interakcje: Osmo oraz biblioteki faktycznie dostępne zespołowi;
- layout/wireframe: narzędzia używane w firmie, ewentualnie Relume, jeśli ma realną rolę w flow;
- assety, ikony, 3D i motion: tylko sprawdzone źródła z jasną licencją;
- dokumentacja: Astro, starter Mecha, Figma MCP i używane narzędzie AI.

## 5. Jak poprowadzić komunikację

### Co już działa w koncepcji

- Cel jest praktyczny i bezpośrednio łączy oba dni hackathonu.
- Ograniczenie do kilku sekcji dobrze chroni jakość i czas.
- Akcent na sterowanie AI przez człowieka odróżnia warsztat od bezrefleksyjnego generowania.
- Grid Guides i identyfikatory komponentów dają uczestnikom konkretny język współpracy z agentem.
- Swoboda narzędzi pozwala wykorzystać różne kompetencje w zespołach.
- Otwarte powiedzenie, że system jest w budowie, tworzy przestrzeń na użyteczny feedback.

### Co uprościć w speechu

- Nie wyliczaj wszystkich elementów startera w intro. Najpierw powiedz: „macie gotowy system”, a szczegóły pokaż na ekranie.
- Nie tłumacz wielokrotnie, czym warsztat nie jest. Jedno krótkie zdanie o braku szkolenia z Astro wystarczy.
- Oddziel instrukcję od filozofii. Najpierw uczestnik powinien wiedzieć, co ma kliknąć i jaki jest rezultat kroku; uzasadnienie dodaj w jednym zdaniu.
- Demonstrację ogranicz do jednej zmiany komponentu. Kilka przykładów przed rozpoczęciem pracy obniży energię i zabierze czas.
- Używaj stałych nazw: **starter**, **folder projektu**, **strona warsztatowa**, **Grid Guides**, **strategia produktu**. Unikaj zamiennego nazywania tych samych rzeczy setupem, frameworkiem i systemem bez wyjaśnienia.

### Narracja w jednym zdaniu

> Bierzemy strategię produktu z dnia pierwszego, wybieramy koncept i wspólnie z agentem budujemy dwie spójne sekcje, które tworzą krótkie doświadczenie landing page’a.

### KPI i definition of done

**Cel rekomendowany:** dwie połączone narracyjnie sekcje, dzięki którym można doświadczyć krótkiego scrolla.

**Minimum:** jedna kompletna, działająca i dopracowana sekcja.

Rezultat jest dobry, jeżeli:

- wynika ze strategii produktu i komunikuje właściwą wartość;
- jest spójny z marką Mecha i korzysta z jej systemu;
- ma czytelną hierarchię, kompozycję i sensowne copy;
- zawiera świadomą, kreatywną decyzję wizualną, asset lub interakcję;
- działa technicznie w lokalnym podglądzie;
- jest responsywny i sprawdzony przynajmniej na desktopie oraz mobile;
- dwie sekcje tworzą logiczne przejście i nie wyglądają jak dwa przypadkowe komponenty;
- zespół potrafi krótko uzasadnić najważniejsze decyzje.

## 6. Braki i decyzje do domknięcia

### Krytyczne przed warsztatem

- [ ] Dokładna nazwa paczki i folderu projektu.
- [ ] Jednoznaczny link do pobrania oraz numer wersji paczki.
- [ ] Wymagana wersja Node.js i instrukcja instalacji dla obsługiwanych systemów.
- [ ] Czy przed `npm run dev` trzeba wykonać `npm install`.
- [ ] Dokładny lokalny adres i port oraz screenshot poprawnego widoku.
- [ ] Zweryfikowana treść obu głównych promptów zgodna ze strukturą startera.
- [ ] Docelowy PDF/format strategii przekazywany po dniu 1.
- [ ] Procedura autoryzacji Figma MCP i potwierdzenie, komu jest naprawdę potrzebna.
- [ ] Osoba zapewniająca wsparcie techniczne, aby prowadzący nie zatrzymywał całej sali.
- [ ] Sposób oddania projektów, konwencja nazw i właściciel miejsca zbiórki.
- [ ] Link do ankiety oraz 4–6 krótkich pytań.
- [ ] Zgoda na prezentowanie rezultatów lub jasna informacja, gdzie będą przechowywane.

### Warto dodać

- [x] „Definition of done”: celem są dwie spójne sekcje dające doświadczenie scrolla; minimum to jedna działająca sekcja zgodna ze strategią i marką, kreatywna oraz sprawdzona na desktopie i mobile.
- [ ] Jedną wzorcową sekcję lub krótkie demo pokazujące docelowy poziom, ale nie narzucające stylu.
- [ ] Gotowy folder `references` oraz instrukcję nazewnictwa assetów.
- [ ] Krótką zasadę dotyczącą licencji, poufności i niewklejania wrażliwych materiałów do niezatwierdzonych usług.
- [ ] Instrukcję „jak wrócić do działającej wersji” odpowiednią do faktycznego startera.
- [ ] Informację, że chwilowy 404 lub błąd podczas przebudowy może ustąpić po zakończeniu pracy agenta i odświeżeniu.
- [ ] Widoczny timer oraz przypomnienie o zamrożeniu zakresu przed prezentacjami.

### Ścieżki awaryjne

| Problem | Reakcja |
| --- | --- |
| Brak Node.js lub projekt nie startuje | Skorzystać z krótkiej instrukcji instalacji i pomocy podczas pierwszego zadania AI. Przy problemie systemowym przenieść grupę na sprawdzony komputer lub działającą kopię. |
| Brak internetu | Pracować na lokalnym starterze i pobranych materiałach; skoncentrować się na strukturze, copy i dostępnych assetach. |
| Limit lub awaria AI | Przekazać operatora z dostępnym kontem lub użyć wcześniej zatwierdzonego narzędzia zastępczego. |
| Nie działa Figma MCP | Wyeksportować konkretny asset ręcznie i umieścić go w folderze projektu. |
| Agent zepsuł stronę | Zatrzymać kolejne zmiany, wrócić do ostatniej działającej wersji zgodnie z przygotowaną instrukcją i zawęzić następny prompt. |
| Grupa nie zdąży | Zamrozić zakres do jednej sekcji i dopracować jej treść, layout oraz mobile. |

## 7. Proponowana ankieta końcowa

1. Na ile starter pomógł Ci szybciej osiągnąć spójny wizualnie rezultat? Skala 1–5.
2. Która część systemu była najbardziej pomocna?
3. Co było niejasne albo nie działało zgodnie z oczekiwaniem?
4. Czy agent poprawnie korzystał ze strategii i istniejących komponentów? Podaj przykład.
5. Co należałoby zmienić w instrukcji, promptach lub dokumentacji?
6. Czy chciał(a)byś użyć podobnego setupu w prawdziwym projekcie? Dlaczego?

## 8. Skrócona karta prowadzącego

1. Cel: produkt z dnia 1 → landing page w Astro.
2. Zakres: celem są dwie spójne sekcje; jedna dobra sekcja jest minimum.
3. Pokaż stronę warsztatową i mapę flow.
4. Pokaż system: fundamenty, komponenty, assety, agentic rules.
5. Zademonstruj Grid Guides, kopiowanie identyfikatora i jedną zmianę.
6. Pokaż osobne wątki, rozłączne zakresy i rolę integratora.
7. Wspomnij Figma MCP i ręczny fallback.
8. Check-in: folder, Claude, `npm run dev`, działający podgląd.
9. Krótkie pytania organizacyjne i techniczne.
10. Wybór mocnego modelu; prompt 0: import strategii.
11. Podczas pracy AI: obchód techniczny z Maćkiem.
12. Prompt 1: trzy koncepty; zespół wybiera i zatwierdza jeden.
13. Prompt 2: architektura informacji i plan dwóch sekcji.
14. Podział ról, inspiracje i iteracja sekcja po sekcji.
15. Checkpointy: pierwszy działający fragment, potem zamrożenie zakresu.
16. Prezentacje chętnych, zapis projektu i ankieta.
