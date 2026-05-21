import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/app/home/component/Nav/page";
import Footer from "@/app/home/footer/page";
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
    title: `${post.data.title} | Aroliya Blog - Expert Web Development Insights`,
    description: post.data.excerpt || `Read about ${post.data.title} - Expert insights on web development, Shopify, and digital strategies from Aroliya.`,
    keywords: post.data.tags ? post.data.tags.join(", ") + ", web development, Shopify, digital marketing" : "web development, Shopify, digital marketing, Aroliya blog",
    authors: post.data.author ? [{ name: post.data.author }] : undefined,
    openGraph: {
      title: `${post.data.title} | Aroliya Blog`,
      description: post.data.excerpt,
      type: "article",
      publishedTime: post.data.date,
      authors: post.data.author ? [post.data.author] : undefined,
      tags: post.data.tags,
    },
    twitter: {
      card: "summary_large_image",
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
    <>
      <Head>
        <meta property="og:url" content={`https://aroliya.com/blogs/${slug}`} />
        <link rel="canonical" href={`https://aroliya.com/blogs/${slug}`} />
      </Head>
      <Nav />
      <div className={styles.container} id="main-content" role="main">
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
      <Footer />
    </>
  );
}
