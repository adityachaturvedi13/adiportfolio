import Image from "next/image";
import { Youtube, ArrowRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { DiscordIcon } from "../icons";
import type { LinkRef } from "../types";

export interface VideoRef {
  title: string;
  url: string;
}

export interface YouTubeData {
  image: string;
  name: string;
  url: string;
  tagline: string;
  community: { url: string; count: string; text: string };
  videos: VideoRef[];
  footerLink?: LinkRef;
}

export function YouTubeSection({ title, data }: { title: string; data: YouTubeData }) {
  return (
    <SectionShell title={title}>
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
        {/* Channel header */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
            <Image src={data.image} alt={data.name} fill sizes="64px" className="object-cover" unoptimized />
          </div>
          <div className="flex flex-col gap-1.5">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors"
            >
              <Youtube className="h-5 w-5 text-gray-300 dark:text-gray-600 transition-colors group-hover:text-red-600" />
              {data.name}
            </a>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-500">{data.tagline}</span>
            <a
              href={data.community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <DiscordIcon className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600 transition-colors group-hover:text-[#5865F2]" />
              <span>
                <span className="font-semibold text-black dark:text-white">{data.community.count}</span>{" "}
                {data.community.text}
              </span>
            </a>
          </div>
        </div>

        {/* Video list */}
        <div className="mt-6 flex flex-col gap-1">
          {data.videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 py-3 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white"
            >
              <span className="flex items-center gap-2.5">
                <Youtube className="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600 transition-colors group-hover:text-red-600" />
                {video.title}
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {data.footerLink && (
          <a
            href={data.footerLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {data.footerLink.label} <ArrowRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </SectionShell>
  );
}
