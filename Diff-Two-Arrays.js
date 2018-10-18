function diffArray(arr1, arr2) {
	var i, newArr = arr1.concat(arr2).sort(), container = [];
	for (i = 0; i < newArr.length; i++) {
		if (container.indexOf(newArr[i]) !== -1) {
			container.splice(container.indexOf(newArr[i], 1));
		} else {
			container.push(newArr[i]);
		}
	};
	return container;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
