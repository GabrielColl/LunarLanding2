# LunarLanding2
Primerament he modificat el _HTML_ que ens has facilitat amb l'informació del que vaig fer per la pràctica anterior. 
Jo utilitzava 'Div' per el panell de control però ho tingut que modificar i fer una simple llista ja que em donava problemes amb el _js_.
Amb els _CSS_ he fet el mateix. Modificar el que ens has aportat i afegir el meu disseny.

Amb el _JavaScript_ he tingut molts de problemes. Les funcions bàsiques em quedaven bastant clares però no sabia implementar-les.
Amb el _.js_ que ens has donat com a base primerament he afegit les funcions de pause, play y replay.

Tinc problemes amb el botó de **Play**. Si posam pause, li tornam a donar al Play i premem qualque tecla perquè es mogui la nau un parell de vegades, aquesta es torna loca i va molt ràpid. Si em poguessis dir que he fet malament aquí, t'ho agrairé. Amb la funció replay(reset) vaig tenir molts de problemes per poder implementar-ho ja que no trobava l'ordre que el fes reiniciar. 

Vaig tenir que borrar el comande per fer funcionar els coets amb el ratolí degut a que quan es premien els  botons s'accionava el coet.

Tot seguit he posat l'altura com toca (Crec que he utilitzat una manera un poc rudimentària ja que li he restat a Y el tant per cent on ha d'aturar) i he deixat només dos decimals. Amb l'altura falla un poc lo dels decimals, no se perquè!. 
El següent que vaig fer va ser modificar la velocitat (_dt_) i aturar la propulsió al arribar el combustible a 0 amb el comande "_if_". 
Tot seguit vaig crear els avisos d'aterratge y reiniciar. Per l'aterratge vaig indicar amb el comande "_if_, _else_" la velocitat d'aterratge(3 m/s) posant que si era superior sortís el requadre diguent que la nau s'ha estrellat.  

El darrer pas a seguir ha estat el de canviar la imatge del coet quan es prem qualque boto del teclat. Aquí he tingut seriïs problemes degut a que la _id_ de la imatge era igual que la del >Div<, per la qual rao no detectava cap comande que li posava. 

Volia crear un avís per començar fent que botàs aquest al estar la nau a dalt, però em botava cada cos per tres quan passava de la altura per el qual ho vaig borrar. També vaig provar de associar la funció de Play per començar per primera vegada però no em funcionava.¿Com es pot fer? 
A part d'això he tingut problemes amb les imatges _.png_ degut a que en teoria tenien la mateixa escala (el coets son iguals en teoria) però al joc surten de diferents mides.
Per darrer he modificat el _HTML_ d'instrucions i he adjuntat aquest juntament amb el _HTML_ de "sobre el Joc" i el _CSS_.
