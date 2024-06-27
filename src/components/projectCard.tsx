"use client";
import { Card, Select, Button, Input } from "@mantine/core";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";

export type ProjectType = {
  title: string;
  description: string;
  img?: string;
  imgClassName?: string;
  links?: ReactNode[];
  tags?: string[];
};

const ProjectCard = ({
  title,
  description,
  img,
  imgClassName,
  links,
  tags,
}: ProjectType) => {
  return (
    <div className="w-[350px] flex flex-col">
      <Card className="w-[350px] flex flex-col rounded-lg border justify-evenly">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {img && <img className={imgClassName} src={img} alt={description} />}
          {tags && (
            <div className="flex mt-4 gap-2 justify-end">
              {tags?.map((tag) => (
                <Badge>{tag}</Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">{links}</CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
