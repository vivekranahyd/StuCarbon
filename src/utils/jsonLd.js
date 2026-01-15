/**
 * Safely stringify JSON for HTML script tags (JSON-LD structured data)
 * Escapes characters that could break HTML parsing
 * 
 * This should be used for ALL JSON-LD structured data across the site
 * to prevent Google Search Console parsing errors.
 */
export const safeJsonStringify = (obj) => {
    return JSON.stringify(obj)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026');
};
