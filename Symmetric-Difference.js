function sym(args) {
  let truncatedMultiples = []; // array for sets after each set has any 'same' values compressed to a single value
  let sets = [...arguments];
  let counts = {};	// the number of time a given value appears in the concatenation of all sets

  // reduce any duplicates or multiples in each set
  sets.forEach(element => {
    truncatedMultiples.push([...new Set(element)].sort((a, b) => a - b));
  });

  // the concat all original sets, and sort from least to greatest
  let fullRange = truncatedMultiples.reduce((a,b) => a.concat(b)).sort((a,b) => a - b);
  
// the cutSample is the fullRange with multiples reduced to their single number
  let cutSample = [...new Set(fullRange)];

  // create an object where each cutSample number is a key and its value is the number of times it appears
  for (let i = 0; i < fullRange.length; ++i) {
    if(!counts[fullRange[i]])
      counts[fullRange[i]] = 0;
    ++counts[fullRange[i]];
  }
  
  // These are the counts that each number appears in all sets.
  let cutNums = Object.values(counts);
  
  // Because the indices align with the cutSample, we can take advantage of mathematical pattern..
  // ..whereby any value that appears an even amount will never be a symmetric difference.
  for (let i = 0; i < cutNums.length; i++) {
	if (cutNums[i] % 2 === 0) {
  // We have to replace what's spliced with null, so we don't skip an index and remove the wrong value.
	  cutSample.splice(i, 1, null);
	}
  }
	return cutSample.filter(Boolean); // remove the nulls
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);