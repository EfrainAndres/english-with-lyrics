# Borrador del correo de bienvenida 1 de Fase 0

## Estado y límites

- Estado del contenido: DRAFT.
- Estado de activación: INACTIVE.
- Alcance: preparación exclusivamente documental para una futura prueba de envío solo en Preview.
- Este borrador no autoriza un formulario, grupo, automatización, entrega, remitente, suscriptor, configuración del proveedor ni activación de Producción.
- La entrega directa del PDF permanece ACTIVE e independiente del consentimiento promocional o de este correo.

Este documento es una referencia de contenido futuro. No modifica la
configuración histórica de Preview ni los registros de QA controlado existentes
en el repositorio.

## Propósito

Dar la bienvenida a una persona suscrita que ya otorgó consentimiento afirmativo
en el formulario alojado por el proveedor, proponer un primer paso de práctica
tranquilo y dirigirla a la experiencia existente de la guía. La guía ya está
disponible directamente: este correo no es necesario para recibirla.

El futuro formulario alojado por el proveedor permanece como sistema de registro
del consentimiento. Este borrador de correo no crea, almacena, transmite ni
afirma registrar evidencia de consentimiento.

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
| Vinculación de consentimiento de Producción | PENDING |
| Decisión de indexación de Producción | PENDING |
| Grupo/formulario de Producción | INACTIVE |
| Captura de leads de Producción | INACTIVE |
| Email 1 de Producción | INACTIVE |
| Entrega de correo de Producción | INACTIVE |
| Automatización de Producción | INACTIVE |
| Despliegue controlado | PENDING |
| Entrega directa del PDF | ACTIVE |

La configuración del proveedor y cada envío de Preview o Producción requieren
aprobación separada de la responsable.

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
