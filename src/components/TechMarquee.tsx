"use client";

import React from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siNodedotjs,
  siEthereum,
  siBitcoin,
  siSolidity,
  siDocker,
  siGit,
  siGithub,
  siVercel,
} from "simple-icons";

const ICONS: SimpleIcon[] = [
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siNodedotjs,
  siSolidity,
  siEthereum,
  siBitcoin,
  siDocker,
  siGit,
  siGithub,
  siVercel,
];

const TechMarquee: React.FC = () => {
  return (
    <div className="relative mt-6 w-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-black/40 px-4 py-3 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />

      <div className="flex items-center gap-8 whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        <span className="hidden shrink-0 pl-1 pr-4 text-[9px] sm:inline">
          STACK SELECTED:
        </span>

        <div className="flex animate-[marquee_26s_linear_infinite] gap-8">
          {[...ICONS, ...ICONS].map((icon, index) => (
            <div
              key={`${icon.slug}-${index}`}
              className="flex items-center gap-2 text-xs text-zinc-300"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-black/70 shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  role="img"
                >
                  <path d={icon.path} fill={`#${icon.hex}`} />
                </svg>
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                {icon.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;


