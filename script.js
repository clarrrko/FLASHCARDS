const flashcards = [
  {
    question: "What is the classic definition of market efficiency?",
    answer: "A market is efficient if prices fully reflect all available information (Fama, 1970)."
  },
  {
    question: "What surprising result did Kendall (1953) find?",
    answer: "Stock prices evolve randomly, no predictable patterns."
  },
  {
    question: "Does unpredictability imply irrationality?",
    answer: "No. Random movements are a sign of rational behavior (Samuelson, 1965)."
  },
  {
    question: "Why can't predictable stock price patterns persist?",
    answer: "Because if a price rise is expected, investors will act immediately, adjusting prices right away."
  },
  {
    question: "What is the Efficient Market Hypothesis (EMH)?",
    answer: "It states that asset prices reflect all available information to different degrees (weak, semi-strong, strong forms)."
  },
  {
    question: "Explain Weak-Form Efficiency.",
    answer: "Prices reflect all historical trading information. Technical analysis cannot yield consistent profits."
  },
  {
    question: "Explain Semi-Strong Form Efficiency.",
    answer: "Prices reflect all publicly available information. Fundamental analysis cannot yield consistent profits."
  },
  {
    question: "Explain Strong Form Efficiency.",
    answer: "Prices reflect all public and private information. Even insider information cannot generate profits."
  },
  {
    question: "What is the Random Walk Model with Drift?",
    answer: "Price tomorrow = today's price + normal expected return (drift) + unpredictable shock."
  },
  {
    question: "What happens to abnormal returns in an efficient market?",
    answer: "Abnormal returns (returns above normal compensation for risk) should not be predictable."
  },
  {
    question: "What is serial correlation in returns?",
    answer: "It measures how past returns predict future returns (positive: momentum; negative: reversal)."
  },
  {
    question: "What did Jegadeesh and Titman (1993) find?",
    answer: "Momentum effects exist over intermediate horizons; recent winners continue to perform well."
  },
  {
    question: "What did Chopra et al. (1992) find?",
    answer: "Long-term reversal effects: after 3–5 years, losers outperform winners."
  },
  {
    question: "What are some famous anomalies contradicting EMH?",
    answer: "Small firm effect, High book-to-market effect, Low P/E effect, Illiquidity premiums, Post-earnings announcement drift."
  },
  {
    question: "How can predictability exist in an efficient market?",
    answer: "Through time-varying risk premia — expected returns may vary over time due to changing risks."
  }
];

let currentIndex = 0;

function displayCard() {
  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');
  
  questionElement.textContent = flashcards[currentIndex].question;
  answerElement.textContent = flashcards[currentIndex].answer;
  answerElement.style.display = "none";
}

function showAnswer() {
  const answerElement = document.getElementById('answer');
  answerElement.style.display = "block";
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard();
}

function shuffleCards() {
  for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
  currentIndex = 0;
  displayCard();
}

window.onload = displayCard;
