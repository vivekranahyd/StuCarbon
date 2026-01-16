---
description: Protocol for creating viral, Google Discover-optimized blog posts using the 'Newsjacking' and 'Zero-Budget' strategy.
---

# Viral Blog Post Protocol ("The Zero-Budget Strategy")

This protocol is based on the aggressive 4-week execution plan to dominate the Sustainability niche.

## Phase 1: Topic Selection (Newsjacking)

1.  **Trend-Jack Method**:
    *   Check Google Trends for **Trending Now** topics (even non-green ones).
    *   Angle: "Make it green." (e.g., iPhone launch -> Carbon footprint analysis).
    *   Goal: High volume + Low competition + Engaging/Informative.
    *   **CRITICAL SAFETY**: Avoid legally risky words like "Scam", "Lie", "Fake", or "Fraud". Focus on "Analysis", "Review", "What they don't tell you", or "The Reality".
2.  **Keyword Golden Ratio (KGR)**:
    *   Target keywords with volume < 250 and < 63 "allintitle" results.
    *   Search: "Sustainable alternative to [Brand]" or specific questions.
    *   Output: 1,500-word guides.

## Phase 2: Content Creation Rules

1.  **Headline Formula** (Engaging but Safe):
    *   **Structure**: `[Personal Experience] + [Curiosity Gap] + [Benefit/Insight]`
    *   *Bad*: "Lenovo's New Laptop is a Scam." (Legal risk!)
    *   *Good*: "I Tested Lenovo's New 'Modular' Laptop and Found a Surprising Catch."
2.  **The "Discover" Image Rule**:
    *   Featured image MUST be **1200px wide** (minimum).
    *   **Style**: High-contrast, unique, generated (DALL-E 3/Bing) or Canva. NO STOCK PHOTOS.
    *   **Meta Tag**: Ensure `<meta name="robots" content="max-image-preview:large">` is present.
3.  **Structure**:
    *   Engaging intro (hook).
    *   Short paragraphs (mobile friendly).
    *   "Web Stories" style visual breaks if possible.

## Phase 3: Distribution & E-E-A-T

1.  **E-E-A-T**:
    *   Include author bio with specific "credentials" (even informal, e.g., "5 years composting").
    *   Link to social profiles.
2.  **Pinterest Avalanche**:
    *   (User Action) Create 5 pin designs per post.
3.  **Reddit Strategy**:
    *   Post entire article text to r/ZeroWaste, r/Frugal, etc.
    *   Link back at the bottom: "Read with photos here: [Link]".
    *   **Note**: Ensure tone is helpful, not spammy or inflammatory.

## Execution Steps for Agent

1.  **Research**: Use `search_web` to find a current trend.
2.  **Plan**: Propose headline and angle.
3.  **Draft**: Write the content in `src/data/blogPosts.js` (or appropriate file).
4.  **Image**: Generate a high-contrast, clickable image using `generate_image`.
5.  **Publish**: Update `sitemap.xml` and ensure SEO meta tags are correct.
