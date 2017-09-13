document.addEventListener('DOMContentLoaded', function() {


var randomQuote;
var randomNum;
var randomAuthor;

getQuote();

function getQuote(){
  
  var quotes = ["I don't know what it's called, I just know the sound it makes when it take a man's life.", "I don't know what it's called, I just know the sound it makes when it LIES", "I love the Booty","We're lost we're super fucking lost"];
  var author = ["-SGT. Tayback Fourleaf", "-Cody", "-Alpa Chino", "-Kirk Lazarus"];

  randomNum = Math.floor((Math.random()*quotes.length));
  randomQuote = quotes[randomNum];
  randomAuthor = author[randomNum];
  
  document.getElementById('quote').innerHTML = randomQuote ;
  document.getElementById('author').innerHTML = randomAuthor;
}


document.getElementById('tweet').addEventListener('click', function(){
    window.open("https://twitter.com/intent/tweet?text="+ randomQuote + " " + randomAuthor);
    }); 

document.getElementById('newQuote').addEventListener('click', getQuote)


});