function palindrome(str) {
	var formattedString = str.toLowerCase().replace(/([#_,0%&@.*+ ?^=!:${}()|\[\]\/\\])/g, "");
	var splitReversedJoinedString = formattedString.split("").reverse().join("");
		if (formattedString === splitReversedJoinedString) {
			return true;	
	} else {
		return false;
    }
}

palindrome("eye");
