import Head from "next/head";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";
import Nav from "@/app/home/component/Nav/page";
import Footer from "@/app/home/footer/page";
import Whatsapp from "@/app/whatsapp_icon/page";
import styles from "./Blog.module.css";

export const metadata = {
  title: "Top Blog - Web Development, Shopify & Digital Marketing Insights | Aroliya",
  description: "Discover expert insights on web development, Shopify stores, WordPress, SEO, digital marketing, and e-commerce strategies. Aroliya's top-rated blog for business growth.",
  keywords: "web development blog, Shopify tips, WordPress development, digital marketing blog, e-commerce tips, SEO guide, web development insights, top digital blog, best tech blog India, online business growth, website optimization, ecommerce strategies, React development tips, Shopify SEO, WordPress tutorials",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Head>
        <meta name="keywords" content="web development blog, Shopify tips, WordPress development, digital marketing blog, e-commerce tips, SEO guide, web development insights, top digital blog, best tech blog India, online business growth, website optimization, ecommerce strategies, React development tips, Shopify SEO, WordPress tutorials" />
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
      </Head>
      <a href="#main-content" className="skip-link">Skip to main content</a>
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
                <Link href={`/blogs/${post.slug}`}>
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
