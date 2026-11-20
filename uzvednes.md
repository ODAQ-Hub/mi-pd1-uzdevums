# Uzdevuma apraksts
""" 
Loma: Tu esi pieredzējis tīmekļa lietotņu izstrādātājs
Mērķis: izveidot uzdevumu saraksta tīmekļa lietotni"Mani uzdevumi".
Lietotnes trīs koda faili: index.html, style.css, app.js. 
Lietotnei jādarbojas, atverot index.html pārlūkā, bez servera un interneta.
Funkcijas: 
1. Pievienot uzdevumu ar pogu "Pievienot" vai Enter. 
Pēc pievienošanas ievades lauks ir tukšs. Atstarpes teksta sākumā un beigās noņem. Tukšu tekstu vai tikai atstarpes nepievieno.
2. Atzīmēt uzdevumu kā izpildītu ar izvēles rūtiņu (izsvītrots teksts), atkārtots klikšķis atceļ atzīmi.
3. Dzēst uzdevumu — katrai rindai sava dzēšanas poga.
4. Filtrs: Visi / Aktīvie / Izpildītie; izvēlētā poga vizuāli izcelta.
5. Skaitītājs "Atlikuši N uzdevumi", atjaunojas pēc katras darbības.
6. Dati saglabājas localStorage ar atslēgu "pd1-uzdevumi" (JSON).
Elementu ID: <h1> "Mani uzdevumi", task-input (vietturis "Jauns uzdevums..."), add-btn, task-list (<ul>), counter (<span>); filtru pogām atribūts data-filter.
Datu struktūra: masīvs ar objektiem { id, text, done }; id ir unikāls
(Date.now() ar pārbaudi pret dublikātiem).
Ierobežojumi: saskarne un komentāri latviešu valodā, teksta attēlošanai lieto textContent, neviena funkcija nav garāka par 30 rindām, konsolē nedrīkst būt kļūdu, jādarbojas Chrome, Brave un Firefox.
Izvades formāts: katrs fails atsevišķā koda blokā ar faila nosaukumu. Pēc koda 3 teikumos paskaidro, kā palaist.
Ja kaut kas nav skaidrs, pirms koda uzdod man jautājumus.
"""
# Pirmais uzlabojums

Mērķis ir papildināt esošo lietotni „Mani uzdevumi” ar iespēju rediģēt uzdevumu tekstu, nemainot pārējās funkcijas un HTML/CSS struktūru.
Veic app.js  uzlabojumus. Start edit un finish edit, lai ar dubultklikšķi var labot tekstu, ar ENTER saglabāt un esc atcelt. 
Vispirms uzraksti darbu plānu.
