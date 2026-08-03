# Checklist de implementacion de privacidad de Phase 0

## Estado

- Estado: Politicas legales publicadas en Produccion en modo `approved`; revision canonica de Produccion por la responsable PENDIENTE.
- Fecha: 2026-08-03.
- Produccion: Bloqueada hasta completar todos los gates de produccion.
- Revision juridica profesional colombiana: PASS; cambios solicitados: NINGUNO.
- Revision contractual y de DPA del proveedor: PASS; cambios solicitados: NINGUNO.
- Implementacion fuente del modo `approved`: COMPLETA.
- QA local del modo `approved`: PASS.
- Enlace de privacidad de la aplicacion: PREPARADO — `/privacidad`.
- Revision renderizada del modo `approved` por la responsable: PASS.
- Preview protegido del modo `approved`: PASS.
- Gate de preparacion del Preview en modo `approved`: PASS.
- Merge del PR #63: PASS en `a09623178b41901a13cb799336dc0ae994a83e3e`.
- Configuracion de entorno legal de Produccion: PASS.
- Despliegue de Produccion: PASS.
- Smoke QA canonico de las rutas legales en Produccion: PASS.
- Revision de agente en Produccion de `/privacidad`: PASS.
- Revision de agente en Produccion de `/tratamiento-de-datos`: PASS.
- Contencion en escritorio y a 390 px: PASS; desbordamiento horizontal: NINGUNO.
- Contenido en modo `approved`: PASS.
- `noindex, nofollow`: PASS.
- Privacidad de metadata: PASS.
- Regresion del ebook y de agradecimiento en Produccion: PASS.
- Rollback: PREPARADO / NO EJECUTADO.
- Revision canonica de Produccion por la responsable: PENDIENTE.
- Gate final de aceptacion de publicacion legal en Produccion: BLOQUEADO.
- Decision de indexacion de Produccion: PENDIENTE, con `noindex, nofollow` conservado.
- Enlace final de consentimiento y QA de operaciones de derechos: PENDIENTES.
- Rollout controlado: PENDIENTE.

La publicacion legal no activa el embudo comercial y no constituye certificacion
ni cumplimiento garantizado. La captura de leads, el Email 1, la entrega de
correo y la automatizacion siguen INACTIVOS; la descarga directa del PDF sigue
ACTIVA. Ambas rutas conservan `noindex, nofollow` hasta una decision explicita de
indexacion, y el gate final de aceptacion sigue bloqueado hasta la revision
canonica de Produccion por la responsable.

Marcar un item solo con evidencia verificable. Completar borradores no equivale a aprobar la politica ni activar legalmente la recoleccion.

## Antes de programar

