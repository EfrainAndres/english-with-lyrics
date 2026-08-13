# Borrador del correo de bienvenida 1 de Fase 0

## Estado y límites

- Estado del contenido: APPROVED DRAFT / STAGED.
- Estado de activación: ACTIVE / EMAIL 1-ONLY CONTROLLED ROLLOUT.
- Alcance: referencia canónica verificada en Preview y en dos entregas automatizadas controladas de Producción recibidas en buzón; un tercer envío registrado por el proveedor permanece como evidencia histórica sin mensaje correspondiente.
- La activación vigente está limitada al handoff de Producción ya autorizado, Email 1, un máximo de diez suscriptores reales y 72 horas; no autoriza otra secuencia, campaña, prueba, configuración o expansión.
- La entrega directa del PDF permanece ACTIVE e independiente del consentimiento promocional o de este correo.

Este documento es la referencia canónica del contenido staged. Su verificación
controlada no modifica la configuración histórica de Preview ni autoriza otra
entrega o activación.

## Propósito

Dar la bienvenida a una persona suscrita que ya otorgó consentimiento afirmativo
en el formulario alojado por el proveedor, proponer un primer paso de práctica
tranquilo y dirigirla a la experiencia existente de la guía. La guía ya está
disponible directamente: este correo no es necesario para recibirla.

El formulario alojado por el proveedor es el sistema de registro del
consentimiento dentro del rollout vigente. Este borrador de correo no crea,
almacena, transmite ni afirma registrar evidencia de consentimiento.

## Opciones de asunto y preencabezado

Elegir un asunto cuando se configure una prueba de envío solo en Preview,
aprobada por separado:

- `Bienvenido a Sing Pronunce Repeat: empieza con una práctica`
- `Una forma simple de empezar con tu guía`
- `Tu siguiente práctica con canciones`

Preencabezado:

> Empieza con una práctica corta y vuelve a la guía cuando quieras.

Reglas del asunto:

- Mantener un lenguaje tranquilo, específico y sin urgencia.
- No prometer fluidez, resultados garantizados, certificación ni un resultado fijo.
- No usar prefijos engañosos de respuesta o reenvío.
- Para una futura prueba de Preview, agregar el marcador de prueba aprobado por
  el proyecto sin cambiar el sentido del cuerpo.

## Cuerpo del correo

### Copy listo para HTML

```text
Hola,

Gracias por sumarte a Sing Pronunce Repeat.

La guía gratuita ya está disponible directamente en el sitio. Este correo no es
necesario para recibirla: puedes volver a ella cuando quieras.

Si vas a empezar hoy, elige una sola práctica:

1. Escucha primero el fragmento.
2. Lee la pronunciación escrita como suena.
3. Repite en voz alta unas cuantas veces.
4. Crea una frase propia con la idea que entendiste.

[ABRIR LA GUÍA]

No necesitas hacerlo todo de una vez. Una práctica breve y constante puede ser
un buen punto de partida.

Sing Pronunce Repeat
English with Lyrics
```

La etiqueta del botón es `Abrir la guía`. No agregar una afirmación de que el
correo desbloquea, entrega o es necesario para la guía.

### Alternativa de texto sin formato

```text
Hola,

Gracias por sumarte a Sing Pronunce Repeat.

La guía gratuita ya está disponible directamente en el sitio. Este correo no es
necesario para recibirla: puedes volver a ella cuando quieras.

Si vas a empezar hoy, elige una sola práctica:

1. Escucha primero el fragmento.
2. Lee la pronunciación escrita como suena.
3. Repite en voz alta unas cuantas veces.
4. Crea una frase propia con la idea que entendiste.

Abrir la guía: [DESTINO_DE_LA_GUIA]

No necesitas hacerlo todo de una vez. Una práctica breve y constante puede ser
un buen punto de partida.

Sing Pronunce Repeat
English with Lyrics
```

`[DESTINO_DE_LA_GUIA]` es solo un marcador de posición para el momento de la
configuración. No incluir una URL del proveedor, de Preview ni de Producción en
este documento.

## Requisitos de destino de la CTA

- Configurar el botón y la alternativa de texto sin formato hacia la misma ruta
  de agradecimiento con alcance del entorno, `/gracias?source=email`.
- Para una futura prueba solo en Preview, usar únicamente la ruta de Preview
  aprobada; nunca dirigir un correo de Preview a Producción.
- El PDF directo permanece disponible de manera independiente en
  `/ebook-gratis` y no debe depender del consentimiento, de hacer clic en la
  CTA ni de recibir este correo.
- No adjuntar el PDF, usar un enlace firmado o con vencimiento, ni incluir datos
  personales en el destino redactado.
- No codificar una URL del entorno, un identificador del proveedor ni un valor
  de seguimiento en este borrador.

## Accesibilidad y pie del proveedor

