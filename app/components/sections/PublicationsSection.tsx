import { ArrowRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Collapsible } from "../Collapsible";

export interface PublicationItem {
  title: string;
  link: string;
  venue: string;
  authors: string;
  abstract: string;
  collapsedHeight?: string;
  linkLabel?: string;
}

export interface PublicationsData {
  items: PublicationItem[];
}

export function PublicationsSection({ title, data }: { title: string; data: PublicationsData }) {
  return (
    <SectionShell title={title}>
      <div className="space-y-6">
        {data.items.map((pub) => (
          <div key={pub.title} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
            <div className="mb-1">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors"
              >
                {pub.title}
              </a>
            </div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-500">{pub.venue}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Authors: {pub.authors}</p>

            <Collapsible
              collapsedHeight={pub.collapsedHeight ?? "max-h-32"}
              gradientHeight="h-16"
              className="mt-6 space-y-2"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">Abstract</p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">{pub.abstract}</p>
            </Collapsible>

            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {pub.linkLabel ?? "View Publication"} <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
