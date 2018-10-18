function mutation(arr) {
	var container = [];
	var indexArray = [];
	for (let i = 0; i < arr.length; i++) {
		container.push(arr[i].toLowerCase());
	}
	for (let k = 0; k < container[1].length; k++) {
		indexArray.push(container[0].indexOf(container[1][k]));
		}
	if (indexArray.includes(-1)) {
		return false;
	}	else return true;
}
