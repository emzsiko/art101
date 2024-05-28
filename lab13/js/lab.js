// Lab 13: Loops
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 27, 2024

// This simple JavaScript/jQuery script returns certain words for each number through from 1-200

// Requirements: jQuery must be loaded for this script to work.

// setting up string for output
let oneLongString = "";

function fizzBuzz () {
  for (let i = 1; i <= 200; i++) {
    console.log(i);
    if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += i + " FizzBuzzBoom!<br>";
    } 
    else if ((i % 3 == 0) && (i % 5 == 0)) {
      oneLongString += i + " FizzBuzz!<br>";
    }
    else if ((i % 3 == 0) && (i % 7 == 0)) {
      oneLongString += i + " FizzBoom!<br>";
    }
    else if ((i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += i + " BuzzBoom!<br>";
    }
    else if (i % 3 == 0) {
      oneLongString += i + " Fizz!<br>";
    }
    else if (i % 5 == 0) {
      oneLongString += i + " Buzz!<br>";
    }
    else if (i % 7 == 0) {
      oneLongString += i + " Boom!<br>";
    }
  }
}

// calling function
fizzBuzz();

$("#output").html(oneLongString);

