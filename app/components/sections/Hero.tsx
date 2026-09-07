import Image from "next/image";
import { Inline } from "../RichText";

export interface HeroData {
  image: string;
  name: string;
  phonetic: string;
  noun: string;
  timezone: { label: string; tz: string };
  /** Intro paragraphs (markdown inline supported). */
  intro: string[];
}

export function Hero({ data, time }: { data: HeroData; time: string }) {
  return (
    <>
      {/* 1. Avatar Pedestal (Top) — Apple-style double ring avatar & radial halo */}
      <div className="relative mb-[32px] flex items-center justify-center [background:radial-gradient(circle,rgba(0,0,0,0.04),transparent_65%)] dark:[background:radial-gradient(circle,rgba(255,255,255,0.04),transparent_65%)] py-2">
        {/* Outer Polished Metallic Ring */}
        <div className="group relative rounded-full p-[5px] shrink-0 bg-gradient-to-b from-black/[0.06] to-black/[0.02] dark:from-white/[0.12] dark:to-white/[0.03] shadow-[0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_rgba(255,255,255,0.6)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_rgba(255,255,255,0.08)] transition-all duration-350 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.06)]">
          {/* Inner Gap & Border */}
          <div className="rounded-full bg-white dark:bg-[#0b0b0b] p-[2px] border border-black/[0.08] dark:border-white/[0.08]">
            <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full overflow-hidden shrink-0">
              <Image
                src={data.image}
                alt="Profile"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="object-cover grayscale contrast-[1.35] brightness-[1.05]"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Name — 700 font weight restraint */}
      <h1 className="mb-[12px] whitespace-nowrap text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight leading-none text-black dark:text-white">
        {data.name}
      </h1>

      {/* 3. Subtitle Tagline + Local Time (Directly BELOW the Name) — Apple-style refined typography */}
      <div className="mb-[48px] flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
        {data.phonetic ? (
          <>
            <span>{data.phonetic}</span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
          </>
        ) : null}
        <span>{data.noun}</span>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="tabular-nums">{time || "00:00:00"}</span>
            <span className="text-[10px] uppercase tracking-wider">{data.timezone.label}</span>
          </div>
        </div>
      </div>

      {/* 4. Bio Section — 8pt grid rhythm (80px bottom space) */}
      <div className="mb-[80px] w-full space-y-[24px] text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
        {data.intro.map((p, i) => (
          <p key={i}>
            <Inline text={p} />
          </p>
        ))}
      </div>
    </>
  );
}
