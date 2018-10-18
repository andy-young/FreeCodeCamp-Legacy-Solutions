
function sumAll(arr) {
	var container = arr;
	var cycles;
	arr.sort(function(a, b) {
		return a - b;
	});
	cycles = (arr[1] - arr[0]) - 1;
	for (let i = 0; i < cycles; i++) {
		container.push(arr[0]++);
	}

	var reduced = container.reduce((sum, value) => {
		return sum + value; }, 0);

	if (arr[0] === arr[1]) {
		return arr[0] + arr[1];
	} else return reduced;
};
sumAll([1, 4]);
