function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
  arr.forEach(el => {
	Object.defineProperty(el, "orbitalP", {
	  enumerable: true,
	  configurable: true,
	  get: () => {
	    return Math.round(Math.sqrt((Math.pow(6367.4447 + el.avgAlt, 3)/398600.4418)) * Math.PI * 2);
	  }
    });
  });
  arr.forEach(el => { el['orbitalPeriod'] = el['orbitalP']; });
  arr.forEach(el => { delete el.avgAlt; });
  arr.forEach(el => { delete el.orbitalP; });
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);