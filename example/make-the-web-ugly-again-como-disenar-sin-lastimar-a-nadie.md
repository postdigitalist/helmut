---
title: "Make the Web Ugly Again: Cómo diseñar sin lastimar a nadie"
date: 2021-03-04
---

****Como parte del reestructuramiento de [Nada Respetable](http://nadarespetable.com/), esta serie ha sido mudada aquí.****

****Su ***tercera*** entrega (**la** presente) fue publicad**a** originalmente el ***24*** de **abril** del 2020.****

---

Esta no es sino la tercera entrega de una serie de esquelas sobre la homogeneización estética del Internet, la ideología y potenciales alternativas. En [mi artículo anterior](https://nadarespetable.com/2020/03/18/make-the-web-ugly-again-pura-ideologia/), presenté una alternativa posible: El brutalismo.

En líneas generales, uno de los principales puntos a favor del status quo del diseño de UX actual es que suele hacer a una experiencia online accesible. Y las buenas prácticas en áreas “adjuntas”, (tales como la optimización para motores de búsqueda cuando referimos a web apps) hacen a la accesibilidad.

Al ignorar “buenas prácticas”, a menudo el diseño brutalista puede volverse inaccesible. Especialmente, en sus instancias más experimentales.

En 2016, Aaron Ganci y Burno Ribeiro, de Herron School of Art and Design y California Polytechnic State University respectivamente, autoraron [un artículo](https://quod.lib.umich.edu/cgi/p/pod/dod-idx/on-web-brutalism-and-contemporary-web-design.pdf?c=dialectic;idno=14932326.0001.107;format=pdf) en el que exhiben posturas opuestas sobre el brutalismo.

Mi tocayo defiende el brutalismo, no sólo como una ruptura necesaria de convenciones omnipresentes, sino también como un ejercicio de “disfluencia”. Presentar un mensaje mediante recursos estéticos que el usuario no esté precondicionado para “saber” procesar asevera su impacto. Bruno Ribeiro ofrece un contrapunto, considerando la tendencia un triunfo del estilo sobre la claridad y del ego sobre la responsabilidad. Según Ribeiro:

“El hecho de que un grupo relativamente pequeño de diseñadores web haya decidido que demasiado del diseño que están percibiendo a través de la web es aburrido es una débil y más bien unidimensional excusa para infundirle una nueva estética. Enfocarse en cómo el contenido es mostrado en este medio dinámico desvía la atención de la necesidad de confrontar preocupaciones más urgentes en el diseño web, tales como garantizar que el contenido que facilita pueda alcanzar los amplios sectores que aún tienen un acceso limitado a él. Veinte años tras su desarrollo, la web aún es más bien inaccesible para aquellos con discapacidades físicas, o para quienes deben acceder a internet a través de conexiones lentas o dispositivos con poca energía, o quienes tienen acceso limitado a la conectividad y/o a la electricidad.”

Ribeiro plantea que “lo viejo no es nuevo”, retornar a la estética del pasado no es moverse hacia el futuro. Pero, justamente, el brutalismo web no pretende moverse hacia el futuro tanto como retornar al espíritu lúdico, personal, **amateurish** y experimental de la vieja web. Y ese retorno estético puede darse con herramientas técnicas contemporáneas que hagan a una experiencia web accesible. Por ejemplo, nunca vi un sitio brutalista que usara tablas en lugar de grillas o **flexbox**. Allí está lo hauntológico.

Adaptar los principios estéticos e ideológicos del brutalismo a las necesidades de cada proyecto depende del diseñador, pero es posible. Y emplear las herramientas necesarias para que una experiencia sea accesible también lo es.

## Brutalismo y accesibilidad

[Binder](http://thisisourwork.net/binder/) es una plantilla web diseñada por [This Is Our Design.](http://thisisourwork.net/) Básicamente, consiste de una serie de iFrames (incrustaciones de otros sitios) que toman todo el espacio disponible, y sobre los que se superpone un menú arrastrable y un logo.

Binder nos hace sentir que estamos en internet, es franco sobre lo que es. En su estructura, es un comentario sobre qué herramientas externas usamos para crear y distribuir material en internet, y un intento de reapropiarlo. Su brutalismo es indiscutible.

Binder es un proyecto, en muchos aspectos, depreciado (al fin y al cabo, su última actualización tomó lugar hace cuatro años), y en otros aspectos, miope. Por ejemplo, no es acto para screen readers. Binder **per se** es inaccesible.

Decidí usar Binder para montar www.ciberiluminismo.xyz por su estética, y porque hace al sitio muy fácil de traducir. Al fin y al cabo, el contenido es sólo una colección de pantallazos de otro sitio (en el caso de CEg.xyz, Google docs), y su menú es un .Json con links a estos. Alguien sin conocimientos técnicos de programación o localización puede confeccionar una traducción del contenido con facilidad. Sólo basta con duplicar la carpeta, comenzar a traducir, hacerla pública, y enviármela. Y yo, destinatario de estos archivos, no tendré que hacer más que modificar el menú y el logo, para que lea el equivalente de “Ciberiluminismo” en el lenguaje **target**.

Pero, ¿Por qué Binder es inaccesible? Porque los** screen readers** (lectores de pantalla para no-videntes) se llevan fatal con los iframes. ¿Cómo lo solucioné? [Lo expliqué](https://telegra.ph/Ciberiluminismoxyz-ahora-es-apto-para-screen-readers-04-18) hace apenas unos días. Me cito a mí mismo:

1.Tomar todo el texto del sitio y compilarlo en el Google Doc, asegurándose de ordenarlo correctamente (que los encabezados sean encabezados, etc.)

2. Descargarlo como .html. Google nos dará un .zip. Puede descomprimirse y, como yo hice, colocarse en una carpeta /accesibilidad dentro del repositorio/directorio del sitio, con el nombre de archivo que se desee. Idealmente, debería ser algo corto y descriptivo.

3. Convertir el logo en un link, y ponerle como texto alternativo algo del estilo de ‘Clickeá para acceder a la versión apta para screen readers’.

Utilicé el texto que el** screen reader** lee cuando detecta una imagen en particular para enviar un mensaje a los usuarios no-videntes.

En algunas ocasiones, el diseño brutalista es inaccesible by design (véase otro de mis trabajos, [Toto-Africa](http://toto-africa.netlify.com/)). Pero, en la mayoría de los casos, hay una manera de hacer al sitio accesible. En el caso de Ciberiluminismo, ha podido hacerse trasladando todo el texto del sitio a un documento legible. En otros casos, es más complicado. Pero negarse a evaluar la accesibilidad de un sitio no es un requisito estético del brutalismo, sino una falla ética del diseñador.

Por ejemplo, HTML Energy, una oda al HTML, es responsivo, accesible y apto para conexiones pobres.
![](https://res-5.cloudinary.com/hvkzkoktg/image/upload/q_auto/v1/ghost-blog-images/s_2360DF172471B7791A824E4728AECBD50D43CE0E10B0DBB05D038E5B5A13BAC7_1587683835160_image.png)
Take a Walk on the Wild Side, el sitio de un ciclo de la Rietveld Academie es apto para screen readers.

La accesibilidad es un problema del diseño web brutalista porque es un problema del diseño web. Y muy a menudo uno se queda sin el pan y sin la torta. Por ejemplo, el sitio del Centro Cultural Kirchner, que, lamentablemente, adolece de un diseño hórrido, pobre, objetivamente falluto, pero para nada aventuroso, tiene mal determinada la jerarquía de los titulares, lo que se traduce en una experiencia confusa para los no-videntes.

Le doy la derecha a Ribeiro con respecto a algo: A menudo, no sólo se ignoran las necesidades de quienes necesitan asistencia especial para experimentar el internet, sino también cómo las condiciones materiales de un usuario van a determinar su experiencia.

## Diseño responsivo y clasismo

Por ejemplo, suelo frecuentar [Awwwards](https://www.awwwards.com/), un sitio muy conocido que es una suerte de concurso de diseño web permanente. Mi mayor problema con Awwwards es que suele premiar al equivalente en diseño web de las películas de Marvel. **Larger-than-life**, lleno de efectos y, en este caso, leeento. Ahí es donde el brutalismo puede hacer una diferencia. En el **mainstream**, el buen diseño es aburrido y corporativo, y el excelente diseño es inaccesible para los pobres.

Hacer una aplicación que no se ve bien en móviles puede significar excluir a poblaciones enteras. No sólo pensemos en el laburante que accede a internet en el transporte público, en su celular, yendo y volviendo de su lugar de trabajo, sino también en aquellos en países o regiones en los que la penetración del internet en la vida cotidiana no se dio a través de las computadoras y del **dial-up** hace 20 años, sino recién con la aparición de los **smartphones**. **Smartphones** que suelen ser de gama baja-media, y no contar con más que una conexión feble e inestable.

## ¿Puede el brutalismo resolver estos problemas?

Si bien **novelty projects**, como el ya mencionado “Toto Africa” no pueden ser responsivos u accesibles por lo arcaicos que son algunos de sus elementos, es posible y deseable un diseño brutalista accesible y responsivo.

Quizás haya algo en el brutalismo que nos permita, no distraernos de estos problemas, sino enfrentarlos. El franco, poco pretencioso **approach** que el brutalismo tiene para con el medio puede servir como tierra fértil para enseñar y promover Buenas Prácticas.

Al fin y al cabo, los brutalistas rara vez están negándose a confeccionar Progressive Web Apps, y no hay nada que en la muy difusa y casi ágrafa filosofía del brutalismo web que niegue el **approach offline-first** (eso es, el diseño de apps que “guarden” el progreso del usuario para que puedan usarse sin grandes complicaciones incluso con conexiones inestables). Es más, la desnaturalización de internet que está en el corazón del brutalismo es compatible con las críticas al hiperempleo y el consumo irreflexivo de proyectos como **[Offline Only](https://chris.bolin.co/offline/)**. El brutalismo no sólo “tiene permitido”, para ponerlo en un término horrible, crear **offline-first**. Es filosóficamente coherente que lo haga, incluso si no está pensando en aquellos con conexiones pobres.