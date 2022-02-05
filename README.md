# Proiect interviu SectorLabs

Proiectul implementat respecta toate cerintele functionale din assessment astfel incat cauta dupa toate GIST-urile unui user afisand informatile fiecarui GIST gasit astfel:
    - Titlul cardulului reprezinta descrierea acestuia
    - Data la care a fost creat si ultima oara cand a fost facut update pe acesta.
    - Tags reprezinta tipurile de fisiere care au fost gasite
    - Lista cu fisierele ordonata dupa tipul de fisier (daca se apasa click pe unul dintre fisiere se deschide un modal cu continutul fisierului respectiv)
    - Urmatoarele randuri reprezinta ultimele 3 fork-urilor efectuate(acest lucru se face prin aducerea listei de fork-uri la care se face reverse si se elimina fork-urile facute de acelas user urmand sa luam doar primele 3 elemente)
    - Butonul de vizualizare ne redirectioneaza catre link-ul de Github al GIST-ului

Pentru aranjarea in pagina am folosit Boostrap pentru a crea o pagina responsive.


*Inainte de pornirea aplicatiei trebuie sa se seteze in /Settings/System.js variabila  "GitHubToken"*

## Optimizari

Call-urile de aducere a fork-urile se fac independent pentru fiecare card dupa ce pagina a fost incarcata, scazand timpul necesar de asteptare si permite o vizualizare continua fara a fi necesarea asteptarea informatiei pentru toate cardurile.

Descarcarea continutului fisierelor se face doar la apasarea pentru a deschide modalul pentru nu a ingreuna incarcarea paginii.


## Imbunatari posibile

Aducerea si afisarea comentarilor, crearea unui preview a unuia dintre fisierele GIST-ului.

Cautarea directa a userilor care au facut fork prin apasarea pe numele acestora.

Vizualizarea fork-urilor facute de useri astfel incat sa se poata accesa si fisiere modificate.

Injectarea token-ului pentru GitHub API la momentul compilarii pentru a elimina expunerea de secrete in codul sursa


