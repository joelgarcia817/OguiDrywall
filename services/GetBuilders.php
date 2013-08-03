<?php
    
    require_once "Setup.php";
    
    $html = "";
    $row_count = 0;
    
    $result = mysql_query("SELECT id, name, contact FROM builders ORDER BY name;"); /* or die(mysql_error()); */
    $row_count = mysql_num_rows($result);

    $html = "<table class='table'><tr><td><a href='addedit_builder.php' role='button' class='btn btn-primary'>Add Builder</a></td></tr>";
    
    if ( $row_count > 0 ) {

        while ($row = mysql_fetch_object($result)) {
            
            $html = $html . "<tr class='builder_row' data-uuid='" . $row->id . "'><td><h4>" . $row->name . 
                            "</h4><span class='subtext'>Contact: " . $row->contact . "</span></td></tr>";
        }
    }
    else {
        $html = $html . "<tr><td><h4>No builders found</h4></td></tr>";
    }

    $html = $html . '</table>';
    
    echo $html;
    
?>  