function translatePigLatin(str) {
	var strArr = str.split("");
	var firstChar = str[0];
	var strSubString = str.substr(1, str.length);
	var firstAndSecondChar = str[0] + str[1];
	var doubleConsonantSubString = str.substr(2, str.length);

	if (strArr[0] === "a" || strArr[0] === "e" || strArr[0] === "i" || strArr[0] === "o" || strArr[0] === "u") {
		return str + "way";
	} else if (strArr[1] !== "a" && strArr[1] !== "e" && strArr[1] !== "i" && strArr[1] !== "o" && strArr[1] !== "u") {
		return doubleConsonantSubString + firstAndSecondChar + "ay";	
	} else {
		return strSubString + firstChar + "ay";		
	}
}

translatePigLatin("consonant");