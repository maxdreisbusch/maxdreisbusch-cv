import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Volunteer = (typeof RESUME_DATA)["volunteer"][number];

interface VolunteerPeriodProps {
  start: Volunteer["start"];
  end: Volunteer["end"];
}

/**
 * Displays the volunteer period in a consistent format
 */
function VolunteerPeriod({ start, end }: VolunteerPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface VolunteerItemProps {
  volunteer: Volunteer;
}

/**
 * Individual volunteer card component
 */
function VolunteerItem({ volunteer }: VolunteerItemProps) {
  const { organisation, start, end, works } = volunteer;

  const id = `volunteer-${organisation.toLowerCase().replace(/\s+/g, "-")}-${start}-${end}`
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
            id={id}
          >
            {organisation}
          </h3>
          <VolunteerPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={id}
      >
        <ul className="list-inside list-disc">
            {works.map(work=><li>{work}</li>)}
        </ul>
      </CardContent>
    </Card>
  );
}

interface VolunteerListProps {
  volunteer: readonly Volunteer[];
}

/**
 * Main volunteer section component
 * Renders a list of volunteer experiences
 */
export function Volunteer({ volunteer }: VolunteerListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="volunteer-section">
        Volunteer work
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="volunteer-section"
      >
        {volunteer.map((item) => (
          <article key={`${item.organisation}-${item.start}-${item.end}`}>
            <VolunteerItem volunteer={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
