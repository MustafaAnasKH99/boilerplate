import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockURLs = [
 "https://utfs.io/f/232ef12b-a07a-4a8f-8309-1b97e5df28b2-krr3f8.png",
 "https://utfs.io/f/af0c13d9-4489-42fc-b2a7-862d823bd904-pjuwh5.png",
 "https://utfs.io/f/e83a6280-9df3-46ec-9978-fa067de7beb6-pjxex1.png",
 "https://utfs.io/f/7a44e3c1-eecc-4423-a666-0230ec3dd5fb-pjuylr.png",
 "https://utfs.io/f/dfe42d58-c6fa-4bf4-b7ab-3f72f915efde-4j1ge8.png" 
]

export default async function HomePage() {
  // this function now only runs on the server -> console logs wont show in the browser
  const images = await db.query.images.findMany();
  return (
    <main className="">
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
    </main>
  );
}
