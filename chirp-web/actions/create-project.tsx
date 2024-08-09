"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/db/index";
import { sites } from "@/db/schema";
import { redirect } from "next/navigation";

export type PrevState = { message: string | null };

export async function createSite(prevState: PrevState, formData: FormData) {
  const { userId } = auth();

  const newSite = {
    name: formData.get("site-name") as string,
    url: formData.get("site-url") as string,
    description: formData.get("site-description") as string,
    userId,
  };

  const [inserted] = await db
    .insert(sites)
    .values(newSite)
    .returning({ id: sites.id });

  if (inserted.id) {
    redirect(`/sites/${inserted.id}/configure`);
  } else {
    return {
      message: "Some error occurred while creating your site",
    };
  }
}
