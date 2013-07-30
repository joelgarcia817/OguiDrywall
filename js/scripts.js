
$(function() {

  SetupEventHandlers();

  LoadPage();
});

function LoadPage() {

  if ( window.location.href.indexOf('/builders.html') > 0 ) {
    GetBuilders();
  }

}

function GetBuilders() {

  ShowLoader();
  
  $.ajax({ url: 'services/GetBuilders.php', 
           data: {},
           type: 'POST', 
           success: BuilderSuccessfullRetrieved, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullRetrieved(html) {
      
      $('#content').html(html);
      
      HideLoader();
   }
}

function SaveBuilder() {

  $("#save_builder").button('loading');

  var name = $("#add_builder_name").val();
  var address = $("#add_builder_address").val();
  var contact = $("#add_builder_contact").val();
  var email = $("#add_builder_email").val();
  var phone = $("#add_builder_phone").val();
  var fax = $("#add_builder_fax").val();
  
  $.ajax({ url: 'services/AddBuilder.php', 
           data: { name:name, address:address, contact:contact, email:email, phone:phone, fax:fax },
           type: 'POST', 
           success: BuilderSuccessfullyAdded, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullyAdded(str) {
   
    $("#save_builder").button('reset');
    $('#add_builder_modal').modal('hide');

    GetBuilders();
   }
}

function ShowLoader() {

}

function HideLoader() {
  
}

function SetupEventHandlers() {

  $(document.body).on("click", "#save_builder", SaveBuilder);
}

function ErrorOccurred(err) {

  $.mobile.hidePageLoadingMsg();
  
  alert('error: ' + err.responseText);    
}