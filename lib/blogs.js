import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export function getBlogSlugs() {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getBlogPost(slug) {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    data,
    content,
  };
}

export function getAllBlogPosts() {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const post = getBlogPost(slug);
      if (!post) return null;
      return post;
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0));
  return posts;
}
