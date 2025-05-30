import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Ryan',
  description: 'Learn more about Ryan - Fullstack Developer, Applied Cryptography Expert, and Rust Enthusiast',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6">About Me</h1>
              <p className="mb-4 text-muted-foreground">
                I'm Ryan, a fullstack developer with a deep interest in applied cryptography and Rust programming.
                With over 8 years of experience in software development, I've worked on a variety of projects
                ranging from secure communication systems to high-performance web applications.
              </p>
              <p className="text-muted-foreground">
                My approach to development is guided by minimalist principles - creating elegant, efficient
                solutions that solve complex problems without unnecessary complexity.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-sm rounded-md bg-muted"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-y border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <h2 className="mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Frontend Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>React, Next.js, TypeScript</li>
                <li>Tailwind CSS, Styled Components</li>
                <li>Responsive Design, Accessibility</li>
                <li>State Management (Redux, Zustand)</li>
                <li>Testing (Jest, React Testing Library)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Backend Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Node.js, Express, NestJS</li>
                <li>Rust, Actix, Tokio</li>
                <li>GraphQL, REST API Design</li>
                <li>PostgreSQL, MongoDB, Redis</li>
                <li>Docker, Kubernetes, AWS</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Applied Cryptography</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Cryptographic Protocols</li>
                <li>Secure Communication Systems</li>
                <li>Zero-Knowledge Proofs</li>
                <li>Blockchain Technology</li>
                <li>Security Auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <h2 className="mb-12 text-center">Professional Experience</h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="md:text-right">
                <div className="text-sm font-medium text-muted-foreground">2020 - Present</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Senior Fullstack Developer</h3>
                <div className="mb-4 text-muted-foreground">Crypto Security Inc.</div>
                <p className="text-muted-foreground">
                  Lead development of secure communication platforms using Rust and modern web technologies.
                  Designed and implemented cryptographic protocols for data protection and privacy.
                  Mentored junior developers and established best practices for secure coding.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="md:text-right">
                <div className="text-sm font-medium text-muted-foreground">2017 - 2020</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Blockchain Developer</h3>
                <div className="mb-4 text-muted-foreground">Distributed Systems Ltd.</div>
                <p className="text-muted-foreground">
                  Developed smart contracts and decentralized applications. Implemented cryptographic
                  primitives for secure transactions and data verification. Contributed to open-source
                  blockchain projects and research papers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="md:text-right">
                <div className="text-sm font-medium text-muted-foreground">2015 - 2017</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <div className="mb-4 text-muted-foreground">Web Solutions Co.</div>
                <p className="text-muted-foreground">
                  Built responsive web applications using React and Node.js. Designed and implemented
                  RESTful APIs and database schemas. Collaborated with UX designers to create intuitive
                  user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-y border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <h2 className="mb-12 text-center">Education</h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="md:text-right">
                <div className="text-sm font-medium text-muted-foreground">2013 - 2015</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">MSc in Computer Science</h3>
                <div className="mb-4 text-muted-foreground">University of Technology</div>
                <p className="text-muted-foreground">
                  Specialized in Cryptography and Security. Thesis on "Efficient Zero-Knowledge Proof Systems
                  for Privacy-Preserving Applications."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="md:text-right">
                <div className="text-sm font-medium text-muted-foreground">2009 - 2013</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">BSc in Computer Engineering</h3>
                <div className="mb-4 text-muted-foreground">State University</div>
                <p className="text-muted-foreground">
                  Graduated with honors. Focused on software engineering and systems design.
                  Participated in multiple hackathons and coding competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 md:py-24">
        <div className="container-md">
          <h2 className="mb-8 text-center">Beyond Coding</h2>
          <p className="mb-6 text-center text-muted-foreground">
            When I'm not immersed in code or cryptography research, you might find me:
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
              <h3 className="mb-2 text-lg font-bold">Meditation & Mindfulness</h3>
              <p className="text-sm text-muted-foreground">
                Practicing daily meditation to maintain focus and clarity.
              </p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
              <h3 className="mb-2 text-lg font-bold">Open Source Contributing</h3>
              <p className="text-sm text-muted-foreground">
                Giving back to the community through code and documentation.
              </p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
              <h3 className="mb-2 text-lg font-bold">Minimalist Design</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the principles of minimalism in design and life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}