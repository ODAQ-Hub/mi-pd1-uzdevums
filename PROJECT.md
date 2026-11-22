# Mani uzdevumi

# Mērķis
Uzdevumu saraksta tīmekļa lietotne, kas darbojas pārlūkā bez servera.

# Faili
- index.html: lapas struktūra
- style.css: izskats
- app.js: visa loģika

# Datu struktūra
localStorage atslēga "pd1-uzdevumi", masīvs ar objektiem:
{ id: skaitlis, text: teksts, done: true/false, dueDate: "gggg-mm-dd" vai tukša virkne }

Termiņš nav obligāts, un iepriekš saglabāti uzdevumi bez `dueDate` joprojām darbojas. Neizpildīts uzdevums ir nokavēts, ja tā termiņš ir pirms pašreizējā vietējā datuma.

# Funkcijas app.js

Funkciju saraksts failā app.js
1. loadTasks() – ielādē saglabātos uzdevumus no localStorage. Ja dati nav derīgi vai rodas kļūda, izveido tukšu uzdevumu sarakstu.
2. saveTasks() – saglabā uzdevumu masīvu pārlūkprogrammas localStorage atmiņā JSON formātā.
3. createId() – izveido katram jaunam uzdevumam unikālu ID, izmantojot Date.now() un pārbaudot, vai ID jau nepastāv.
4. addTask() – pievieno jaunu uzdevumu sarakstam. Pārbauda, vai ievadītais teksts nav tukšs, notīra ievades lauku, saglabā datus un atjauno sarakstu.
5. toggleTask(id) – maina uzdevuma statusu no aktīva uz izpildītu vai otrādi. Saglabā izmaiņas un atjauno sarakstu.
6. deleteTask(id) – izdzēš izvēlēto uzdevumu pēc tā ID. Ja uzdevums tiek rediģēts, pārtrauc rediģēšanu, saglabā izmaiņas un atjauno sarakstu.
7. startEdit(id) – sāk izvēlētā uzdevuma teksta rediģēšanu. Atver rediģēšanas lauku un novieto tajā kursoru.
8. finishEdit(id, value) – saglabā rediģēto uzdevuma tekstu, ja tas nav tukšs. Pārtrauc rediģēšanas režīmu un atjauno sarakstu.
9. cancelEdit() – atceļ uzdevuma rediģēšanu un atjauno sākotnējo sarakstu.
10. getFilteredTasks() – atlasa uzdevumus atbilstoši izvēlētajam filtram: visi, aktīvie vai izpildītie.
11. renderTasks() – attēlo uzdevumu sarakstu atbilstoši izvēlētajam filtram. Izveido katra uzdevuma izvēles rūtiņu, teksta lauku un dzēšanas pogu, kā arī atjauno aktīvo uzdevumu skaitītāju.
12. formatDate(date) – pārveido saglabāto datumu attēlošanai formātā mm/dd/gggg.
13. updateOverdueTasks() – atjauno nokavēto uzdevumu noformējumu un visu uzdevumu statistiku pēc vietējā datuma.
14. scheduleOverdueUpdate() – ieplāno nokavēto uzdevumu pārbaudi nākamajā pusnaktī.
15. isOverdue(dueDate, done, today) – pārbauda, vai neizpildīta uzdevuma termiņš ir pagājis.
Papildu notikumu apstrāde
Šīs nav atsevišķas nosauktas funkcijas, bet tās nodrošina lietotnes darbību:
- Pievienošanas pogas notikums – pievieno uzdevumu, nospiežot pogu.
- Enter taustiņa notikums – pievieno jaunu uzdevumu vai saglabā rediģēto tekstu.
- Escape taustiņa notikums – atceļ teksta rediģēšanu.
- Dubultklikšķa notikums – sāk uzdevuma teksta rediģēšanu.
- Rediģēšanas lauka blur notikums – saglabā izmaiņas, kad lietotājs atstāj rediģēšanas lauku.
- Filtru pogu notikumi – pārslēdz uzdevumu attēlošanas filtru.
- Lietotnes sākotnējā ielāde – izsauc loadTasks() un renderTasks(), lai parādītu saglabātos uzdevumus.
Kopā: 15 galvenās funkcijas.

