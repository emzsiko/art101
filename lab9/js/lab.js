// Lab 9: Libraries and JQuery
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 13, 2024

// This simple JavaScript/jQuery script uses buttons to modify some elements on the page

// Requirements: jQuery must be loaded for this script to work.

// add button to each section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the buttons
$("#button-challenge").click(function() {
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
$("#button-problems").click(function() {
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});
$("#button-results").click(function() {
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});