// Make a component that has Job Title, Company, Start and End Date, the length of time worked, and a description of the job.
// Make a prop for each of these fields.

import { formatDuration, intervalToDuration } from "date-fns";
import { Badge } from "./ui/badge";

export type ExperienceBodyProps = {
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  context: string[];
  technical: string[];
  impact: string[];
  tags: string[];
};

function calculateDateDifference(
  startDate: Date,
  endDate: Date = new Date()
): string {
  const duration = intervalToDuration({ start: startDate, end: endDate });

  const formattedDuration = formatDuration(duration, {
    delimiter: ", ",
    format: ["years", "months"],
  });

  return formattedDuration;
}

const ExperienceBody = (props: ExperienceBodyProps) => {
  const getDateRange = (startDate: Date, endDate?: Date) => {
    console.log(startDate, endDate);

    return (
      Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(startDate) +
      " - " +
      (endDate
        ? Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
          }).format(endDate)
        : "Present")
    );
  };

  return (
    <div className="mt-4 mx-10">
      <h2 className="text-xs sm:text-sm md:text-md lg:text-lg">
        {props.jobTitle}
      </h2>
      <h3 className="font-extralight text-xs sm:text-sm md:text-md lg:text-lg">
        {props.company}
      </h3>
      <h3 className="font-extralight text-xs sm:text-sm md:text-md lg:text-lg">
        {getDateRange(props.startDate, props.endDate)} •{" "}
        {calculateDateDifference(props.startDate, props.endDate)}
      </h3>
      <h3 className="text-xs sm:text-sm md:text-md lg:text-lg">context</h3>
      {props.context.map((item) => (
        <p
          key={item}
          className="font-light text-xs sm:text-sm md:text-md lg:text-lg"
        >
          • {item}
        </p>
      ))}
      <h3 className="text-xs sm:text-sm md:text-md lg:text-lg">technical</h3>
      {props.technical.map((item) => (
        <p
          key={item}
          className="font-light text-xs sm:text-sm md:text-md lg:text-lg"
        >
          • {item}
        </p>
      ))}
      <h3 className="text-xs sm:text-sm md:text-md lg:text-lg">impact</h3>
      {props.impact.map((item) => (
        <p
          key={item}
          className="font-light text-xs sm:text-sm md:text-md lg:text-lg"
        >
          • {item}
        </p>
      ))}
      <div className="flex flex-row gap-2 my-2 flex-wrap">
        {props.tags.map((tag) => (
          <Badge key={tag} variant="default">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBody;
