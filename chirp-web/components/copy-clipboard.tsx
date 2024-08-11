"use client";

import { Clipboard } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useToast } from "@/components/ui/use-toast";

interface IProps {
  id: string;
}

export default function CopyToClipboard({ id }: IProps) {
  const { toast } = useToast();

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(
      `
        <chirp-widget site="${id}"></chirp-widget>
        <script src="${process.env.WIDGET_URL!}"></script>
      `
    );
    toast({
      variant: "default",
      description: "Script code copied to clipboard",
    });
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Clipboard
          className="absolute top-5 right-5 cursor-pointer h-5 w-5"
          onClick={handleCopyToClipboard}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy script code</p>
      </TooltipContent>
    </Tooltip>
  );
}
