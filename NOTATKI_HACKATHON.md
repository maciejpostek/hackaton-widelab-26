# Notatki do komunikacji podczas hackathonu

Wspólny inbox na przemyślenia dotyczące tego, co warto poprawić oraz co wyjaśnić uczestnikom, aby lepiej rozumieli, dlaczego poszczególne elementy działają w określony sposób.

## Zebrane uwagi

_Kolejne uwagi będą dopisywane poniżej._
# Notatki do materiałów dla uczestników

## Przejściowe błędy strony podczas pracy agenta

Jeżeli podczas pracy agenta pojawi się pełnoekranowy błąd strony, np. 404, albo strona chwilowo nie będzie mogła się poprawnie odświeżyć, nie musi to oznaczać trwałej awarii. Agent może w tym momencie wprowadzać zmiany w aplikacji działającej na danym porcie. W trakcie aktualizacji komponentów i ponownego budowania projektu strona może być przez chwilę niedostępna lub wyświetlać ekran błędu.

Po zakończeniu przebudowy widok powinien automatycznie wrócić do prawidłowego stanu lub zacząć działać po ponownym odświeżeniu. Takie przejściowe ekrany błędów mogą się pojawiać podczas wykonywania zadania, a po zakończeniu pracy agenta aplikacja powinna ponownie wyświetlać się normalnie.
