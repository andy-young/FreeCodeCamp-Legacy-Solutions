function rot13(str) {
	var rawCharCodes = [];
	var decoded = [];
	var container = [];
	for (let i = 0; i < str.length; i++) {
		rawCharCodes.push(str.charCodeAt(i));
	}
	rawCharCodes.filter(function (element, index, array) {
		if (element >= 65 && element < 78) {
			decoded.push(element + 13);
		} else if (element >= 78 && element < 91) {
			decoded.push(element - 13);
		} else {
			decoded.push(element);
		}
	})
	for (let i = 0; i < decoded.length; i++) {
		container.push(String.fromCharCode(decoded[i.toString()]));
	}
	container = container.join();
	return container.replace(/,/g, "");
}
rot13("SERR PBQR PNZC");