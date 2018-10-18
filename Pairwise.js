function pairwise(arr, arg) {
  let total = 0;
  let checkIndex = [];

  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
	  if (arr[i] + arr[k] === arg && checkIndex.indexOf(i) == -1 && checkIndex.indexOf(k) == -1) {
		checkIndex.push(i);
		checkIndex.push(k);
		total += i + k;
	  }
	}
  }
  return total;
};

pairwise([1, 4, 2, 3, 0, 5], 7);