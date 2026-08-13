import { ChevronLeft, ChevronRight } from "lucide-react";

type LandingHeroControlsProps = {
  activeIndex: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
};

const LandingHeroControls = ({
  activeIndex,
  total,
  onNext,
  onPrev,
}: LandingHeroControlsProps) => {
  return (
    <div className="absolute inset-x-5 bottom-5 z-20 flex items-center justify-between gap-4 sm:inset-x-8 lg:inset-x-14 lg:bottom-8">
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-white" : "w-3 bg-white/35"
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          aria-label="اسلاید قبلی"
          className="flex size-10 items-center justify-center border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-white hover:text-primary"
        >
          <ChevronRight className="size-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="اسلاید بعدی"
          className="flex size-10 items-center justify-center border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-white hover:text-primary"
        >
          <ChevronLeft className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default LandingHeroControls;
