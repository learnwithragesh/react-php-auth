<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Credentials: true');
ini_set('display_errors', 1);
session_start();
if (!isset($_SESSION["id"]))
        die("0");
echo $_SESSION["id"];
?>