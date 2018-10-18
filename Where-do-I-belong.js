function getIndexToIns(arr, num) {
	arr.push(num);
	arr.sort((a, b) => {
		return a - b;
	});
	indexOfNum = arr.indexOf(num);
	return indexOfNum;
}

getIndexToIns([40, 60], 50);
