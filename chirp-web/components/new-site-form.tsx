"use client";

import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { LoaderCircle } from "lucide-react";

import { createSite, PrevState } from "@/actions/create-project";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const initialState: PrevState = {
  message: null,
};

const SiteFormSubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full">
      {pending ? <LoaderCircle className="animate-spin" /> : "Create Site"}
    </Button>
  );
};

export default function NewSiteForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(createSite, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.message,
      });
    }
  }, [state.message, toast]);

  return (
    <form className="space-y-3" action={formAction}>
      <fieldset className="space-y-1">
        <Label htmlFor="site-name">Name</Label>
        <Input id="site-name" name="site-name" placeholder="Site Name" />
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="site-url">Website URL</Label>
        <Input
          id="site-url"
          name="site-url"
          placeholder="https://example.com"
        />
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="site-description">Description</Label>
        <Textarea
          id="site-description"
          name="site-description"
          className="min-h-[100px] resize-none"
          placeholder="Description (optional)"
        />
      </fieldset>
      <DialogFooter>
        <SiteFormSubmitBtn />
      </DialogFooter>
    </form>
  );
}
