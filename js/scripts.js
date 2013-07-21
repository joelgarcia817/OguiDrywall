
$(function() {

  $.mobile.defaultPageTransition = 'none';

  $('.fixed_tool_bar').fixedtoolbar({ hideDuringFocus: "" });
  $(document.body).on('vclick', '#add_builder_button', AddBuilder);
  $(document.body).on('pagechange', HandlePageChange);
  
});

function HandlePageChange(evt, options) {

  if ( options.toPage.attr('id') == 'builders_page') {
      GetBuilders();
  }
}

function GetBuilders() {

  $.mobile.showPageLoadingMsg();
  
  $.ajax({ url: 'services/GetBuilders.php', 
           data: {},
           type: 'POST', 
           success: BuilderSuccessfullRetrieved, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullRetrieved(html) {
      
      if ( $.trim(html) != '' ) {
      
          $('#builders_page_content').html(html)
                                     .trigger('create');
      }
      
      $.mobile.hidePageLoadingMsg();
   }
}

function AddBuilder() {

  $.mobile.showPageLoadingMsg();
  
  $.ajax({ url: 'services/AddBuilder.php', 
           data: {},
           type: 'POST', 
           success: BuilderSuccessfullyAdded, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullyAdded(str) {
   
      $('#add_builder_button').removeClass('ui-btn-active');
      $.mobile.hidePageLoadingMsg();
      alert('success' + str);
   }
}

function ErrorOccurred(err)
{
  $.mobile.hidePageLoadingMsg();
  
  alert('error: ' + err.responseText);    
}