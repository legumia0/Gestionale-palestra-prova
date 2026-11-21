/* =====================================================================
   COLLEGAMENTO AL DATABASE ONLINE (Firebase)

   Finché i valori qui sotto sono vuoti, il gestionale funziona come
   versione di prova, con i dati salvati solo nel browser.

   Come riempirli:
   1. console.firebase.google.com → il tuo progetto → rotellina ⚙ →
      Impostazioni progetto → in basso "Le tue app" → la tua app web.
   2. Lì trovi un blocco "const firebaseConfig = { ... }".
   3. Copia ogni valore tra virgolette e incollalo qui, sulla riga con lo
      stesso nome. Le virgolette restano.

   Questi dati non sono segreti: dicono solo quale progetto usare.
   I dati dei clienti li proteggono le regole di sicurezza di Firestore.
   ===================================================================== */
window.CONFIG_FIREBASE = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
