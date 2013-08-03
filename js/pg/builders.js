
$(function() {

  SetupEventHandlers();

  GetBuilders();
});

function SetupEventHandlers() {

  $(document.body).on("click", ".builder_row", HandleBuilderRowClick);
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

function HandleBuilderRowClick(e) {

  var uuid = $(e.target).closest("tr.builder_row").data("uuid");

  window.location = "addedit_builder.php?uuid=" + uuid;
}