<?php
$conn = new mysqli ("localhost", "u34646db1", "fielspasss", "u34646db1"); //Host, Name, Password, Table

$data = $conn->query("SELECT * FROM  highscores ORDER BY score DESC LIMIT 10");

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
	echo ' <td>'.$table[name].'</td>'; //der Name
	echo ' <td>'.$table[score].'</td>';// die Punkte
	echo ' <td>'.$table[time].'</td>';// die Uhrzeit
	echo ' </tr>';
	$i+=1; //Platzierung wird um 1 erhöht
}
echo '</table>';



$data->close();
$conn->close();
?>