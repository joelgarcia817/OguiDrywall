
$(function() {

  $('.fixed_tool_bar').fixedtoolbar({ hideDuringFocus: "" });
  $(document.body).on('vclick', '#add_builder_button', AddBuilder);
  
});

function AddBuilder() {

  $.mobile.showPageLoadingMsg();
  
  $.ajax({ url: 'services/addBuilder.php', 
           data: '',
           type: 'POST',            
           dataType: 'json',
           success: BuilderSuccessfullyAdded, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullyAdded(str) {
   
      $.mobile.hidePageLoadingMsg();
      alert(str);
   }
}

function ErrorOccurred(err)
{
  $.mobile.hidePageLoadingMsg();
  
  alert(err.responseText);    
}