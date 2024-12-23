---
title: Razonamiento
date: 2018-08-08
permalink: /docs/razonamiento/
category: Aprendiendo
tags:
  - Razonamiento
  - Pensamiento Crítico
---

# Introducción
El término «razonamiento» tiene dos acepciones (que el diccionario recoge en una sola): «acción y efecto de razonar». 
La primera es procesal (la actividad del agente que razona) y otra funcional (la relación entre las premisas y la conclusión).

La lógica se ocupa de los razonamientos en el sentido funcional. En efecto, en el proceso que lleva de las premisas a la conclusión pueden encadenarse múltiples pasos elementales. En la lógica se estudian las condiciones bajo las cuales estos pasos son correctos, pero no cómo y en qué orden deben realizarse: se supone que la mente dispone de los mecanismos adecuados para hacerlo. 

De los aspectos procesales de los razonamientos se ocupa la psicología, en el caso de que el agente sea humano. Pero si el agente es un artefacto entonces es un asunto propio de la inteligencia artificial.

Una inferencia es simplemente un razonamiento formal, en el sentido de que lo importante es la forma de las premisas y la conclusión y la relación entre ellas, no su contenido.

Inferencia
:  es la relación de dependencia que establecemos entre razones y conclusión. Inferimos por tres caminos:
    -   La inferencia  **inductiva**  parte de hechos que nos parecen semejantes en algo para alcanzar conclusiones que generalizan dicha semejanza.
	    > Ejemplo: Si veo que de un saco extraen un puñado de alubias y todas son blancas, induzco que todas las alubias del saco son blancas.
	    **Inducción**: Cada alubia que sale del saco es blanca -> todas las alubias del saco son blancas.
	    
    -   La inferencia  **deductiva**  se apoya en una regla general y en un caso al que puede serle aplicada.
	    > Ejemplo: Si me dan un paquete cerrado con alubias que proceden del mismo saco, deduzco, sin verlas, que son blancas.
	    **Deducción**: Todas las alubias de ese saco son blancas; Este paquete contiene alubias de dicho saco -> las alubias de este paquete son blancas.
	    
    -   La inferencia  **hipotética**, trata de imaginar la mejor explicación para los hechos.
	    > Si me dan un puñado de alubias y son blancas, supongo que proceden del conocido saco de las alubias blancas (digo supongo porque tal vez existan otros sacos aunque yo no lo sepa).
	    **Hipótesis**: Todas las alubias de ese saco son blancas; Las alubias que me dan son blancas. -> puedo presumir que vienen de dicho saco.

Las premisas en cualquier proceso de razonamiento pueden ser múltiples, pero hay una y sólo una conclusión para cada argumento. A veces, a partir de un mismo dato podemos extraer diversas conclusiones.

# Fundamentos
Razonamiento
:  pueden ser:
    -   **Inmediatos**, donde solo basta una premisa para justificar la conclusión. Son aquellos razonamientos de sentido común que se apoyan en el principio de no contradicción, o en relaciones, algo mayor, superior, anterior, etc...
    -   **Mediatos**, donde se requieren al menos dos premisas.
-   Razonamos para nosotros mismos; argumen­tamos para los demás. Razonamos antes de argumentar y nuestro argumento trata de expresar lo mejor del razonamiento.

## Argumento vs Explicación
El objetivo de un argumento es probar una conclusión discutible, mientras que la explicación presupone que no existe discrepancia.

## Falacias
Falacia
: Un razonamiento erróneo.

La manera más simple de atacar una falacia consiste en traducirlo a la forma estándar, para que su defecto sea evidente. 
> Ej: _Si le he entendido bien, dice usted esto y lo otro ¿es así?_
> ** Forma estándar**: Ya que A y B ...y N entonces X

## Formas argumentales
Las formas típicas de las  **articulaciones argumentales**  son:
- **Suma**, Se produce siempre que amontonamos argumentos que, desde diversos puntos de partida, vienen a coincidir en la misma conclusión. Son **argumentos convergentes**.
- **En­cadenamiento**  (o Sorites), Es una cadena de argumentos en la que la conclusión del primero sirve de premisa para el segundo, y así sucesivamente, hasta alcanzar la conclusión definitiva. La argumentación forma un arco capaz de salvar grandes distancias. Son argumentos sucesivos. Resulta muy fácil incluir falacias.
    > A es B; B es C; C es D -> A es D

