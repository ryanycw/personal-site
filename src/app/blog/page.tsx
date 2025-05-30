import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Ryan',
  description: 'Articles and insights on cryptography, Rust, and web development',
};

const posts = [
  {
    id: 1,
    title: 'Understanding Zero-Knowledge Proofs: A Practical Introduction',
    excerpt: 'An accessible explanation of zero-knowledge proofs and how they can be implemented in modern applications.',
    date: 'May 15, 2023',
    tags: ['Cryptography', 'Privacy', 'Security'],
    slug: 'understanding-zero-knowledge-proofs',
  },
  {
    id: 2,
    title: 'Building High-Performance Web Applications with Rust and WebAssembly',
    excerpt: 'How to leverage Rust and WebAssembly to create blazing-fast web applications with near-native performance.',
    date: 'April 22, 2023',
    tags: ['Rust', 'WebAssembly', 'Performance'],
    slug: 'rust-webassembly-performance',
  },
  {
    id: 3,
    title: 'Secure Authentication Patterns for Modern Web Applications',
    excerpt: 'A comprehensive guide to implementing secure authentication in web applications using modern best practices.',
    date: 'March 10, 2023',
    tags: ['Security', 'Authentication', 'Web Development'],
    slug: 'secure-authentication-patterns',
  },
  {
    id: 4,
    title: 'The Minimalist Approach to Software Design',
    excerpt: 'How applying minimalist principles to software design can lead to more maintainable, efficient, and user-friendly applications.',
    date: 'February 28, 2023',
    tags: ['Design', 'Software Architecture', 'Minimalism'],
    slug: 'minimalist-software-design',
  },
  {
    id: 5,
    title: 'Cryptographic Primitives Every Developer Should Understand',
    excerpt: 'An overview of essential cryptographic concepts that form the foundation of secure systems.',
    date: 'January 15, 2023',
    tags: ['Cryptography', 'Security', 'Development'],
    slug: 'cryptographic-primitives',
  },
  {
    id: 6,
    title: 'Building a Secure File Sharing System with End-to-End Encryption',
    excerpt: 'A step-by-step guide to implementing a secure file sharing system with client-side encryption.',
    date: 'December 5, 2022',
    tags: ['Encryption', 'Security', 'File Sharing'],
    slug: 'secure-file-sharing',
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-md text-center">
          <h1 className="mb-6">Blog</h1>
          <p className="mx-auto mb-0 max-w-2xl text-muted-foreground">
            Thoughts, insights, and tutorials on cryptography, Rust programming, and web development.
            I write about technical topics with a focus on security, performance, and clean design.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-24">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-border"
              >
                <div className="p-6">
                  <div className="mb-3 text-sm text-muted-foreground">
                    {post.date}
                  </div>
                  <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
                  <p className="mb-4 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-md">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4">Subscribe to my newsletter</h2>
            <p className="mb-6 text-muted-foreground">
              Get notified when I publish new articles and resources on cryptography, Rust, and web development.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}