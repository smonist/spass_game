<?php
if (isset($_GET["score"])) {
	$score = $_GET["score"];
}


$conn = new mysqli ("localhost", "u46698db1", "fielspasss", "u46698db1"); //Host, Name, Password, Table

$data = $conn->query("SELECT name, score, time FROM  highscores ORDER BY score DESC");

$rank = 1;
do {
	$table = $data->fetch_array();
	$rank++;
} while ($table['score'] > $score);

for ($i=0; $i < 10; $i++) { 
	if ($table = $data->fetch_array()) {
		echo $rank;
		echo $table['name'];
		echo $table['score'];

		$timestamp_format = date("H:i, d.m.y", strtotime($table['time'].'+2 hours'));
		echo $timestamp_format;
		echo "<br>";
		$rank++;
	}
}


$data->close();
$conn->close();
?>