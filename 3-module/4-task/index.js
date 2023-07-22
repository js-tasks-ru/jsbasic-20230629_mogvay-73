function showSalary(users, age) {
  let arrFilter = users.filter((item) => item.age <= age),
    arr = arrFilter.map((item) => item.name + ", " + item.balance);

  return arr.join("\n");
}
