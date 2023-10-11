
// Array of quotes with added properties

const quotes = [
    // {
    //   quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    //   source: "Patrick McKenzie",
    //   citation: "Twitter",
    //   year: 2016
    // },
    {
      quote: "The only way to do great work is to love what you do.",
      source: "Steve Jobs",
      citation: "Stanford Commencement Address",
      year: 2005
    },
    {
      quote: "Believe you can and you're halfway there.",
      source: "Theodore Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      source: "Winston Churchill"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      source: "Eleanor Roosevelt"
    },
    {
        quote: "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
        source: "Henry Ford"
    },
    {
        quote: "It is better to be both right and consistent. But if you have to choose — you must choose to be right.",
        source: "Winston S. Churchill",
        citation: "in a speech to the Conservative Party Conference",
        year: 1952
    },
    {
        quote: "Well done is better than well said.",
        source: "Benjamin Franklin",
        citation: "Poor Richard’s Almanack",
        year: 1737
    },
    {
        quote: "Do the best you can until you know better. Then when you know better, do better.",
        source: "Maya Angelou"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        source: "Mahatma Gandhi"
    }

  ];

/***
 * Array to keep track of displayed quotes;
  ensuring that quotes are not repeated
  until all quotes have been displayed at least once
***/

let displayedQuotes = [];

// Function to get a random, non-repeated quote

function getRandomQuote() {
  if (displayedQuotes.length === 0) {
    displayedQuotes = [...quotes];
  }

  const randomIndex = Math.floor(Math.random() * displayedQuotes.length);
  const randomQuote = displayedQuotes[randomIndex];
  displayedQuotes.splice(randomIndex, 1);
  return randomQuote;
}

// Function to display a random quote on the webpage

function printQuote() {
  if (displayedQuotes.length === 0) {
    displayedQuotes = [...quotes];
  }

  const randomQuote = getRandomQuote();
  let html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }

  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

// Event listener for the "Next Quote" button

document.getElementById('load-quote').addEventListener('click', printQuote);

