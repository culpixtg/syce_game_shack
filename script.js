function loadGame(){
	var game = localStorage.getItem("currentGame");
	var url = "https://000687715.codepen.website/#"+game;
	document.getElementById("gameIframe").src = url;
	document.getElementById("likeButton").setAttribute("data-identifier", game);
	
	setTheme();
	
	if (window.location != window.parent.location) {
		var fs = document.getElementById("fullScreenBtn")
		if (fs == null) {} else {
			fs.innerHTML = "Open in full screen tab"
		}
	}
	
	var themeSelect = document.getElementById("themeSelect")
	themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 console.log(localStorage.getItem('theme'))
 setTheme()
}
)
}

function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('container');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline-table";                 
        }
    }
}

function setTheme() {
	var sel = document.getElementById("themeSelect")
	var theme
	if (sel === null) {
		if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
		theme = localStorage.getItem('theme')
	} else {theme = document.getElementById("themeSelect").value}
 
 if (theme==="Classic") {
   document.getElementById("title").style.color="#fc033d";
	 	document.getElementById("title2").style.color="#fc033d";
 }
 if (theme==="Gold") {
   document.getElementById("title").style.color="#ffbb00";
		document.getElementById("title2").style.color="#ffbb00";
 }
 if (theme==="Blue") {
   document.getElementById("title").style.color="#0073ff";
		document.getElementById("title2").style.color="#0073ff";
 }
 if (theme==="Green") {
   document.getElementById("title").style.color="#0be600";
		document.getElementById("title2").style.color="#0be600";
 }
}

window.addEventListener("load",function(){
	var themeSelect = document.getElementById("themeSelect")
 if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 
  console.log(localStorage.getItem('theme'));
 
 var ddl = document.getElementById('themeSelect');
	console.log(ddl)
	if (ddl == null) {} else	{
var opts = ddl.options.length;
for (var i=0; i<opts; i++){
    if (ddl.options[i].value == localStorage.getItem('theme')){
        ddl.options[i].selected = true;
        break;
    }
} }
})


window.onload = (event) => {	
 setTheme()
	
		var themeSelect = document.getElementById("themeSelect")
		themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 console.log(localStorage.getItem('theme'))
 setTheme()
}
)
};

function play(game,gameName){
	localStorage.setItem("currentGame",game)
	window.location = "/g/gamepage.html"
}

function showEmbed() {
	var embedCode = document.getElementById("embedCodeDiv")
	if (embedCode.style.display == "none") {
		var code = '<iframe style="width:1000px;height:600px;border-radius:5px;" src="https://bgembed.netlify.app/#'
 	code = code + localStorage.getItem("currentGame")
 	code = code + '">'
 	document.getElementById("embedCode").value = code
 	embedCode.style.display = "block"
	} else {embedCode.style.display = "none";}
}

function fullscreen() {
	if (window.location == window.parent.location) {
		//not iframe
			var elem = document.getElementById("gameIframe");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
	} else {
		//iframe
		window.location = "gamepage-full.html"
	}
}

var threshold = 160;
var devtools = {
		open: false,
		orientation: null
	};
setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
			if (!devtools.open || devtools.orientation !== orientation) {
				location.reload();
			}

		} else {
			//closed
		}
	}, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}

	function gameselection() {
		window.location = "../index.html"   
	}

	/* When the user clicks on the button,
	toggle between hiding and showing the dropdown content */
	function myFunction() {
		e = document.getElementById("myDropdown")
		if(e.style.display === "none" || (e.style.display !== "none" && e.style.display !== "block")){
			e.style.display = "block"
		} else {
			e.style.display = "none"
		}
	}

	function clearFilter(){
		a = document.getElementsByClassName("container");

		for (i = 0; i < a.length; i++) {
			a[i].style.display = "inline-block";
		}

		e = document.getElementById("clearFilter");
		e.style.display="none"
	}

	let adventure_games = [
		"Burrito Bisen",
		"CraftMine",
		"Duck Life 3",
		"Duck Life 4",
		"Getting Over It",
		"Minecraft",
		"Paper Minecraft",
		"Pokemon Emerald",
		"Pokemon Sapphire",
		"Run 3",
		"Turbo Moto Racer"
	]

	let arcade_games = [
		"99 Balls",
		"Appel",
		"Ball Blast",
		"Basketball Stars",
		"Basketbros.io",
		"Cannon Basketball 4",
		"Crossy Road",
		"Draw The Hill",
		"Geometry Dash",
		"Paper.io",
		"Slither.io",
		"Stack",
		"Super Mario Bros",
		"Temple Run 2"
	]

	let classic_games = [
		"Chess",
		"Connect 4",
		"Minesweeper"
	]

	let drifting_games = [
		"Drift Hunters",
		"Tanuki Sunset"
	]

	let driving_games = [
		"Moto X3M",
		"Moto X3M Pool Party",
		"Moto X3M Spooky",
		"Moto X3M Winter",
		"Turbo Moto Racer",
	]

	let fps_games = [
		"1v1.lol",
		"Shell Shockers",
		"Time Shooter 2",
		"Time Shooter 3",
	]

	let misc_games = [
		"Adventure Capitalist",
		"Cookie Clicker",
		"Idle Breakout",
		"Slope 1",
	]

	let mystery_games = [
		"Among Us",
	]

	let puzzle_games = [
		"2048",
		"Bloxorz",
		"BoxBob",
		"Cut the Rope CTR",
		"Cut the Rope Holiday CTR Holiday",
		"Cut the Rope Time Travel CTR Time Travel",
		"Edge Not Found",
		"Minesweeper",
		"Roadblocks",
		"Tetris",
		"Wordle+",
	]

	let rhythm_games = [
		"Friday Night Funkin'",
		"Incredibox",
	]

	let shooter_games = [
		"1v1.lol",
		"Getaway Shootout",
		"My Friend Pedro",
		"My Friend Pedro Arena",
		"Rooftop Snipers",
		"Time Shooter 2",
		"Time Shooter 3",
		"Zombs Royale",
	]

	let sports_games = [
		"Basketball Stars",
		"Basketbros.io",
		"Cannon Basketball",
	]

	function filterFunction_Adventure() {
		filterFunction("Adventure")
	}

	function filterFunction_Arcade() {
		filterFunction("Arcade")
	}

	function filterFunction_Classic() {
		filterFunction("Classic")
	}

	function filterFunction_Drifting() {
		filterFunction("Drifting")
	}

	function filterFunction_Driving() {
		filterFunction("Driving")
	}

	function filterFunction_FPS() {
		filterFunction("FPS")
	}

	function filterFunction_Misc() {
		filterFunction("Misc")
	}

	function filterFunction_Mystery() {
		filterFunction("Mystery")
	}

	function filterFunction_Puzzle() {
		filterFunction("Puzzle")
	}

	function filterFunction_Rhythm() {
		filterFunction("Rhythm")
	}

	function filterFunction_Shooter() {
		filterFunction("Shooter")
	}

	function filterFunction_Sports() {
		filterFunction("Sports")
	}
  
	async function filterFunction(tag) {
		div = document.getElementById("myDropdown");
		a = document.getElementsByClassName("container");

		for (i = 0; i < a.length; i++) {
			a[i].style.display = "none";
		}

		e = document.getElementById("clearFilter");
		e.style.display="inline-block"

		e = document.getElementById("myDropdown");
		e.style.display="none"

		if(tag === "Adventure"){
			for(o = 0; o < adventure_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === adventure_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Arcade"){
			for(o = 0; o < arcade_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === arcade_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Classic"){
			for(o = 0; o < classic_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === classic_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Drifting"){
			for(o = 0; o < drifting_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === drifting_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Driving"){
			for(o = 0; o < driving_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === driving_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "FPS"){
			for(o = 0; o < fps_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === fps_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Misc"){
			for(o = 0; o < misc_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === misc_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Mystery"){
			for(o = 0; o < mystery_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === mystery_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Puzzle"){
			for(o = 0; o < puzzle_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === puzzle_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Rhythm"){
			for(o = 0; o < rhythm_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === rhythm_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Shooter"){
			for(o = 0; o < shooter_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === shooter_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Sports"){
			for(o = 0; o < sports_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === sports_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}
	}