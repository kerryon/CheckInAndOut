// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables declarations
var randomObjects;
var message = ''; //<==empty string
var quotes;
var red;
var green;
var blue;
var quotes2 = []; //<==empty array
var quotes3 = [];
var checkInChecked = document.getElementById("in");
var checkOutChecked = document.getElementById("out");
var filter_1 = document.getElementById("1");
var filter_2 = document.getElementById("2");
var filter_3 = document.getElementById("3");

let results = [];

//a function to print the message in an attachable HTML element.
function print(message) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = message;
}

//a function which selects a random number through the 255 rgb + 1 colors.
function randomHEX() {
  var bgcolors = ['#FCE847', '#4EFFA7', '#F796E1', '#FF8810', '#18DD7B'];
  return bgcolors[Math.floor(Math.random()*bgcolors.length)];
}

//Function to genereate random rgb color value
function randomColor() {
  var color;
  color = randomHEX();
  return color;
}

//uncheck checked checkbox
function uncheckChecked(obj) {
  var cbs = document.getElementsByClassName("btn");
  for (var i = 0; i < cbs.length; i++) {
      cbs[i].checked = false;
  }
  obj.checked = true;
}


//Function named getRandomQuote which selects a random object from quotes array and returns the randomly selected object, then we splice it, to don't repeat a random quote more than once until all quotes from the array have been displayed.
function getRandomQuote() {

  if (checkInChecked.checked == true) {
  var quoteObject = Math.floor(Math.random() * checkIn.length);
  var splicedQuote = checkIn.splice(quoteObject, 1)[0];
  quotes2.push(splicedQuote);
	if (checkIn.length === 0) {
		checkIn = quotes2;
	}
}
if (checkInChecked.checked == false) {
  var quoteObject = Math.floor(Math.random() * checkOut.length);
  var splicedQuote = checkOut.splice(quoteObject, 1)[0];
  quotes3.push(splicedQuote);
	if (checkOut.length === 0) {
		checkOut = quotes3;
	}
}
  return splicedQuote;
}

// Function to build a string using the different properties of the quote object previously selected from the array and print it to the screen. 
function printQuote() {
  changeEmoji();
  randomObjects = getRandomQuote();
  message = '<p class="quote">' + randomObjects.quote + '</p>'; 
  if (randomObjects.source !== undefined) {
    message += '<p class="source">' + randomObjects.source;
  }
  if (randomObjects.citation !== undefined && randomObjects.year !== undefined) {
    message += '<span class="citation">' + randomObjects.citation + '</span>'; 
    message += '<span class="year">' + randomObjects.year + '</span>' + '</p>';
  }
  message += '<h4>' + randomObjects.tags + '</h4>';
  print(message);
  randomColor();
  document.getElementById('rgb').style.background = randomHEX();
}
//Set an interval of each 10 seconds to execute our printQuote function
// setInterval(printQuote, 10000);

//Emoji change after first click
function changeEmoji() {
  const root = document.querySelector(":root");
  root.style.setProperty("--pseudo-emoji", `'👉🏽'`);
}

//Filter array by tags
function filterTags(word) {
  let search = word;
  results = checkIn.filter(({tags}) => {
  return tags.some(e => e.toLowerCase().includes(search.toLowerCase()))
  })
  console.log(results);
}