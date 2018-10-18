function smallestCommons(arr) {
	arr.sort((a, b) => b - a);
	let iterations = (arr[0] - arr[1]);
	for (let i = 1; i <= iterations; i++) {
		arr.splice(i, 1, arr[0] - i);
	}
	
	function gcd(...numbers) {
  		return numbers.reduce((a, b) => b === 0 ? a : gcd(b, a % b));
	}

	function lcm(...numbers) {
  		return numbers.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
	}
	return lcm(...arr);
}

smallestCommons([1,5]);
