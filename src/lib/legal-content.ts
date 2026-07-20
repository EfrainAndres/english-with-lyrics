import type { LegalConfiguration } from "@/lib/legal-config";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

const uncertainDeadlineNotice =
  "La solicitud será gestionada dentro de los plazos establecidos por la normativa aplicable, una vez se verifique la identidad y la información necesaria para tramitarla.";

function describeResponsibleParty(config: LegalConfiguration) {
  return {
    name:
      config.responsiblePartyName ??
      "Pendiente de publicación por el responsable del proyecto.",
    identification:
      config.responsiblePartyIdentification ??
      "Pendiente de definir, cuando corresponda.",
    city: config.responsiblePartyCity ?? "Pendiente de definir.",
    contactEmail:
      config.privacyContactEmail ??
      "privacidad@singpronuncerepeat.com",
    effectiveDate:
      config.effectiveDate ?? "Esta política todavía no tiene una fecha de vigencia definitiva.",
  };
}

export function getPrivacyPolicySections(config: LegalConfiguration): LegalSection[] {
  const responsible = describeResponsibleParty(config);

  return [
    {
      heading: "Alcance",
      paragraphs: [
        "Esta política cubre el tratamiento de datos previsto para el formulario de registro para recibir el ebook, la lista de correo, las encuestas opcionales, los formularios de interés en el primer grupo, las listas de interés de un futuro producto avanzado, las solicitudes de contacto o soporte, y la analítica del sitio cuando esté habilitada y aprobada.",
        "Los formularios alojados por un proveedor externo también pueden estar sujetos a los avisos y condiciones de privacidad propios de ese proveedor.",
      ],
    },
    {
      heading: "Quién es responsable del tratamiento",
      paragraphs: [
        `Responsable: ${responsible.name}`,
        `Identificación, cuando corresponda: ${responsible.identification}`,
        `Ciudad o jurisdicción: ${responsible.city}`,
        "Esta identidad no se infiere del código ni de la documentación del proyecto. Debe ser suministrada y aprobada por el propietario antes de cualquier captura de leads en producción.",
      ],
    },
    {
      heading: "Datos actualmente tratados",
      paragraphs: [
        "Sing Pronunce Repeat / English with Lyrics todavía no recolecta datos de registro en Producción. La única captura activa ocurre en un ambiente de Preview controlado, usado exclusivamente para pruebas internas del proveedor de correo.",
      ],
      list: [
        "Aplicación Next.js: sin base de datos propia de leads, sin almacenamiento del lado de la aplicación de los envíos del formulario, sin autenticación y sin creación de cuentas.",
        "MailerLite en Preview controlado: correo requerido, nombre opcional, consentimiento explícito requerido, opt-in simple, grupo y automatización exclusivos de Preview, y baja disponible.",
        "Producción: la captura de leads permanece desactivada, la automatización de correo permanece inactiva y la entrega directa del ebook continúa disponible.",
      ],
    },
    {
      heading: "Datos que la aplicación Next.js no recolecta directamente",
      paragraphs: [
        "El sitio construido con Next.js no guarda envíos de formularios en una base de datos propia, no crea cuentas de usuario, no implementa inicio de sesión y no conserva un registro local de suscriptores.",
      ],
    },
    {
      heading: "Datos que trata MailerLite durante la Preview controlada",
      paragraphs: [
        "Cuando el formulario de prueba de Preview está activo, MailerLite puede tratar los siguientes datos únicamente para validar el flujo antes de cualquier lanzamiento en Producción:",
      ],
      list: [
        "Correo electrónico (requerido).",
        "Nombre (opcional).",
        "Evidencia de consentimiento explícito.",
        "Modelo de opt-in simple.",
        "Grupo y automatización exclusivos de Preview, separados de cualquier grupo de Producción.",
        "Baja o cancelación de suscripción disponible en cada envío.",
      ],
    },
    {
      heading: "Finalidades",
      paragraphs: [
        "Cuando el embudo de registro esté activo, los datos se tratarían para: procesar la solicitud del ebook, entregar la guía y el correo de confirmación, atender solicitudes de soporte, enviar comunicaciones educativas relacionadas con el método, invitar a encuestas opcionales, y analizar preferencias de manera agregada para mejorar el contenido.",
        "No se usa ni se usará una finalidad abierta como \"cualquier propósito comercial\". Una finalidad nueva o materialmente distinta requeriría evaluación, aviso actualizado y, cuando corresponda, una nueva autorización.",
      ],
    },
    {
      heading: "Modelo de consentimiento",
      paragraphs: [
        "El proyecto propone apoyarse en una autorización previa, expresa e informada, materializada mediante una casilla obligatoria y desmarcada por defecto, texto claro sobre la entrega de la guía y las comunicaciones educativas, y la posibilidad de retirar la autorización en cualquier momento.",
        "Phase 0 propone un modelo de opt-in simple para reducir fricción y dar acceso inmediato a la guía. Esta es una decisión de producto, no una conclusión jurídica; la base aplicable y la suficiencia de la evidencia de consentimiento requieren confirmación legal profesional antes de activar Producción.",
      ],
    },
    {
      heading: "Proveedores de servicio",
      paragraphs: [
        "El proyecto usa o propone usar los siguientes proveedores para operar el sitio y el futuro embudo:",
      ],
      list: [
        "Vercel: alojamiento del sitio y analítica de páginas.",
        "MailerLite: proveedor de correo propuesto, únicamente cuando esté verificado y configurado para Preview o Producción.",
        "Tally: formularios externos ya existentes para encuesta e interés en el primer grupo.",
      ],
      // Sección continúa con la nota de diligencia debida.
    },
    {
      heading: "Cookies y analítica",
      paragraphs: [
        "El sitio usa Vercel Web Analytics para medir vistas de página de forma agregada y sin identificar personas. Esta analítica no se usa para publicidad y no vende datos a anunciantes.",
        "No se afirma que ningún proveedor futuro sea automáticamente adecuado o esté legalmente aprobado por el solo hecho de estar configurado; cualquier proveedor adicional de analítica se documentará antes de activarse.",
      ],
    },
    {
      heading: "Conservación",
      paragraphs: [
        "Como principio, los datos se conservarían solo mientras sean necesarios para la finalidad documentada, y los contactos dados de baja se suprimirían en la medida necesaria para respetar esa baja en el futuro, sujeto a la configuración del proveedor.",
        "No se declaran plazos de conservación obligatorios en este documento. Los plazos concretos siguen pendientes de revisión legal profesional antes de cualquier captura de datos en Producción.",
      ],
    },
    {
      heading: "Seguridad y limitaciones",
      paragraphs: [
        "El proyecto aplicaría medidas razonables y proporcionales: recolección mínima, entornos de Producción, Preview y desarrollo local separados, acceso restringido a las cuentas de proveedores, autenticación multifactor cuando esté disponible, y ningún dato personal en analítica, URLs o control de versiones.",
        "Ninguna medida de seguridad puede prometerse como absoluta o perfecta. Una falla del proveedor no debería exponer datos de contacto, y la guía en PDF seguiría disponible de forma directa como respaldo.",
      ],
    },
    {
      heading: "Derechos de las personas",
      paragraphs: [
        "Cuando corresponda, una persona podrá solicitar acceso o consulta sobre sus datos, corrección o actualización, prueba de la autorización otorgada, información sobre el uso dado a sus datos, retiro de la autorización, eliminación cuando proceda, cancelación de comunicaciones promocionales, y presentar una queja ante la autoridad competente después de agotar los procedimientos directos aplicables.",
        "El alcance exacto, las excepciones y el procedimiento definitivo de estos derechos requieren confirmación mediante revisión legal profesional.",
      ],
    },
    {
      heading: "Cómo enviar una solicitud",
      paragraphs: [
        `Canal de contacto de privacidad: ${responsible.contactEmail}`,
        "El canal de privacidad ya existe y fue verificado para recepción y respuesta de mensajes. El procedimiento operativo de solicitudes, los plazos definitivos y la aprobación legal profesional siguen pendientes antes de activar cualquier captura de datos en Producción.",
        uncertainDeadlineNotice,
      ],
    },
    {
      heading: "Consideraciones sobre tratamiento internacional",
      paragraphs: [
        "Los proveedores tecnológicos externos, como un futuro proveedor de correo, podrían tratar o almacenar información fuera de Colombia. Antes de activar Producción se verificarían la entidad contratante, los lugares de tratamiento, los subencargados, las salvaguardas declaradas y los términos de tratamiento de datos vigentes.",
        "Este documento no afirma adecuación ni legalidad automática por el uso de un proveedor internacional; esa evaluación permanece pendiente de revisión legal profesional.",
      ],
    },
    {
      heading: "Niños, niñas y adolescentes",
      paragraphs: [
        "El contenido educativo puede ser accesible para estudiantes jóvenes. El flujo de registro actual no está diseñado para recolectar intencionalmente datos sensibles de menores de edad.",
        "El formulario inicial no pedirá edad, fecha de nacimiento, colegio ni datos de padres o acudientes. No se presume que una casilla de consentimiento resuelva por sí sola los requisitos aplicables a menores, y no se implementa ningún mecanismo de verificación de edad en esta fase.",
        "Un padre, madre, acudiente o representante autorizado puede usar el canal de contacto de privacidad indicado arriba cuando corresponda, una vez ese canal esté operativo.",
      ],
    },
    {
      heading: "Cambios a esta política",
      paragraphs: [
        "Todo cambio material a esta política requeriría una nueva versión y fecha de vigencia. Un cambio importante podría exigir un nuevo aviso o una nueva autorización, sujeto a revisión legal profesional.",
        "Esta versión no debe publicarse como política definitiva hasta que el responsable del proyecto y la revisión legal profesional la aprueben.",
      ],
    },
    {
      heading: "Fecha de vigencia",
      paragraphs: [responsible.effectiveDate],
    },
    {
      heading: "Contacto",
      paragraphs: [`Canal de contacto de privacidad: ${responsible.contactEmail}`],
    },
  ];
}

