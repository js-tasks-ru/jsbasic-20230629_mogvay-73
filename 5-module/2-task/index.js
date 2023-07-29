function toggleText() {
  let button = document.querySelector(".toggle-text-button"),
    text = document.querySelector("#text");

  button.addEventListener("click", function () {
    text.hasAttribute("hidden") ? (text.hidden = false) : (text.hidden = true);
  });
}
