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

        function displayZodiacEmoji() {
            const currentYear = new Date().getFullYear();
            const emoji = getZodiacEmoji(currentYear);
            document.getElementById("zodiacEmoji").textContent = emoji;
        }

        // Call the function to display the emoji
    document.addEventListener("DOMContentLoaded", function() {
    displayZodiacEmoji();
    });