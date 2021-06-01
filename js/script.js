/******************************************
project 1 - Random Quote Generator
******************************************/

/******************************************
Submitted By: Sakib Shamin
Email: sakib.shamin@gmail.com
LinkedIn: https://www.linkedin.com/in/sakibshamin
GitHub: https://github.com/Sakib-Shamin
******************************************/

/***
 * `quotes` array
 ***/

const quotes = [
    {
        quote: 'Be yourself and people will like you.',
        
        source: 'Jeff Kinney',
        
        citation: 'Diary of a Wimpy Kid',
        
        year: '2007'
    },

    {
        quote: 'It is better to be hated for what you are than to be loved for what you are not.',
        
        source: 'André Gide',
        
        citation: 'Autumn Leaves',
        
        year: '1950'
    },

    {
        quote: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
        
        source: 'Antoine de Saint-Exupéry',
        
        citation: 'The Little Prince',
        
        year: '1943'
    },

    {
        quote: 'Hoping for the best, prepared for the worst, and unsurprised by anything in between.',
        
        source: 'Maya Angelou',
        
        citation: 'I Know Why the Caged Bird Sings',
        
        year: '1969'
    },

    {
        quote: 'And, now that you don’t have to be perfect you can be good.',
        
        source: 'John Steinbeck',
        
        citation: 'East of Eden',
        
        year: '1952'
    },

    {
        quote: 'A friend may be waiting behind a stranger’s face.',
        
        source: 'Maya Angelou',
        
        citation: 'Letter to My Daughter',
        
        year: '2008'
    },

    {
        quote: 'Even the darkest night will end and the sun will rise.',
        
        source: 'Victor Hugo',
        
        citation: 'Les Misérables',
        
        year: '1862'
    },

    {
        quote: 'Each of us is more than the worst thing we’ve ever done.',
        
        source: 'Bryan Stevenson',
        
        citation: 'Just Mercy',
        
        year: '2014'
    },

    {
        quote: 'You are your best thing.',
        
        source: 'Toni Morrison',
        
        citation: 'Beloved',
        
        year: '1987'
    },

    {
        quote: 'So many things are possible just as long as you don’t know they’re impossible',
        
        source: 'Norton Juster',
        
        citation: 'The Phantom Tollbooth',
        
        year: '1961'
    }
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(lastQuoteIndex = 0, quoteIndex = Math.floor(Math.random() * quotes.length))
{
    // Checking wheather the quote has already been displayed or not.
    
    if(lastQuoteIndex == quoteIndex)
    {
        console.log('It has been displayed already');

        return getRandomQuote(lastQuoteIndex, Math.floor(Math.random() * quotes.length));
    }

    // Will return the quote object.
    
    console.log('This is a new Quote');
    
    return quotes[quoteIndex];
}

/***
 * `printQuote` function
 ***/

function printQuote()
{
    // Initializing the Elements by class names.

    const quoteObject = getRandomQuote();

    const quote = document.querySelector('.quote');

    const source = document.querySelector('.source');

    const citation = document.querySelector('.citation');

    console.log(citation);

    const year = document.querySelector('.year');

    console.log(year);

    // Injecting data into the initialized elements.

    // quote.innerHTML = quoteObject.quote;
    
    // source.innerHTML = quoteObject.source;

    console.log(quoteObject.citation);

    // citation.innerHTML = quoteObject.citation;

    console.log(quoteObject.year);

    // year.innerHTML = quoteObject.year;
}

/***
 * click event listener for the print quote button
 ***/

// console.log(quotes);
printQuote();