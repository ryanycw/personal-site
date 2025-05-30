import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPostParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params;
  // In a real app, you would fetch the post data based on the slug
  return {
    title: `${slug} | Blog | Ryan`,
    description: 'Blog post about technology and development',
  };
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  
  // In a real app, you would fetch the post data based on the slug
  const post = {
    title: 'Understanding Zero-Knowledge Proofs: A Practical Introduction',
    date: 'May 15, 2023',
    content: `
      <p>
        Zero-knowledge proofs (ZKPs) are a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true, without revealing any information beyond the validity of the statement itself.
      </p>
      
      <h2>Why Zero-Knowledge Proofs Matter</h2>
      
      <p>
        In an era where data privacy is increasingly important, zero-knowledge proofs offer a powerful tool for verifying information without exposing sensitive data. This has profound implications for:
      </p>
      
      <ul>
        <li>Identity verification without revealing personal information</li>
        <li>Proving ownership of assets without revealing the assets themselves</li>
        <li>Validating transactions without exposing transaction details</li>
        <li>Ensuring compliance with regulations without sharing confidential data</li>
      </ul>
      
      <h2>Key Concepts in Zero-Knowledge Proofs</h2>
      
      <p>
        To understand ZKPs, it's important to grasp three fundamental properties:
      </p>
      
      <ol>
        <li><strong>Completeness:</strong> If the statement is true, an honest verifier will be convinced by an honest prover.</li>
        <li><strong>Soundness:</strong> If the statement is false, no cheating prover can convince an honest verifier that it is true, except with some small probability.</li>
        <li><strong>Zero-knowledge:</strong> If the statement is true, the verifier learns nothing other than the fact that the statement is true.</li>
      </ol>
      
      <h2>Types of Zero-Knowledge Proofs</h2>
      
      <p>
        There are several types of zero-knowledge proofs, each with its own characteristics and use cases:
      </p>
      
      <h3>Interactive Zero-Knowledge Proofs</h3>
      
      <p>
        These involve back-and-forth communication between the prover and verifier. While effective, they require both parties to be online simultaneously and can be cumbersome for certain applications.
      </p>
      
      <h3>Non-Interactive Zero-Knowledge Proofs (NIZKs)</h3>
      
      <p>
        NIZKs eliminate the need for interactive communication, making them more practical for many real-world applications. They typically involve a single message from the prover to the verifier.
      </p>
      
      <h3>zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge)</h3>
      
      <p>
        These are a form of NIZKs that are particularly efficient, with small proof sizes and quick verification times. They're widely used in blockchain applications like Zcash.
      </p>
      
      <h3>zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge)</h3>
      
      <p>
        A newer alternative to zk-SNARKs, zk-STARKs offer post-quantum security and don't require a trusted setup, but generally produce larger proofs.
      </p>
      
      <h2>Practical Applications</h2>
      
      <p>
        Zero-knowledge proofs are finding applications across various domains:
      </p>
      
      <h3>Blockchain and Cryptocurrencies</h3>
      
      <p>
        ZKPs enable private transactions on public blockchains, as implemented in privacy-focused cryptocurrencies like Zcash and Monero.
      </p>
      
      <h3>Authentication Systems</h3>
      
      <p>
        They allow users to prove they know a password without actually revealing the password itself, enhancing security.
      </p>
      
      <h3>Supply Chain Verification</h3>
      
      <p>
        Companies can prove compliance with regulations without revealing proprietary information about their supply chains.
      </p>
      
      <h3>Healthcare</h3>
      
      <p>
        Medical providers can verify patient eligibility for certain treatments without accessing their complete medical history.
      </p>
      
      <h2>Implementing Zero-Knowledge Proofs</h2>
      
      <p>
        While the mathematical foundations of ZKPs are complex, several libraries and frameworks make implementation more accessible:
      </p>
      
      <ul>
        <li><strong>libsnark:</strong> A C++ library for zk-SNARKs</li>
        <li><strong>ZoKrates:</strong> A toolbox for zk-SNARKs on Ethereum</li>
        <li><strong>Circom and SnarkJS:</strong> Tools for building and using zk-SNARKs in JavaScript</li>
        <li><strong>StarkWare:</strong> Implementation of zk-STARKs</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>
        Zero-knowledge proofs represent a powerful cryptographic tool that enables verification without compromising privacy. As privacy concerns continue to grow and computational capabilities advance, we can expect to see increasingly widespread adoption of ZKPs across various industries and applications.
      </p>
      
      <p>
        In future articles, we'll explore specific implementations of zero-knowledge proofs and walk through practical examples using some of the libraries mentioned above.
      </p>
    `,
    tags: ['Cryptography', 'Privacy', 'Security'],
  };

  return (
    <div className="flex flex-col">
      <article className="py-16 md:py-24">
        <div className="container-md">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to all posts
          </Link>
          
          <div className="mb-8">
            <div className="mb-4 text-sm text-muted-foreground">
              {post.date}
            </div>
            <h1 className="mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            className="prose prose-gray max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t border-border/40 bg-secondary/50 py-16 md:py-24">
        <div className="container-lg">
          <h2 className="mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-border"
              >
                <div className="p-6">
                  <div className="mb-3 text-sm text-muted-foreground">
                    April {10 + i}, 2023
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Related Article {i}</h3>
                  <p className="mb-4 text-muted-foreground">
                    A brief summary of this related article and what readers can expect to learn.
                  </p>
                  <Link
                    href={`/blog/related-${i}`}
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
    </div>
  );
}