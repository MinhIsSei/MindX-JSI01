let buttonSignIn = document.querySelector("#signIn");
let usernameInput = document.querySelector("#usernameInput");
let passwordInput = document.querySelector("#passwordInput");
localStorage.setItem("username", JSON.stringify("admin"));
localStorage.setItem("password", JSON.stringify("admin"));

buttonSignIn.addEventListener("click", function (e) {
  if (
    usernameInput.value == JSON.parse(localStorage.getItem("username")) &&
    passwordInput.value == JSON.parse(localStorage.getItem("password"))
  ) {
    window.location.href = "http://127.0.0.1:5500/index2.html";
  }
});
