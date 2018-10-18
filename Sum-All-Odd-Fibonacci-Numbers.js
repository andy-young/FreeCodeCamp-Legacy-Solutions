function sumPrimes(num) {
  let odds = [2];
    
  for (let i = 3; i <= num; i++) {
	if (i % 2 !== 0)  {
	  odds.push(i);
	}

  }
  odds.filter((element, index, array) => {
    for (let i = 3; i <= Math.sqrt(element); i += 2) {
      if (element % i === 0) {
	   array.splice(index, 1, 0);
      }
    }
  });
  return odds.reduce((a, b) => a + b, 0);
}