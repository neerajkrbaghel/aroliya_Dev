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
    title: `${post.data.title} | Aroliya - Website Development Agency in India`,
    description: post.data.excerpt || `Read about ${post.data.title} - Expert insights on website development, app development, and digital strategies from Aroliya, a leading website development agency in India.`,
    keywords: post.data.tags ? post.data.tags.join(", ") + ", website development in india, app development in india, web development tips, Aroliya blog" : "website development in india, app development in india, web development tips, Aroliya blog",
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
        <meta property="og:url" content={`https://www.aroliya.com/blogs/${slug}`} />
        <link rel="canonical" href={`https://www.aroliya.com/blogs/${slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.data.title,
              "description": post.data.excerpt,
              "author": { "@type": "Organization", "name": "Aroliya", "url": "https://www.aroliya.com" },
              "publisher": { "@type": "Organization", "name": "Aroliya", "logo": { "@type": "ImageObject", "url": "https://www.aroliya.com/logo/logo.png" } },
              "datePublished": post.data.date,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.aroliya.com/blogs/${slug}` },
              "keywords": post.data.tags ? post.data.tags.join(", ") : ""
            })
          }}
        />
      </Head>
      <Nav />
      <div className={styles.container} role="main">
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

        <nav className={styles.relatedLinks} aria-label="Related services">
          <h2>Related Services</h2>
          <div className={styles.relatedGrid}>
            <Link href="/services/web-and-app-development">Website Development in India</Link>
            <Link href="/services/e-commerce-solutions">Ecommerce Website Development</Link>
            <Link href="/services/data-visualization">AI Automation & Data Solutions</Link>
            <Link href="/contact-us">Contact Us for a Free Consultation</Link>
          </div>
        </nav>
      </div>
      <Footer />
    </>
  );
}
