import Head from "next/head";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";
import Nav from "@/app/home/component/Nav/page";
import Footer from "@/app/home/footer/page";
import Whatsapp from "@/app/whatsapp_icon/page";
import styles from "./Blog.module.css";

export const metadata = {
  title: "Blog | Website Development & App Development Insights | Aroliya",
  description: "Discover expert insights on website development, app development, Shopify stores, WordPress, SEO, and digital marketing. Aroliya's blog - a leading website development agency in India sharing industry knowledge.",
  keywords: "website development blog india, app development blog, web development tips, Shopify tips, WordPress development, digital marketing blog, ecommerce tips, SEO guide, web development insights, best tech blog India, website optimization, React development tips, Next.js tutorials, Flutter development guide, software development blog, SaaS development tips",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Head>
        <meta name="keywords" content="website development blog india, app development blog, web development tips, Shopify tips, WordPress development, digital marketing blog, ecommerce tips, SEO guide, web development insights, best tech blog India, website optimization, React development tips, Next.js tutorials, Flutter development guide, software development blog, SaaS development tips" />
        <meta name="author" content="Aroliya" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Top Blog - Web Development & Digital Marketing Insights | Aroliya" />
        <meta property="og:description" content="Discover expert insights on web development, Shopify stores, and digital marketing strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aroliya.com/blogs" />
        <meta property="og:image" content="https://aroliya.com/og-blogs.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Blog - Web Development & Digital Marketing | Aroliya" />
        <meta name="twitter:description" content="Expert insights on web development, Shopify, and digital marketing." />
        <link rel="canonical" href="https://aroliya.com/blogs" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "Blog", "name": "Aroliya Blog - Website Development & App Development Insights", "url": "https://www.aroliya.com/blogs", "description": "Expert insights on website development, app development, Shopify, WordPress, SEO, and digital marketing from Aroliya, a leading website development agency in India."}'}} />
      </Head>
      <Nav />
      <Whatsapp />
      <div className={styles.container} id="main-content" role="main">
        <section className={styles.hero}>
          <h1>Aroliya Blog</h1>
          <p>
            Insights on web development, Shopify, WordPress, mobile apps, and
            digital business strategies from our expert team.
          </p>
        </section>

        <section className={styles.grid}>
          {posts.length === 0 ? (
            <p className={styles.empty}>No blog posts yet. Check back soon!</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <Link href={`/blogs/${post.slug}`} aria-label={`Read more: ${post.data.title}`}>
                  <div className={styles.cardBody}>
                    {post.data.tags && (
                      <div className={styles.tags}>
                        {post.data.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2>{post.data.title}</h2>
                    {post.data.excerpt && <p>{post.data.excerpt}</p>}
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
                        <span className={styles.author}>{post.data.author}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
