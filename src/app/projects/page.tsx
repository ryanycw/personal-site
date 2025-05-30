import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Ryan',
  description: 'Explore my portfolio of projects in cryptography, Rust, and web development',
};

const projects = [
  {
    id: 1,
    title: 'Secure Messaging Protocol',
    description: 'An end-to-end encrypted messaging protocol built with Rust, featuring zero-knowledge proofs for enhanced privacy.',
    tags: ['Rust', 'Cryptography', 'Zero-Knowledge Proofs', 'WebAssembly'],
    image: '/placeholder.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Blockchain Explorer',
    description: 'A high-performance blockchain explorer built with Next.js and Rust, allowing users to search and analyze transactions.',
    tags: ['Next.js', 'Rust', 'Blockchain', 'API'],
    image: '/placeholder.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Decentralized Identity System',
    description: 'A self-sovereign identity solution using cryptographic primitives to enable secure and private identity verification.',
    tags: ['Cryptography', 'Rust', 'React', 'Smart Contracts'],
    image: '/placeholder.jpg',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Secure File Storage',
    description: 'A client-side encrypted file storage system with zero-knowledge authentication and sharing capabilities.',
    tags: ['Encryption', 'TypeScript', 'React', 'Node.js'],
    image: '/placeholder.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'Privacy-Preserving Analytics',
    description: 'A system for collecting and analyzing user data while preserving privacy through differential privacy techniques.',
    tags: ['Privacy', 'Data Analysis', 'Rust', 'Python'],
    image: '/placeholder.jpg',
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Smart Contract Auditing Tool',
    description: 'An automated tool for auditing smart contracts and identifying potential security vulnerabilities.',
    tags: ['Smart Contracts', 'Security', 'Rust', 'Solidity'],
    image: '/placeholder.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-md text-center">
          <h1 className="mb-6">Projects</h1>
          <p className="mx-auto mb-0 max-w-2xl text-muted-foreground">
            A collection of my work in applied cryptography, Rust development, and secure web applications.
            Each project reflects my commitment to security, performance, and minimalist design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-border"
              >
                <div className="aspect-video w-full bg-muted"></div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
                    >
                      GitHub
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
                      >
                        Live Demo
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions */}
      <section className="border-t border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <h2 className="mb-12 text-center">Open Source Contributions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="mb-2 text-xl font-bold">Rust Cryptography Library</h3>
              <p className="mb-4 text-muted-foreground">
                Active contributor to a popular Rust cryptography library, focusing on performance
                optimizations and security improvements.
              </p>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
              >
                View Contributions
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="mb-2 text-xl font-bold">Next.js Security Extensions</h3>
              <p className="mb-4 text-muted-foreground">
                Created and maintained a set of security extensions for Next.js applications,
                providing easy-to-implement security headers and CSP configurations.
              </p>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
              >
                View Project
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container-md text-center">
          <h2 className="mb-4">Interested in Collaborating?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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