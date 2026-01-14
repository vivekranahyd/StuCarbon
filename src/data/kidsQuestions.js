// Kids Carbon Footprint Quiz Questions
// Designed for ages 8-12 with simple language and fun comparisons

export const kidsQuestions = [
    {
        id: 1,
        category: 'transport',
        emoji: '🚌',
        mascot: '🐕',
        question: 'How do you usually get to school?',
        options: [
            { id: 'walk_bike', label: 'Walk or ride my bike', emoji: '🚶', value: 0, reaction: '🌟 Super eco-hero!' },
            { id: 'bus', label: 'School bus', emoji: '🚌', value: 15, reaction: '👍 Nice choice!' },
            { id: 'car', label: 'Car with family', emoji: '🚗', value: 40, reaction: '🚗 Vroom vroom!' },
            { id: 'carpool', label: 'Carpool with friends', emoji: '🚙', value: 25, reaction: '🤝 Sharing is caring!' }
        ]
    },
    {
        id: 2,
        category: 'food',
        emoji: '🍽️',
        mascot: '🐰',
        question: 'What do you usually eat for lunch?',
        options: [
            { id: 'veggies', label: 'Lots of veggies & fruits', emoji: '🥗', value: 5, reaction: '🥬 Veggie power!' },
            { id: 'sandwich', label: 'Sandwiches & snacks', emoji: '🥪', value: 15, reaction: '🥪 Yummy!' },
            { id: 'chicken', label: 'Chicken nuggets & meat', emoji: '🍗', value: 30, reaction: '🍗 Protein power!' },
            { id: 'burger', label: 'Burgers & hot dogs', emoji: '🍔', value: 45, reaction: '🍔 Tasty treat!' }
        ]
    },
    {
        id: 3,
        category: 'digital',
        emoji: '📺',
        mascot: '🦊',
        question: 'How much TV and video games do you play each day?',
        options: [
            { id: 'little', label: 'Less than 1 hour', emoji: '📖', value: 5, reaction: '📚 Love reading too?' },
            { id: 'some', label: '1-2 hours', emoji: '🎮', value: 15, reaction: '🎮 Gaming time!' },
            { id: 'lots', label: '2-4 hours', emoji: '📺', value: 30, reaction: '📺 Screen time!' },
            { id: 'tons', label: 'More than 4 hours', emoji: '🕹️', value: 50, reaction: '🕹️ Game master!' }
        ]
    },
    {
        id: 4,
        category: 'lifestyle',
        emoji: '🎁',
        mascot: '🐼',
        question: 'What happens to your old toys?',
        options: [
            { id: 'donate', label: 'Give to other kids', emoji: '🎁', value: 0, reaction: '💝 So generous!' },
            { id: 'keep', label: 'Keep them forever', emoji: '🧸', value: 10, reaction: '🧸 Toy collector!' },
            { id: 'new', label: 'Get new ones often', emoji: '🛒', value: 35, reaction: '🆕 New toy day!' },
            { id: 'trash', label: 'Throw them away', emoji: '🗑️', value: 50, reaction: '💡 Try donating next time!' }
        ]
    },
    {
        id: 5,
        category: 'energy',
        emoji: '💡',
        mascot: '🦉',
        question: 'Do you turn off lights when you leave a room?',
        options: [
            { id: 'always', label: 'Always!', emoji: '✅', value: 0, reaction: '⭐ Energy saver!' },
            { id: 'usually', label: 'Most of the time', emoji: '💡', value: 10, reaction: '👍 Good habit!' },
            { id: 'sometimes', label: 'Sometimes forget', emoji: '🤔', value: 25, reaction: '🧠 Try to remember!' },
            { id: 'never', label: 'Oops, I forget a lot', emoji: '😅', value: 40, reaction: '💡 Let\'s practice!' }
        ]
    },
    {
        id: 6,
        category: 'water',
        emoji: '🚿',
        mascot: '🐬',
        question: 'How long are your showers?',
        options: [
            { id: 'quick', label: 'Super quick (under 5 min)', emoji: '⚡', value: 5, reaction: '💨 Speed shower!' },
            { id: 'normal', label: 'Just right (5-10 min)', emoji: '🚿', value: 15, reaction: '👌 Perfect!' },
            { id: 'long', label: 'Pretty long (10-15 min)', emoji: '🛁', value: 30, reaction: '🎵 Singing in there?' },
            { id: 'forever', label: 'I love long showers!', emoji: '🧼', value: 50, reaction: '🌊 Splash splash!' }
        ]
    }
];

// Animal spirit badges based on score
export const animalBadges = [
    {
        id: 'dolphin',
        name: 'Eco Dolphin',
        emoji: '🐬',
        color: '#00bcd4',
        maxScore: 50,
        message: "You're an ocean hero! Dolphins would be so proud of you!",
        tip: 'Keep swimming towards a cleaner planet!'
    },
    {
        id: 'eagle',
        name: 'Green Eagle',
        emoji: '🦅',
        color: '#4caf50',
        maxScore: 100,
        message: "You soar high with great eco-habits! Eagles approve!",
        tip: 'Spread your wings and inspire others!'
    },
    {
        id: 'bear',
        name: 'Nature Bear',
        emoji: '🐻',
        color: '#795548',
        maxScore: 150,
        message: "Like a bear in the forest, you're learning to live with nature!",
        tip: 'Small steps make a big difference!'
    },
    {
        id: 'panda',
        name: 'Planet Panda',
        emoji: '🐼',
        color: '#9e9e9e',
        maxScore: 200,
        message: "Pandas are rare and special - just like your potential to help the Earth!",
        tip: "Try these tips to become an Eco Dolphin!"
    },
    {
        id: 'lion',
        name: 'Learning Lion',
        emoji: '🦁',
        color: '#ff9800',
        maxScore: 999,
        message: "Lions are brave - and you're brave for taking this quiz!",
        tip: "Let's work together to protect the planet!"
    }
];

// Get badge based on score
export const getAnimalBadge = (score) => {
    for (const badge of animalBadges) {
        if (score <= badge.maxScore) {
            return badge;
        }
    }
    return animalBadges[animalBadges.length - 1];
};

// Fun equivalents for kids
export const kidsFunFacts = [
    { threshold: 30, emoji: '🌳', text: 'That\'s like planting 1 tree a month!' },
    { threshold: 60, emoji: '🐢', text: 'That\'s like saving 5 sea turtles!' },
    { threshold: 100, emoji: '🦋', text: 'That\'s okay! Every superhero starts somewhere!' },
    { threshold: 150, emoji: '🌍', text: 'The Earth is cheering for you to do better!' },
    { threshold: 999, emoji: '🚀', text: 'Ready to become a Planet Hero? Let\'s go!' }
];

// Simple tips for kids
export const kidsTips = [
    { emoji: '🚶', tip: 'Walk or bike to school when you can!' },
    { emoji: '💡', tip: 'Turn off lights when you leave a room!' },
    { emoji: '🥗', tip: 'Try eating more veggies - they\'re planet-friendly!' },
    { emoji: '🎁', tip: 'Give old toys to kids who need them!' },
    { emoji: '🚿', tip: 'Take shorter showers - pretend it\'s a race!' },
    { emoji: '📺', tip: 'Play outside more - nature is fun!' }
];

// Average kids footprint for comparison
export const AVERAGE_KIDS_SCORE = 100;
