# Fuente de copy de consentimiento de Phase 0

## Estado

- Estado: Fuente de copy aprobada para la futura implementacion de Produccion.
- Publicacion legal en Produccion: PENDIENTE.
- Modelo: Single opt-in explicito.
- Revision juridica profesional colombiana: PASS.
- Revision contractual y de DPA del proveedor: PASS.
- Cambios solicitados: NINGUNO.
- Ruta publica de privacidad aprobada: `/privacidad`.
- URL canonica: `https://singpronuncerepeat.com/privacidad`.
- Casilla explicita: OBLIGATORIA Y DESMARCADA POR DEFECTO.
- Superficie de enlace de privacidad de la aplicacion: PREPARADA.
- Implementacion de consentimiento en MailerLite Produccion: PENDIENTE.
- Captura de leads en Produccion: INACTIVA.

## Casilla principal recomendada

La casilla debe ser obligatoria y estar desmarcada por defecto.

> Acepto recibir por correo la guía gratuita y contenido educativo relacionado con Sing Pronunce Repeat / English with Lyrics. Puedo cancelar la suscripción en cualquier momento.

Inmediatamente junto a la casilla o debajo:

> Consulta nuestra Política de privacidad.

`Politica de privacidad` debe enlazar a `/privacidad`, cuya URL canonica es
`https://singpronuncerepeat.com/privacidad`. No debe apuntar a este archivo
interno, a Preview ni a un dominio tecnico.

## Texto de apoyo

> Usaremos tu correo para enviarte la guía, prácticas educativas y novedades relacionadas con el proyecto. No vendemos tus datos ni los compartimos con anunciantes.

La afirmacion es compatible con la arquitectura propuesta porque distingue anunciantes de los proveedores que tratan datos para operar el servicio. La politica explica que MailerLite, Vercel, Tally u otros encargados aprobados pueden tratar informacion. La revision profesional y del proveedor no solicito cambios. La verificacion operativa de la configuracion real permanece pendiente antes de activar Produccion.

## Variantes para formularios y estados

### Formulario principal en `/`

- Titulo: `Recibe la guía gratis`
- Email: `Tu correo`
- Nombre opcional: `Tu nombre (opcional)`
- Ayuda del nombre: `Puedes dejarlo en blanco.`
- Boton: `Quiero mi guía`
- Consentimiento: usar la casilla principal recomendada sin cambios.
- Apoyo: usar el texto de apoyo.

### Formulario en `/ebook-gratis`

- Titulo: `Enviaremos la guía a tu correo`
- Email: `Tu correo`
- Nombre opcional: `Tu nombre (opcional)`
- Boton: `Recibir la guía`
- Consentimiento: usar la casilla principal recomendada sin cambios.
- Apoyo: usar el texto de apoyo.

### Campo de nombre opcional

- Etiqueta: `Tu nombre (opcional)`
- Ayuda: `Lo usaremos para personalizar algunos mensajes. Puedes dejarlo en blanco.`

El uso de personalizacion debe activarse solo si realmente se configura. De lo contrario, omitir la frase y mantener `Puedes dejarlo en blanco.`

### Enlace de privacidad

> Lee la Política de privacidad para conocer cómo usamos y protegemos tus datos y cómo solicitar su corrección o eliminación.

Ruta aprobada: `/privacidad`.

URL canonica: `https://singpronuncerepeat.com/privacidad`.

### Consentimiento faltante

> Necesitamos tu autorización para enviarte la guía por correo.

### Correo invalido

> Revisa el correo e inténtalo nuevamente.

### Falla del proveedor

> No pudimos completar el registro en este momento. Inténtalo de nuevo en unos minutos.

El error no debe exponer respuestas del proveedor, IDs ni datos ingresados.

### Suscriptor duplicado

> Tu registro está listo. Ya puedes abrir la guía.

Un contacto existente o actualizado se trata como exito cuando MailerLite lo confirma. No revelar que direccion ya estaba registrada.

### Nota de cancelacion

> Puedes cancelar la suscripción en cualquier momento desde el enlace incluido en cada correo.

### Aviso en `/gracias`

> La guía también llegará por correo. Puede tardar unos minutos y conviene revisar la carpeta de spam.

### Pie de correo

> Recibes este mensaje porque solicitaste la guía gratuita y aceptaste recibir contenido educativo de Sing Pronunce Repeat / English with Lyrics. Puedes cancelar la suscripción desde el enlace de este correo. Consulta la Política de privacidad o escribe al canal de privacidad: `privacidad@singpronuncerepeat.com`.

