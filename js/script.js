
// Array of quotes
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


// Gets a random quote from the quotes array and returns the quote. 
function getRandomQuote() {
  const randomNumb = Math.floor( Math.random() * (quotes.length) );
  const randomQuote = quotes[randomNumb];
  return randomQuote;
}

// Calls the rprintQuote function every 10sec.
let changeQuote = setInterval(printQuote, 10000);

// Calls the getRandomQuote function and prints the quote. 
// Calls the changeBgColor function to change the background color.
// Clears the chang quote interval and adds a new intervaltimer so the quote doesn't change right after a button click  
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
  changeBgColor();
  clearInterval(changeQuote);
  changeQuote = setInterval(printQuote, 10000);
}

// Checks if a property is empty or not and prints the object if the property is not empty.
function chechIfEmpty(rQuote, spanClass) {
  if (rQuote !== '') {
    return `<span class="${spanClass}">${rQuote}</span>`;
  } else {
    return '';
  }
}

// Changes the background color of the quote-box and container to a random color. 
function changeBgColor() {
  const quoteBox = document.getElementById('quote-box');
  const container = document.querySelector('.container');
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  quoteBox.style.backgroundColor = `#${randomColor}`;
  container.style.backgroundColor = `#${randomColor}`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);