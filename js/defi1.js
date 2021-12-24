let checkbox = document.querySelector("#checkbox");
// console.log(checkbox);
let input = document.querySelector("#input");
// console.log(input);
let display = document.querySelector("#display");
console.log(display);

checkbox.addEventListener("click", function () {
  console.log("je click");
  if (checkbox.checked == true) {
    // console.log("la case est checked");
    input.setAttribute("type", "");
    display.textContent = "show";
  } else {
    // console.log("la case n'est pas checked");
    input.setAttribute("type", "password");
    display.textContent = "hide";
  }
});
