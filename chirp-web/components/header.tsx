import { DM_Serif_Display } from "next/font/google";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full bg-white border-b backdrop-filter bg-opacity-30 backdrop-blur-lg transition-all">
      <div className="flex items-center justify-between px-4 py-2 md:px-12">
        <h1 className={`${dmSerifDisplay.className} text-2xl font-bold`}>
          Chirp
        </h1>
        <div className="flex items-center">
          <SignedOut>
            <SignInButton>
              <Button className="rounded-full">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