## Proposiciones
Proposiciones
: Nuestras proposiciones pueden ser de dos tipos, según la fuerza con que afirman las cosas:
    -   **necesarias**, cuando afirman que algo no puede ser de otro modo. Depende de razones sólidas como leyes. La conclusión necesaria o categórica implica que lo contrario es imposible.
    -   **contingentes** o **probable**  , cuando admiten tácitamente que algo puede ser de otro modo. Solamente autorizan conclusiones probables. La conclusión probable implica que lo contrario puede ocurrir, pero es menos probable. Mientras que la conclusión posible implica que lo contrario es igualmente posible.

Toda  **demostración**  consiste en fundamentar una verdad en otra o en varias. Se puede realizar:
- **Directamente**,Se muestran las premisas que conducen directamente a la conclusión
- **Indirectamente**  efectuando un rodeo, mediante:
	- **eliminación**  Consiste en probar la verdad o conveniencia de una proposición mostrando que todas las otras hipótesis posibles son falsas o inconvenientes
	-  los  **disyuntivos**, se afirman dos posibilidades incompatibles separadas por la conjunción o de modo que si se afirma una se excluye la otra.
	>Ej:  _Estuvo allí o no estuvo_
	S es A o B S no es A luego S es B
	
	- por  **enumeración**, Ofrecemos todas las soluciones posibles de un determinado problema para escoger entre ellas la buena
	> S es A o B o C; Pero no es B ni es C -> es A

	- los  **dilemas**, caracterizada porque las dos posibilidades que se consideran conducen al mismo resultado.

	-  **reducción al absurdo**  Prueba que una conclusión es cierta porque su contradictoria sería falsa o absurda. Como dos cosas contradictorias no pueden ser ciertas, si se demuestra que una es falsa, será cierta la otra. Si fuera cierto lo que se supone, serían verdad sus consecuencias. Como éstas son falsas (o es­túpidas, o inconcebibles, o indeseables, o contradictorias con lo que se afirma o con lo que se sabe), se concluye que no es verdad el supuesto (porque sostenerlo conduce al absurdo), y que la verdad es lo contrario, lo que se trataba de demostrar.
	> Ej: Si no es A, habrá que aceptar que es no-A
	> Si fuera no-A, entonces se daría no-B
	> Pero se da B, Luego no puede ser no-A-> Luego es A

-   **Refutar**, no sólo argumentamos para defender nuestras posiciones. También lo hacemos para rechazar las de la parte contraria mediante:
    -   **impugnar**, lo que se afirma porque las premisas no están probadas, porque son falsas o contradictorias o existen errores en la argumentación (falacias).
    -   **rebatir**, un argumento a partir de sus propios componentes por medio de:
        -   **concesión**  para señalar que, aun reconocido algo, tenemos razón
        -   **retorsión**, combatimos al contrincante dando la vuelta a sus mismas razones
        -   **reducción al absurdo**, utilizamos la conclusión del adversario como si fuera cierta
        
## Tipos de argumentación
 -   **ad hominem**(dirigido al hombre), razonamiento dispuesto específicamente para las personas que aceptan determinados hechos o valores.  
 > Ej:_Siempre es la más eficaz razón la que se toma de lo que el otro admite_
-   **ad rem**(de las cosas), son los que se dirigen a sostener o combatir la verdad de una proposición en términos objetivos y, por lo tanto, válidos para todo el mundo. No se puede persuadir a nadie a partir de premisas que desconoce o rechaza. Al dirigirnos a una audiencia plural, ofrecemos varios argumentos para que cada interlocutor escoja y adopte aquél o aquellos que más le persuadan.

# Definiciones

Premisas
: son frases que afirman o niegan algo. Pueden ser de dos tipos:  **datos**  o  **garantías**

Datos
: nacen de la observación (premisa fáctica o menor).

Garantías
: son las razones que justifican el paso de los datos a la conclusión (primera premisa), parten del conocimiento o creencias (generalizaciones, definiciones, leyes, normas, valores, creencias...)
> tiene la forma de Todo A es C, si B es A entonces B es C

Razón
: es la proposición que se aduce en favor de otra. 
>Ej:  _propocición inicial_  **porque**  _razón_

Argumento
: conjunto de razones (premisas) que sostienen una conclusión. 
> Ej:  _propocición inicial_  **porque**  _premisa fáctica (dato)_  y  _primera premisa (garantía)_

Opinión
: Cuando una afirmación carece de de premisas que la sostengan.

Argumentación
: conjunto de razonamientos que persiguen una misma finalidad (sostener la misma conclusión)

Argumentario
: es un inventario de argumentos, es decir, una serie de argumentos que pueden servir para un mismo propósito (sostener la misma conclusión)

