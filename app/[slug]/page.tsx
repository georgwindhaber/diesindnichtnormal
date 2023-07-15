import { reader } from "../reader";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.scandals.read(slug);

  if (!post) return <div>Post not found!</div>;

  return (
    <div>
      <h1>{post.name}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.scandals.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
