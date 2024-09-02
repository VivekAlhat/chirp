import { PlusIcon } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { Suspense } from "react";

import { db } from "@/db/index";
import { sites } from "@/db/schema";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import NewSiteForm from "@/components/new-site-form";
import SitesList from "@/components/sites-list";
import Loading from "./loading";

const CreateSite = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="rounded-full">
        <PlusIcon className="h-4 w-4" />
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px] rounded-md">
      <DialogHeader>
        <DialogTitle>New Site</DialogTitle>
        <DialogDescription>Create a new site to get started</DialogDescription>
      </DialogHeader>
      <NewSiteForm />
    </DialogContent>
  </Dialog>
);

export default async function Page() {
  const { userId } = auth();

  if (!userId) return null;

  const allSites = await db
    .select()
    .from(sites)
    .where(eq(sites.userId, userId));
  console.log(allSites);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Sites</h1>
        <CreateSite />
      </div>
      <Suspense fallback={<Loading />}>
        <SitesList sites={allSites} />
      </Suspense>
    </div>
  );
}
