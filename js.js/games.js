

const Button = document.getElementById("bt");

Button.addEventListener("click", function () {
    localStorage.removeItem("currentUser")
  window.location.href = "/index.html";
});
const israel = document.getElementById("israel");
const local = localStorage.getItem("currentUser");
if (local) {
    const user = JSON.parse(local); // הפוך את המחרוזת לאובייקט
    const name = user.name;
    israel.innerText = "wellcom " + name;
  } else {
    israel.innerText = "No user found";
  }




  