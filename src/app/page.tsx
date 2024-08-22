import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany();
  return (
    <div className="flex flex-wrap gap-4">
      {
        [...images, ...images, ...images].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default async function HomePage() {
  // this function now only runs on the server -> console logs wont show in the browser
  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl font-bold text-center">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
