function myReplace(str, before, after) {
	var strArray = str.split(" ");
	var caseCorrected;
		if (before.charAt(0) === before.charAt(0).toUpperCase()) {
			caseCorrected = after.charAt(0).toUpperCase() + after.slice(1);
		} else {
			caseCorrected = after;
		}
console.log(caseCorrected);
        strArray.filter((word, index, array) => {
			if (word === before) {
            	array.splice(index, 1, caseCorrected);
            }
        });
	return strArray.join().replace(/,/g, " ");
}
