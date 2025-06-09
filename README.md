📦 React Pokédex – API Request con Pagination
🗓️ Esercizio #REACT 01 – 09/06/2025
Questo progetto è una semplice Pokédex realizzata con React che effettua richieste API alla PokéAPI, con supporto a:

useState e useEffect

Navigazione tra pagine (Next / Previous)

Gestione delle chiamate con Axios

Cancellazione delle richieste con AbortController

🚀 Funzionalità
✅ Richiesta asincrona della lista dei Pokémon
✅ Visualizzazione dei nomi Pokémon per pagina
✅ Navigazione tra pagine (paginazione)
✅ Gestione corretta del ciclo di vita delle chiamate con AbortController

🧰 Tecnologie utilizzate
React (Vite o CRA)

Axios

JavaScript (ES6+)

PokéAPI REST endpoint

CSS base (opzionale)

📦 Installazione
Clona il repository:

bash
Copia
Modifica
git clone https://github.com/tuo-username/nome-repo.git
cd nome-repo
Installa le dipendenze:

bash
Copia
Modifica
npm install
Avvia il progetto:

bash
Copia
Modifica
npm start
🔄 Come funziona la paginazione?
La PokéAPI supporta la paginazione tramite parametri limit e offset.
Nel progetto è implementata una semplice navigazione con due pulsanti:

Next page → Carica i successivi Pokémon

Previous page → Torna alla pagina precedente

🧠 Note tecniche
useEffect effettua una nuova richiesta ogni volta che cambia la pagina corrente.

AbortController viene usato per annullare le chiamate API precedenti quando l'effetto viene rieseguito (ad esempio in caso di cambio rapido di pagina).

Axios gestisce le richieste in modo semplice ed efficiente, con gestione automatica degli errori.
