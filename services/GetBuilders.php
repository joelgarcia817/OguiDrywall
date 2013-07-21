<?php
    
    require_once "Setup.php";
    
    $html = "";
    
    $result = mysql_query("SELECT * FROM builders;") or die(mysql_error());
    
    while ($row = mysql_fetch_object($result)) {
        
        $html = $html . "<li><a href='#'><h3>" . $row->name . 
                "</h3><p><strong>Contact: " . $row->contact . 
                "</strong></p></a></li>";
    }
    
    if ( $html != "" ) {
      
      $html = "<br/><br/><ul data-role='listview' data-inset='true' data-filter='true' data-corners='true'>" . $html . "</ul>";
    }
    
    echo $html;
    
?>	