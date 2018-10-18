
function findLongestWord(str) {
	var splitString = str.split(' ');
	var lengthsArray = [];
	function giveElementLengths(element, index, array) {
		lengthsArray.push(element.length);
	}
	splitString.forEach(giveElementLengths);
	 return Math.max(...lengthsArray);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
