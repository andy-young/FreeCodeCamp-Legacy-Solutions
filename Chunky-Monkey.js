function chunkArrayInGroups(arr, size) {
	var container = [];
	function pushToContainer() {
		container.push(arr.splice(0, size));
		}
	while (arr.length > 0) {
		pushToContainer();
	}
	return container;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);