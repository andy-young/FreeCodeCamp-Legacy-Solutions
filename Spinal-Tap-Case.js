function spinalCase(str) {
    return str.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/ |_/g, "-").toLowerCase();
}
spinalCase('thisIsSpinalTap');