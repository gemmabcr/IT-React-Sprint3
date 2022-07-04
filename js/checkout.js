
//Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validations format
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var letterNumber = /^[0-9a-zA-Z]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Validate name field
  if(fName.value === "" || fName.length >= 3 || !fName.value.match(letters)){
    errorName.style.display = "block";
    error++;
  }

  // Validate email field
  if(fEmail.value === "" || fEmail.length >= 3 || !fEmail.value.match(mailformat)){
    errorEmail.style.display = "block";
    error++;
  }

  // Validate address field
  if(fAddress.value === "" || fAddress.length >= 3){
    errorAddress.style.display = "block";
    error++;
  }

  // Validate last name field
  if(fLastN.value === "" || fLastN.length >= 3 || !fLastN.value.match(letters)){
    errorLastN.style.display = "block";
    error++;
  }

  // Validate password field
  if(fPassword.value === "" || fPassword.length >= 3 || !fPassword.value.match(letterNumber)){
    errorPassword.style.display = "block";
    error++;
  }

  // Validate phone field
  if(fPhone.value === "" || fPhone.length >= 3 || !fPhone.value.match(numbers)){
    errorPhone.style.display = "block";
    error++;
  }
}