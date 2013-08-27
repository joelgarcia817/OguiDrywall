
$(function() {

  SetupEventHandlers();

  $("#builder_price").autoNumeric({ vMin: '0.00', vMax: '99999.99'});

  if ( $("#hdnfldUUID").size() > 0 ) {

    $("#delete_builder_button").removeClass("hide");
    GetBuilderInfo();
  }

});

function GetBuilderInfo() {

  var uuid = $("#hdnfldUUID").val();

  $.ajax({ url: 'services/GetBuilderInfo.php', 
           data: { uuid:uuid },
           type: 'POST', 
           success: DisplayBuilderInfo, 
           error: ErrorOccurred } );
   
   function DisplayBuilderInfo(info) {
   
      var parts = info.split("|");

      var phone = ( parts[3] == "0" ) ? "" : FormatPhoneNumber(parts[3]);
      var fax = ( parts[5] == "0" ) ? "" : FormatPhoneNumber(parts[5]);

      $("#add_builder_name").val(parts[0]);
      $("#add_builder_address").val(parts[1]);
      $("#add_builder_contact").val(parts[2]);
      $("#add_builder_phone").val(phone);
      $("#add_builder_email").val(parts[4]);      
      $("#add_builder_fax").val(fax);

      if ( parts.length > 6 ) {

        var prices = parts[6].split("~");

        for (var i=0; i<prices.length; i++) {

          var priceType = prices[i].split(":")[0];
          var price = prices[i].split(":")[1];

          AddBuilderPrice(priceType, price);
        }
      }
   }
}

function SaveBuilder(e) {

  if ( ! AllFieldsAreValidForBuilderSave() ) {
    return;
  }

  $("#save_builder").button('loading');

  var uuid = ( $("#hdnfldUUID").size() > 0 ) ? $("#hdnfldUUID").val() : "";
  var name = $("#add_builder_name").val();
  var address = $("#add_builder_address").val();
  var contact = $("#add_builder_contact").val();
  var email = $("#add_builder_email").val();
  var phone = $("#add_builder_phone").val();
  var fax = $("#add_builder_fax").val();
  var prices = [];

  phone = ( phone == "" ) ? "0" : phone;
  fax = ( fax == "" ) ? "0" : fax;

  $(".builder_price").each(function(i, ele) {

    prices.push($(ele).data("type") + "-" + $(ele).data("price"));
  });
  
  $.ajax({ url: 'services/SaveBuilder.php', 
           data: { uuid:uuid, name:name, address:address, contact:contact, email:email, phone:phone, fax:fax, prices:prices.join("|") },
           type: 'POST', 
           success: BuilderSuccessfullyAdded, 
           error: ErrorOccurred } );
   
   function BuilderSuccessfullyAdded(str) {
   
      window.location = "builders.php";
   }
}

function DeleteBuilder(e) {

  if ( confirm("Are you sure you want to delete this builder?") ) {

    var uuid = $("#hdnfldUUID").val();

    $.ajax({ url: 'services/DeleteBuilder.php', 
             data: { uuid:uuid },
             type: 'POST', 
             success: BuilderDeleted, 
             error: ErrorOccurred } );
  }

  function BuilderDeleted() {
    window.location = "builders.php";
  }
}

function AllFieldsAreValidForBuilderSave() {

  if ( $.trim($("#add_builder_name").val()) == '' ) {
    ShowErrorMessage('Please enter a builder name'); return false;
  }
  else if ( $.trim($("#add_builder_email").val()) != '' && ! IsEmail($.trim($("#add_builder_email").val())) ) {
    ShowErrorMessage('Email is not in correct format'); return false;
  }
  else if ( $.trim($("#add_builder_phone").val()) != '' && ! IsPhoneNumber($.trim($("#add_builder_phone").val())) ) {
    ShowErrorMessage('Phone number must be in xxx-xxx-xxxx format'); return false;
  }
  else if ( $.trim($("#add_builder_fax").val()) != '' && ! IsPhoneNumber($.trim($("#add_builder_fax").val())) ) {
    ShowErrorMessage('Fax number must be in xxx-xxx-xxxx format'); return false;
  }

  return true;
}

function AddBuilderPrice(priceType, price) {
  
  var priceNumber = parseFloat(price);
  var formattedPrice = "$" + priceNumber.toFixed(2);

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

  $("#builder_prices_table").prepend("<tr><td><span class='builder_price' data-price='" + price + "' data-type='" + priceType + "'>" + priceDescription + 
                                     "</span></td><td><button class='remove_builder_price btn btn-mini btn-danger'>Remove</button></td></tr>");

  $("#builder_price").val("");
  $("#builder_price_type").val("1");
  $('#AddBuilderPriceModal').modal('hide');
}

function RemoveBuilderPrice(e) {
  $(e.target).closest("tr").remove();
}

function HandleAddBuilderPriceClicked(e) {

  var priceType = $("#builder_price_type").val(); 
  var price = $("#builder_price").val();
   
  AddBuilderPrice(priceType, price);
}

function SetupEventHandlers() {

  $("#add_builder_price").on("click", HandleAddBuilderPriceClicked);
  $("#delete_builder_button").on("click", DeleteBuilder);
  $("#save_builder_button").on("click", SaveBuilder);
  $(document.body).on("click", ".remove_builder_price", RemoveBuilderPrice)
}