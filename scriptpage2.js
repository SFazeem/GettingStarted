function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username and password match your predefined values
  if (username === "syedf" && password === "syedfaz") {
    window.location.href = "loginsuccessful.html";
  } else {
    window.location.href = "loginfailure.html";
  }
}
