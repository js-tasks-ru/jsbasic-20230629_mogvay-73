function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    let upper = str[0].toUpperCase();
    upper += str.slice(1);
    return upper;
  }
}
