import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
      <nav className="flex item-center justify-between w-full border-b p-4 text-xl font-semibold">
        <div>
          Top Nav
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    )
  }