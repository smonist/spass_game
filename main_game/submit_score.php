<?php
if (isset($_GET["name"]) && isset($_GET["score"])) {
	$name = $_GET["name"];
	$score = $_GET["score"];
}


$conn = new mysqli ("localhost", "u34646db1", "fielspasss", "u34646db1"); //Host, Name, Password, Table


$sql = "INSERT INTO highscores (`name`, `score`) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param('si', $name, $score);


$stmt->execute();
$stmt->close();
$conn->close();
?>