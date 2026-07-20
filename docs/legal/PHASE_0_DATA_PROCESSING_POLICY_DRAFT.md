# Borrador de politica de tratamiento de datos de Phase 0

## Estado y proposito

- Estado: Borrador operativo.
- Publicacion: No publicada.
- Version: 0.1-draft.
- Fecha del borrador: 2026-07-12.
- Uso en produccion: Prohibido hasta completar datos del responsable, debida diligencia de proveedores y revision legal.

Esta politica describe como deberia operar Sing Pronunce Repeat / English with Lyrics al tratar datos en el futuro embudo. No es un manual interno completo de seguridad, una certificacion juridica ni una declaracion de cumplimiento. Requiere aprobacion profesional antes de recolectar leads en produccion: `[PENDING_LEGAL_REVIEW]`.

## 1. Identificacion del responsable

```text
Responsible party: [PENDING_OWNER_INPUT]
Privacy contact: privacidad@singpronuncerepeat.com
Location: Colombia — [PENDING_OWNER_INPUT]
```

- Identificacion adicional, cuando corresponda: `[PENDING_OWNER_INPUT]`.
- Condicion de operacion personal o empresarial: `[PENDING_OWNER_INPUT]`.
- Sitio web: `https://singpronuncerepeat.com`.

## 2. Alcance

Aplica al futuro formulario del ebook, lista de correo, encuestas, formularios de primer grupo, listas de interes de productos avanzados, mensajes de soporte, solicitudes de privacidad y analitica aprobada. Tambien orienta el manejo de datos por proveedores externos contratados para esas finalidades.

El flujo publico actual sigue entregando el PDF directamente. Este documento no activa formularios, proveedores, automatizaciones ni rutas legales.

## 3. Definiciones

- **Dato personal:** informacion que identifica o puede relacionarse razonablemente con una persona.
- **Titular:** persona a quien pertenece el dato.
- **Responsable:** quien define para que y como se trata la informacion.
- **Encargado:** proveedor que trata datos por cuenta del responsable siguiendo instrucciones.
- **Autorizacion:** manifestacion previa, expresa e informada de la persona cuando sea exigible.
- **Tratamiento:** recoleccion, uso, almacenamiento, consulta, correccion, comunicacion o eliminacion de datos.
- **Aviso de privacidad:** comunicacion breve que explica el tratamiento y enlaza la politica aplicable.
- **Dato sensible:** informacion cuyo uso indebido puede afectar gravemente la intimidad o generar discriminacion.
- **Transmision:** tratamiento realizado por un encargado por cuenta del responsable, sujeto a confirmacion juridica para el caso concreto.
- **Transferencia:** entrega de datos a otro responsable, sujeta a confirmacion juridica para el caso concreto.

Estas definiciones son operativas y adaptadas al proyecto; no sustituyen definiciones legales: `[PENDING_LEGAL_REVIEW]`.

## 4. Principios de proteccion

- Finalidad clara y comunicada.
- Autorizacion cuando corresponda.
- Minimizar datos y campos.
- Mantener informacion razonablemente correcta y actualizada.
- Limitar acceso a personas y proveedores necesarios.
- Dar transparencia sobre uso, proveedores y derechos.
- Proteger confidencialidad e integridad con medidas proporcionales.
- Conservar datos solo por el tiempo necesario.
- Facilitar retiro de autorizacion, baja y solicitudes aplicables.
- Tratar con especial cautela cualquier situacion relacionada con menores.

## 5. Categorias de datos

El inventario autorizado se limita a:

- Email requerido y nombre opcional en el formulario principal.
- Consentimiento, fecha y fuente cuando el proveedor los conserve.
- Atribucion no sensible limitada.
- Estado de contacto, envio y baja en el proveedor de correo.
- Respuestas educativas y de producto en encuestas opcionales.
- Respuestas de interes en primer grupo o producto avanzado.
- Analitica agregada aprobada.
- Mensajes de soporte y solicitudes de privacidad.
- Metadatos tecnicos generados por proveedores solo despues de verificarlos: `[PENDING_PROVIDER_VERIFICATION]`.

El formulario inicial no solicitara edad exacta, colegio, telefono, direccion, documentos, contrasenas, pago ni datos sensibles.

## 6. Finalidades del tratamiento

### Entrega y soporte

- Procesar la solicitud de la guia.
- Crear o actualizar el contacto.
- Redirigir a `/gracias` tras confirmacion del proveedor.
- Enviar el correo de entrega con enlace estable.
- Resolver fallas y solicitudes de soporte.
- Conservar evidencia de autorizacion disponible.

### Educacion y comunicacion

- Enviar practicas, consejos y materiales relacionados con el metodo.
- Invitar opcionalmente a encuestas.
- Solicitar retroalimentacion.
- Comunicar novedades educativas y futuras propuestas relacionadas.

### Investigacion de producto

- Analizar respuestas de manera agregada.
- Priorizar canciones, formatos y dificultades.
- Evaluar interes en ebook avanzado, primer grupo o suscripcion.

### Analitica operativa

