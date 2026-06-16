# Crossle

React wordle oefening via Net Ninja:
[Youtube](https://www.youtube.com/watch?v=ZSWl5UwhHcs&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX)

## Bij te houden

- 5 letters woord raden, bv.: `squid`
- vorige gissingen tonen
  - een array van vorige gissingen
  - elke vorige gissing is an array van letters object `[{}, {}, {}, {}, {}]`
  - elk object representeert een letter in de gissing `{key: "s", color: "yellow"}`
- huidige gissing tonen
  - string `hello`
- keypad tonen
  - array van letter objects `[{key: "a", color: "grey"}, {key: "b", color: "grey"}, ...]`
- aantal beurten bijhouden
  - een number van 0 tot 6

## Spelverloop

- invoeren woorden:
  - gebruiker voert een letter en een vierkantje is gekleurd met het letter
  - wanneer een gebruiker een letter verwijdert, wordt het vorige letter verwijderd
  - wanneer een gebruiker op enter drukt, wordt het letter gevalideerd
    - als alle vierkantjes niet gevuld zijn met letters, dan wordt er geen validatie gedaan
    - als het woord bij het vorige gissing is geraden, dan wordt het woord niet gevalideerd
- controleren van gevalideerde woorden
  - elk letter is gecontroleerd of het matcht met het geheim woord
  - elk letter krijgt een kleur afhankelijk van de validatie
    - groen: letter is op de juiste plek
    - geel: letter is in het woord maar op de verkeerde plek
    - grijs: letter is niet in het woord
  - de gissing woirdt toegevoegd aan de grid met de correcte kleur
  - huidige gissing verplaatst naar het volgende rij
  - keypad wordt geupdate met de correcte kleur
- beindigen van het spel
  - wanneer de gissing woord volledig gematcht is met het antwoord
    - model zegt "Gefeliciteerd!
  - wanneer de gebruiker 6 beurten heeft gehad zonder het woord te raden
    - model zegt "Game Over! Het woord was: [geheim woord]"
