<?php
if (isset($_GET["name"]) && isset($_GET["score"])) {
	$name = $_GET["name"];
	$score = $_GET["score"];
}

$handle = fopen("meinpenisistsolangdeinemutterissteinschokogugelhupfzumittag/aa12787f76d0ad4861a6c6190e6b3a9ae0efb838","r");
$host = fgets($handle, 4096);
$username = fgets($handle, 4096);
$password = fgets($handle, 4096);

$conn = new mysqli ($host, $username, $password, "u34646db1"); //Host, Name, Password, Table


$sql = "INSERT INTO highscores (`name`, `score`) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param('si', $name, $score);


$stmt->execute();
$stmt->close();
$conn->close();
?>