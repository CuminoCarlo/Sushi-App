<?php 
session_start();

unset($_SESSION['invia']);
session_unset();
session_destroy();
header('location:index.php');


?>