- [ ] Identidad del responsable suministrada: `[PENDING_OWNER_INPUT]`.
- [ ] Condicion de operacion personal o empresarial definida: `[PENDING_OWNER_INPUT]`.
- [ ] Ubicacion y datos de identificacion aplicables suministrados: `[PENDING_OWNER_INPUT]`.
- [x] Contacto y canal de privacidad suministrados: `privacidad@singpronuncerepeat.com`.
- [x] Professional privacy mailbox created.
- [x] Privacy-contact mailbox operational.
- [x] Hostinger Webmail login verified.
- [x] Controlled inbound delivery verified.
- [x] Controlled outbound delivery verified.
- [x] No bounce observed during the controlled test.
- [x] Sender display name configured as `Sing Pronunce Repeat`.
- [x] Public privacy-contact address defined as `privacidad@singpronuncerepeat.com`.
- [x] Hostinger MX records retained.
- [x] Hostinger SPF record retained.
- [x] Hostinger DKIM records retained.
- [x] DMARC record retained.
- [x] Revision juridica profesional colombiana realizada; no solicito cambios.
- [x] Revision contractual y de terminos aplicables de MailerLite completada; no solicito cambios.
- [x] DPA de MailerLite revisado; no se solicitaron cambios.
- [x] Subencargados de MailerLite incluidos en la revision del proveedor.
- [x] Lugares de tratamiento de MailerLite incluidos en la revision del proveedor.
- [ ] Acceso a la cuenta del proveedor asegurado.
- [ ] Grupos/listas de Produccion y Preview definidos y separados.
- [x] Single opt-in seleccionado como modelo explicito de Phase 0.
- [x] Enfoque para usuarios menores revisado profesionalmente; no se solicitaron cambios.
- [x] Decisiones de conservacion revisadas profesionalmente; no se solicitaron cambios.
- [ ] Campos del formulario confirmados: email requerido, nombre opcional, consentimiento requerido y atribucion limitada opcional.
- [x] Ruta publica futura de politica y canal de contacto definidos: `/privacidad` y `/tratamiento-de-datos` implementadas en `feat/phase-0-public-legal-routes`. Ver `docs/validation/PHASE_0_PUBLIC_LEGAL_ROUTES.md`.
- [x] Estructura de rutas publicas implementada.
- [x] Pagina de privacidad implementada (`src/app/privacidad/page.tsx`).
- [x] Pagina de tratamiento de datos implementada (`src/app/tratamiento-de-datos/page.tsx`).
- [x] Manejo de estado incompleto implementado (Draft en Development/Preview, estado neutral en Production).
- [x] Metadata noindex implementada en ambas rutas.
- [x] Enlaces de footer implementados en `/` y `/ebook-gratis`.
- [x] Configuracion legal centralizada implementada (`src/lib/legal-config.ts`).
- [x] Ningun dato personal fue confirmado en Git.
- [x] Renderizado seguro de estado incompleto implementado (Draft en Development/Preview, estado neutral en Production).
- [x] Ruta de privacidad verificada en Preview desplegado.
- [x] Ruta de tratamiento de datos verificada en Preview desplegado.
- [x] Renderizado en movil verificado.
- [x] Renderizado en escritorio verificado.
- [x] Navegacion por teclado verificada.
- [x] Ningun token de marcador crudo es visible.
- [x] Ningun dato ficticio del responsable fue confirmado.
- [x] Flujo actual del ebook preservado.
- [x] Rutas actuales de agradecimiento preservadas.
- [x] Captura de leads en Produccion permanece desactivada.
- [x] Revision renderizada del modo `approved` por la responsable completada.
- [x] Preview protegido especifico de rama en modo `approved` desplegado y revisado.
- [x] `/privacidad` revisada en escritorio y a 390 px sin desbordamiento horizontal.
- [x] `/tratamiento-de-datos` revisada en escritorio y a 390 px sin desbordamiento horizontal.
- [x] Avisos de borrador y de revision pendiente ausentes en modo `approved`.
- [x] Afirmaciones de certificacion o cumplimiento garantizado ausentes.
- [x] `noindex, nofollow` verificado en ambas rutas del Preview aprobado.
- [x] Valores personales de la responsable ausentes en metadata y Open Graph.
- [x] Enlace `mailto:` de privacidad, enlace telefonico y enlace interno de politica verificados.
- [x] Enlace de privacidad de `/ebook-gratis` verificado con destino interno exacto `/privacidad`.
- [x] `/ebook-gratis` sin cambios de comportamiento y sin formulario de aplicacion.
- [x] Regresion de `/gracias` verificada.
- [x] Ningun formulario fue enviado durante la revision.
- [x] Configuracion de entorno de Produccion sin cambios durante la revision.

Deployed Preview QA was completed manually without storing screenshots, deployment URLs, personal data, provider IDs, fake legal details, or private contact information in the repository. La revision del modo `approved` en Preview protegido se realizo bajo las mismas condiciones.

## Debida diligencia de MailerLite

Verificar en fuentes oficiales vigentes antes de produccion:

- [ ] Entidad contratante correcta.
- [ ] Politica de privacidad vigente.
- [ ] Terminos vigentes.
- [x] DPA revisado profesionalmente para el caso; no se solicitaron cambios.
- [ ] Evidencia de consentimiento disponible, incluida marca de tiempo e identidad de formulario.
- [ ] Soporte y comportamiento real de single opt-in.
- [ ] Soporte y comportamiento real de double opt-in.
- [ ] Baja incluida y funcional en cada mensaje.
- [ ] Manejo de supresiones y prevencion de resuscripcion accidental.
- [ ] Exportacion de contactos y evidencia.
- [ ] Correccion de datos.
- [ ] Eliminacion de contactos y datos relacionados.
- [ ] Lugares de tratamiento y almacenamiento.
- [ ] Lista de subencargados.
- [ ] Informacion de seguridad.
- [ ] Terminos de notificacion de incidentes.
- [ ] Retencion despues de cerrar la cuenta.
- [ ] Comportamiento de API y formularios embebidos.
- [ ] Soporte para lista/grupo o formulario de Preview.
- [ ] Requisitos de dominio e identidad del remitente.
- [ ] Configuracion de tracking de apertura y clic revisada.
- [ ] Exportacion, correccion, eliminacion y baja probadas con datos de prueba.

Estado de revision contractual y de DPA: PASS. La configuracion, evidencia de
consentimiento y prueba de operaciones reales del proveedor permanecen
pendientes. No registrar limites numericos del plan sin verificacion oficial
vigente.

## Debida diligencia de Brevo como fallback

Brevo permanece inactivo. Antes de sustituir MailerLite, verificar:

