function findElement(arr, func) {
	var num = 0;
	const truth = arr.filter((element, index, array) => {
		return func(element);
	});
	return truth.shift();
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });