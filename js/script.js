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
let quotes = [
  {
    quote: 'A man who lives right, and is right, has more power in his silence than another has by his words.',
    source: 'Phillips Brooks',
    citation: 'Clergyman',
    year: 1893
  },
  {
    quote: `Ah, the patter of little feet around the house. There's nothing like having a midget for a butler.`,
    source: 'W. C. Fields',
    citation: 'Comic',
    year: 1946
  },
  {
    quote: 'Never ascribe to malice that which can be adequately explained by ignorance.',
    source: 'James Thurber',
    citation: 'Comic',
    year: 1941
  },
  {
    quote: 'Remember that what you possess in this world will be found on the day of your death to belong to somebody else. But what you are will be yours forever.',
    source: 'Henry van Dyke',
    citation: 'Poet',
    year: 1933
  },
  {
    quote: `Some people die at 25 and aren't buried until 75.`,
    source: 'Benjamin Franklin',
    citation: 'Politician',
    year: 1790
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNum = Math.random(quotes.length - 1);
  return quote[randomNum.floor]
}


/***
 * `printQuote` function
***/
function printQuote() {
  getRandomQuote();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);