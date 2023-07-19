var modal = document.getElementsByClassName("regform")[0];
var btn = document.getElementById("home");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  return type;
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showMessage(input, message, false);
  }
  return showMessage(input, "", true);
}

function validateName(input, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, invalidMsg)) {
    return false;
  }
  // validate Name format
  const nameRegex = /^[A-Za-z]+$/;
  const name = input.value.trim();

  if (name.length < 5 || !nameRegex.test(name)) {
    return showMessage(input, invalidMsg, false);
  }
  return true;
}

function validateEmail(input, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, invalidMsg)) {
    return false;
  }

  const email = input.value.trim();
  let emailsplit = email.split("@");

  if (emailsplit.length == 2) {
    if (emailsplit[1].toUpperCase() == "GMAIL.COM") {
      return true;
    } else {
      return showMessage(input, invalidMsg, false);
    }
  } else {
    return showMessage(input, invalidMsg, false);
  }
}

function validatePassword(input, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, invalidMsg)) {
    return false;
  }

  const pword = input.value.trim();

  if (pword.length < 8) {
    return showMessage(input, invalidMsg, false);
  }
  return true;
}

function validatePhone(input, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, invalidMsg)) {
    return false;
  }

  const phone = input.value.trim();

  if (!(phone.length == 10) || isNaN(phone)) {
    return showMessage(input, invalidMsg, false);
  }
  return true;
}
const form = document.getElementsByClassName("regformcontent")[0];

const NAME_INVALID =
  "Please enter your name without any numerical values and must be of minimum length 5";
const EMAIL_INVALID = "Please enter correct Gmail address";
const PASSWORD_INVALID = "Please enter Password of minimum length 8";
const PHONE_INVALID = "Please enter valid Phone Number of 10 digits";
const SPORT_INVALID = "Please enter valid Phone Number of 10 digits";

var varctr = 0;
form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();

  const divctr = document.getElementById('cntr')

  // validate the form
  let nameValid = validateName(form.elements["name"], NAME_INVALID);
  let emailValid = validateEmail(form.elements["email"], EMAIL_INVALID);
  let passwordValid = validatePassword(
    form.elements["password"],
    PASSWORD_INVALID
  );
  let phoneValid = validatePhone(form.elements["phone"], PHONE_INVALID);

  var rad = document.getElementsByName("rdGender");
  var gender = "";
  for (i = 0; i < 3; i++) {
    if (rad[i].checked) {
      gender = rad[i].value;
    }
  }

  var chk = document.getElementsByClassName("myCheckbox");
  let sport = "";
  for (i = 0; i < chk.length; i++) {
    if (chk[i].checked) {
      sport = sport + chk[i].value + ";";
    }
  }

  if (sport.trim() == ""){
    showMessage(document.getElementsByClassName("myCheckbox")[0], "Please Select any sport", false);
  }
  else{
    showMessage(document.getElementsByClassName("myCheckbox")[0], "", true);
    }

  if (nameValid && emailValid && passwordValid && phoneValid && sport.trim() != "") {
    varctr = varctr + 1;
	divctr.innerText = "Number of Registered Players : "+ varctr;
    let consolestr =
      "Entered values are : "
    consolestr = consolestr + "Number of Registered Players :" + varctr;
    consolestr = consolestr + "Name :" + form.elements["name"].value.trim();
    consolestr = consolestr + " Email :" + form.elements["email"].value.trim();
    consolestr =
      consolestr + " Password :" + form.elements["password"].value.trim();
    consolestr =
      consolestr + " Phone Number :" + form.elements["phone"].value.trim();
    consolestr = consolestr + " Gender :" + gender;
    consolestr = consolestr + " Sports :" + sport;

    console.log(consolestr);
  }
});
