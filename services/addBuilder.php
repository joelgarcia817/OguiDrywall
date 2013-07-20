<?php

    require_once 'setup.php';
    
    $query = mysql_query("SELECT name FROM builders;");

    $retval = mysql_fetch_object($query)->name;

    $retval = trim($retval);
    
    echo $retval;
                
    return true;
?>	