export function getDataProcessingPolicySections(config: LegalConfiguration): LegalSection[] {
  const responsible = describeResponsibleParty(config);

  return [
    {
      heading: "Propósito de la política",
      paragraphs: [
        "Este documento describe, de forma más procedimental que la política de privacidad, cómo debería operar el tratamiento de datos del futuro embudo de Sing Pronunce Repeat / English with Lyrics. No es un manual interno completo de seguridad, no certifica cumplimiento legal y no reemplaza la revisión de un profesional del derecho.",
        "El flujo público actual sigue entregando el PDF de forma directa. Este documento no activa formularios, proveedores, automatizaciones ni rutas legales por sí mismo.",
      ],
    },
    {
      heading: "Alcance",
      paragraphs: [
        "Aplica al futuro formulario del ebook, la lista de correo, las encuestas opcionales, los formularios de interés en el primer grupo, las listas de interés de un producto avanzado, los mensajes de soporte, las solicitudes de privacidad, y la analítica aprobada. También orienta el manejo de datos por proveedores externos contratados para esas finalidades.",
      ],
    },
    {
      heading: "Definiciones",
      paragraphs: [
        "Estas definiciones son operativas y están adaptadas al proyecto; no sustituyen definiciones legales.",
      ],
      list: [
        "Dato personal: información que identifica o puede relacionarse razonablemente con una persona.",
        "Titular: persona a quien pertenece el dato.",
        "Responsable: quien define para qué y cómo se trata la información.",
        "Encargado: proveedor que trata datos por cuenta del responsable siguiendo instrucciones.",
        "Autorización: manifestación previa, expresa e informada de la persona, cuando sea exigible.",
        "Tratamiento: recolección, uso, almacenamiento, consulta, corrección, comunicación o eliminación de datos.",
        "Aviso de privacidad: comunicación breve que explica el tratamiento y enlaza la política aplicable.",
        "Transmisión y transferencia: entrega de datos a un encargado o a otro responsable, sujeta a confirmación jurídica para el caso concreto.",
      ],
    },
    {
      heading: "Principios",
      list: [
        "Finalidad clara y comunicada.",
        "Autorización cuando corresponda.",
        "Minimización de datos y campos.",
        "Información razonablemente correcta y actualizada.",
        "Acceso limitado a personas y proveedores necesarios.",
        "Transparencia sobre uso, proveedores y derechos.",
        "Medidas de seguridad proporcionales, sin prometer protección absoluta.",
        "Conservación solo por el tiempo necesario.",
        "Facilitar el retiro de autorización, la baja y las solicitudes aplicables.",
        "Cautela especial en cualquier situación relacionada con menores de edad.",
      ],
      paragraphs: [],
    },
    {
      heading: "Responsable del tratamiento",
      paragraphs: [
        `Responsable: ${responsible.name}`,
        `Identificación, cuando corresponda: ${responsible.identification}`,
        `Ciudad o jurisdicción: ${responsible.city}`,
        "Ver también la política de privacidad para la descripción completa del responsable.",
      ],
    },
    {
      heading: "Categorías de datos",
      paragraphs: [
        "El inventario autorizado se limita a lo estrictamente necesario para la entrega y el soporte del ebook:",
      ],
      list: [
        "Correo requerido y nombre opcional en el formulario principal.",
        "Evidencia de consentimiento, fecha y fuente, cuando el proveedor las conserve.",
        "Atribución no sensible y limitada (por ejemplo, canal de origen).",
        "Estado de contacto, envío y baja en el proveedor de correo.",
        "Respuestas educativas y de producto en encuestas opcionales, analizadas de forma agregada.",
        "Mensajes de soporte y solicitudes de privacidad.",
      ],
    },
    {
      heading: "Actividades de tratamiento",
      list: [
        "Crear o actualizar el contacto tras el envío del formulario.",
        "Redirigir a /gracias tras la confirmación del proveedor.",
        "Enviar el correo de entrega mediante un enlace estable, sin adjuntar el PDF.",
        "Resolver fallas técnicas y solicitudes de soporte.",
        "Conservar evidencia de autorización cuando el proveedor lo permita.",
        "Analizar respuestas de forma agregada para investigación de producto.",
        "Medir el uso del sitio de forma agregada y sin identificar personas.",
      ],
      paragraphs: [],
    },
    {
      heading: "Finalidades",
      paragraphs: [
        "Entrega y soporte del ebook; comunicaciones educativas relacionadas con el método; investigación de producto en forma agregada; y analítica operativa para medir el funcionamiento del embudo. Una finalidad nueva requeriría evaluación y, cuando corresponda, aviso o autorización adicional.",
      ],
    },
    {
      heading: "Autorización",
      paragraphs: [
        "El modelo propuesto exige una casilla de autorización obligatoria y desmarcada por defecto, texto específico sobre la guía y el contenido educativo relacionado, un enlace visible a la política de privacidad, y una acción afirmativa antes del envío.",
        "El opt-in simple es la decisión inicial de producto. La suficiencia de esta forma de registro debe verificarse con el proveedor seleccionado y con revisión legal profesional antes de Producción.",
      ],
    },
    {
      heading: "Derechos de los titulares",
      paragraphs: [
        "El proceso debe permitir, cuando aplique, acceso o consulta, corrección y actualización, prueba de autorización, información sobre el uso, retiro de autorización, eliminación cuando corresponda, baja de correos promocionales, y queja o escalamiento ante la autoridad competente después del procedimiento directo aplicable.",
        "El responsable debe publicar un canal real de contacto antes de Producción. El alcance, las excepciones y los plazos exactos requieren revisión legal profesional.",
      ],
    },
    {
      heading: "Deberes del responsable",
      list: [
        "Informar las finalidades y obtener la autorización requerida.",
        "Mantener evidencia disponible cuando el proveedor lo permita.",
        "Respetar bajas y retiros de autorización.",
        "Corregir o eliminar datos cuando proceda.",
        "Mantener un inventario de datos actualizado.",
        "Evaluar proveedores y limitar sus accesos.",
        "Evitar datos personales en control de versiones, analítica, URLs o registros técnicos.",
        "Revisar accesos y activar autenticación multifactor cuando esté disponible.",
        "Mantener separados los entornos de Producción, Preview y desarrollo local.",
      ],
      paragraphs: [],
    },
    {
      heading: "Procedimiento para consultas",
      paragraphs: [
        "Flujo previsto para toda solicitud de privacidad:",
      ],
      list: [
        "Solicitud recibida por el canal aprobado.",
        "Identidad verificada de forma proporcional, sin pedir información excesiva.",
        "Solicitud clasificada según el tipo de derecho ejercido.",
        "Sistemas del proveedor localizados.",
        "Acción realizada.",
        "Respuesta enviada por un canal seguro.",
        "Cierre registrado sin exponer datos personales en Git, capturas públicas o gestores de incidencias.",
      ],
    },
    {
      heading: "Procedimiento para reclamos, corrección, eliminación y revocatoria",
      paragraphs: [
        "1) Confirmar de forma proporcional que quien solicita controla el correo afectado. 2) Localizar el registro en el proveedor activo y, si aplica, en formularios de soporte o exportaciones temporales controladas. 3) Corregir o eliminar el dato cuando proceda. 4) Verificar si debe conservarse una supresión mínima para respetar una baja futura. 5) Comunicar el resultado sin incluir más datos de los necesarios. 6) Registrar el cierre de forma segura fuera del repositorio.",
        "Las excepciones, retenciones por disputa y el alcance exacto de la eliminación requieren revisión legal profesional.",
      ],
    },
    {
      heading: "Salvaguardas de verificación de identidad",
      paragraphs: [
        "La verificación de identidad debe ser proporcional al riesgo de la solicitud: suficiente para confirmar el control sobre el correo o el registro afectado, sin exigir documentos de identificación ni información excesiva o innecesaria.",
      ],
    },
    {
      heading: "Encargados y proveedores de servicio",
      paragraphs: [
        "MailerLite es el proveedor de correo propuesto, solo cuando esté seleccionado, verificado y configurado. Brevo permanece inactivo como alternativa de respaldo. Vercel presta alojamiento y analítica. Tally mantiene los formularios opcionales ya existentes de encuesta e interés en el primer grupo.",
        "Ningún acuerdo de tratamiento de datos de un proveedor se copia a este repositorio; se conserva por el responsable en un espacio controlado y se revisa en su versión vigente.",
      ],
    },
    {
      heading: "Transferencia o transmisión internacional",
      paragraphs: [
        "Antes de activar Producción se revisarían la entidad contratante, los lugares de tratamiento y almacenamiento, la lista vigente de subencargados, las salvaguardas declaradas, los términos de tratamiento de datos, y los procedimientos de corrección, eliminación y exportación de cada proveedor externo.",
        "Este documento no presupone que el uso de un proveedor internacional sea automáticamente adecuado o legal; esa evaluación permanece pendiente de revisión legal profesional.",
      ],
    },
    {
      heading: "Conservación y eliminación",
      paragraphs: [
        "Las categorías operativas previstas son: ciclo de suscripción activa, conservación operativa corta, un periodo definido de revisión, conservación por disputa u obligación cuando aplique, eliminación pronta tras una solicitud verificada cuando corresponda, y métricas agregadas o anonimizadas que ya no permitan identificar a una persona.",
        `No se declaran duraciones obligatorias en este documento. ${uncertainDeadlineNotice}`,
      ],
    },
    {
      heading: "Seguridad",
      list: [
        "Recolección mínima de datos.",
        "Secretos del proveedor solo del lado servidor si en el futuro se integra una API.",
        "Entornos de Producción, Preview y desarrollo local separados.",
        "Acceso restringido a las cuentas de proveedores, con privilegio mínimo.",
        "Autenticación multifactor cuando esté disponible.",
        "Ningún dato personal en analítica, URLs o control de versiones.",
        "Ninguna exportación cruda de datos de contacto en Git.",
        "Exportaciones temporales cifradas o estrictamente controladas.",
      ],
      paragraphs: [
        "Estas medidas son requisitos mínimos y no prometen seguridad absoluta.",
      ],
    },
    {
      heading: "Gestión de incidentes",
      paragraphs: [
        "1) Contener el acceso o integración afectada. 2) Preservar evidencia de forma segura, sin publicarla en Git. 3) Identificar sistemas, categorías de datos y alcance probable. 4) Rotar secretos o retirar accesos cuando sea necesario. 5) Contactar al proveedor y revisar sus obligaciones de notificación. 6) Escalar al responsable del proyecto y a asesoría legal. 7) Determinar comunicaciones a titulares o autoridades, sujeto a revisión legal profesional. 8) Documentar acciones correctivas en un registro seguro fuera del repositorio. 9) Revisar controles para prevenir recurrencia.",
      ],
    },
    {
      heading: "Cambios a esta política",
      paragraphs: [
        "Cada cambio material requiere una nueva versión, fecha y aprobación. Los cambios de finalidad, proveedor o jurisdicción activan una nueva revisión y podrían requerir un nuevo aviso o autorización, sujeto a revisión legal profesional.",
      ],
    },
    {
      heading: "Fecha de vigencia",
      paragraphs: [responsible.effectiveDate],
    },
    {
      heading: "Contacto",
      paragraphs: [`Canal de contacto de privacidad: ${responsible.contactEmail}`],
    },
  ];
}
