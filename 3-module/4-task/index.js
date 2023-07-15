function showSalary(users, age) {
  let arr = users.map((item) =>
      item.age <= age ? item.name + ", " + item.balance : ""
    ),
    arrFilter = arr.filter((item) => item !== "");

  return arrFilter.join("\n");
}
