import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db/index";
import { sites } from "@/db/schema";

const NewSiteForm = () => {
  return (
    <form className="space-y-3">
      <fieldset className="space-y-1">
        <Label htmlFor="site-name">Name</Label>
        <Input id="site-name" placeholder="Site Name" />
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="site-url">Website URL</Label>
        <Input id="site-url" placeholder="https://example.com" />
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="site-description">Description</Label>
        <Textarea
          id="site-description"
          className="min-h-[100px] resize-none"
          placeholder="Description (optional)"
        />
      </fieldset>
    </form>
  );
};

export default async function Page() {
  const allSites = await db.select().from(sites);
  console.log(allSites);

  return (
    <div className="px-4 py-4 md:px-12 md:py-4">
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
          <DialogFooter>
            <Button type="submit">Create Site</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
