import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '../../data/blogPosts';
import './Pages.css';

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog | StuCarbon - Student Carbon Footprint Tips & Education</title>
                <meta name="description" content="Read the StuCarbon blog for tips on reducing your carbon footprint as a student, sustainable living guides, and environmental education content." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://stucarbon.com/blog" />

                {/* Open Graph */}
                <meta property="og:title" content="StuCarbon Blog - Student Sustainability Tips & Guides" />
                <meta property="og:description" content="Tips, guides, and insights to help students live more sustainably and reduce their carbon footprint." />
                <meta property="og:url" content="https://stucarbon.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="StuCarbon Blog - Student Sustainability Tips" />
                <meta name="twitter:description" content="Tips, guides, and insights for sustainable student living." />
            </Helmet>

            <div className="blog-page">
                <header className="blog-header animate-fade-in">
                    <h1>StuCarbon <span className="text-gradient">Blog</span></h1>
                    <p>
                        Tips, guides, and insights to help students live more sustainably
                        and reduce their carbon footprint.
                    </p>
                </header>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className="blog-card animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="blog-card-image">
                                <span>{post.emoji}</span>
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-card-category">{post.category}</span>
                                <h2 className="blog-card-title">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                <div className="blog-card-meta">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}

// Full Blog Post Component with SEO optimization
export function BlogPost() {
    const { slug } = useParams();
    const post = getBlogPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug);

    // 404 handling
    if (!post) {
        return (
            <>
                <Helmet>
                    <title>Post Not Found | StuCarbon</title>
                    <meta name="robots" content="noindex" />
                </Helmet>
                <div className="legal-page">
                    <div className="legal-content" style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😕</div>
                        <h1>Post Not Found</h1>
                        <p style={{ marginTop: '1rem' }}>
                            We couldn't find the blog post you're looking for.
                        </p>
                        <Link to="/blog" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // JSON-LD Structured Data for Google Rich Results
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "image": `https://stucarbon.com/og-${post.slug}.png`,
        "author": {
            "@type": "Organization",
            "name": post.author.name,
            "url": post.author.url
        },
        "publisher": {
            "@type": "Organization",
            "name": "StuCarbon",
            "url": "https://stucarbon.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://stucarbon.com/logo.png"
            }
        },
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://stucarbon.com/blog/${post.slug}`
        }
    };

    // FAQ Structured Data
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.content.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Breadcrumb Structured Data
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://stucarbon.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://stucarbon.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://stucarbon.com/blog/${post.slug}`
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{post.metaTitle}</title>
                <meta name="description" content={post.metaDescription} />
                <meta name="keywords" content={post.keywords.join(', ')} />
                <meta name="author" content={post.author.name} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://stucarbon.com/blog/${post.slug}`} />

                {/* Open Graph */}
                <meta property="og:title" content={post.metaTitle} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:url" content={`https://stucarbon.com/blog/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.datePublished} />
                <meta property="article:modified_time" content={post.dateModified} />
                <meta property="article:author" content={post.author.name} />
                <meta property="article:section" content={post.category} />
                {post.keywords.map((keyword, i) => (
                    <meta key={i} property="article:tag" content={keyword} />
                ))}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.metaTitle} />
                <meta name="twitter:description" content={post.metaDescription} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
                />
            </Helmet>

            <article className="blog-article">
                {/* Breadcrumbs */}
                <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="breadcrumb-separator">›</span>
                    <Link to="/blog">Blog</Link>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-current">{post.category}</span>
                </nav>

                {/* Article Header */}
                <header className="blog-article-header">
                    <span className="blog-article-category">{post.category}</span>
                    <h1 className="blog-article-title">{post.title}</h1>
                    <div className="blog-article-meta">
                        <span className="blog-article-date">
                            <time dateTime={post.datePublished}>{post.date}</time>
                        </span>
                        <span className="blog-article-separator">•</span>
                        <span className="blog-article-read-time">{post.readTime}</span>
                        <span className="blog-article-separator">•</span>
                        <span className="blog-article-author">By {post.author.name}</span>
                    </div>
                </header>

                {/* Table of Contents */}
                <nav className="blog-toc">
                    <h2 className="blog-toc-title">📋 In This Article</h2>
                    <ul className="blog-toc-list">
                        {post.content.sections.map((section, index) => (
                            <li key={index}>
                                <a href={`#section-${index + 1}`}>{section.heading}</a>
                            </li>
                        ))}
                        <li><a href="#faqs">Frequently Asked Questions</a></li>
                    </ul>
                </nav>

                {/* Article Content */}
                <div className="blog-article-content">
                    {/* Introduction */}
                    <p className="blog-article-intro">{post.content.intro}</p>

                    {/* Main Sections */}
                    {post.content.sections.map((section, index) => (
                        <section key={index} id={`section-${index + 1}`} className="blog-section">
                            <h2>{section.heading}</h2>
                            <p>{section.content}</p>
                            {section.tip && (
                                <div className="blog-tip">
                                    <span className="blog-tip-icon">💡</span>
                                    <div className="blog-tip-content">
                                        <strong>Pro Tip:</strong> {section.tip}
                                    </div>
                                </div>
                            )}
                        </section>
                    ))}

                    {/* Conclusion */}
                    <section className="blog-conclusion">
                        <h2>Wrapping Up</h2>
                        <p>{post.content.conclusion}</p>
                        <div className="blog-cta">
                            <h3>Ready to measure your impact?</h3>
                            <p>Take our free 2-minute quiz to calculate your carbon footprint and get personalized tips.</p>
                            <Link to="/" className="btn btn-primary btn-cta">
                                Calculate Your Footprint →
                            </Link>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="blog-faqs">
                        <h2>Frequently Asked Questions</h2>
                        <div className="blog-faq-list">
                            {post.content.faqs.map((faq, index) => (
                                <details key={index} className="blog-faq-item">
                                    <summary className="blog-faq-question">{faq.question}</summary>
                                    <p className="blog-faq-answer">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <aside className="blog-related">
                        <h2>Related Articles</h2>
                        <div className="blog-related-grid">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.slug}`}
                                    className="blog-related-card"
                                >
                                    <span className="blog-related-emoji">{relatedPost.emoji}</span>
                                    <div className="blog-related-content">
                                        <span className="blog-related-category">{relatedPost.category}</span>
                                        <h3>{relatedPost.title}</h3>
                                        <span className="blog-related-meta">{relatedPost.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                )}

                {/* Back to Blog */}
                <div className="blog-back">
                    <Link to="/blog" className="blog-back-link">
                        ← Back to All Articles
                    </Link>
                </div>
            </article>
        </>
    );
}
