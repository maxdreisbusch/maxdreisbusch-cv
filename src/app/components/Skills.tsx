import React from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Skills = readonly { title: string; skills: string[] }[];

interface SkillsTagsProps {
  tags: string[];
}

/**
 * Renders a list of technology tags used in the project
 */
function SkillsTags({
  tags,
}: SkillsTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="skills"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsCardProps {
  title: string;
  tags: string[];
}

/**
 * Card component displaying project information
 */
function SkillsCard({
  title,
  tags,
}: SkillsCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3">
      <CardHeader>
          <CardTitle className="text-base">
            {title}
          </CardTitle>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <SkillsTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed"
        aria-labelledby="side-projects"
      >
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="h-full"
          >
            <SkillsCard
              title={skill.title}
              tags={skill.skills}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
