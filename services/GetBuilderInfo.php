<?php
    
    require_once "Setup.php";

    $uuid = $_POST['uuid'];

    $result = mysql_query("SELECT name, address, contact, telephone, email, fax FROM builders where id='" . $uuid . "';") or die(mysql_error());
    $row_count = mysql_num_rows($result);
    $info = "";

    if ( $row_count > 0 ) {
    	$row = mysql_fetch_object($result);

		$info = $row->name . "|" . $row->address . "|" . $row->contact . "|" . $row->telephone . "|" . $row->email . "|" . $row->fax;
    }

    $result = mysql_query("SELECT price_type, price FROM builder_prices WHERE builder_id='" . $uuid . "';") or die(mysql_error());
    $row_count = mysql_num_rows($result);

    $prices = array();
    $price = "";

    if ( $row_count > 0 ) {

        while ($row = mysql_fetch_object($result)) {

        	$price = $row->price_type . ":" . $row->price;
            
            array_push($prices, $price);
        }

        $info = $info . "|" . join("~", $prices);
    }

    echo $info;

?>