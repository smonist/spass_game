<?php
//$host = "e32968-mysql.services.easyname.eu";
//$username = "u34646db1";
//$password = "fielspasss";

$conn = new mysqli ("localhost", "root", "", "u34646db1"); //Host, Name, Password, Table



$name = 'hoe';
$score = '0815';
$sql = "INSERT INTO highscores (`name`, `score`) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param('si', $name, $score);


$stmt->execute();
$stmt->close();
$conn->close();
?>


<!doctype html>

<html>
<body>
	<form action="local.php" method="post">
		<input type="submit">
	</form>


</body>	
</html>