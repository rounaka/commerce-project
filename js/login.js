var btnLogin = document.getElementById('do-login');
var password = document.getElementById('password');
var email = document.getElementById('email');
btnLogin.addEventListener("click",ink)
function ink() {
  if (email.value =="nobody@gmail.com" && password.value =="nobody") {
    window.location.replace("./index.html")
  }
}
  

