// Lab 8: Anon Functions and Callbacks
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 6, 2024

// set array
let numberArray = [1, 4, 9, 100];
console.log(numberArray);

// function
function sqrNumber(num) {
  let sqrdNum = num * num;
  return sqrdNum;
}

// anon function
let anonResult = numberArray.map(function(x) {
  let result = x - 1;
  return result;
});
console.log("Results for subtracting 1: ", anonResult);

// variable
let mapResults = numberArray.map(sqrNumber);
console.log("Results for squaring: ", mapResults);

let stringArray = "Original: " + numberArray.toString();
let anonArray = "Subtracting 1: " + anonResult.toString();
let sqrdArray = "Squared: " + mapResults.toString();

$("#output1").html(stringArray);
$("#output2").html(anonArray);
$("#output3").html(sqrdArray);