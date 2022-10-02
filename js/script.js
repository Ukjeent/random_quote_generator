/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: 'Nelson Mandela',
    citation: '',
    year: '',
    tags: 'Popular'
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: 'Walt Disney',
    citation: '',
    year: '',
    tags: 'Popular'
  },
  {
    quote: "My loneliness ain't killing me no more, I, I'm stronger",
    source: 'Britney Spears',
    citation: 'Stronger',
    year: '2000',
    tags: ''
  },
  {
    quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    source: 'Bill Gates',
    citation: '',
    year: '2001',
    tags: 'tech'
  },
  {
    quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
    source: 'Albert Einstein',
    citation: '',
    year: '',
    tags: 'tech'
  }
];


// Gets a random quote from the quote array and returns the quote. 
function getRandomQuote() {
  const randomNumb = Math.floor( Math.random() * (quotes.length) );
  const randomQuote = quotes[randomNumb];
  return randomQuote;
}

// Creates a 
function printQuote() {
  const randomQuote = getRandomQuote();
  let quote = `
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
      ${chechIfEmpty(randomQuote.citation, 'citation')}
      ${chechIfEmpty(randomQuote.year, 'year')}
      ${chechIfEmpty(randomQuote.tags, 'citation')}
      </p>`;
  document.getElementById('quote-box').innerHTML = quote;
}

function chechIfEmpty(rQuote, spanClass) {
  if (rQuote !== '') {
    return `<span class="${spanClass}">${rQuote}</span>`;
  } else {
    return '';
  }
}


function changeBgColor() {
  const quoteBox = document.getElementById('quote-box');
  quoteBox.style.backgroundColor = 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);