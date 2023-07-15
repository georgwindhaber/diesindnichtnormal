import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { reader } from "./reader";
import "./styles.css";

export default async function Homepage() {
  const scandals = await reader.collections.scandals.all();
  const home = (await reader.singletons.home.read())!;

  if (!home) {
    return notFound();
  }

  return (
    <main>
      <section className="">
        <div className="h-screen flex justify-center items-center">
          {home.heroBackgroundImage && (
            <Image
              src={home.heroBackgroundImage}
              alt="background"
              fill
              className="w-full object-cover"
            />
          )}

          {home.heroTitleImage && (
            <div className="w-[60ch] h-[60ch] relative">
              <Image
                src={home.heroTitleImage}
                alt={home.heroTitleImageLabel}
                className="object-contain -rotate-6"
                fill
              />
            </div>
          )}

          {home.topRightImage && (
            <div className="absolute w-64 h-16 top-5 right-5  ">
              <Image
                src={home.topRightImage}
                alt={home.topRigthImageLabel}
                className="absolute object-contain"
                fill
              />
            </div>
          )}
        </div>
      </section>
      <ul>
        {scandals.map((scandal) => (
          <li key={scandal.slug}>
            <Link href={`/${scandal.slug}`}>{scandal.entry.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
