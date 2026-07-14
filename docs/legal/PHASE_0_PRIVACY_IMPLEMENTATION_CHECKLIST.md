# Checklist de implementacion de privacidad de Phase 0

## Estado

- Estado: Fuente operativa; no implementada.
- Fecha: 2026-07-12.
- Produccion: Bloqueada hasta completar todos los gates de produccion.
- Revision legal: `[PENDING_LEGAL_REVIEW]`.

Marcar un item solo con evidencia verificable. Completar borradores no equivale a aprobar la politica ni activar legalmente la recoleccion.

## Antes de programar

- [ ] Identidad del responsable suministrada: `[PENDING_OWNER_INPUT]`.
- [ ] Condicion de operacion personal o empresarial definida: `[PENDING_OWNER_INPUT]`.
- [ ] Ubicacion y datos de identificacion aplicables suministrados: `[PENDING_OWNER_INPUT]`.
- [ ] Contacto y canal de privacidad suministrados: `[PENDING_OWNER_INPUT]`.
- [ ] Revision legal profesional realizada: `[PENDING_LEGAL_REVIEW]`.
- [ ] Terminos oficiales vigentes de MailerLite revisados.
- [ ] DPA vigente de MailerLite revisado.
- [ ] Subencargados de MailerLite revisados.
- [ ] Lugares de tratamiento de MailerLite revisados.
- [ ] Acceso a la cuenta del proveedor asegurado.
- [ ] Grupos/listas de Produccion y Preview definidos y separados.
- [ ] Single opt-in aceptado expresamente por el responsable.
- [ ] Enfoque para usuarios menores revisado: `[PENDING_LEGAL_REVIEW]`.
- [ ] Decisiones de conservacion aprobadas: `[PENDING_LEGAL_REVIEW]`.
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

Deployed Preview QA was completed manually without storing screenshots, deployment URLs, personal data, provider IDs, fake legal details, or private contact information in the repository.

## Debida diligencia de MailerLite

Verificar en fuentes oficiales vigentes antes de produccion:

- [ ] Entidad contratante correcta.
- [ ] Politica de privacidad vigente.
- [ ] Terminos vigentes.
- [ ] DPA vigente y aceptable para el caso: `[PENDING_LEGAL_REVIEW]`.
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

Estado general: `[PENDING_PROVIDER_VERIFICATION]`. No registrar limites numericos del plan sin verificacion oficial vigente.

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

- [ ] Contenido legal final aprobado: `[PENDING_LEGAL_REVIEW]`.
- [ ] Identidad del responsable publicada.
- [ ] Canal de contacto operativo y probado.
- [ ] Politica de privacidad publica y enlazada.
- [ ] Politica de tratamiento publica y enlazada cuando corresponda.
- [ ] Contrato del proveedor aceptado por propietario autorizado.
- [ ] Debida diligencia de MailerLite completada.
- [ ] Evaluacion internacional completada: `[PENDING_LEGAL_REVIEW]`.
- [ ] Identidad y dominio remitente de Produccion verificados.
- [ ] Automatizacion de Produccion probada con datos controlados.
- [ ] Unsubscribe probado de extremo a extremo.
- [ ] Supresion y prevencion de reactivacion probadas.
- [ ] Eliminacion probada.
- [ ] Exportacion probada y archivo de prueba eliminado.
- [ ] Roles y accesos revisados.
- [ ] MFA activado cuando este disponible.
- [ ] Analitica y propiedades de eventos revisadas.
- [ ] Aviso de privacidad enlazado desde formulario y footer.
- [ ] Version y fecha efectiva completadas.
- [ ] Contacto de incidentes definido.
- [ ] Procedimiento de solicitudes probado sin datos reales.
- [ ] Plan de rollback preparado.
- [ ] Direct download permanece activo hasta aprobar QA del reemplazo.
- [ ] Rollout controlado aprobado.

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

No guardar solicitudes en Git, mostrar listas en capturas ni incluir datos personales en issues. Plazos exactos: `[PENDING_LEGAL_REVIEW]`.

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
- [ ] La estrategia de edad y autorizacion esta aprobada antes de Produccion: `[PENDING_LEGAL_REVIEW]`.

Este bloque es un gate de produccion, no una mejora opcional.

## Marcadores pendientes

| Dato o decision | Marcador | Clasificacion |
|---|---|---|
| Identidad del responsable | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Contacto de privacidad | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Condicion de operacion personal o empresarial | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Detalle de ubicacion | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Fecha efectiva | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Canal y procedimiento de contacto | `[PENDING_OWNER_INPUT]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de implementacion |
| Entidad contratante de MailerLite | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de implementacion |
| Lugares y subencargados | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de produccion |
| Evaluacion de transferencia | `[PENDING_PROVIDER_VERIFICATION]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Duraciones de conservacion | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Enfoque para menores | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Plazos de respuesta | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Aprobacion legal final | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Frecuencia futura de revision operativa | `[PENDING_OWNER_INPUT]` | Refinamiento documental no bloqueante antes de implementacion |
