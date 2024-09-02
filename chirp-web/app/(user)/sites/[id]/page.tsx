import { eq } from "drizzle-orm";

import { db } from "@/db";
import { sites } from "@/db/schema";

interface IPageParams {
  params: {
    id: string;
  };
}

export default async function Page(props: IPageParams) {
  if (!props.params.id) {
    return <div>This site does not exist</div>;
  }

  const siteDetails = await db
    .select()
    .from(sites)
    .where(eq(sites.id, props.params.id));
  console.log(siteDetails);

  return <p>Site details page {props.params.id}</p>;
}
