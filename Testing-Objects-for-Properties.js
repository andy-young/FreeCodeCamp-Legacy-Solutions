
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var result = myObj[checkProp];
  if (myObj.hasOwnProperty(checkProp)) { 
    return result;
  } else {
    return "Not Found";
  }

}

// Test your code by modifying these values
checkObj("gift");
