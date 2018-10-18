function dropElements(arr, func) {
	let arr2 = [...arr];
	
	const shiftElement = () => {
		arr2.shift();
	};

	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			return arr2;
		} else shiftElement();
	}
	return arr2;
}