- Medir uso y fuentes de trafico.
- Evaluar conversion y errores sin identificar personas.
- Detectar problemas de experiencia o disponibilidad.

Una finalidad nueva requiere evaluacion y, cuando corresponda, aviso o autorizacion adicional: `[PENDING_LEGAL_REVIEW]`.

## 7. Derechos de los titulares

El proceso debe permitir, cuando aplique:

- Acceso o consulta.
- Correccion y actualizacion.
- Prueba de autorizacion.
- Informacion sobre el uso.
- Retiro de autorizacion.
- Eliminacion cuando corresponda.
- Baja de correos promocionales.
- Queja y escalamiento ante la autoridad competente despues del procedimiento directo aplicable.

El responsable debe publicar un canal real antes de produccion. Alcance, excepciones y plazos: `[PENDING_LEGAL_REVIEW]`.

## 8. Deberes operativos del responsable

- Informar finalidades y obtener la autorizacion requerida.
- Mantener evidencia disponible cuando el proveedor lo permita.
- Respetar bajas y retiros.
- Corregir o eliminar datos cuando proceda.
- Mantener un inventario actualizado.
- Evaluar proveedores y limitar sus accesos.
- Evitar datos personales en Git, analitica, URLs, logs e incidencias.
- Revisar accesos y activar MFA cuando este disponible.
- Mantener separados Produccion, Preview y local.
- Atender solicitudes e incidentes mediante registros seguros fuera del repositorio.
- Revisar cambios materiales de proveedores y politicas.

## 9. Gestion de encargados y proveedores

MailerLite es el proveedor propuesto. Brevo permanece inactivo como fallback y no debe recibir los mismos datos salvo migracion formal. Vercel presta alojamiento y analitica; Tally mantiene formularios opcionales existentes.

Antes de usar un proveedor se debe:

1. Identificar entidad contratante y rol.
2. Revisar terminos, politica de privacidad y acuerdo de tratamiento vigentes.
3. Revisar ubicaciones, subencargados y condiciones internacionales.
4. Confirmar evidencia de consentimiento, baja y supresion.
5. Probar exportacion, correccion y eliminacion.
6. Revisar seguridad, incidentes y cierre de cuenta.
7. Limitar acceso y documentar responsables internos.

Estado: `[PENDING_PROVIDER_VERIFICATION]` y `[PENDING_LEGAL_REVIEW]`. No se copia ningun DPA al repositorio.

## 10. Recoleccion y prueba de autorizacion

- Casilla obligatoria y desmarcada por defecto.
- Texto especifico sobre guia y contenido educativo relacionado.
- Enlace visible a la politica de privacidad.
- Accion afirmativa antes del envio.
- Identidad del formulario y marca de tiempo cuando esten disponibles.
- Registro del texto o version presentada.
- Tratamiento idempotente de correos duplicados cuando proceda.
- Baja disponible en cada correo.

Single opt-in es la decision inicial de producto. La suficiencia del registro debe verificarse con MailerLite y revision legal. Double opt-in sigue disponible si aumentan abuso, rebotes, volumen, jurisdicciones o requisitos.

## 11. Consultas, reclamos y solicitudes

Solicitudes cubiertas: acceso, correccion, actualizacion, eliminacion, retiro, baja, informacion sobre uso y queja.

```text
Solicitud recibida
→ identidad verificada proporcionalmente
→ solicitud clasificada
→ sistemas del proveedor localizados
→ accion realizada
→ respuesta enviada
→ cierre registrado de forma segura
```

Reglas:

- No pedir identificacion excesiva.
- No revelar datos de otra persona.
- No almacenar solicitudes ni respuestas en Git.
- No mostrar listas de contactos en capturas.
- No incluir datos personales en issues.
- Usar un registro seguro controlado por el responsable fuera del repositorio.
- Escalar solicitudes no resueltas al responsable y asesor legal.

El canal, responsable operativo, formato de registro y plazos permanecen en `[PENDING_OWNER_INPUT]` y `[PENDING_LEGAL_REVIEW]`.

## 12. Correccion y eliminacion

1. Confirmar de forma proporcional que el solicitante controla el correo afectado.
2. Localizar el registro en el proveedor activo y, si aplica, en Tally, soporte o exportaciones temporales.
3. Corregir el dato o eliminarlo cuando proceda.
4. Verificar si debe conservarse una supresion minima para respetar una baja futura.
5. Comunicar el resultado sin incluir mas datos de los necesarios.
6. Registrar el cierre de forma segura.

Las excepciones, retenciones por disputa y alcance de la eliminacion requieren `[PENDING_LEGAL_REVIEW]`.

## 13. Retiro de autorizacion

La persona podra usar el enlace de baja del proveedor o el canal de privacidad. El proyecto debe:

- Detener comunicaciones cubiertas por el retiro.
- Conservar solo la informacion minima necesaria para respetar la baja cuando proceda.
- No reactivar el contacto sin una nueva accion valida.
- Separar, cuando corresponda, la baja promocional de una solicitud mas amplia de eliminacion.

Las consecuencias juridicas precisas requieren `[PENDING_LEGAL_REVIEW]`.

## 14. Conservacion y disposicion

Las categorias operativas son:

