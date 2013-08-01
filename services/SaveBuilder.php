<?php

	$name = $_POST['name'];
	$address = $_POST['address'];
	$contact = $_POST['contact'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$fax = $_POST['fax'];
	$prices_string = $_POST['prices'];

	$phone = str_replace("-", "", $phone);
	$fax = str_replace("-", "", $fax);

    require_once "Setup.php";
    require_once "GenerateUUID.php";

    $uuid = gen_uuid();
    
    mysql_query("INSERT INTO builders (id, name, address, contact, telephone, email, fax) VALUES ('" . $uuid . "', '"
                . $name . "','" . $address . "','" . $contact . "'," . $phone . ",'" . $email . "'," . $fax . ");") or die(mysql_error()); 
	
    $prices = explode("|", $prices_string);      

    foreach ($prices as $price) {

		$price_parts = explode("-", $price);  
		$price_type = $price_parts[0];
		$price_value = $price_parts[1];

    	mysql_query("INSERT INTO builder_prices (builder_id, price_type, price) VALUES ('" . $uuid . "'," . $price_type . ","
    	            . $price_value . ");"); 
    }     
    
    echo "success";
?>	