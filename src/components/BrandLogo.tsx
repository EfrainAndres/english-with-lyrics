import Image from "next/image";

/** Supplied horizontal lockup on desktop; compact lockup in narrow headers. */
export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <picture className="block w-[150px] shrink-0 sm:w-[280px]">
      <source
        media="(max-width: 639px)"
        srcSet="/brand/sing-pronunce-repeat-compact.webp"
        width={524}
        height={166}
      />
      <Image
        alt="Sing Pronunce Repeat"
        className="block h-auto w-full"
        src="/brand/sing-pronunce-repeat-horizontal.webp"
        width={786}
        height={176}
        priority={priority}
        unoptimized
      />
    </picture>
  );
}
