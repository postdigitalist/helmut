---
title: Sí, No, No-Code
date: 2021-05-01
---

Hace unos días, leí un newsletter sobre marketing para startups, en el que se explicaban algunos errores comunes en la creación y la iteración de sitios para ese tipo de compañías.

El grueso del newsletter estaba conformado por lugares comunes. Por ejemplo, se decía que el copy tiene que tener un significado y que el branding tiene que ser consistente. Pero algo que me llamó la atención fue que uno de los supuestos “errores  comunes” era “no usar Webflow o WordPress”.

No estoy completamente en desacuerdo con esta declaración. Para el sitio de una startup, Webflow o WordPress puede ser la herramienta ideal. Especialmente si la startup tiene un departamento de Marketing que va a estar ajustando el sitio e integrandolo con microservicios en pos de fines estratégicos.

Aprovechando estos matices, voy a tomar esta ocasión como una oportunidad para discutir qué es “No-Code”, sus pros y sus contras.

## ¿Qué es No-Code?

No-Code es un approach al desarrollo de aplicaciones, sitios y plataformas que aspira a reemplazar la escritura de código por el uso de plataformas "drag-and-drop", microservicios y "glue layers" que llevan y traen información entre microservicios, detonando acciones.

Algunas herramientas representativas del ecosistema no-code son:

- Bubble, que permite construir aplicaciones con bases de datos sin código.
- Webflow, que permite construir sitios de todo tipo sin código.
- Pory, que construye sitios con sistemas de membresías/inscripciones utilizando Airtable como base de datos, sin código.

Algo a tener en cuenta es que, muchas plataformas no-code son en realidad plataformas de marketing, o herramientas con las que no se puede construir un sitio entero. Por ejemplo, MailChimp. Es cierto, con una integración con MailChimp, mediante la platforma nativa o mediante Zapier, se puede construir parte de un viaje de usuario omnicanal, sin código. Pero esa integración, ese mecanismo automatizado, no puede existir in a vacuum. No puede existir solo. 

Herramientas como MailChimp o Stripe, vale la pena aclarar también, pueden usarse tanto en un stack no-code como en un stack "convencional". 

## ¿Qué se gana con No-Code?

No-Code no es ni bueno *per se*, ni malo *per se*. En parte, responde a necesidades que las startups y organizaciones en una fase de crecimiento. Los equipos de marketing y ventas a menudo necesitan toquetear un sitio, jugar con valores y elementos, hacer *A/B testing*, optimizar y reescribir, etcétera. 

Todas esas actividades son mucho más fáciles con un - o, con un buen CMS. Pero el *stack No-Code* libera al desarrollador del tener que involucrarse en la creación de, por ejemplo, una landing page. Arguiría que este también es el caso para un buen CMS. Pero, para realmente facilitar la creación de ciertos tipos de contenido, un CMS tiene que estar adaptado a las necesidades específicas de un equipo. Y eso demanda tiempo y trabajo. Pienso en [Twill](https://twill.io/), [Sanity](https://www.sanity.io/) y, a su manera, [WordPress](https://wordpress.org/).

Cierto* Youtuber *y *ex-Tech Lead* de Facebook lo explica claramente, hay casos en los que *No-Code* es una buena opción. Si hay que sacar algo a la calle rápido, y no es muy complejo, *knock yourself out*. 

## ¿Qué se pierde con No-Code?

Con* No-Code*, se pierde en tres frentes:

- Independencia 
- Flexibilidad
- *Data Ownership*

Si bien tu equipo de marketing va a ser independiente de tus desarrolladores, no van a ser independientes de plataformas de terceras partes. Plataformas sobre las que tenés poco control, y que terminan operando como cajas negras. Podría decirse que **no existen apps sin código, sólo apps cuyo código no podes ver o entender**.

Esta dependencia en platformas de terceras partes lo hace a uno vulnerable a errores, cambios en el modelo de negocios e intereses de terceras partes. Una landing page, una página para un evento, o incluso un prototipo construído en WebFlow nunca mató a nadie. Pero, ¿Construir un producto digital entero en *No-Code*? No, gracias. 

Por otra parte, las plataformas y microservicios tienen cierta rigidez. Naturalmente, son desarrolladas para cumplir objetivos estandarizados, son recursos estandarizados. Esto puede hacer imposible la adopción de un stack no-code en ciertos proyectos. O en su defecto, puede encarecerlo. Al fin y al cabo, el stack no-code suele ser una selección de plataformas de suscripción, interconectadas con más plataformas de suscripción. Los costos de mantenimiento, entonces, no son despreciables y pueden ser particularmente inconvenientes en el Sur Global. 

Por otra parte, se pierde control de la data y su almacenamiento. Esto, en el caso de aplicaciones que van a gestionar data de sus usuarios, es peligroso. Se puede construir un recopilador de emails sin código, pero es peligroso en el sector fintech. 

## Algunas conclusiones

Sintetizando:
| Pros del No-Code                            | Cons del No-Code                                                                   |
|---------------------------------------------|------------------------------------------------------------------------------------|
| Democratización de la plataforma como asset | Muchas manos en un plato, etc. etc.                                                |
| Iteración y evolución mucho más dinámica    | Pérdida de control sobre la data y aspectos centrales de la arquitectura del sitio |
| Ahorro de tiempo y recursos                 | Costos innecesariamente altos, inflexibles e incontrolables                        |
| Independencia de los desarrolladores        | Dependencia de terceras partes                                                     |