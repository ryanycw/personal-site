import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Ryan',
  description: 'Get in touch with Ryan for collaboration, consulting, or just to say hello',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-md text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="mx-auto mb-0 max-w-2xl text-muted-foreground">
            Have a project in mind or want to discuss potential collaborations?
            I'm always open to new opportunities and interesting conversations.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="container-md">
          <div className="mx-auto max-w-2xl rounded-lg border border-border/40 bg-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="border-t border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <h2 className="mb-12 text-center">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">Email</h3>
              <p className="mb-4 text-muted-foreground">
                For direct inquiries and collaborations
              </p>
              <a
                href="mailto:hello@example.com"
                className="text-foreground hover:text-primary"
              >
                hello@example.com
              </a>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">GitHub</h3>
              <p className="mb-4 text-muted-foreground">
                Check out my code and open source contributions
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                github.com/ryan
              </a>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">LinkedIn</h3>
              <p className="mb-4 text-muted-foreground">
                Connect professionally and view my experience
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                linkedin.com/in/ryan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}