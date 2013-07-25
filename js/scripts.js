
$(function() {

  SetupEventHandlers();
});

function HandleTabSwitchRequest(e) {
  var tab = $(e.target);

  if ( ! tab.closest("li").hasClass("active") ) {

    GetTabData( tab.data("type") ); 

    $(".main_tab").removeClass("active");

    tab.closest("li").addClass("active");
  }
}

function GetTabData(tabName) {

  if ( tabName == "jobs" ) {
    GetJobs();
  }
  else if ( tabName == "builders" ) {
    GetBuilders();
  }
  else if ( tabName == "workers" ) {
    GetWorkers();
  }
  else if ( tabName == "invoices") {
    GetInvoices();
  }
  else if ( tabName == "reports") {
    GetReports();
  }
}

function GetJobs() {
  $("#content").html("<h4>No jobs found</h4>")
}

function GetWorkers() {
  $("#content").html("<h4>No workers found</h4>")
}

function GetInvoices() {
  $("#content").html("<h4>No invoices found</h4>")
}

function GetReports() {
  $("#content").html("<h4>No reports found</h4>")
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

  $(".main_tab_link").click(HandleTabSwitchRequest);

  $(document.body).on("click", "#save_builder", SaveBuilder);
}

function ErrorOccurred(err) {

  $.mobile.hidePageLoadingMsg();
  
  alert('error: ' + err.responseText);    
}