- Ciclo de suscripcion activa.
- Conservacion operativa corta.
- Periodo definido de revision.
- Conservacion por disputa u obligacion cuando aplique.
- Eliminacion pronta tras una solicitud verificada cuando corresponda.
- Metricas agregadas o anonimizadas.
- Decision legal pendiente.

No se declaran duraciones obligatorias. Las propuestas estan en `docs/legal/PHASE_0_DATA_INVENTORY_AND_RETENTION.md` y toda duracion concreta requiere `[PENDING_LEGAL_REVIEW]`.

Las exportaciones temporales deben eliminarse al terminar el analisis. Nunca se almacenan exportaciones crudas de Tally o del proveedor en Git.

## 15. Revision de proveedores internacionales

Antes de produccion se revisaran entidad contratante, lugares de tratamiento, subencargados, salvaguardas, DPA, eliminacion, exportacion, incidentes y retencion al terminar la cuenta. Estado: `[PENDING_PROVIDER_VERIFICATION]`.

La clasificacion juridica de cada flujo y la evaluacion de transferencia o transmision permanecen en `[PENDING_LEGAL_REVIEW]`. No se presupone que el uso de un servicio internacional sea automaticamente adecuado o legal.

## 16. Seguridad y controles de acceso

- Secretos solo del lado servidor si luego existe integracion API.
- Identificadores publicos de embed separados de secretos.
- Secretos de Produccion solo en Produccion; secretos de Preview solo en Preview.
- Local usa valores mock o de prueba; no crea contactos reales por defecto.
- Ningun email o ID de proveedor en analitica o URLs.
- Logs con entrada de usuario redactada y errores genericos.
- Cuenta del proveedor con acceso limitado y MFA cuando este disponible.
- Exportaciones cifradas o estrictamente controladas.
- Datos de prueba marcados y aislados.
- Datos de Produccion nunca copiados a fixtures locales.
- Una caida del proveedor no expone contactos.
- El PDF mantiene el fallback aprobado del soft gate.

Estas medidas son requisitos minimos y no prometen seguridad absoluta.

## 17. Esquema de gestion de incidentes

1. Contener el acceso o integracion afectada.
2. Preservar evidencia de forma segura sin publicarla en Git.
3. Identificar sistemas, categorias de datos y alcance probable.
4. Rotar secretos o retirar accesos cuando sea necesario.
5. Contactar al proveedor y revisar sus obligaciones de notificacion.
6. Escalar al responsable y asesor legal.
7. Determinar comunicaciones a titulares o autoridades: `[PENDING_LEGAL_REVIEW]`.
8. Documentar acciones correctivas en un registro seguro.
9. Revisar controles y prevenir recurrencia.

No deben incluirse listas, correos ni respuestas personales en issues o capturas compartidas.

## 18. Ninos, ninas y adolescentes

El proyecto puede atraer a estudiantes jovenes. El primer formulario debe limitarse a email, nombre opcional y consentimiento, sin pedir colegio, edad exacta, direccion, telefono ni datos sensibles. No se crearan perfiles de publicidad comportamental ni se usaran patrones de presion.

No se establece edad minima ni se infiere que una casilla resuelva autorizacion de menores. El enfoque de edad, autorizacion y padres o representantes es bloqueador de produccion: `[PENDING_LEGAL_REVIEW]`.

## 19. Actualizaciones de la politica

- Cada cambio material requiere version, fecha y aprobacion nuevas.
- Cambios de finalidad, proveedor o jurisdiccion activan revision.
- Puede requerirse nuevo aviso o autorizacion: `[PENDING_LEGAL_REVIEW]`.
- Las versiones aprobadas se conservan de forma privada cuando proceda.

## 20. Vigencia, aprobacion y revision

- Fecha de vigencia: `[PENDING_OWNER_INPUT]`.
- Responsable que aprueba: `[PENDING_OWNER_INPUT]`.
- Revision legal profesional: `[PENDING_LEGAL_REVIEW]`.
- Version para publicacion: `[PENDING_LEGAL_REVIEW]`.

## Marcadores pendientes

| Dato o decision | Marcador | Clasificacion |
|---|---|---|
| Identidad del responsable | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Contacto de privacidad | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Condicion de operacion personal o empresarial | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Detalle de ubicacion | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Fecha de vigencia | `[PENDING_OWNER_INPUT]` | Bloqueador de produccion |
| Procedimiento y canal aplicable | `[PENDING_OWNER_INPUT]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Entidad contratante del proveedor | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de implementacion |
| Lugares de tratamiento | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de produccion |
| Subencargados | `[PENDING_PROVIDER_VERIFICATION]` | Bloqueador de produccion |
| Evaluacion de transferencia | `[PENDING_PROVIDER_VERIFICATION]` / `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Duraciones de conservacion | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Enfoque para menores | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Plazos de respuesta | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Aprobacion legal final | `[PENDING_LEGAL_REVIEW]` | Bloqueador de produccion |
| Formato interno del registro de solicitudes | `[PENDING_OWNER_INPUT]` | Refinamiento documental no bloqueante antes de coding; bloquea produccion |
