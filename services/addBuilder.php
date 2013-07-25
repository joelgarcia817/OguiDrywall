<?php

	$name = $_POST['name'];
	$address = $_POST['address'];
	$contact = $_POST['contact'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$fax = $_POST['fax'];

	$phone = str_replace("-", "", $phone);
	$fax = str_replace("-", "", $fax);

    require_once "Setup.php";
    
    mysql_query("INSERT INTO builders (id, name, address, contact, telephone, email, fax) VALUES (uuid(), '"
                . $name . "','" . $address . "','" . $contact . "'," . $phone . ",'" . $email . "'," . $fax . ");") or die(mysql_error());  

    echo "success";
?>	