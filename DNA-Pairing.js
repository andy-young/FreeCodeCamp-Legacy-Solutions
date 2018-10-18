function pairElement(str) {
	var outputArray = [];
	var strArr = str.split("");
	strArr.forEach(el => outputArray.push(el.split()));
    for (let i = 0; i < outputArray.length; i++) {
		if (outputArray[i][0] === "G") {
			outputArray[i].push("C");
		} else if (outputArray[i][0] === "C") {
			outputArray[i].push("G");
		} else if (outputArray[i][0] === "A") {
			outputArray[i].push("T");
		} else outputArray[i].push("A");
}
	return outputArray;
}

pairElement("GCG");