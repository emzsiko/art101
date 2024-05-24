// Lab 12: Conditionals
// Author: Em Ishida <eishida@ucsc.edu> and Jasmin Vega <jlvega@ucsc.edu>
// Date: May 24, 2024

// This simple JavaScript/jQuery script gets a value from an input field and assigns the user a house depending on the length of their name

// Requirements: jQuery must be loaded for this script to work.

// Sorts the characters of a string in alphabetical order.

function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  if (mod === 0) {
    return "Gryffindor";
  } else if (mod === 1) {
    return "Ravenclaw";
  } else if (mod === 2) {
    return "Hufflepuff";
  } else if (mod === 3) {
    return "Slytherin";
  }
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#input").val();
  

  // now let's sort it
  house = sortingHat(userName);
  houseDescription = null

  if (house === "Gryffindor") {
    houseDescription = "Values bravery, chivalry, and daring. Gryffindors are known for being act-now-think-later types, and their mascot is the lion. Their colors are scarlet and gold."
  } else if (house === "Ravenclaw") {
    houseDescription = "Values intelligence, knowledge, curiosity, creativity, and wit. Ravenclaws are known for cherishing learning, wisdom, and wit, and their mascot is the eagle. Their colors are blue and bronze."
  } else if (house === "Hufflepuff") {
    houseDescription = "Values hard work, loyalty, patience, and fair play. Hufflepuffs are known for being dedicated, patient, and loyal, and their mascot is the badger. Their colors are yellow and black."
  } else if (house === "Slytherin") {
    houseDescription = "Values ambition, cunning, leadership, and resourcefulness. Slytherins are known for being proud, ambitious, and cunning, and the Sorting Hat says they will do anything to get their way."
  }

  console.log(houseDescription);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + "The Sorting Hat has sorted you into... "+ house + "!" + '</p></div>');

  $("#description").html('<div class="text"><p>' + houseDescription + '</p></div>');
});