- [ ] Entidad contratante, politica, terminos y DPA vigentes.
- [ ] Lugares de tratamiento y subencargados.
- [ ] Evidencia de consentimiento y soporte single/double opt-in.
- [ ] Baja, supresion y prevencion de reactivacion.
- [ ] Exportacion, correccion y eliminacion.
- [ ] Seguridad, incidentes y retencion al cerrar cuenta.
- [ ] Formularios, API, aislamiento de Preview y dominio remitente.
- [ ] Evaluacion internacional y legal aprobada.

Estado: `[PENDING_PROVIDER_VERIFICATION]`. No enviar datos a MailerLite y Brevo simultaneamente salvo una migracion controlada, justificada y revisada.

## Antes de QA en Preview

- [ ] Paginas legales en estado Draft implementadas solo en Preview.
- [ ] Casilla de consentimiento desmarcada por defecto.
- [ ] Texto y finalidades coinciden con `PHASE_0_CONSENT_COPY.md`.
- [ ] Enlace de privacidad funciona.
- [ ] Preview no crea contactos en Produccion.
- [ ] Se usa grupo/lista/formulario de prueba separado.
- [ ] La clave de Produccion no existe en Preview.
- [ ] Mensajes de prueba estan identificados como Preview/Test.
- [ ] Ningun dato personal aparece en URLs.
- [ ] Ningun ID de proveedor aparece en URLs publicas.
- [ ] Ningun dato personal aparece en logs.
- [ ] Ningun dato personal aparece en analitica.
- [ ] Validacion de email funciona.
- [ ] Error por consentimiento faltante funciona.
- [ ] Estado de error del proveedor funciona con mensaje generico.
- [ ] Correo duplicado se trata de forma segura e idempotente.
- [ ] Retiro y unsubscribe se prueban.
- [ ] `/gracias` se configura segun la decision SEO aprobada.
- [ ] Visita directa a `/gracias` no revela informacion personal.
- [ ] El PDF sigue accesible durante fallas de analitica.
- [ ] Caida del proveedor no expone contactos ni respuestas internas.
- [ ] Datos de prueba estan marcados y no provienen de Produccion.

## Antes de Produccion

- [x] Publicacion final del contenido legal: revision profesional PASS; modo `approved` PASS en Preview protegido y en Produccion canonica; configuracion de entorno de Produccion PASS; revision canonica por la responsable y decision de indexacion PENDIENTES.
- [x] Identidad del responsable publicada en Produccion mediante variables server-only; ningun valor se almacena en el repositorio.
- [x] Variables `LEGAL_*` configuradas solo en el scope Production y verificadas por nombre y scope.
- [x] Scopes Preview y Development sin cambios.
- [x] Rollback seguro preparado antes de modificar Produccion; PREPARADO / NO EJECUTADO.
- [x] Canal de contacto operativo y probado: `privacidad@singpronuncerepeat.com`.
- [x] Politica de privacidad publica y enlazada; enlace interno exacto `/privacidad` desde `/ebook-gratis`.
- [x] Politica de tratamiento publica y enlazada desde `/privacidad`.
- [ ] Contrato del proveedor aceptado por propietario autorizado.
- [ ] Debida diligencia de MailerLite completada.
- [x] Evaluacion profesional internacional y del proveedor completada; no se solicitaron cambios.
- [ ] MailerLite sender verified.
- [ ] MailerLite sending domain authenticated.
- [ ] MailerLite DKIM verified.
- [ ] Identidad y dominio remitente de Produccion verificados para MailerLite.
- [ ] Automatizacion de Produccion probada con datos controlados.
- [ ] Production Email 1 configured.
- [ ] Production automation activated.
- [ ] Production inbox placement passed.
- [ ] Unsubscribe probado de extremo a extremo.
- [ ] Supresion y prevencion de reactivacion probadas.
- [ ] Eliminacion probada.
- [ ] Exportacion probada y archivo de prueba eliminado.
- [ ] Roles y accesos revisados.
- [ ] MFA activado cuando este disponible.
- [ ] Analitica y propiedades de eventos revisadas.
- [x] Enlace de privacidad de la aplicacion preparado en el area del formulario: `/privacidad`.
- [ ] Enlace y control explicito, requerido y desmarcado implementados en el formulario MailerLite de Produccion.
- [ ] Version y fecha efectiva completadas.
- [ ] Contacto de incidentes definido.
- [ ] Procedimiento de solicitudes probado sin datos reales.
- [x] Plan de rollback del ebook preparado y verificado; no ejecutado.
- [x] Descarga directa del PDF permanece activa.
- [ ] Rollout controlado aprobado.
- [ ] Production lead capture activated.
- [ ] Controlled Production rollout approved.

## Despues del lanzamiento

