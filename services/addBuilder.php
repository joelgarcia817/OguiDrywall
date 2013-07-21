<?php

    require_once "Setup.php";
    
    $str = "";
    
    $result = mysql_query("SELECT * FROM builders;") or die(mysql_error());
    
    while ($row = mysql_fetch_object($result)) {
        
        $str = $str . $row->id;
    }
    
    echo $str;
?>	