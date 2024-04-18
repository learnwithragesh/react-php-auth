<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Credentials: true');
session_start();
setcookie(session_name(), session_id(), [
    'expires' => time() + 3600,
    'path' => '/',
    'secure' => false, // Set to true if using HTTPS
    'httponly' => true, // Recommended for security
    'secure' => true,
    'samesite' => 'None', // Can be 'None', 'Lax', or 'Strict'
]);
$_SESSION["id"] = "10";
echo "1";
?>