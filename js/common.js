
function IsPhoneNumber(phoneNumber) {
  var regex = /\d{3}-\d{3}-\d{4}/;
  return regex.test(phoneNumber);
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function ShowErrorMessage(message) {
  alert(message);
}

function ShowLoader() {

}

function HideLoader() {
  
}

function ErrorOccurred(err) {

  ShowErrorMessage('error: ' + err.responseText);    
}