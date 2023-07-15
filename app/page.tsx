import Link from "next/link";
import { reader } from "./reader";
import "./styles.css";

export default async function Homepage() {
  const scandals = await reader.collections.scandals.all();
  return (
    <main>
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
