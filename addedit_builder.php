<!DOCTYPE html> 
<html>
  <head> 
    <title>Add Builder | Ogui Drywall</title> 
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/styles.css" />
  </head> 
  <body>
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <a class="brand" href="index.html">&nbsp;&nbsp;Ogui Drywall</a>
        <ul class="nav">
          <li class="main_tab"><a data-type="jobs" href="jobs.php">Jobs</a></li>
          <li class="main_tab active"><a data-type="builders" href="builders.php">Builders</a></li>
          <li class="main_tab"><a data-type="workers" href="#">Workers</a></li>
          <li class="main_tab"><a data-type="invoices" href="#">Invoices</a></li>
          <li class="main_tab"><a data-type="reports" href="#">Reports</a></li>
        </ul>
      </div>
    </div>

    <div id='content'>
      <form class="form-horizontal"> 
        <div class="control-group">
          <label class="control-label" for="add_builder_name">Builder Name</label> 
          <div class="controls">
            <input id="add_builder_name" type="text" placeholder="Builder Name" maxlength="100" class="add_builder_input">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="add_builder_address">Address</label> 
          <div class="controls">
            <input id="add_builder_address" type="text" placeholder="Address" maxlength="100" class="add_builder_input">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="add_builder_contact">Contact</label> 
          <div class="controls">
            <input id="add_builder_contact" type="text" placeholder="Contact" maxlength="100" class="add_builder_input">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="add_builder_email">Email</label> 
          <div class="controls">
            <input id="add_builder_email" type="text" placeholder="Email" maxlength="100"  class="add_builder_input">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="add_builder_phone">Phone</label> 
          <div class="controls">
            <input id="add_builder_phone" type="text" placeholder="ex. 222-222-2222" maxlength="12" class="add_builder_input">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="add_builder_fax">Fax</label> 
          <div class="controls">
            <input id="add_builder_fax" type="text" placeholder="ex. 222-222-2222" maxlength="12" class="add_builder_input">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="add_builder_fax">Prices</label> 
          <div class="controls">
            <table id="builder_prices_table" class="table" style="width:220px;">
              <tr>
                <td>&nbsp;</td>
                <td><a class="btn btn-mini btn-success" role="button" href="#AddBuilderPriceModal" data-toggle="modal">Add Price</a></td>
              </tr>
            </table>  
          </div>
        </div>
        <div class="form-actions">
          <a id="save_builder_button" href="#" type="button" class="btn btn-primary">Save changes</a>
          <a id="delete_builder_button" href="#" type="button" class="btn hide">Delete Builder</a>
          <a href="builders.php" type="button" class="btn" >Cancel</a>
        </div>        
      </form> 
    </div>

    <div id="AddBuilderPriceModal" class="modal hide fade">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h5>Add Builder Price</h5>
      </div>
      <div class="modal-body">
        <form class="form-horizontal"> 
          <div class="control-group">
            <label class="control-label" for="builder_price">Price:</label> 
            <div class="controls">
              <input id="builder_price" type="text" placeholder="Price" maxlength="7">
            </div>
          </div>  
          <div class="control-group">
            <label class="control-label" for="builder_price_type">Type:</label> 
            <div class="controls">
              <select id="builder_price_type">
                <option value="1">By Square Foot</option>
                <option value="2">Per Hour</option>
                <option value="3">Flat Price</option>
              </select>
            </div>
          </div>  
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
        <button id="add_builder_price" class="btn btn-primary">Add Price</button>
      </div>
    </div>

    <?php

      $uuid = $_GET["uuid"];

      if ( $uuid != "" ) {
        echo "<input id='hdnfldUUID' type='hidden' value='" . $uuid . "' />";
      }
      
    ?>

    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/common.js"></script>
    <script src="js/pg/addedit_builder.js"></script>
  </body>
</html>