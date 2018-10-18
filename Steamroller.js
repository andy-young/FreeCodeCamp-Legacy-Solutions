function steamrollArray(arr) {
  const flat = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
console.log(steamrollArray(item));
      flat.push(...steamrollArray(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}