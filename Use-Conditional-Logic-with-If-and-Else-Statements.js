var flip = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

function myFunction() {

  // Only change code below this line.

var flip = 0;
  if (flip === 0) {
    return 'heads';
  } else {
    return 'tails';
  }

  // Only change code above this line.

}

var result = myFunction();if(typeof flip !== "undefined" && typeof flip === "number" && typeof result !== "undefined" && typeof result === "string"){(function(y,z){return 'flip = ' + y.toString() + ', text = ' + z;})(flip, result);}
