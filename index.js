
var errorMessage = document.getElementById('js-errorMessage');
var submit = document.getElementById('submit');

function emailCheck(){
  var email = document.getElementById('email').value;
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email===''){
    var noEmail = document.createTextNode("Please enter your email");
    return errorMessage.appendChild(noEmail);
  } else if (!regex.test(email)){
      var wrongEmail = document.createTextNode("Your email is invalid, please try again");
      return errorMessage.appendChild(wrongEmail);
    }
}

function passwordCheck() {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var email = document.getElementById('email').value;
    if (password === '' || confirmPassword === '') {
      if (email===''){
      var br = document.createElement('br');
      errorMessage.appendChild(br);
      var emptyPassword = document.createTextNode("Please enter your password");
      errorMessage.appendChild(emptyPassword)
    } else {
      var emptyPassword = document.createTextNode("Please enter your password");
      errorMessage.appendChild(emptyPassword)
      }
    } else if (password !== confirmPassword) {
      var passwordMatchError = document.createTextNode("Your passwords don't match. Please try again");
      errorMessage.appendChild(passwordMatchError);
    }
}


submit.addEventListener('click', function(e) {
  e.preventDefault();
  while(errorMessage.firstChild){
    errorMessage.removeChild(errorMessage.firstChild);
  }
  emailCheck();
  passwordCheck();
})
