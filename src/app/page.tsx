import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 md:py-32">
        <div className="container-md text-center">
          <h1 className="mb-6 font-serif">
            Fullstack Developer with a passion for{' '}
            <span className="text-primary">Applied Cryptography</span> and{' '}
            <span className="text-primary">Rust</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Building secure, efficient, and elegant solutions for complex problems.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-y border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6">About Me</h2>
              <p className="mb-4 text-muted-foreground">
                I'm a fullstack developer with expertise in applied cryptography and Rust programming. 
                With a background in both frontend and backend development, I create secure, 
                efficient, and user-friendly applications.
              </p>
              <p className="mb-6 text-muted-foreground">
                My approach combines technical excellence with minimalist design principles, 
                resulting in clean, maintainable code and intuitive user experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
              >
                Learn more about me
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-sm rounded-md bg-muted"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A selection of my recent work in cryptography, web development, and Rust programming.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-border">
                <div className="aspect-video w-full bg-muted"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Project {i}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    A brief description of this project and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      Rust
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      Cryptography
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      Web
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="border-y border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Latest Articles</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Thoughts, insights, and tutorials on cryptography, Rust, and web development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-border">
                <div className="p-6">
                  <div className="mb-3 text-sm text-muted-foreground">
                    May {10 + i}, 2023
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Blog Post Title {i}</h3>
                  <p className="mb-4 text-muted-foreground">
                    A brief summary of this blog post and what readers can expect to learn.
                  </p>
                  <Link
                    href={`/blog/post-${i}`}
                    className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
            >
              View all articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container-md text-center">
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="mb-8 text-muted-foreground">
            Have a project in mind or want to discuss potential collaborations?
            I'm always open to new opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}