Cuando un envío se apruebe y configure por separado en MailerLite:

- Usar un asunto y preencabezado de texto real; no transmitir un significado
  esencial solo mediante una imagen.
- Mantener una CTA de texto clara, con etiqueta significativa, contraste
  suficiente, foco visible, acceso por teclado y una alternativa de texto sin
  formato legible.
- Estructurar el cuerpo con párrafos cortos y una lista numerada que conserve su
  significado sin estilos.
- Mantener el mecanismo funcional de cancelación de suscripción y el tratamiento
  de pie requerido por el proveedor. No reemplazarlo con texto decorativo ni con
  un enlace personalizado no funcional.
- Incluir el destino aprobado de la política de privacidad en el tratamiento de
  pie cuando la configuración del proveedor lo permita, usando `/privacidad`.
- Revisar el pie renderizado del proveedor, el tratamiento de cancelación y el
  diseño móvil en la futura prueba de envío solo en Preview antes de cualquier
  activación más amplia.

## Criterios de aceptación para una futura prueba de envío solo en Preview

Esta lista permanece inactiva hasta recibir autorización separada. Una futura
prueba pasa solo cuando se evidencie todo lo siguiente sin usar recursos de
Producción:

- Se usa una persona destinataria controlada solo de Preview con un registro de
  consentimiento existente del proveedor; no se envía un formulario público del
  sitio web para esta prueba.
- El grupo, formulario, automatización, remitente y ruta de entrega de Preview
  están aislados de Producción y de cualquier flujo no relacionado.
- El mensaje recibido usa una opción de asunto aprobada y el preencabezado
  indicado, contiene el cuerpo completo de este borrador aprobado y no afirma
  que el correo sea necesario para acceder a la guía.
- El botón y la alternativa de texto sin formato abren la ruta de agradecimiento
  de Preview aprobada.
- El acceso directo al PDF permanece disponible antes y después de la prueba sin
  un requisito de consentimiento o correo.
- El mensaje renderizado se entiende con navegación por teclado y conserva su
  significado esencial en texto sin formato y en una vista móvil estrecha.
- El pie del proveedor incluye un tratamiento funcional de cancelación de
  suscripción y se revisa por claridad; no debe afirmar cumplimiento legal ni
  certificación.
- No intervienen campaña, grupo de Producción, formulario de Producción,
  automatización de Producción ni entrega de Producción.
- El resultado, incluida cualquier limitación o criterio fallido, se documenta
  sin datos personales, detalles de destinatarios, identificadores del
  proveedor, secretos ni URLs no públicas.

## Estado de puertas retenido

| Puerta | Estado |
| --- | --- |
| Vinculación de consentimiento de Producción | ACTIVE / CONTROLLED ROLLOUT |
| Disposición inicial de indexación | APPROVED: `noindex, nofollow` |
| Aceptación limitada de riesgos para rollout | PASS: solo Email 1 / máximo 10 suscriptores / 72 horas |
| Verificación de analytics | PASS / ENABLED / UNCHANGED |
| Configuración, deployment y smoke público sin envío | PASS FOR CONTROLLED ROLLOUT RETRY |
| Control operacional de parada | PASS BY EXECUTION |
| Grupo/formulario de Producción | ACTIVE / CONTROLLED ROLLOUT; cero de diez al inicio |
| Captura de leads de Producción | ACTIVE / CONTROLLED ROLLOUT |
| Email 1 de Producción | ACTIVE / CONTROLLED ROLLOUT |
| Entrega de correo de Producción | ACTIVE / EMAIL 1 ONLY |
| Automatización de Producción | ACTIVE / CONTROLLED ROLLOUT; cero en progreso al inicio |
| Despliegue controlado | ACTIVE / IN PROGRESS; 72 horas |
| Entrega directa del PDF | ACTIVE |

La configuración del proveedor y cada envío de Preview o Producción requieren
aprobación separada de la responsable.

## Registro histórico de staging y pruebas en MailerLite Producción

Este apartado conserva la evidencia anterior de staging, pruebas y rollback.
No describe el estado actual: el rollout controlado vigente está **ACTIVE / IN
PROGRESS** solo para Email 1, hasta diez suscriptores reales durante 72 horas,
con el handoff, workflow y ruta de entrega activos únicamente dentro de ese
límite monitoreado. El conteo de cero de diez es la fotografía de apertura, no
un conteo actual. Analytics permanece habilitado solo para vistas de página
ordinarias, `/ebook-gratis` conserva `noindex, nofollow` temporal y el PDF
directo continúa activo e independiente.

- Preparación de configuración: PASS.
- Se creó exactamente un borrador de Email 1 dentro de exactamente una nueva
  automatización de Producción correspondiente; ambos permanecían STAGED /
  INACTIVE antes de la activación actual.