# Inferencia inductiva

## Definición

-   Parte de casos particulares que nos parecen semejantes en algo para alcanzar conclusiones que generalizan dicha semejanza.  **De la observación particular a lo general**.
-   Inducir (del latín in ducere, llevar adentro) es poner en el campo de la atención cierto número de observaciones particulares, como fundamento de una afirmación general.
-   Inducimos, inconscientemente, acumulando experiencias que resumimos en reglas generales
-   Los argumentos inductivos vienen a decir en líneas generales: así son las cosas

## Síntesis

Existen dos tipos de inducciones:

1.  Completas, que nos permiten afirmar algo con precisión:
    -   Todo S es P
    -   Todo S menos S4 y S5 son P
    -   Son concluyentes cuando carecen de excepciones (no controladas). Lo que se afirma del grupo vale para cada individuo.
2.  Incompletas, en las que no podemos ser precisos, porque ignoramos cómo se comportan las excepciones:
    -   El 84,6% de todos los S es probablemente P.
3.  No sabemos si lo que se afirma del grupo valdrá para un individuo determinado. Cuando hablamos del conjunto hacemos un juicio probable. Al referirnos a los individuos solamente cabe un juicio posible. Hemos distinguido en esta variedad las generalidades que no precisan prueba porque se presumen cier­tas.
4.  La diferencia entre ambos tipos de inducción es muy clara pero en la vida cotidiana pueden producirse equívocos por la forma de hablar. Quien dice: Las aves vuelan, ¿se refiere a todas las aves o sólo a las típicas? Únicamente por el contexto en que se produce la afirmación podemos adivinar si la inducción pretende ser categórica o plausible. Para los casos de duda anotemos esta norma: antes de poner objeciones, el prudente pide aclaraciones. No caigamos en el error del centinela que primero dispara y luego pregunta.

## Tipos

-   **Completa**, se limita, pues, a resumir todos los casos. Si son ciertos, la conclusión resultará indiscutible, porque no cabe excepción.

Todo S es P. 

-   -   Es también completa y concluyente cuando se conoce todos los casos, todas las excepciones y las razones de ser de éstas, lo que permite efectuar afirmaciones muy seguras

Todo S menos S4 y S5 son P

-   -   -   si surge una excepción (no controlada) de la regla la conclusión queda refutada.
-   **Incompleta**, aunque no conocemos el grupo completo, en todo individuo que presente la propiedad S cabe esperar razonablemente que tenga la propiedad P. Las cosas pueden ser de otro modo pero prevalecen aquellas que cumplen la regla.

Todo S es probablemente P

-   -   Términos como en general, por lo general, generalmente... reflejan el aire de cautela, vaguedad, falta de precisión que caracteriza a estas inducciones, en las que el grado de probabilidad o de verosimilitud puede ser muy variado: más, menos, mucho, muy, harto, escasamente...
    -   Para que tales observaciones merezcan nuestra atención, han de respetar tres condiciones: los hechos recogidos deben ser ciertos, suficientes y representativos.
    -   Cuando una generalización pertenece al acervo de las verdades compartidas, no precisa prueba.
    -   Cuanto más cultivados sean los oyentes, mayores serán las exigencias para que una determinada verdad general se admita.
    -   A diferencia de lo que ocurre en las inducciones completas, las inducciones probables no se pueden refutar aportando excepciones puesto que éstas se dan por supuestas
    -   Para refutar una regla general es preciso demostrar que las excepciones son tan frecuentes como los casos que la respetan

# Inferencia deductiva

## Definición

-   se emplean para descubrir verdades que no apreciamos por observación directa.
-   Del contenido de las premisas deducimos la consecuencia. Aquí no es necesaria la observación. Nos apoyamos en lo conocido.
-   En el razonamiento deductivo aplicamos lo que ya sabemos (como seguro, probable o posible) para interpretar lo desconocido. Ante un caso dudoso, rebuscamos una regla, un principio, un grupo de cosas en el que se pueda integrar nuestro problema.
-   Como todo el contenido de la conclusión está prefigurado en las premisas, decimos que extraemos aquélla de éstas. De ahí el nombre de deducción dado a este procedimiento que saca unas cosas de otras.

## Síntesis

1.  La deducción es una forma de inferencia que de lo general conocido extrae consecuencias para lo particular desconocido.
2.  Un razonamiento deductivo concluyente parte de premisas ciertas y alcanza conclusiones necesarias.
    -   Su forma estándar admite dos posibilidades:
        -   Todo A es B y Z es A por tanto Z es B
        -   Todo A es B y Z no es B por tanto Z no es A
