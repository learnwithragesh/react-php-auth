<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
session_start();
session_unset();
session_destroy();
echo "1";
?>
