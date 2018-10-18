function titleCase(str) {
	var strToArray = str.toLowerCase().split(' ');
	var container = [];
	strToArray.forEach(function(element, index, array) {
		container.push(element.charAt().toUpperCase() + strToArray[index].slice(1));
	});
 
	return container.join(' ');
}

titleCase("I'm a little tea pot");
