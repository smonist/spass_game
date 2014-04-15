<?php
$conn = new mysqli ("localhost", "u46698db1", "fielspasss", "u46698db1"); //Host, Name, Password, Table

$data = $conn->query("SELECT name, score, time FROM  highscores ORDER BY score DESC");

echo '<table border="1" align="center" >';
echo ' <tr>';
echo ' <th>Platz</th>';
echo ' <th>Name</th>';
echo ' <th>Punkte</th>';
echo ' <th>Uhrzeit</th>';
echo ' </tr>';

$i=1;
//Nun werden die ganzen Daten die wir erhalten haben in einen Array gespeichert
while ($table = $data->fetch_array()){
	//und das ganze in einer Schleife(soviel Einträge wie im Array stehen) ausgegeben
	echo ' <tr  align="center">';
	echo ' <td>'.$i.'.</td>';  //Der Platz
	echo ' <td>'.$table['name'].'</td>'; //der Name
	echo ' <td>'.$table['score'].'</td>';// die Punkte

	$timestamp_format = date("H:i, d.m.y", strtotime($table['time'].'+2 hours'));
	echo ' <td>'.$timestamp_format.'</td>';// die Uhrzeit
	echo ' </tr>';
	$i+=1; //Platzierung wird um 1 erhöht
}
echo '</table>';



$data->close();
$conn->close();
?>