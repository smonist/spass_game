var vertical_res = 500;
var horizontal_res = 350;
var res = [0, 0];
var old_res = [0, 0, 0, 0];

var score = 0;
var old_score = -1;

var nIntervId;
var running = false;

function start_game() {
	for (var i = 1; i < 4; i++) {
		document.getElementById("kreis" + i).style.display = "initial";
	};

	rnd_pos();
	score = 0;
	old_score = -1;
	document.getElementById("highscore").innerHTML = score;

	document.getElementById("start_button").style.display = "none";
	document.getElementById("game_over_screen").style.display = "none";
	document.getElementById("highscore").style.display = "initial";
	running = true;
	
	nIntervId = setInterval(timer, 1250);
}


function timer() {
	if (score === old_score) {
		loose();
	}

	old_score = score;
}

function bg_click() {
	if (running) {
		loose();
	}
}

function loose () {
	for (var i = 1; i < 4; i++) {
		document.getElementById("kreis" + i).style.display = "none";
	};

	running = false;
	clearInterval(nIntervId);

	game_over_score.innerHTML = score;
	document.getElementById("game_over_screen").style.display = "initial";
	document.getElementById("highscore").style.display = "none";
}



function submit_highscore_show_input () {
	document.getElementById("game_over_screen").style.display = "none";
	document.getElementById("submit_highscore_screen").style.display = "initial";
}

function submit_highscore() {
	var highscore_name = document.getElementById("highscore_input").value;
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "submit_score.php?name=" +highscore_name +"&score=" +score, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			alert("DATA SENT!");
		}
	}
}

function highest_num(id) {
	if (id.innerHTML >= num1 && id.innerHTML >= num2 && id.innerHTML >= num3) {
		score += 1;
	}

	else {
		loose();
	}

	highscore.innerHTML = score;
}

 function rnd_num() {
 	num1 = Math.floor(Math.random()*10);
 	kreis1.innerHTML = num1;
 	
 	do {
 	num2 = Math.floor(Math.random()*10);
 	} while (num2 === num1);
 	kreis2.innerHTML = num2;

 	do {
 	num3 = Math.floor(Math.random()*10);
 	} while (num3 === num2||num3 === num1);
 	kreis3.innerHTML = num3;
}

function rnd_pos() {
	rnd_res("kreis1");
	rnd_res("kreis2");
	rnd_res("kreis3");
}

function rnd_res(id) {
	 if (id === "kreis1") {
        res[0] = Math.floor(Math.random() * vertical_res);
        res[1] = Math.floor(Math.random() * horizontal_res);

        element = document.getElementById(id);
        element.style.left = res[0] + 'px';
        element.style.top = res[1] + 'px';
    }


    if (id === "kreis2") {
        element = document.getElementById("kreis1");
        old_res[0] = element.offsetLeft;
        old_res[1] = element.offsetTop;

        do {
            res[0] = Math.floor(Math.random() * vertical_res);
        } while ((old_res[0] - 50) < res[0] == res[0] < (old_res[0] + 50));

        do {
            res[1] = Math.floor(Math.random() * horizontal_res);
        } while ((old_res[1] - 50) < res[1] == res[1] < (old_res[1] + 50));

        element = document.getElementById(id);
        element.style.left = res[0] + 'px';
        element.style.top = res[1] + 'px';
    }


    if (id === "kreis3") {
        element = document.getElementById("kreis1");
        old_res[0] = element.offsetLeft;
        old_res[1] = element.offsetTop;

        element2 = document.getElementById("kreis2");
        old_res[2] = element2.offsetLeft;
        old_res[3] = element2.offsetTop;

        do {
            res[0] = Math.floor(Math.random() * vertical_res);
        } while ((old_res[0] - 50) < res[0] == res[0] < (old_res[0] + 50) ||
        	(old_res[2] - 50) < res[0] == res[0] < (old_res[2] + 50));

        do {
            res[1] = Math.floor(Math.random() * horizontal_res);
        } while ((old_res[1] - 50) < res[1] == res[1] < (old_res[1] + 50) ||
        	(old_res[3] - 50) < res[1] == res[1] < (old_res[3] + 50));

        element = document.getElementById(id);
        element.style.left = res[0] + 'px';
        element.style.top = res[1] + 'px';
    }
}

function rnd_pos_num() {
	rnd_pos();
	rnd_num();
}


function high_rnd (id) {
	highest_num(id);
	rnd_pos();
	rnd_num();
}
