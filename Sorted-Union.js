function uniteUnique(arr) {
	const args = Array.from(arguments);
// debugger;
	const uniques = args.reduce((accumulator, currentValue, currentIndex, array) => {	
		for (let i = 0; i < currentValue.length; i++) {
			if (accumulator.indexOf(currentValue[i]) === -1) {
				accumulator.push(currentValue.splice(i, 1));
				currentValue.splice(i, -1, null);
			}
	
		}
		return accumulator;
	});
	return uniques.reduce((acc, cur) => acc.concat(cur), []);
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);