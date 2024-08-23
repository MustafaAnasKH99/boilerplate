"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav(){
  const router = useRouter();
    return (
      <nav className="flex item-center justify-between w-full border-b p-4 text-xl font-semibold">
        <div>
          Top Nav
        </div>
        <div className="flex flex-row gap-20">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton 
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }