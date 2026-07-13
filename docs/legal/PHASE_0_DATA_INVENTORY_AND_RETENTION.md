# Inventario de datos y conservacion de Phase 0

## Estado

- Estado: Inventario propuesto; no representa recoleccion activa.
- Version: 0.1-draft.
- Fecha: 2026-07-12.
- Revision legal: `[PENDING_LEGAL_REVIEW]`.
- Proveedor principal propuesto: MailerLite, sujeto a `[PENDING_PROVIDER_VERIFICATION]`.
- Proveedor fallback: Brevo, inactivo.

No contiene datos personales reales. Las categorias de conservacion son decisiones operativas propuestas, no plazos legales obligatorios.

## Inventario

| Elemento de dato | Fuente | Requerido? | Proposito | Sistema/proveedor | Acceso | Conservacion propuesta | Metodo de eliminacion | Estado |
|---|---|---:|---|---|---|---|---|---|
| Email | Formulario del ebook | Si | Entrega, suscripcion, soporte | MailerLite propuesto | Propietario y acceso minimo autorizado | Ciclo de suscripcion activa; supresion tras baja cuando proceda `[PENDING_LEGAL_REVIEW]` | Eliminacion o supresion verificada en proveedor | Planificado |
| Nombre | Formulario del ebook | No | Personalizacion limitada | MailerLite propuesto | Acceso minimo autorizado | Ciclo de suscripcion activa; revisar necesidad `[PENDING_LEGAL_REVIEW]` | Borrar campo o contacto | Planificado |
| Valor de consentimiento | Formulario del ebook | Si | Registrar accion afirmativa | MailerLite propuesto | Propietario y privacidad | Mientras sea necesario para demostrar autorizacion `[PENDING_LEGAL_REVIEW]` | Segun solicitud y obligaciones revisadas | Pendiente de verificacion |
| Fecha de consentimiento | Proveedor/formulario | Si, si esta disponible | Evidencia de autorizacion | MailerLite propuesto | Propietario y privacidad | Periodo definido de revision `[PENDING_LEGAL_REVIEW]` | Eliminacion conforme al registro principal | `[PENDING_PROVIDER_VERIFICATION]` |
| Identidad del formulario | Formulario/provider | Si | Identificar origen y copy presentado | MailerLite propuesto | Propietario y privacidad | Periodo definido de revision `[PENDING_LEGAL_REVIEW]` | Eliminacion conforme al registro principal | `[PENDING_PROVIDER_VERIFICATION]` |
| Categoria de fuente | Campo permitido | No | Atribucion agregada | MailerLite o analitica aprobada | Marketing agregado | Ciclo de suscripcion o metrica agregada `[PENDING_LEGAL_REVIEW]` | Borrar campo; conservar solo agregado | Planificado |
| UTM source | URL/formulario | No | Atribucion de campana | MailerLite propuesto | Marketing agregado | Conservacion operativa corta o agregado `[PENDING_LEGAL_REVIEW]` | Borrar campo o anonimizar agregado | Planificado |
| UTM medium | URL/formulario | No | Atribucion de campana | MailerLite propuesto | Marketing agregado | Conservacion operativa corta o agregado `[PENDING_LEGAL_REVIEW]` | Borrar campo o anonimizar agregado | Planificado |
| UTM campaign | URL/formulario | No | Atribucion de campana | MailerLite propuesto | Marketing agregado | Conservacion operativa corta o agregado `[PENDING_LEGAL_REVIEW]` | Borrar campo o anonimizar agregado | Planificado |
| Referrer | Navegacion/formulario | No | Entender fuente | Proveedor o analitica aprobada | Marketing agregado | Conservacion operativa corta o segun proveedor `[PENDING_LEGAL_REVIEW]` | Eliminar campo o usar agregado | Pendiente de verificacion |
| Landing path | Formulario | No | Entender pagina de conversion | MailerLite propuesto | Marketing agregado | Conservacion operativa corta o agregado `[PENDING_LEGAL_REVIEW]` | Eliminar campo o anonimizar | Planificado |
| Estado del contacto | Proveedor de correo | Si | Gestionar suscripcion | MailerLite propuesto | Propietario y email operations | Ciclo de suscripcion y supresion aplicable `[PENDING_LEGAL_REVIEW]` | Eliminacion/supresion en proveedor | `[PENDING_PROVIDER_VERIFICATION]` |
| Estado de baja | Enlace de unsubscribe | Si cuando existe | Respetar opt-out | MailerLite propuesto | Propietario y email operations | Supresion minima necesaria `[PENDING_LEGAL_REVIEW]` | Segun controles del proveedor | `[PENDING_PROVIDER_VERIFICATION]` |
| Metadatos de entrega | Proveedor de correo | No | Detectar entregas y fallas | MailerLite propuesto | Email operations | Conservacion operativa corta `[PENDING_LEGAL_REVIEW]` | Configuracion o eliminacion de contacto | `[PENDING_PROVIDER_VERIFICATION]` |
| Metadatos de apertura | Proveedor de correo | No | Evaluar comunicacion si se habilita | MailerLite propuesto | Analisis agregado | Periodo definido de revision `[PENDING_LEGAL_REVIEW]` | Deshabilitar tracking o eliminar contacto/datos | Deshabilitado hasta revision |
| Metadatos de clic | Proveedor de correo | No | Evaluar enlaces si se habilita | MailerLite propuesto | Analisis agregado | Periodo definido de revision `[PENDING_LEGAL_REVIEW]` | Deshabilitar tracking o eliminar contacto/datos | Deshabilitado hasta revision |
| Respuestas de encuesta | Tally | No | Investigacion educativa y de producto | Tally | Propietario y analista autorizado | Periodo definido de revision; luego agregado `[PENDING_LEGAL_REVIEW]` | Eliminar respuesta/exportacion en proveedor | Existente; configuracion por revisar |
| Respuestas de primer grupo | Tally | No | Validar interes | Tally | Propietario y analista autorizado | Periodo definido de revision `[PENDING_LEGAL_REVIEW]` | Eliminar respuesta/exportacion | Existente; configuracion por revisar |
| Interes en producto avanzado | Formulario futuro | No | Validar demanda | Proveedor aprobado | Propietario y analista autorizado | Ciclo de interes o periodo de revision `[PENDING_LEGAL_REVIEW]` | Eliminar etiqueta, respuesta o contacto | Documentacion solamente |
| Agregados de page views | Sitio web | No | Uso, fuente y rendimiento del embudo | Vercel Analytics | Propietario y analista autorizado | Segun configuracion del proveedor `[PENDING_PROVIDER_VERIFICATION]` | Configuracion del proveedor; conservar agregado | Disponible en forma agregada |
| Mensajes de soporte | Canal futuro | No | Resolver problemas | `[PENDING_OWNER_INPUT]` | Soporte autorizado | Conservacion operativa corta; hold si aplica `[PENDING_LEGAL_REVIEW]` | Eliminar mensaje y adjuntos cuando proceda | Bloqueado por canal |
| Solicitudes de privacidad | Canal futuro | No | Atender derechos y demostrar gestion | Registro seguro fuera de Git | Responsable y privacidad | Solo mientras sea necesario para demostrar gestion `[PENDING_LEGAL_REVIEW]` | Eliminacion segura tras periodo aprobado | Bloqueado por canal/proceso |
| Exportaciones temporales | MailerLite, Tally u otro | No | Analisis o solicitud puntual | Almacenamiento controlado fuera de Git | Solo persona autorizada | Conservacion operativa corta; eliminar al terminar | Eliminacion segura y vaciado de copias | Prohibidas por defecto |
| Logs del proveedor | Proveedores aplicables | No | Seguridad y operacion | MailerLite, Vercel, Tally | Segun proveedor y acceso autorizado | Segun configuracion/contrato `[PENDING_PROVIDER_VERIFICATION]` | Herramienta del proveedor o cierre de cuenta | Pendiente de verificacion |

