// Lab 10: JavaScript for the Web
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 16, 2024

// This simple JavaScript/jQuery script appends new elements to an output div

// Requirements: jQuery must be loaded for this script to work.

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  const randomNum = Math.random();
  let textSide = false;
  if (randomNum >= 0.5) {
    textSide = true;
  }

  if (textSide === true) {
    // append a new div to our output div
    $("#output").append('<div class="text-left"><p>' + newText + '</p></div>');
  } else {
    // append a new div to our output div
    $("#output").append('<div class="text-right"><p>' + newText + '</p></div>');
  }
});