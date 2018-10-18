function truthCheck(collection, pre) {
	let truthBox = [];
	let falsies = [0, undefined, null, "", NaN];

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre)) {
        	truthBox.push(collection[i][pre]);
        } else return false;
    }
	let found = truthBox.some(value => falsies.includes(value));
	return !found;
}