
let value = "visible";
let name = document.getElementById("social-media");
document.querySelector(".button").onclick = function () {
  name.style.visibility = "visible";
  if (value == "visible") {
    name.style.visibility = "visible";
    value = "collapse";
  } else {
    name.style.visibility = "collapse";
    value = "visible";
  }

}