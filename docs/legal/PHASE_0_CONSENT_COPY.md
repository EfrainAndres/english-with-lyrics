# Fuente de copy de consentimiento de Phase 0

## Estado

- Estado: Copy propuesto para implementacion futura.
- Publicacion: No publicado.
- Modelo: Single opt-in explicito.
- Revision legal: `[PENDING_LEGAL_REVIEW]`.
- Uso en produccion: Prohibido hasta publicar la politica aprobada y completar los datos del responsable.

## Casilla principal recomendada

La casilla debe ser obligatoria y estar desmarcada por defecto.

> Acepto recibir por correo la guía gratuita y contenido educativo relacionado con Sing Pronunce Repeat / English with Lyrics. Puedo cancelar la suscripción en cualquier momento.

Inmediatamente junto a la casilla o debajo:

> Consulta nuestra Política de privacidad.

`Politica de privacidad` debe enlazar a la futura ruta publica aprobada. El enlace real es `[PENDING_OWNER_INPUT]` y no debe apuntar a este archivo interno.

## Texto de apoyo

> Usaremos tu correo para enviarte la guía, prácticas educativas y novedades relacionadas con el proyecto. No vendemos tus datos ni los compartimos con anunciantes.

La afirmacion es compatible con la arquitectura propuesta porque distingue anunciantes de los proveedores que tratan datos para operar el servicio. La politica debe explicar que MailerLite, Vercel, Tally u otros encargados aprobados pueden tratar informacion. Antes de publicar, el propietario debe confirmar que no existe venta de datos ni uso con anunciantes y que las configuraciones reales mantienen esa practica: `[PENDING_OWNER_INPUT]` y `[PENDING_PROVIDER_VERIFICATION]`.

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

Ruta: `[PENDING_OWNER_INPUT]` hasta que exista una pagina publica aprobada.

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

Si la encuesta solicita contacto para seguimiento, debe explicarlo de forma especifica y separada: `[PENDING_LEGAL_REVIEW]`.

### Lista de interes del ebook avanzado

> Quiero recibir información sobre un futuro ebook avanzado y contenido educativo relacionado. Puedo cancelar la suscripción en cualquier momento.

La accion debe ser opcional y no condicionar el acceso a la guia actual.

### Interes en el primer grupo

> Quiero recibir información sobre el posible primer grupo de práctica y acepto que me contacten para conocer mi interés. Participar es opcional.

El canal de contacto preferido solo debe pedirse si es necesario y se explica su uso.

### Acuse de solicitud de privacidad

> Recibimos tu solicitud de privacidad. La revisaremos por el canal aprobado y podremos pedir una verificación proporcional para proteger tus datos. No envíes documentos o información sensible salvo que sea estrictamente necesario.

No prometer un plazo hasta que se confirme en `[PENDING_LEGAL_REVIEW]`.

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

La decision de producto no sustituye la evaluacion juridica: `[PENDING_LEGAL_REVIEW]`.

## Consideracion de usuarios jovenes

El lenguaje debe ser comprensible, sin urgencia manipulativa. El formulario inicial no pedira colegio, edad exacta, direccion, telefono ni datos sensibles. No se fija edad minima ni se presume autorizacion parental. El enfoque aplicable es bloqueador de produccion: `[PENDING_LEGAL_REVIEW]`.

## Marcadores pendientes

| Dato o decision | Marcador | Clasificacion |
|---|---|---|
| Identidad del responsable | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Contacto de privacidad | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Condicion personal o empresarial | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Detalle de ubicacion | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Fecha efectiva de la politica | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Ruta y procedimiento de contacto | `[PENDING_OWNER_INPUT]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de implementacion |
| Entidad contratante del proveedor | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de implementacion |
| Lugares y subencargados | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de produccion |
| Evaluacion de transferencia | `[PENDING_PROVIDER_VERIFICATION]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Duraciones de conservacion | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Enfoque para menores | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Plazos de respuesta | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Aprobacion final del copy | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Ajustes menores de tono sin cambiar finalidad | N/A | Refinamiento documental no bloqueante |
