import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { LandingHeroSlide as LandingHeroSlideType } from "../utils/landing-hero-data";

type LandingHeroSlideProps = {
  slide: LandingHeroSlideType;
};

const LandingHeroSlide = ({ slide }: LandingHeroSlideProps) => {
  return (
    <article className="relative overflow-hidden bg-[#111111] text-white h-full!">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority={slide.id === 1}
        sizes="(max-width: 576px) 95vw, (max-width: 992px) 92vw, 1192px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-l from-black/88 via-black/48 to-black/12" />
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-5 py-8 sm:px-8 lg:px-14">
          <div className="max-w-[540px] space-y-5">
            <p className="w-fit border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/75 sm:text-[11px]">
              {slide.eyebrow}
            </p>
            <h1 className="font-Estedad-Black! text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="max-w-md text-sm leading-8 text-white/72 sm:text-base">
              {slide.description}
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Link
                href={slide.href}
                className="inline-flex h-12 w-fit items-center justify-center gap-2 bg-white px-6 font-Estedad-Bold! text-sm text-primary transition hover:bg-white/90"
              >
                {slide.cta}
                <ArrowLeft className="size-4" />
              </Link>
              <span className="text-xs leading-6 text-white/58 sm:text-sm">
                ارسال سریع، تعویض آسان، پرداخت امن
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LandingHeroSlide;
