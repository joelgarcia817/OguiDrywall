
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

function SaveBuilder(e) {

  $("#save_builder").button('loading');

  var name = $("#add_builder_name").val();
  var address = $("#add_builder_address").val();
  var contact = $("#add_builder_contact").val();
  var email = $("#add_builder_email").val();
  var phone = $("#add_builder_phone").val();
  var fax = $("#add_builder_fax").val();
  var prices = [];

  $(".builder_price").each(function(i, ele) {

    prices.push($(ele).data("type") + "-" + $(ele).data("price"));
  });
  
  $.ajax({ url: 'services/SaveBuilder.php', 
           data: { name:name, address:address, contact:contact, email:email, phone:phone, fax:fax, prices:prices.join("|") },
           type: 'POST', 
           success: BuilderSuccessfullyAdded, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullyAdded(str) {
   
    $("#save_builder").button('reset');
    $('#add_builder_modal').modal('hide');

    GetBuilders();
   }
}

function AddBuilderPrice() {

  var priceString = $("#builder_price").val();
  var priceNumber = parseFloat(priceString);
  var formattedPrice = "$" + priceNumber.toFixed(2);

  var priceType = $("#builder_price_type").val();  
  var priceTypeString = "";

  if (priceType == "1") {
    priceTypeString = " / Sq Ft";
  }
  else if (priceType == "2") {
    priceTypeString = " / Hour";
  }
  else {
    priceTypeString = " Flat Price";
  }

  var priceDescription = formattedPrice + priceTypeString;

  $("#builder_prices_table").prepend("<tr><td><span class='builder_price' data-price='" + priceString + "' data-type='" + priceType + "'>" + priceDescription + 
                                     "</span></td><td><button class='remove_builder_price btn btn-mini btn-danger'>Remove</button></td></tr>");

  $("#builder_price").val("");
  $("#builder_price_type").val("1");
  $('#AddBuilderPriceModal').modal('hide');
}

function RemoveBuilderPrice(e) {
  $(e.target).closest("tr").remove();
}

function ShowLoader() {

}

function HideLoader() {
  
}

function SetupEventHandlers() {

  $("#add_builder_price").on("click", AddBuilderPrice);
  $("#save_builder_button").on("click", SaveBuilder);
  $(document.body).on("click", ".remove_builder_price", RemoveBuilderPrice)
}

function ErrorOccurred(err) {

  $.mobile.hidePageLoadingMsg();
  
  alert('error: ' + err.responseText);    
}