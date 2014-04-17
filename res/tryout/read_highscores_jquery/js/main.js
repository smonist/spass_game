function load_score_range_xmlhttp () {
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
			response_splitted = response.split(",");

         for (i = 0; i < Math.floor(response_splitted.length)-1; i += 4) {
            addRow(response_splitted[i], response_splitted[i+1], response_splitted[i+2], response_splitted[i+3]);
         }
		}
	};
}

function addRow(rank, name, points, time)
{
   var cell = new Array();
   var textnode = new Array();

   tabBody=document.getElementsByTagName("TBODY").item(0);
   row=document.createElement("TR");


   textnode[1]=document.createTextNode(rank);
   textnode[2]=document.createTextNode(name);
   textnode[3]=document.createTextNode(points);
   textnode[4]=document.createTextNode(time);


   for (var i = 1; i <= 4; i++) {
      cell[i] = document.createElement("TD");
      cell[i].appendChild(textnode[i]);
      row.appendChild(cell[i]);
   }
   tabBody.appendChild(row);
}

function load_score_range_jquery() {
   $(document).ready(function() {
      $("#button_jquery").click(function() {

         $.post("/tryout/read_highscores_jquery/php/read_scores_range.php", {score: $("#score_input").val()}, 
            function (data) {
               $("tbody tr").remove();
               $("#scores_text").text(data);
               var response_splitted = data.split(",");
               for (i = 0; i < Math.floor(response_splitted.length)-1; i += 4) {
                  addRow(response_splitted[i], response_splitted[i+1], response_splitted[i+2], response_splitted[i+3]);
               }
            });
      });
   });
}


function removeAll() {

}