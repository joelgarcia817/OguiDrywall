<?php
    
    require_once "Setup.php";
    
    $html = "";
    $row_count = 0;
    
    $result = mysql_query("SELECT name, contact FROM builders ORDER BY name;") or die(mysql_error());
    $row_count = mysql_num_rows($result);

    $html = "<table class='table'><tr><td><a href='#add_builder_modal' role='button' class='btn btn-primary' data-toggle='modal'>Add Builder</a></td></tr>";
    
    if ( $row_count > 0 ) {

        while ($row = mysql_fetch_object($result)) {
            
            $html = $html . "<tr><td><h4>" . $row->name . "</h4><span class='subtext'>Contact: " . $row->contact . "</span></td></tr>";
        }
    }
    else {
        $html = $html . "<tr><td><h4>No builders found</h4></td></tr>";
    }

    $html = $html . '</table>' .
                    '<div id="add_builder_modal" class="modal hide fade">' . 

                    '<div class="modal-header">' . 
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' . 
                    '<h5>Add Builder</h5>' . 
                    '</div>' . 

                    '<div class="modal-body">' . 
                    '<form class="form-horizontal">' . 
                    '<div class="control-group">' .
                    '<label class="control-label" for="add_builder_name">Builder Name</label>' . 
                    '<div class="controls">' .
                    '<input id="add_builder_name" type="text" placeholder="Builder Name" maxlength="100" class="add_builder_input">' .
                    '</div>' .
                    '</div>' .
                    '<div class="control-group">' .
                    '<label class="control-label" for="add_builder_address">Address</label>' . 
                    '<div class="controls">' .
                    '<input id="add_builder_address" type="text" placeholder="Address" maxlength="100" class="add_builder_input">' .
                    '</div>' .
                    '</div>' .
                    '<div class="control-group">' .
                    '<label class="control-label" for="add_builder_contact">Contact</label>' . 
                    '<div class="controls">' .
                    '<input id="add_builder_contact" type="text" placeholder="Contact" maxlength="100" class="add_builder_input">' .
                    '</div>' .
                    '</div>' .
                    '<div class="control-group">' .
                    '<label class="control-label" for="add_builder_email">Email</label>' . 
                    '<div class="controls">' .
                    '<input id="add_builder_email" type="text" placeholder="Email" maxlength="100"  class="add_builder_input">' .
                    '</div>' .
                    '</div>' .
                    '<div class="control-group">' .
                    '<label class="control-label" for="add_builder_phone">Phone</label>' . 
                    '<div class="controls">' .
                    '<input id="add_builder_phone" type="text" placeholder="ex. 222-222-2222" maxlength="12" class="add_builder_input">' .
                    '</div>' .
                    '</div>' .
                    '<div class="control-group">' .
                    '<label class="control-label" for="add_builder_fax">Fax</label>' . 
                    '<div class="controls">' .
                    '<input id="add_builder_fax" type="text" placeholder="ex. 222-222-2222" maxlength="12" class="add_builder_input">' .
                    '</div>' .
                    '</div>' .
                    '</form>' . 
                    '</div>' .
                    
                    '<div class="modal-footer">' . 
                    '<a href="#" class="btn" data-dismiss="modal">Cancel</a>' . 
                    '<button id="save_builder" type="button" class="btn btn-primary" data-loading-text="Saving Builder..." >Save</button>' . 
                    '</div>' . 
                    '</div>';
    
    echo $html;
    
?>  