function addTogether() {
	var firstArg = arguments[0];
	
	if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
		return arguments[0] + arguments[1];
	} else if (arguments.length === 1 && Number.isInteger(firstArg)) {
		return function(b) {
			if (typeof b !== 'number') {
           		return undefined;
           		} else return firstArg+b;
        };
	} else if (Number.isInteger(arguments[0]) === false) {
		return undefined;
	} else return undefined;
}

addTogether(2,3);