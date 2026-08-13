import React from "react";

type LandingSectionTitleProps = {
  title: string;
  subtitle?: string;
};

const LandingSectionTitle = ({ title, subtitle }: LandingSectionTitleProps) => {
  return (
    <header className="mb-8 flex flex-col items-center gap-3 text-center">
      <span className="text-xs font-Estedad-Bold! uppercase tracking-[0.28em] text-primary-light/45">
        MODALITY Selection
      </span>
      <div>
        <h2 className="font-Estedad-Black! text-xl text-primary md:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-primary-light/65">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
};

export default LandingSectionTitle;
