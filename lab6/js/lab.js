// Lab 6: Arrays and Objects
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: April 28, 2024

// declare variables
let myTransport = ["car", "bus"];
myMainRide = {
  make: "Nissan",
  model: "Altima",
  color: "gold",
  year: 2015,
  age: function() {
    return 2024 - this.year;
  }
}

// print array
document.writeln("Types of transport used: ", myTransport, "</br>");

// print object
document.writeln("Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");