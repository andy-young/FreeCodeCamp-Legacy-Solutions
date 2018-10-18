function destroyer(arr) {
	var targeted = [];
	for (var i = 0; i < destroyer.arguments.length - 1; i++) {
		targeted.push(destroyer.arguments[i + 1]);
	}

	function squash(arr){
    var tmp = [];
    for(let i = 0; i < arr.length; i++){
        if(targeted.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
}

return (squash(arr));
}