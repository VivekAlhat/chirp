import { PlusIcon } from "lucide-react";

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
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function Page() {
  const { userId } = auth();

  if (!userId) return null;

  const allSites = await db
    .select()
    .from(sites)
    .where(eq(sites.userId, userId));
  console.log(allSites);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          <span>Create Site</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-md">
        <DialogHeader>
          <DialogTitle>New Site</DialogTitle>
          <DialogDescription>
            Create a new site to get started
          </DialogDescription>
        </DialogHeader>
        <NewSiteForm />
      </DialogContent>
    </Dialog>
  );
}
