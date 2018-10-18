function fearNotLetter(str) {
	var arr = str.split("");
	var container = [];
	var missingChar;
	for (let character of arr) {
		container.push(character.charCodeAt(character));
	}
	for (let i = 0; i < container.length; i++) {
		if (container[i + 1] - container[i] > 1) {
			missingChar = container.splice(i, 2);
			return String.fromCharCode(missingChar[0] + 1);		
		}
    }
}

fearNotLetter("yz");