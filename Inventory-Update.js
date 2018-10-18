function updateInventory(arr1, arr2) {
  arr1.forEach(arr => arr.reverse());
  arr2.forEach(arr => arr.reverse());
 
  let arr1Map = new Map(arr1);
  let arr2Map = new Map(arr2);

  let arr1MapKeys = [ ...arr1Map.keys() ];
  let arr1MapValues = [ ...arr1Map.values() ];

  let arr2MapKeys = [ ...arr2Map.keys() ];
  let arr2MapValues = [ ...arr2Map.values() ];


  let bothKeys = arr1MapKeys.concat(arr2MapKeys).sort(function(a, b) {
      var nameA = a.toUpperCase(); // ignore upper and lowercase
      var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  let finalInv = [];
  let invKeys = [ ...new Set(bothKeys) ];

  invKeys.forEach(element => { finalInv.push([0, element]); });

  let bothMaps = arr1.reverse().concat(arr2.reverse());

  for (let i = 0; i < finalInv.length; i++) {
	for (let k = 0; k < bothMaps.length; k++) {
	  if (finalInv[i][1] === bothMaps[k][0]) {
		finalInv[i][0] = finalInv[i][0] + bothMaps[k][1];
		bothMaps[k][1] = bothMaps[k][1] - bothMaps[k][1];
	  }
    }
  }
  
console.log(finalInv);

  if (curInv.length === 0) {
	return newInv;
  } else if (newInv.length === 0) {
	  return curInv;
  } else return finalInv;
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);