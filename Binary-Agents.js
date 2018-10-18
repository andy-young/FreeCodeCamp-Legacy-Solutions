function binaryAgent(str) {
    
    var newBinary = str.split(" ");	// push each 8 character string to an array
    var binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");
}