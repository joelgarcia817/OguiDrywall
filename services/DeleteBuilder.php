<?php

	require_once "Setup.php";

	$uuid = $_POST['uuid'];

	mysql_query("DELETE FROM builders WHERE id='" . $uuid . "';") or die(mysql_error());

	mysql_query("DELETE FROM builder_prices WHERE builder_id='" . $uuid . "';") or die(mysql_error());

?>