El enlace de baja debe ser el mecanismo funcional del proveedor, no texto decorativo.

### Encuesta opcional

> Esta encuesta es opcional. Usaremos tus respuestas para entender qué quieres aprender y mejorar el proyecto. No incluyas información sensible. Consulta la Política de privacidad antes de enviarla.

Si la encuesta solicita contacto para seguimiento, debe explicarlo de forma
especifica y separada. La revision juridica profesional de este criterio esta
completa y no solicito cambios.

### Lista de interes del ebook avanzado

> Quiero recibir información sobre un futuro ebook avanzado y contenido educativo relacionado. Puedo cancelar la suscripción en cualquier momento.

La accion debe ser opcional y no condicionar el acceso a la guia actual.

### Interes en el primer grupo

> Quiero recibir información sobre el posible primer grupo de práctica y acepto que me contacten para conocer mi interés. Participar es opcional.

El canal de contacto preferido solo debe pedirse si es necesario y se explica su uso.

### Acuse de solicitud de privacidad

> Recibimos tu solicitud de privacidad. La revisaremos por el canal aprobado y podremos pedir una verificación proporcional para proteger tus datos. No envíes documentos o información sensible salvo que sea estrictamente necesario.

Comunicar plazos unicamente conforme a la politica aprobada y al procedimiento
operativo aplicable.

## Reglas de copy e interfaz

- La casilla nunca esta preseleccionada.
- No usar patrones oscuros, urgencia ni presion.
- Encuesta, primer grupo y producto avanzado son opcionales.
- No preseleccionar autorizacion promocional.
- No reemplazar el consentimiento especifico con un vago `Acepto terminos`.
- No condicionar derechos existentes a aceptar promociones no relacionadas.
- Mantener lenguaje sencillo para estudiantes hispanohablantes basicos e intermedios.
- Enlazar la politica antes del envio.
- No afirmar que los datos nunca se comparten: los encargados aprobados pueden tratarlos.
- No mencionar nombres personales en copy publico.

## Decision single opt-in

Phase 0 selecciona single opt-in:

- La entrega empieza despues de que el proveedor confirma el envio.
- La evidencia debe incluir identidad del formulario, version de copy y fecha cuando el proveedor lo permita.
- Un correo duplicado puede tratarse como actualizacion exitosa.
- `/gracias` da acceso inmediato sin datos personales en la URL.
- Double opt-in permanece como mejora futura posible.

Revisar la decision si aparecen:

- Abuso o direcciones falsas.
- Problemas de entregabilidad.
- Requisitos del proveedor.
- Recomendacion legal.
- Mayor volumen promocional.
- Entrada en jurisdicciones adicionales.

La decision de producto no sustituye la evaluacion juridica. La revision
profesional de Phase 0 esta completa y no solicito cambios; cualquier cambio de
alcance requiere una nueva evaluacion.

## Consideracion de usuarios jovenes

El lenguaje debe ser comprensible, sin urgencia manipulativa. El formulario inicial no pedira colegio, edad exacta, direccion, telefono ni datos sensibles. No se fija edad minima ni se presume autorizacion parental. La revision juridica profesional de este enfoque esta completa y no solicito cambios.

## Marcadores pendientes

| Dato o decision | Marcador | Clasificacion |
|---|---|---|
| Identidad del responsable | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Contacto de privacidad | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Condicion personal o empresarial | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Detalle de ubicacion | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Fecha efectiva de la politica | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Ruta de privacidad | `/privacidad` / `https://singpronuncerepeat.com/privacidad` | Aprobada; publicacion de Produccion pendiente |
| Procedimiento de contacto | Revision profesional PASS | Operaciones de derechos pendientes de QA |
| Entidad contratante, DPA, lugares y subencargados | Revision de proveedor PASS | Configuracion operativa de Produccion pendiente |
| Evaluacion de transferencia o transmision | Revision profesional y de proveedor PASS | Sin cambios solicitados |
| Duraciones de conservacion | Revision profesional PASS | Sin cambios solicitados |
| Enfoque para menores | Revision profesional PASS | Sin cambios solicitados |
| Plazos de respuesta | Revision profesional PASS | Sin cambios solicitados |
| Aprobacion profesional del copy | PASS | Sin cambios solicitados |
| Ajustes menores de tono sin cambiar finalidad | N/A | Refinamiento documental no bloqueante |
