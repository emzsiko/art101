// Lab 7: Functions
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 2, 2024

// function to take user input + sort the letters
function sortUserName() {
  let userName = window.prompt("Please tell me your name:");
  console.log("User Name: ", userName);

  // split string into array
  let nameArray = userName.split('');
  console.log("Name Array: ", nameArray);

  // sort array
  let nameArraySort = nameArray.sort(function(a, b) {
    return a.localeCompare(b);
  });
  console.log("Sorted Name Array: ", nameArraySort);

  // join array back together to string
  let nameSorted = nameArraySort.join('');
  console.log("Sorted Name: ", nameSorted);
  
  return nameSorted;
}

// output
document.writeln("I've ordered your name: ",
  sortUserName(), "</br>");