## Categorias de conservacion

- **Ciclo de suscripcion activa:** mientras la persona permanezca suscrita y el dato sea necesario para las finalidades informadas.
- **Conservacion operativa corta:** tiempo minimo para resolver un envio, error, soporte o analisis puntual; duracion exacta `[PENDING_LEGAL_REVIEW]`.
- **Periodo definido de revision:** intervalo aprobado para revisar necesidad y eliminar datos obsoletos; duracion `[PENDING_LEGAL_REVIEW]`.
- **Hold legal o de disputa:** solo cuando sea aplicable y documentado; alcance `[PENDING_LEGAL_REVIEW]`.
- **Eliminacion pronta tras solicitud verificada:** cuando proceda, sin fijar aqui un plazo estatutario.
- **Metricas agregadas o anonimizadas:** conservar solo cuando no permitan identificar razonablemente a una persona.
- **Decision legal pendiente:** no activar el tratamiento hasta resolver `[PENDING_LEGAL_REVIEW]`.

## Decisiones de conservacion

- Conservar suscriptores activos solo mientras esten suscritos y sus datos sean necesarios para las finalidades documentadas.
- Mantener contactos dados de baja en supresion solo en la medida necesaria para respetar el opt-out, sujeto a capacidades del proveedor y revision legal.
- Eliminar exportaciones temporales inmediatamente despues del analisis aprobado; duracion operativa maxima `[PENDING_LEGAL_REVIEW]`.
- No almacenar exportaciones crudas de Tally, MailerLite o Brevo en Git.
- Conservar analitica segun configuracion aprobada del proveedor y preferir agregados.
- Conservar registros de solicitudes solo mientras sean necesarios para demostrar su atencion.
- Evitar listas duplicadas, hojas abandonadas y copias locales.
- Eliminar campos que no se usen.
- No activar metadatos de apertura o clic hasta revisar necesidad, configuracion, aviso y proveedor.
- No copiar datos de produccion a Preview, local, screenshots, issues o fixtures.

