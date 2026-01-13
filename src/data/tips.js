// Personalized tips based on quiz answers
// Tips are organized by category and include impact ratings

export const tips = {
    transport: {
        high: [
            {
                title: "Bike to Class",
                description: "Cycling 3 days a week instead of driving can save up to 50kg CO2/month",
                impact: "high",
                savings: 50,
                icon: "🚲",
                quickWin: true
            },
            {
                title: "Form a Carpool Group",
                description: "Find classmates with similar schedules and split rides - good for the planet AND your wallet",
                impact: "high",
                savings: 40,
                icon: "🤝",
                quickWin: false
            },
            {
                title: "Try the Campus Shuttle",
                description: "Most campus shuttles are free! Use them for longer trips across campus",
                impact: "medium",
                savings: 25,
                icon: "🚌",
                quickWin: true
            }
        ],
        low: [
            {
                title: "Keep It Up!",
                description: "Your low-carbon commute is awesome! Consider encouraging friends to bike or walk too",
                impact: "low",
                savings: 0,
                icon: "⭐",
                quickWin: true
            }
        ]
    },
    food: {
        high: [
            {
                title: "Meatless Mondays",
                description: "Start with just one meat-free day per week - it's easier than you think!",
                impact: "high",
                savings: 30,
                icon: "🥗",
                quickWin: true
            },
            {
                title: "Explore Plant Proteins",
                description: "Try beans, lentils, and tofu - many dining halls have great veggie options",
                impact: "high",
                savings: 40,
                icon: "🌱",
                quickWin: false
            },
            {
                title: "Reduce Food Waste",
                description: "Take only what you'll eat in the dining hall - you can always go back for more",
                impact: "medium",
                savings: 15,
                icon: "🍽️",
                quickWin: true
            }
        ],
        low: [
            {
                title: "You're a Food Hero!",
                description: "Your plant-forward diet is making a real difference. Share your favorite recipes!",
                impact: "low",
                savings: 0,
                icon: "🌟",
                quickWin: true
            }
        ]
    },
    digital: {
        high: [
            {
                title: "Stream Smart",
                description: "Lower video quality to 720p when you don't need HD - saves data and energy",
                impact: "medium",
                savings: 10,
                icon: "📺",
                quickWin: true
            },
            {
                title: "Unplug When Done",
                description: "Turn off gaming consoles and computers completely instead of leaving on standby",
                impact: "medium",
                savings: 8,
                icon: "🔌",
                quickWin: true
            }
        ],
        low: [
            {
                title: "Digital Minimalist!",
                description: "Your screen time is eco-friendly. Keep balancing digital and outdoor time!",
                impact: "low",
                savings: 0,
                icon: "📱",
                quickWin: true
            }
        ]
    },
    energy: {
        high: [
            {
                title: "Layer Up!",
                description: "Put on a sweater before turning up the heat - every degree counts",
                impact: "high",
                savings: 25,
                icon: "🧥",
                quickWin: true
            },
            {
                title: "Smart Thermostat Use",
                description: "Set AC to 78°F (26°C) in summer and heat to 68°F (20°C) in winter",
                impact: "high",
                savings: 30,
                icon: "🌡️",
                quickWin: true
            },
            {
                title: "Use Natural Light",
                description: "Open those blinds during the day instead of switching on lights",
                impact: "medium",
                savings: 10,
                icon: "☀️",
                quickWin: true
            }
        ],
        low: [
            {
                title: "Energy Saver!",
                description: "Your mindful energy use is great. Consider sharing tips with roommates!",
                impact: "low",
                savings: 0,
                icon: "💡",
                quickWin: true
            }
        ]
    },
    lifestyle: {
        high: [
            {
                title: "Try Thrift First",
                description: "Give thrift stores and clothing swaps a try - vintage is trendy!",
                impact: "high",
                savings: 30,
                icon: "👕",
                quickWin: true
            },
            {
                title: "30 Wears Rule",
                description: "Before buying, ask: 'Will I wear this 30 times?' Quality over quantity!",
                impact: "medium",
                savings: 20,
                icon: "🛍️",
                quickWin: true
            }
        ],
        low: [
            {
                title: "Sustainable Fashionista!",
                description: "Your thrifty style is amazing for the planet. Keep rocking secondhand!",
                impact: "low",
                savings: 0,
                icon: "✨",
                quickWin: true
            }
        ]
    },
    housing: {
        high: [
            {
                title: "Efficiency Matters",
                description: "Use LED bulbs and power strips to cut phantom energy use",
                impact: "medium",
                savings: 15,
                icon: "💡",
                quickWin: true
            }
        ],
        low: [
            {
                title: "Smart Living!",
                description: "Shared living spaces are inherently more efficient. Good choice!",
                impact: "low",
                savings: 0,
                icon: "🏠",
                quickWin: true
            }
        ]
    }
};

// Fun equivalents data
export const equivalents = {
    trees: {
        name: "trees needed to offset",
        unit: "trees/year",
        conversionFactor: 0.05, // 1 tree absorbs ~20kg CO2/year
        emoji: "🌳"
    },
    driving: {
        name: "miles driven",
        unit: "miles/month",
        conversionFactor: 2.5, // ~0.4kg CO2 per mile
        emoji: "🚗"
    },
    phones: {
        name: "smartphone charges",
        unit: "charges",
        conversionFactor: 125, // ~8g CO2 per charge
        emoji: "📱"
    },
    streaming: {
        name: "hours of Netflix",
        unit: "hours",
        conversionFactor: 14, // ~70g CO2 per hour
        emoji: "📺"
    },
    burgers: {
        name: "beef burgers",
        unit: "burgers",
        conversionFactor: 0.17, // ~6kg CO2 per burger
        emoji: "🍔"
    }
};
