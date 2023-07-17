function getMinMax(str) {
  let arr = str.split(" ").map((item) => Number(item)),
    arrNumber = arr.filter((item) => Boolean(item));

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  arrNumber.sort(compareNumeric);

  return {
    min: arrNumber[0],
    max: arrNumber.at(-1),
  };
}
