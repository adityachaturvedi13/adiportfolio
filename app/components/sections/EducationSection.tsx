import { SectionShell } from "../SectionShell";
import { RichText } from "../RichText";
import { ExperienceItem } from "../ExperienceItem";
import type { Block } from "../types";

export interface EducationItem {
  title: string;
  role: string;
  link?: string;
  body: Block[];
}

export interface EducationData {
  items: EducationItem[];
}

export function EducationSection({ title, data }: { title: string; data: EducationData }) {
  return (
    <SectionShell title={title}>
      <div className="space-y-12">
        {data.items.map((item) => (
          <ExperienceItem key={`${item.title}-${item.role}`} title={item.title} role={item.role} link={item.link}>
            <RichText blocks={item.body} />
          </ExperienceItem>
        ))}
      </div>
    </SectionShell>
  );
}
