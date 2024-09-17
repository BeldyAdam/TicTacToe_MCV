import TTTController from "./controller/TTTController.js";

new TTTController();

// A program belépési pontja a main.js ahol példányosítjuk a Controller-t. Ő példányosítja a modellt és a view-t és feliratkozik az eseménykezelőre. itt hívja meg a viewt. A modell dolga hogy előállítsa a következő állapotot. A lepteto metodus feladata beállítani a következő szimbolumot és növeli a léptetőszámot. (Bővítés ellenőrző metódus a léptető metódus után). A Controller lekéri az akt. állapotát a listának úgy tudja már megjeleníteni a View az aktuális pályát. Tehát a View feladata megjeleníteni az aktuális pályát. A View az infot a controllertől kapja a Modellel nem kommunikál. A mező Class-ban a gombKattintba hozzuk létre a saját eseményt ahol megkapjuk hogy melyik elemre lett kattintva.
