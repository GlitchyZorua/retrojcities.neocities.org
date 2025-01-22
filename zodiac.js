const zodiacSigns = [
  { name: "Capricorn", emoji: "♑", month: "December" },
  { name: "Aquarius", emoji: "♒", month: "January" },
  { name: "Pisces", emoji: "♓", month: "February" },
  { name: "Aries", emoji: "♈", month: "March" },
  { name: "Taurus", emoji: "♉", month: "April" },
  { name: "Gemini", emoji: "♊", month: "May" },
  { name: "Cancer", emoji: "♋", month: "June" },
  { name: "Leo", emoji: "♌", month: "July" },
  { name: "Virgo", emoji: "♍", month: "August" },
  { name: "Libra", emoji: "♎", month: "September" },
  { name: "Scorpio", emoji: "♏", month: "October" },
  { name: "Sagittarius", emoji: "♐", month: "November" }
];

function getZodiacSign(month) {
  return zodiacSigns.find(sign => sign.month === month) || null;
}

function showZodiacName(zodiac) {
  alert(zodiac.name);
}

// Ensure the script runs after the DOM is fully loaded
window.onload = () => {
  const todayz = new Date();
  const currentMonth = todayz.toLocaleString('default', { month: 'long' });
  const currentZodiac = getZodiacSign(currentMonth);

  const container = document.getElementById("zodiac-container");
  if (currentZodiac) {
    const emojiElement = document.createElement("span");
    emojiElement.className = "zodiac";
    emojiElement.textContent = currentZodiac.emoji;

    emojiElement.onclick = () => showZodiacName(currentZodiac);

    container.appendChild(emojiElement);

    // Clock Emoji
    const emoji = document.querySelector('.emoji');
    if (emoji) {
      emoji.textContent = Tmj.getTimeMoji(new Date(), 'clock');
    }

    // Landscape Emoji
    const landscape = document.querySelector('.landscape');
    if (landscape) {
      landscape.textContent = Tmj.getTimeMoji(new Date(), 'landscape');
    }
  } else {
    console.error('Failed to load the zodiac sign for today.')
  }
};
