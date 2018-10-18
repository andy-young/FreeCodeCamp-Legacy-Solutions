var ourMin = 1;

var ourMax = 9;

function ourFunction() {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;

}

// Only change code below this line.

var myMin = 1;

var myMax = 100;

function myFunction() {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Only change code above this line.


(function(){return myFunction();})();
