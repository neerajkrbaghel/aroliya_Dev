import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";
import styles from "./Blog.module.css";

export const metadata = {
  title: "Blog | Aroliya - Web & Mobile App Development Insights",
  description:
    "Explore expert articles on custom web development, Shopify, WordPress, mobile apps, and digital business strategies from the Aroliya team.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className={styles.container}>
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
  );
}
