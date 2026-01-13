// Quiz questions for the Student Carbon Footprint Calculator
// Each question includes options with carbon values (kg CO2/month)

export const questions = [
    {
        id: 1,
        category: 'transport',
        emoji: '🚗',
        question: 'How do you usually commute to campus?',
        options: [
            { id: 'walk_bike', label: 'Walk or Bike', emoji: '🚶‍♂️', value: 0 },
            { id: 'public_transit', label: 'Public Transit', emoji: '🚌', value: 25 },
            { id: 'carpool', label: 'Carpool with Friends', emoji: '🚗', value: 60 },
            { id: 'drive_alone', label: 'Drive Alone', emoji: '🚙', value: 150 }
        ]
    },
    {
        id: 2,
        category: 'food',
        emoji: '🍔',
        question: 'How often do you eat meat?',
        options: [
            { id: 'never', label: 'Never (Vegetarian/Vegan)', emoji: '🥗', value: 20 },
            { id: 'occasionally', label: 'Occasionally (1-2x/week)', emoji: '🥕', value: 45 },
            { id: 'sometimes', label: 'A few times a week', emoji: '🍗', value: 80 },
            { id: 'daily', label: 'Daily', emoji: '🥩', value: 130 }
        ]
    },
    {
        id: 3,
        category: 'transport',
        emoji: '🚘',
        question: 'Do you have a car on campus?',
        options: [
            { id: 'no_car', label: 'No car', emoji: '❌', value: 0 },
            { id: 'shared', label: 'Shared car with roommates', emoji: '🤝', value: 40 },
            { id: 'own_car', label: 'Yes, my own car', emoji: '🚗', value: 100 }
        ]
    },
    {
        id: 4,
        category: 'digital',
        emoji: '🎮',
        question: 'How much do you stream or game daily?',
        options: [
            { id: 'minimal', label: 'Less than 1 hour', emoji: '📵', value: 5 },
            { id: 'moderate', label: '1-3 hours', emoji: '📺', value: 15 },
            { id: 'heavy', label: '3-6 hours', emoji: '🎬', value: 30 },
            { id: 'extreme', label: '6+ hours', emoji: '🕹️', value: 50 }
        ]
    },
    {
        id: 5,
        category: 'housing',
        emoji: '🏠',
        question: "What's your living situation?",
        options: [
            { id: 'dorm', label: 'Dorm room', emoji: '🏢', value: 30 },
            { id: 'shared_apt', label: 'Shared apartment', emoji: '🏘️', value: 50 },
            { id: 'solo_apt', label: 'Solo apartment', emoji: '🏠', value: 90 },
            { id: 'family', label: 'With family', emoji: '👨‍👩‍👧', value: 25 }
        ]
    },
    {
        id: 6,
        category: 'energy',
        emoji: '❄️',
        question: 'How often do you use AC or heating?',
        options: [
            { id: 'rarely', label: 'Rarely', emoji: '🌡️', value: 10 },
            { id: 'sometimes', label: 'Sometimes', emoji: '🌤️', value: 35 },
            { id: 'often', label: 'Often', emoji: '☀️', value: 70 },
            { id: 'always', label: 'Always on', emoji: '🔥', value: 120 }
        ]
    },
    {
        id: 7,
        category: 'lifestyle',
        emoji: '👕',
        question: 'How do you shop for clothes?',
        options: [
            { id: 'thrift', label: 'Thrift / Secondhand', emoji: '♻️', value: 5 },
            { id: 'rarely_new', label: 'Buy new rarely', emoji: '🛍️', value: 20 },
            { id: 'regular', label: 'Regular shopping', emoji: '🏬', value: 45 },
            { id: 'fast_fashion', label: 'Fast fashion lover', emoji: '👗', value: 80 }
        ]
    },
    {
        id: 8,
        category: 'transport',
        emoji: '✈️',
        question: 'How many flights do you take per year?',
        options: [
            { id: 'none', label: 'None', emoji: '🚫', value: 0 },
            { id: 'few', label: '1-2 flights', emoji: '🛫', value: 40 },
            { id: 'some', label: '3-5 flights', emoji: '✈️', value: 100 },
            { id: 'many', label: '6+ flights', emoji: '🌍', value: 200 }
        ]
    }
];

// Category colors for the results breakdown
export const categoryColors = {
    transport: '#38bdf8',
    food: '#fb7185',
    digital: '#a78bfa',
    housing: '#f59e0b',
    energy: '#f97316',
    lifestyle: '#10b981'
};

// Category labels
export const categoryLabels = {
    transport: 'Transport',
    food: 'Food',
    digital: 'Digital',
    housing: 'Housing',
    energy: 'Energy',
    lifestyle: 'Lifestyle'
};

// Average student carbon footprint for comparison (kg CO2/month)
export const AVERAGE_STUDENT_FOOTPRINT = 350;
