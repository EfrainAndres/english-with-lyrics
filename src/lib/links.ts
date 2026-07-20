export const productionOrigin = "https://singpronuncerepeat.com";
export const ebookPagePath = "/ebook-gratis";
export const ebookPageUrl = `${productionOrigin}${ebookPagePath}`;
export const thankYouPagePath = "/gracias";
export const thankYouPageUrl = `${productionOrigin}${thankYouPagePath}`;
export const privacyPath = "/privacidad";
export const privacyUrl = `${productionOrigin}${privacyPath}`;
export const dataProcessingPath = "/tratamiento-de-datos";
export const dataProcessingUrl = `${productionOrigin}${dataProcessingPath}`;
export const ebookDownloadPath = "/downloads/guia-gratis-sing-pronounce-repeat.pdf";
export const ebookDownloadFilename = "guia-gratis-sing-pronounce-repeat.pdf";
export const ebookPageCount = 21;
export const ebookFileSizeKB = 1292;

const fallbackLinks = {
  ebook: "#ebook",
  survey: "#survey-placeholder",
  waitlist: "#waitlist",
  firstGroup: "#first-group",
};

function getPublicLink(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export const ebookFormUrl = getPublicLink(
  process.env.NEXT_PUBLIC_EBOOK_FORM_URL,
  fallbackLinks.ebook,
);

export const surveyFormUrl = getPublicLink(
  process.env.NEXT_PUBLIC_SURVEY_FORM_URL,
  fallbackLinks.survey,
);

export const waitlistFormUrl = getPublicLink(
  process.env.NEXT_PUBLIC_WAITLIST_FORM_URL,
  fallbackLinks.waitlist,
);

export const firstGroupFormUrl = getPublicLink(
  process.env.NEXT_PUBLIC_FIRST_GROUP_FORM_URL,
  fallbackLinks.firstGroup,
);

export function getLinkProps(href: string) {
  if (href.startsWith("http")) {
    return {
      href,
      rel: "noopener noreferrer",
      target: "_blank",
    };
  }

  return { href };
}
