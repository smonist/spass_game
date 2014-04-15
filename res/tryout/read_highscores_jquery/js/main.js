function load_score_range () {
	var score = document.getElementById("score_input").value;
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open("POST", "/tryout/read_highscores_jquery/php/read_scores_range.php?score=" + score, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		response = xmlhttp.responseText;

		if (xmlhttp.readyState== 4 && xmlhttp.status == 200)
		{
			response = null;
			response_splitted = null;

			response = xmlhttp.responseText;
			response_splitted = response.split(',');

			for (i = 0; i <= response_splitted.length; i++) {
				addRow(response_splitted[i], response_splitted[i+1], response_splitted[i+2], response_splitted[i+3]);
			}
		}
	};
}

function addRow(rank, name, points, time)
{
         if (!document.getElementsByTagName) return;

         tabBody=document.getElementsByTagName("TBODY").item(0);
         row=document.createElement("TR");

         cell1 = document.createElement("TD");
         cell2 = document.createElement("TD");
         cell3 = document.createElement("TD");
         cell4 = document.createElement("TD");
         textnode1=document.createTextNode("R " + rank);
         textnode2=document.createTextNode(name);
         textnode3=document.createTextNode(points);
         textnode4=document.createTextNode(time);

         cell1.appendChild(textnode1);
         cell2.appendChild(textnode2);
         cell3.appendChild(textnode3);
         cell4.appendChild(textnode4);

         row.appendChild(cell1);
         row.appendChild(cell2);
         row.appendChild(cell3);
         row.appendChild(cell4);


         tabBody.appendChild(row);

		var scores_text = document.getElementById("scores_text");
		scores_text.innerHTML = scores_text.innerHTML + "-" + rank + "-" + name + "-" + points + "-" + time;
}

function lol() {
   $(document).ready(function() {
      $("p").click(function() {
         //$(this).hide();


         $.post("/tryout/read_highscores_jquery/php/read_scores_range.php", {score: "5"}, 
            function (data) {
               alert(data);
            });
      });
   });
}