3.  Un razonamiento deductivo presuntivo, parte de premisas probables o presumibles y alcanza conclusiones del mismo carácter.
4.  Las formas habituales de deducción son dos: Aplicación de una regla y Argumento condicional.
5.  Entimema es aquel razonamiento que no expone todos sus componentes por considerarlos obvios (o porque no interesa exponerlos).

## Tipos

-   Razonamiento  **concluyente**  o necesario, Se apoya en afirmaciones indudables como leyes o definiciones. Si ambas premisas son ciertas, la conclusión resulta irrefutable: afirma que las cosas no pueden ser de otra manera.
-   Razonamiento  **presuntivo**, Presume que las cosas ocurren como suelen. Este es el caso de las generalidades, los testimonios de autoridades, las creencias y la mayoría de las definiciones. Producen conclusiones presuntivas, razonablemente presumibles, probables en mayor o menor grado.

## Formas

-   **Aplicación**, consiste en aplicar una regla general a un caso.
-   **Argumento condicional**, emplea como primera premisa un juicio condicional. la mayoría de nuestros argumentos condicionales son presuntivos, esto es, se forman a partir de una generalización probable.

## Entimemas

Es cierto que todo argumento consta de Premisas y Conclusión pero no siempre aparecen de forma explícita. El entimema es un argumento truncado, al que le falta alguna de las piezas. Se emplea cuando una proposición es tan obvia que se puede dar por sobreentendida.

Su defecto con­siste en lo bien que disfraza las falacias y en los equívocos que pueda generar entre los no iniciados en el asunto que se debate. Conviene, por muy animada que sea la discusión, no pasar por alto las argumentaciones entimemáticas del oponente, porque las premisas sobrentendidas pudieran ser inaceptables.

# Inferencia hipotética

## Definición

-   Aunque las premisas sean ciertas, la conclusión no se sigue de ellas. Sin embargo, todas juntas parecen sugerirnos una conclusión con más fuerza que otras posibles. En un argumento hipotético, a diferencia de lo que ocurre en las deducciones, la conclusión no aparece prefigurada en las premisas, pero es compatible con ellas.
-   trata de explicar los hechos, mediante la explicación más probable para los datos conocidos.
-   La regla de experiencia permite menospreciar el resto de las posibilidades por considerarlas menos probables, menos habituales, en unas determinadas circunstancias. La regla de experiencia indica que es razonable pensar así porque así suelen ser las cosas en determinadas circunstancias.

## Síntesis

1.  La inferencia hipotética o abducción, ofrece la mejor explicación de fenómenos aislados.
2.  Infiere a partir de reglas de experiencia, es decir, generalizaciones difusas fruto de experiencias comunes.
3.  La fuerza de una inferencia hipotética depende de tres factores:
    -   Que explique bien el fenómeno, en razón de una o varias reglas de experiencia plausibles.
    -   Que no exista una explicación mejor para el mismo fenómeno.
    -   Que nada en las circunstancias del caso impida que se cumpla la presunción.
4.  La hipótesis, en la práctica, puede ser tan convincente como la deducción o la inducción.
5.  Las reglas de prudencia acentúan la fuerza de una conclusión hipotética débil.

## La fuerza del argumento

La fuerza de la hipótesis está determinada por tres factores:

-   Que explique bien el fenómeno, en razón de una regla plausible de experiencia (o varias).
-   Que no exista otra explicación mejor para el mismo fenómeno.
-   Que nada en las circunstancias del caso impida que se cumpla la presunción.

## Persuación con hipótesis

-   Como hemos podido comprobar, los argumentos hipotéticos convierten un juicio de posibilidad en un juicio probable. Convierten un tal vez sea en un lo más probable es que sea.
-   Cuando es una posibilidad entre otras, pero es una posibilidad que, si fuera cierta, acarrearía consecuencias graves que nos importan. Sería temerario no considerarla.
-   Los argumentos prudenciales son una variedad de los argumentos normativos, en los que como premisa figura una regla de seguridad. Lo que nos importa ahora es destacar que contribuyen a reforzar la importancia práctica de una conclusión hipotética débil.
-   No se puede violar una regla de prudencia sin una buena razón que lo justifique. Consideramos de tal modo fundamentada la acción prudente que si alguien se opone a ella, le trasladamos la carga de la prueba para que razone su discrepancia.

# Referencias
- [Uso de razón](http://www.usoderazon.com) por Ricardo García Damborenea
