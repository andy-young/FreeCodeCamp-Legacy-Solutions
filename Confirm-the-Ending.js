function confirmEnding(str, target) {
	var targetLength = target.length;
	var stringLength = str.length;
	var whereToStartLooking = stringLength - targetLength;
  
	if (str.substr(whereToStartLooking, targetLength) === target) {
		return true;
	} else {
		return false;
	}
}

confirmEnding("Bastian", "n");