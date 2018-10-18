function telephoneCheck(str) {
  var justNums = /[0-9]/g;
  var badChars = /[!|@|#|$|%|^|&|*|?|>|<|,|.|a-zA-Z]/g;

	if (str.charAt(0) === "(" && str.charAt(4) === ")" && str.charAt(8) === "-" && str.search(badChars) === -1) { return true; }

// if number is too long
	if (str.length > 16 || str.length <= 8) { return false; }

// if number started with a negative
	if (str[0] === "-") { return false; }

// if any bad characters in number
	if (str.search(badChars) > -1) { return false; }

// if number ends with ")"
	if (str.endsWith(")")) { return false; }

// if opening parenthesis, but no closing parethesis
	if (str.search(/[(]/g) > -1 && str.search(/[)]/g) === -1 ) { return false; }

// if closing parenthesis, but no opening
	if (str.search(/[)]/g) > -1 && str.search(/[(]/g) === -1) { return false; }

// if number starts with other than '1' or '(' && string is longer than 11 characters
	if (str.length > 12 && str[0] !== "1") { return false; }


    if(str[0] !== 1 && str.length === 11) { return false; }

  return true;
}

telephoneCheck("(55!)555-5555");