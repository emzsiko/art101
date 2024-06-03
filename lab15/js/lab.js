// Lab 15: AJAX
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: June 3, 2024

// This script uses the PokeAPI to give users a random pokemon ability and list its name and effect

// Requirements: jQuery must be loaded for this script to work.

// click listener for button
$("#activate").click(function(){
  // generate a random ID between 1 and 233
  var randomId = Math.floor(Math.random() * 233) + 1;
  
  // construct the URL with the random ID
  var apiUrl = "https://pokeapi.co/api/v2/ability/" + randomId + "/";

  // get value of input field
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: apiUrl,
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
      const name = data.name;
      const effect = data.effect_entries[1].effect;
        // do stuff
        $("#output").html("name: " + name + "<br>" + "effect: " + effect);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  });
});