- La automatización usa únicamente el grupo/formulario original de staging de
  Producción, cuyo grupo volvió a cero después del cleanup, y registra cero
  contactos en curso y tres registros completados no personales retenidos.
- El borrador conserva el asunto aprobado, el preencabezado, el cuerpo en
  español, la CTA con alcance de Producción, la estructura compatible con texto
  sin formato, el tratamiento de privacidad, el pie del proveedor y la
  cancelación de suscripción.
- Se reutilizó un remitente existente verificado sin crear ni modificar una
  identidad de remitente.
- La prueba controlada inicial (histórica) entregó exactamente un Email 1 automatizado después de
  una sola asignación y una sola entrada al workflow. Envíos de prueba, de
  campaña, transaccionales o adicionales: CERO.
- El asunto aprobado, preencabezado oculto, cuerpo en español, CTA de
  Producción, alternativa compatible con texto, privacidad/pie y cancelación
  de suscripción recibidos: PASS. El CTA abrió `/gracias` y la cancelación real
  funcionó sin generar otro mensaje.
- El redirect del formulario alojado: FAIL. Se mostró el estado de éxito nativo
  del proveedor en lugar de `/gracias`; no se realizó un segundo envío.
- En los dos retests correctivos previos (históricos), el redirect corregido llegó
  a `/gracias` y la asignación al grupo aislado funcionó. Durante la ventana
  limitada, el workflow activo no mostró una nueva entrada ni otro Email 1. Esos
  resultados se conservan por separado y no autorizan activación.
- Corrección posterior: el resultado CERO / CERO anterior fue una fotografía
  del período limitado de observación. MailerLite mostró después al contacto
  nuevo como Completed y registró un envío automatizado. El buzón autorizado no
  contiene un mensaje correspondiente ni mensajes adicionales inesperados, por
  lo que entrega, asunto, preencabezado, cuerpo, CTA, alternativa de texto,
  privacidad/pie y renderizado de cancelación siguen UNVERIFIED para ese intento.
  La cancelación manual y GDPR Forget ya se habían completado; no se repitió ni
  se afirma una segunda prueba funcional de cancelación.
- Que el estado del proveedor apareciera después de la limpieza no demuestra el
  momento exacto de ejecución ni un defecto. Se registra como riesgo de tiempo
  operativo: en otro intento se debe confirmar el historial de activación y
  vigilar Activity hasta un estado terminal antes de pausar o limpiar.
- Prueba final de verificación de buzón: PASS. Un contacto nuevo sin historial
  previo produjo una sola asignación, una entrada que llegó a Completed y un
  único envío automatizado recibido. El asunto aprobado, preencabezado oculto,
  cuerpo en español, CTA, estructura compatible con texto, privacidad/pie y
  cancelación renderizada pasaron. La CTA llegó a `/gracias`; la cancelación
  real no generó otro mensaje. La automatización se pausó solo después del
  estado terminal y GDPR Forget devolvió la búsqueda y el grupo a cero.
- El contacto controlado se dio de baja y se sometió a GDPR Forget. El grupo y
  la búsqueda de contactos volvieron a cero; el formulario y el workflow
  retienen historial de registro no personal y tres completados no personales,
  respectivamente.
- En total, MailerLite conserva tres envíos automatizados controlados; dos
  entregas se verificaron en buzón y el envío interveniente sin mensaje
  correspondiente permanece como evidencia histórica. La prueba final por sí
  sola conservó su límite de exactamente una entrega.
- En esas ventanas históricas no se vinculó el sitio público, no se agregó
  ningún valor a Vercel y no se realizó ningún despliegue. La activación actual
  posterior sí tiene el handoff, workflow y ruta de Email 1 activos únicamente
  dentro del límite monitoreado. La entrega directa del PDF permanece
  independiente y ACTIVE.
- Las limitaciones conocidas de feedback de consentimiento y de alcance directo
  del formulario alojado siguen registradas; este staging no las resuelve ni
  autoriza activación pública.
- La responsable acepta esas limitaciones y el riesgo conocido de
  entregabilidad únicamente para el rollout público aprobado de Email 1 de máximo 10
  suscriptores durante 72 horas, con monitoreo activo. Esta aceptación no
  significa que estén corregidos, sean plenamente accesibles, legalmente
  conformes, inocuos, certificados o irrelevantes; tampoco es una aprobación
  irrestricta o permanente. Se debe detener el ingreso de inmediato ante correo
  inesperado, problema de consentimiento/privacidad, fallo de entrega, queja o
  error del workflow.

Este registro no modifica el alcance histórico de preparación y QA de Preview
documentado a continuación. La activación actual no completa ni amplía el
rollout: se mantiene **ACTIVE / IN PROGRESS** solo para Email 1, hasta diez
suscriptores reales durante 72 horas. La decisión go/no-go posterior a las 72
horas permanece pendiente. La disposición inicial de indexación está aprobada
como `noindex, nofollow`; no es permanente ni autoriza cambios futuros de
indexación.

