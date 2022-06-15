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
    year: 1893,
    url: 'https://allauthor.com/quotes/49860/'
  },
  {
    quote: `Ah, the patter of little feet around the house. There's nothing like having a midget for a butler.`,
    source: 'W. C. Fields',
    citation: 'Comic',
    year: 1946,
    url: 'https://quotes.thefamouspeople.com/w-c-fields-3138.php'
  },
  {
    quote: 'Never ascribe to malice that which can be adequately explained by ignorance.',
    source: 'James Thurber',
    citation: 'Comic',
    year: 1941,
    url: 'https://www.goodreads.com/author/quotes/16839.James_Thurber'
  },
  {
    // No year in this to prove if statements work in printQuote function
    quote: 'Remember that what you possess in this world will be found on the day of your death to belong to somebody else. But what you are will be yours forever.',
    source: 'Henry van Dyke',
    citation: 'Poet',
    url: 'https://quotes.thefamouspeople.com/henry-van-dyke-239.php'
  },
  {
    // No url in this to prove if statements work in printQuote function
    quote: `Some people die at 25 and aren't buried until 75.`,
    source: 'Benjamin Franklin',
    citation: 'Politician',
    year: 1790,
  }
]
// Have called this function globally in order to use in 2 instances (getRandomQuote & assigning random Background Colors)
function randomNumber(a) {
  let num = Math.floor(Math.random()*a)
  return num;
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomQuote = quotes[randomNumber(quotes.length)];    // Gets random integer between 0 and the length of the quotes array, then uses this random value to call the object at this random position within the quotes array
  return randomQuote;   // Returns object randomQuote when function is called
}

/***
 * `printQuote` function
***/
let newQuote = [];    // Calling this globally so that I can check for duplicates when calling the function
function printQuote() {
  // do while loop to prevent duplicate quotes being shown
  do {
    newRandomQuote = getRandomQuote();    // Calls getRandomQuote function & assigns the object to a new object newRandomQuote
  } while (newRandomQuote === newQuote);    // Using a do while loop to call the getRandomQuote function until a none duplicate quote is produced
  newQuote = newRandomQuote;    // Now that we know the new quote is not a duplicate, we assign the new object to the global newQuote object and continue the function
  // storing the quote to the html & using if statements to only print object properties if they exist
  let currQuote = `<p class="quote"> ${newQuote.quote} </p> <p class="source"> ${newQuote.source}`
  if (newQuote.citation) {    // If citation property exists, add the citation to the currQuote html
    currQuote += `<span class="citation"> ${newQuote.citation} </span>`;
  }
  if (newQuote.year) {    // If year property exists, add the year to the currQuote variable
    currQuote += `<span class="year"> ${newQuote.year} </span>`;
  }
  currQuote += '</p>'   // Put the final line break before the url to make it display better on the page
  if (newQuote.url) {    // If url property exists, add the url to the currQuote variable
    currQuote += `<p><a href=${newQuote.url} target="blank" class="url"> More quotes from this Author </a></p>`;   // Creating a url link to the quote's source
  }   // If preferred to have the url displayed in the same way as the citation & year, I just have to remove the p tags in line 84, and then move line 82 (closing p tag) to after this if statement code (83 & 84) inserting the url into the currQuote variable (aka move to line 86)

  document.getElementById('quote-box').innerHTML = `${currQuote}`;    // add the contents of currQuote to the html within the quote-box div
    // Random Background Color also set by function
document.body.style.backgroundColor = "rgb(" + randomNumber(255) + "," + randomNumber(255) + "," + randomNumber(255) + ")";
}

// Setting timer to refresh quotes every 10seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);