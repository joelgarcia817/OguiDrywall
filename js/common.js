
function IsPhoneNumber(phoneNumber) {
  var regex = /\d{3}-\d{3}-\d{4}/;
  return regex.test(phoneNumber);
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function FormatPhoneNumber(phoneNumber) {

	phoneNumber = [phoneNumber.slice(0, 3), "-", phoneNumber.slice(3,6),"-",phoneNumber.slice(6,10)].join('');

	return phoneNumber;
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