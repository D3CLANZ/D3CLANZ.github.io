<?php
// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <ul>
            <li><a class="active" href="./">Home</a></li>
            <li style="float: right;"><a href="logout.php">Logout</a></li>
            <li style="float: right; padding: 15px;">Logged in as: <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b></li>
        </ul>
        
        <div class="footer">
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
        </div>
    </body>
</html>