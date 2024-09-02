import { InferSelectModel } from "drizzle-orm";
import { sites } from "@/db/schema";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

type Site = InferSelectModel<typeof sites>;

interface IProps {
  sites: Site[];
}

export default function SitesList({ sites }: IProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {sites.map((site) => (
        <li key={site.id}>
          <Card className="max-w-full md:max-w-[350px] h-full flex flex-col">
            <CardHeader className="flex-1">
              <CardTitle>{site.name}</CardTitle>
              <CardDescription>{site.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={`/sites/${site.id}`}>
                <Button>View Site</Button>
              </Link>
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
}
0;
