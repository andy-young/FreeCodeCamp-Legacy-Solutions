function convertToRoman(num) {
	var romanNumerals = {
	1: "I",
	2: "II",
	3: "III",
	4: "IV",
	5: "V",
	6: "VI",
	7: "VII",
	8: "VIII",
	9: "IX",
	10: "X",
	20: "XX",
	30: "XXX",
	40: "XL",
	50: "L",
	60: "LX",
	70: "LXX",
	80: "LXXX",
	90: "XC",
	100: "C",
	200: "CC",
	300: "CCC",
	400: "CD",
	500: "D",
	600: "DC",
	700: "DCC",
	800: "DCCC",
	900: "CM",
	1000: "M",
	2000: "MM",
	3000: "MMM"
};
var places = {
	1: 1,
	2: 10,
	3: 100,
	4: 1000
};
	var numArr = Array.from(num.toString()).map(Number);
	for (let i = 0, k = numArr.length; i < numArr.length; i++, k--) {
		numArr.splice(i, 1, romanNumerals[numArr[i] * places[k]]);
	}
		return numArr.join().replace(/,/g, "");
}


convertToRoman(36);
