function isEmpty(obj) {
  let empty = true;
  for (let key in obj) {
    empty = false;
  }
  return empty;
}
