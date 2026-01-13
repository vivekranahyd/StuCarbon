// Carbon Footprint Calculator Utility
// Calculates total footprint and breakdown by category

import { questions, categoryColors, categoryLabels, AVERAGE_STUDENT_FOOTPRINT } from '../data/questions';
import { tips, equivalents } from '../data/tips';

/**
 * Calculate total carbon footprint and breakdown
 * @param {Object} answers - Object with question IDs as keys and selected option IDs as values
 * @returns {Object} - Total footprint, breakdown by category, comparison, and tips
 */
export function calculateFootprint(answers) {
    const breakdown = {};
    let total = 0;

    // Calculate footprint by category
    questions.forEach(question => {
        const selectedOptionId = answers[question.id];
        const selectedOption = question.options.find(opt => opt.id === selectedOptionId);

        if (selectedOption) {
            const category = question.category;
            if (!breakdown[category]) {
                breakdown[category] = {
                    value: 0,
                    color: categoryColors[category],
                    label: categoryLabels[category]
                };
            }
            breakdown[category].value += selectedOption.value;
            total += selectedOption.value;
        }
    });

    // Calculate percentages
    Object.keys(breakdown).forEach(category => {
        breakdown[category].percentage = total > 0
            ? Math.round((breakdown[category].value / total) * 100)
            : 0;
    });

    // Comparison to average student
    const comparison = {
        average: AVERAGE_STUDENT_FOOTPRINT,
        difference: total - AVERAGE_STUDENT_FOOTPRINT,
        percentageDiff: Math.round(((total - AVERAGE_STUDENT_FOOTPRINT) / AVERAGE_STUDENT_FOOTPRINT) * 100),
        isBetter: total < AVERAGE_STUDENT_FOOTPRINT
    };

    // Get personalized tips
    const personalizedTips = getPersonalizedTips(breakdown, answers);

    // Calculate fun equivalents
    const funEquivalents = calculateEquivalents(total);

    // Determine score rating
    const rating = getRating(total);

    return {
        total,
        breakdown,
        comparison,
        personalizedTips,
        funEquivalents,
        rating
    };
}

/**
 * Get personalized tips based on high-impact categories
 */
function getPersonalizedTips(breakdown, answers) {
    const result = {
        quickWins: [],
        impactful: []
    };

    // Sort categories by footprint value (highest first)
    const sortedCategories = Object.entries(breakdown)
        .sort((a, b) => b[1].value - a[1].value)
        .map(([category]) => category);

    // Get tips for top 3 categories with highest impact
    sortedCategories.slice(0, 3).forEach(category => {
        const categoryTips = tips[category];
        if (!categoryTips) return;

        // Determine if user is high or low impact for this category
        const categoryValue = breakdown[category].value;
        const isHighImpact = categoryValue > 30; // threshold for "high" impact

        const relevantTips = isHighImpact ? categoryTips.high : categoryTips.low;

        if (relevantTips) {
            relevantTips.forEach(tip => {
                if (tip.quickWin && result.quickWins.length < 3) {
                    result.quickWins.push({ ...tip, category });
                } else if (!tip.quickWin && result.impactful.length < 3) {
                    result.impactful.push({ ...tip, category });
                }
            });
        }
    });

    // Ensure we have at least 3 quick wins
    Object.entries(tips).forEach(([category, categoryTips]) => {
        if (result.quickWins.length >= 3) return;

        const allTips = [...(categoryTips.high || []), ...(categoryTips.low || [])];
        allTips.forEach(tip => {
            if (tip.quickWin && result.quickWins.length < 3) {
                const exists = result.quickWins.some(t => t.title === tip.title);
                if (!exists) {
                    result.quickWins.push({ ...tip, category });
                }
            }
        });
    });

    return result;
}

/**
 * Calculate fun equivalents for the total footprint
 */
function calculateEquivalents(total) {
    const result = [];

    // Trees needed (yearly)
    result.push({
        ...equivalents.trees,
        value: Math.round(total * 12 * equivalents.trees.conversionFactor)
    });

    // Miles driven equivalent
    result.push({
        ...equivalents.driving,
        value: Math.round(total * equivalents.driving.conversionFactor)
    });

    // Smartphone charges
    result.push({
        ...equivalents.phones,
        value: Math.round(total * equivalents.phones.conversionFactor)
    });

    // Burgers
    result.push({
        ...equivalents.burgers,
        value: Math.round(total * equivalents.burgers.conversionFactor)
    });

    return result;
}

/**
 * Get rating based on total footprint
 */
function getRating(total) {
    if (total < 150) {
        return {
            level: 'excellent',
            emoji: '🌟',
            title: 'Eco Champion!',
            description: "You're a sustainability superstar!",
            color: '#10b981'
        };
    } else if (total < 250) {
        return {
            level: 'good',
            emoji: '🌱',
            title: 'Green Warrior',
            description: "You're doing great, keep it up!",
            color: '#34d399'
        };
    } else if (total < 400) {
        return {
            level: 'average',
            emoji: '🌿',
            title: 'Growing Green',
            description: "Room to improve, but you're on the right track!",
            color: '#f59e0b'
        };
    } else if (total < 550) {
        return {
            level: 'high',
            emoji: '🌾',
            title: 'Work in Progress',
            description: "Small changes can make a big difference!",
            color: '#f97316'
        };
    } else {
        return {
            level: 'very_high',
            emoji: '🏭',
            title: 'Time for Change',
            description: "Don't worry - we've got tips to help you improve!",
            color: '#fb7185'
        };
    }
}

/**
 * Format CO2 value for display
 */
export function formatCO2(value) {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)} tons`;
    }
    return `${Math.round(value)} kg`;
}
