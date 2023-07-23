function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i],
      status = row.cells[3],
      gender = row.cells[2].innerHTML,
      age = row.cells[1].innerHTML;

    status.hasAttribute("data-available")
      ? status.dataset.available == "true"
        ? row.classList.add("available")
        : row.classList.add("unavailable")
      : row.setAttribute("hidden", "hidden");

    gender == "m" ? row.classList.add("male") : row.classList.add("female");

    if (age < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
