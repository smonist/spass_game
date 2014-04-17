<?php
if (isset($_POST["score"])) {
	$score = $_POST["score"];
}


$conn = new mysqli ("localhost", "u46698db1", "fielspasss", "u46698db1"); //Host, Name, Password, Table

$data = $conn->query("SELECT name, score, time FROM  highscores ORDER BY score DESC");

$rank = 0;
do {
	$table = $data->fetch_array();
	$rank++;
} while ($table['score'] >= $score);


send_data($table['name'], $table['score'], $table['time']);

for ($i=0; $i < 10; $i++) {
	if ($table = $data->fetch_array()) {
		send_data($table['name'], $table['score'], $table['time']);
	}
}

function send_data($name, $score, $timestamp) {
	echo $GLOBALS['rank'];
	echo ",";

	echo $name;
	echo ",";

	echo $score;
	echo ",";

	$timestamp_format = date("H:i d.m.y", strtotime($timestamp.'+2 hours'));
	echo $timestamp_format;
	echo ",";
	
	$GLOBALS['rank']++;
}


$data->close();
$conn->close();
?>