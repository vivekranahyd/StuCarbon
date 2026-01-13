import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Pages.css';

// Blog posts data - in production, this would come from a CMS or API
const blogPosts = [
    {
        id: 1,
        slug: 'how-to-reduce-carbon-footprint-as-student',
        title: '10 Easy Ways to Reduce Your Carbon Footprint as a Student',
        excerpt: 'Simple, actionable tips that any college student can implement today to lower their environmental impact without breaking the bank.',
        category: 'Tips',
        date: 'January 12, 2026',
        readTime: '5 min read',
        emoji: '🌿'
    },
    {
        id: 2,
        slug: 'understanding-carbon-footprint',
        title: 'What is a Carbon Footprint? A Student\'s Guide',
        excerpt: 'Everything you need to know about carbon footprints - what they are, how they\'re calculated, and why they matter for your future.',
        category: 'Education',
        date: 'January 10, 2026',
        readTime: '7 min read',
        emoji: '📚'
    },
    {
        id: 3,
        slug: 'sustainable-dorm-living',
        title: 'The Ultimate Guide to Sustainable Dorm Living',
        excerpt: 'Transform your dorm room into an eco-friendly space with these practical tips for sustainable campus living.',
        category: 'Lifestyle',
        date: 'January 8, 2026',
        readTime: '6 min read',
        emoji: '🏠'
    },
    {
        id: 4,
        slug: 'meat-consumption-carbon-impact',
        title: 'How Your Diet Affects Your Carbon Footprint',
        excerpt: 'The surprising impact of food choices on carbon emissions, and how small dietary changes can make a big difference.',
        category: 'Food',
        date: 'January 5, 2026',
        readTime: '8 min read',
        emoji: '🥗'
    },
    {
        id: 5,
        slug: 'digital-carbon-footprint',
        title: 'Your Digital Carbon Footprint: Streaming, Gaming & More',
        excerpt: 'Did you know your Netflix habits have a carbon cost? Learn about the hidden environmental impact of digital activities.',
        category: 'Technology',
        date: 'January 3, 2026',
        readTime: '5 min read',
        emoji: '💻'
    },
    {
        id: 6,
        slug: 'campus-sustainability-initiatives',
        title: 'How Universities Are Leading the Sustainability Charge',
        excerpt: 'Discover how colleges and universities around the world are implementing green initiatives and how you can get involved.',
        category: 'Campus',
        date: 'December 28, 2025',
        readTime: '6 min read',
        emoji: '🎓'
    }
];

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog | StuCarbon - Student Carbon Footprint Tips & Education</title>
                <meta name="description" content="Read the StuCarbon blog for tips on reducing your carbon footprint as a student, sustainable living guides, and environmental education content." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://stucarbon.com/blog" />
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

// Individual blog post component (placeholder)
export function BlogPost() {
    return (
        <>
            <Helmet>
                <title>Blog Post | StuCarbon</title>
            </Helmet>
            <div className="legal-page">
                <div className="legal-content" style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
                    <h1>Blog Post Coming Soon</h1>
                    <p style={{ marginTop: '1rem' }}>
                        We're working on creating amazing content for you. Check back soon!
                    </p>
                    <Link to="/blog" style={{ display: 'inline-block', marginTop: '2rem' }}>
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        </>
    );
}