- [ ] Verificar periodicamente evidencia de autorizacion.
- [ ] Monitorear errores de envio de formulario.
- [ ] Monitorear fallas de entrega.
- [ ] Revisar bajas y evitar reactivaciones.
- [ ] Revisar solicitudes de privacidad.
- [ ] Revisar cambios de proveedor, DPA y subencargados.
- [ ] Revisar conservacion y campos sin uso.
- [ ] Eliminar exportaciones temporales o abandonadas.
- [ ] Revisar accesos y MFA.
- [ ] Actualizar politicas tras cambios materiales.
- [ ] Ejecutar revision del embudo a 7 dias sin guardar datos personales en Git.
- [ ] Ejecutar revision del embudo a 14 dias sin guardar datos personales en Git.
- [ ] Revisar incidentes y envios accidentales Preview a Produccion.

## Procedimiento interno de solicitudes

Tipos: acceso, correccion, actualizacion, eliminacion, retiro de autorizacion, unsubscribe, informacion sobre uso y queja.

```text
Solicitud recibida
→ identidad verificada proporcionalmente
→ solicitud clasificada
→ sistemas del proveedor localizados
→ accion realizada
→ respuesta enviada
→ cierre registrado de forma segura
```

Checklist por solicitud:

- [ ] Recibir por el canal aprobado.
- [ ] Pedir solo verificacion proporcional.
- [ ] Confirmar que no se discuten datos de otra persona.
- [ ] Clasificar tipo y sistemas afectados.
- [ ] Revisar MailerLite o proveedor activo, Tally, soporte y exportaciones controladas.
- [ ] Ejecutar accion aplicable.
- [ ] Confirmar baja, correccion, exportacion o eliminacion.
- [ ] Responder por canal seguro.
- [ ] Registrar cierre fuera del repositorio.
- [ ] Escalar al responsable y asesor legal si no puede resolverse.

No guardar solicitudes en Git, mostrar listas en capturas ni incluir datos
personales en issues. Los plazos revisados profesionalmente deben aplicarse
conforme a las politicas; la prueba operativa del flujo permanece pendiente.

## Seguridad y limites operativos

- [ ] Secretos del proveedor permanecen del lado servidor si luego se usa API.
- [ ] Identificadores publicos del embed estan separados de secretos.
- [ ] Produccion, Preview y local usan valores diferentes.
- [ ] Local usa mock/test y no crea contactos reales por defecto.
- [ ] Emails no aparecen en analitica ni URLs de redireccion.
- [ ] IDs de proveedor no aparecen en URLs publicas.
- [ ] Logs redactan entradas de usuario.
- [ ] Errores son genericos y no exponen cuerpos del proveedor.
- [ ] Acceso al proveedor esta limitado por minimo privilegio.
- [ ] MFA esta activado cuando existe.
- [ ] Exportaciones temporales estan cifradas o estrictamente controladas.
- [ ] Datos de prueba son visibles como test y estan aislados.
- [ ] Produccion nunca se copia a fixtures locales.
- [ ] Una falla del proveedor no expone contactos.
- [ ] El fallback de PDF publico funciona segun la arquitectura aprobada.

## Ninos, ninas y adolescentes

- [ ] Se reconoce que el producto puede atraer a estudiantes jovenes.
- [ ] El formulario inicial minimiza datos.
- [ ] No se pide colegio, edad exacta, direccion, telefono ni datos sensibles.
- [ ] No se crean perfiles de publicidad comportamental.
- [ ] No se infieren reglas parentales sin revision.
- [ ] No se declara edad minima sin revision.
- [ ] No se usa urgencia manipulativa.
- [ ] El consentimiento usa lenguaje comprensible.
- [x] La estrategia de edad y autorizacion fue revisada profesionalmente; no se solicitaron cambios.

Este bloque es un gate de produccion, no una mejora opcional.

## Marcadores pendientes

| Dato o decision | Marcador | Clasificacion |
|---|---|---|
| Identidad del responsable | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Contacto de privacidad | `privacidad@singpronuncerepeat.com` | Completo para mailbox; prueba operativa del procedimiento pendiente |
| Condicion de operacion personal o empresarial | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Detalle de ubicacion | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Fecha efectiva | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Canal y procedimiento de contacto | Revision profesional PASS | QA de operaciones de derechos pendiente |
| Entidad contratante, DPA, lugares y subencargados de MailerLite | Revision de proveedor PASS | Configuracion y QA operativo de Produccion pendientes |
| Evaluacion de transferencia o transmision | Revision profesional y de proveedor PASS | Sin cambios solicitados |
| Duraciones de conservacion | Revision profesional PASS | Sin cambios solicitados |
| Enfoque para menores | Revision profesional PASS | Sin cambios solicitados |
| Plazos de respuesta | Revision profesional PASS | QA operativo pendiente |
| Aprobacion juridica profesional | PASS | Sin cambios solicitados; publicacion de Produccion pendiente |
| Frecuencia futura de revision operativa | `[PENDING_OWNER_INPUT]` | Refinamiento documental no bloqueante antes de implementacion |
