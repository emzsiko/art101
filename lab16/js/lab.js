// Lab 16: JSON and APIs
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: June 8, 2024

// This script creates a webpage for XKCD

// Requirements: jQuery must be loaded for this script to work.

// click listener for button
$("#activate").click(function(){
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/1334/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
      // do stuff
      console.log(data);

      // Extracting data from the response object
      var title = data.title; // Title of the comic
      var imgSrc = data.img;  // Image source URL
      var altText = data.alt; // Alt text for the image

      // Creating DOM elements dynamically
      var sectionTitle = $("<h2>").text(title); // Creating title element
      var comicImage = $("<img>").attr("src", imgSrc); // Creating image element
      comicImage.attr("alt", altText); // Adding alt attribute
      comicImage.attr("title", altText); // Adding title attribute

      // Appending elements to the DOM
      $("#output").empty(); // Clearing previous content
      $("#output").append(sectionTitle, comicImage); // Appending title and image
    },
  });
});
