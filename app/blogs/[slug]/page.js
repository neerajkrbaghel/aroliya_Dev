import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./BlogPost.module.css";

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.data.title} | Aroliya Blog`,
    description: post.data.excerpt || `Read about ${post.data.title}`,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <div className={styles.container}>
      <Link href="/blogs" className={styles.back}>
        &larr; Back to Blog
      </Link>

      <article className={styles.article}>
        <header className={styles.header}>
          {post.data.tags && (
            <div className={styles.tags}>
              {post.data.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1>{post.data.title}</h1>
          <div className={styles.meta}>
            {post.data.date && (
              <time dateTime={post.data.date}>
                {new Date(post.data.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {post.data.author && (
              <span className={styles.author}>By {post.data.author}</span>
            )}
          </div>
        </header>

        <div className={styles.content}>
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
