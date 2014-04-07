function load_score_range () {
	var score = document.getElementById("score_input").value;
	var xmlhttp = new XMLHttpRequest();
	var response = "nuthin";

	xmlhttp.open("GET", "/tryout/read_highscores/php/read_scores_range.php?score=" + score, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		response = xmlhttp.responseText;
		alert(response);

		if (xmlhttp.readyState== 4 && xmlhttp.status == 200)
		{
			response = xmlhttp.responseText;
			alert(response);
		}
	};
}