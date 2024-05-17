// Lab 11: JavaScript Events and Forms
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 17, 2024

// This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

// Requirements: jQuery must be loaded for this script to work.

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  const moreText = $("#more-text").val();
  const evenMoreText = $("#even-more-text").val();
  

  // now let's sort it
  userNameSorted = sortString(userName);
  textSorted = sortString(moreText);
  moreTextSorted = sortString(evenMoreText);

  // append a new div to our output div
  $("#output1").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  $("#output2").html('<div class="text"><p>' + textSorted + '</p></div>');
  $("#output3").html('<div class="text"><p>' + moreTextSorted + '</p></div>');
});