Rollback operativo vigente: ante diez suscriptores o correo inesperado,
problema de consentimiento/privacidad, fallo de entrega, queja o error del
workflow, pausar primero el workflow, retirar segundo la configuración de
handoff de Producción y redeplegar tercero `main` fail-closed; después verificar
rutas, políticas, robots y PDF directo, sin eliminar suscriptores reales ni su
evidencia de consentimiento.

## Estado de staging en MailerLite Preview

- Preparación de configuración: PASS.
- Se creó exactamente un borrador regular, aislado y claramente identificado
  para Preview.
- El borrador reutiliza un remitente existente del dominio autenticado; no se
  creó ni modificó ninguna identidad de remitente.
- Destinatarios: CERO. No se seleccionó grupo, segmento ni contacto.
- Estado de envío: DRAFT / UNSENT. Enviados y bandeja de salida permanecen en
  cero para este staging.
- Conexión con automatización: NINGUNA. Las automatizaciones existentes no se
  modificaron.
- El asunto de prueba, preencabezado, cuerpo, CTA de Preview y contenido
  compatible con texto sin formato corresponden a este documento.
- El pie específico del borrador conserva el mecanismo funcional de cancelación
  del proveedor y enlaza la política de privacidad de Preview.
- No se envió campaña, correo de prueba, correo de Preview ni mensaje
  transaccional; tampoco se creó suscriptor ni se envió formulario.
- La limitación conocida de feedback de consentimiento de MailerLite permanece
  como seguimiento aceptado solo para staging de Preview y no autoriza
  Producción.

Este staging no activa Email 1, entrega, captura de leads, automatización ni
despliegue controlado. Un futuro envío de prueba requiere autorización separada.

Rollback preparado: eliminar únicamente este borrador aislado y volver a
confirmar cero borradores nuevos, cero destinatarios y cero envíos, sin tocar
ningún formulario, grupo, automatización, remitente ni recurso de Producción.

## Resultado del intento controlado de envío de prueba

- Precondiciones del borrador aislado: PASS.
- Ejecución del envío de prueba: BLOCKED antes de la entrega.
- Motivo no sensible: el contacto controlado autorizado requiere una
  verificación separada del proveedor antes de recibir correos de prueba.
- Mensaje de verificación: NO ENVIADO; estaba fuera del límite de un único correo
  de prueba autorizado.
- Correos de prueba completados: CERO.
- Envíos de campaña: CERO.
- Suscriptores o contactos creados: CERO.
- Formularios enviados y automatizaciones activadas: CERO.
- Entrega, contenido recibido, CTA, pie, privacidad y diseño recibido: NOT RUN.
- Estado posterior: el borrador sigue aislado, sin destinatarios, sin publicar y
  sin conexión de entrega o automatización.

No se requirió rollback porque el proveedor detuvo la operación antes de crear
un envío o cambiar recursos. Para reanudar esta QA se necesita una autorización
separada que resuelva el requisito de verificación sin ampliar el alcance a
Producción ni crear un suscriptor.

## Resultado de la reanudación controlada

El registro BLOCKED anterior se conserva como historial. La responsable amplió
de forma explícita el límite únicamente a estos dos mensajes para el mismo buzón
controlado autorizado:

1. Un mensaje de verificación de destinatario.
2. Un único correo de prueba del proveedor después de completar la verificación.

Resultado:

- Mensajes de verificación enviados: UNO.
- Correos de prueba enviados y recibidos: UNO.
- Mensajes adicionales: CERO.
- Entrega al buzón controlado: PASS.
- Asunto, preencabezado oculto, cuerpo en español, CTA y contenido compatible
  con texto: PASS.
- Destino de CTA con alcance seguro de Preview: PASS.
- Pie del proveedor y tratamiento de privacidad renderizados: PASS.
- Tratamiento de cancelación renderizado: PASS. El enlace no es funcional en el
  modo de correo de prueba del proveedor y no se presenta como una prueba de
  cancelación real.
- Lectura y contención intrínseca en escritorio y a 390 px: PASS; sin recorte
  interno ni desbordamiento horizontal del contenido del correo.
- Suscriptores o contactos creados: CERO.
- Destinatarios, grupos, segmentos o audiencias agregados: CERO.
- Formularios enviados, automatizaciones activadas y correos de Producción:
  CERO.
- Borrador: permanece aislado, sin publicar y sin destinatarios.
- Simulación de fallo del proveedor: UNVERIFIED; no se fabricó un fallo.

No se requirió rollback. La verificación de destinatario fue el único cambio de
estado autorizado y no activó suscripción, audiencia, automatización, entrega de
Producción ni el embudo.
