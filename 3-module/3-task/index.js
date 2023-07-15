function camelize(str) {
  let arr = str.split("-"),
    camelize = arr.map((item, index) =>
      index == 0 ? item : item.charAt(0).toUpperCase() + item.substring(1)
    );

  return camelize.join("");
}