## Proceso de revision

1. El propietario aprueba finalidades y campos.
2. La revision legal confirma categorias y duraciones.
3. Se verifica la configuracion real de cada proveedor.
4. Antes de produccion se prueba exportacion, correccion, baja y eliminacion.
5. Despues del lanzamiento se revisan periodicamente campos, listas, accesos y exportaciones.
6. Todo dato sin finalidad vigente se elimina o agrega de manera irreversible cuando corresponda.

## Ninos, ninas y adolescentes

No se crea campo de edad exacta ni se solicitan colegio, telefono, direccion o datos sensibles en el formulario inicial. La utilidad del producto para estudiantes jovenes no elimina obligaciones. La estrategia de autorizacion y conservacion relacionada con menores es un bloqueador de produccion: `[PENDING_LEGAL_REVIEW]`.

## Marcadores pendientes

| Dato o decision | Marcador | Clasificacion |
|---|---|---|
| Identidad del responsable | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Contacto de privacidad | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Condicion de operacion personal o empresarial | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Detalle de ubicacion | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Fecha efectiva de politicas | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Canal y procedimiento de solicitudes | `[PENDING_OWNER_INPUT]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de implementacion |
| Entidad contratante del proveedor | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de implementacion |
| Lugares de tratamiento | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de produccion |
| Subencargados | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de produccion |
| Evaluacion de transferencia | `[PENDING_PROVIDER_VERIFICATION]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Duraciones concretas | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Enfoque para menores | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Plazos de respuesta | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Aprobacion legal final | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Nombres internos de roles de acceso | `[PENDING_OWNER_INPUT]` | Refinamiento documental no bloqueante antes de implementacion |
