function getZodiacEmoji(year) {
    const zodiacEmojis = [
        "🐀", // Rat
        "🐂", // Ox
        "🐅", // Tiger
        "🐇", // Rabbit
        "🐉", // Dragon
        "🐍", // Snake
        "🐎", // Horse
        "🐐", // Goat
        "🐵", // Monkey
        "🐔", // Rooster
        "🐶", // Dog
        "🐷"  // Pig
    ];

    // Calculate the zodiac index
    const zodiacIndex = (year - 4) % 12; // 4 is the base year for the Rat (2008)
    return zodiacEmojis[zodiacIndex];
}

function getZodiacName(zodiacIndex) {
    const zodiacNames = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig"
    ];
    return zodiacNames[zodiacIndex];
}

function displayZodiacEmoji() {
    const currentYear = new Date().getFullYear();
    const emoji = getZodiacEmoji(currentYear);
    const zodiacIndex = (currentYear - 4) % 12;

    const emojiElement = document.getElementById("zodiacEmoji");
    emojiElement.textContent = emoji;

    // Add click event listener
    emojiElement.addEventListener("click", function() {
        const zodiacName = getZodiacName(zodiacIndex);
        alert(zodiacName);
    });
}

// Call the function to display the emoji
document.addEventListener("DOMContentLoaded", function() {
    displayZodiacEmoji();
});
