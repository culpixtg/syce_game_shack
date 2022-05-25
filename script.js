// {
// 	let currentTheme = localStorage.getItem("TitleColor")
// 	if(currentTheme === "Classic" || currentTheme === null){
// 		document.getElementById("title").style.class = "neon";
// 	}

// 	if(currentTheme === "Blue" || currentTheme === null){
// 		document.getElementById("title").style.class = "neon-blue";
// 	}

// 	setInterval(() => {
// 		console.log(document.getElementById("themeSelect").value)
// 	}, 100)
// }

function setTheme() {
	let theme = localStorage.getItem("theme")
	if(!theme) theme = "Classic"

	if(theme === "Classic"){
		let e = document.getElementById("title")
		e.style.textShadow = "0 0 5px #ff7bac, 0 0 10px #ff7bac, 0 0 20px #ff7bac, 0 0 40px #ff7bac, 0 0 80px #ff7bac, 0 0 90px #ff7bac, 0 0 100px #ff7bac, 0 0 150px #ff7bac";

		let r = document.getElementById("sub-title")
		r.style.textShadow = "0 0 5px #005eff, 0 0 10px #005eff, 0 0 20px #005eff, 0 0 40px #005eff, 0 0 80px #005eff, 0 0 90px #005eff, 0 0 100px #005eff, 0 0 150px #005eff";
	}

	if(theme === "Gold"){
		let e = document.getElementById("title")
		e.style.textShadow = "0 0 5px #ffbb00, 0 0 10px #ffbb00, 0 0 20px #ffbb00, 0 0 40px #ffbb00, 0 0 80px #ffbb00, 0 0 90px #ffbb00, 0 0 100px #ffbb00, 0 0 150px #ffbb00";

		let r = document.getElementById("sub-title")
		r.style.textShadow = "0 0 5px #005eff, 0 0 10px #005eff, 0 0 20px #005eff, 0 0 40px #005eff, 0 0 80px #005eff, 0 0 90px #005eff, 0 0 100px #005eff, 0 0 150px #005eff";
	}

	if(theme === "Blue"){
		let e = document.getElementById("title")
		e.style.textShadow = "0 0 5px #005eff, 0 0 10px #005eff, 0 0 20px #005eff, 0 0 40px #005eff, 0 0 80px #005eff, 0 0 90px #005eff, 0 0 100px #005eff, 0 0 150px #005eff";

		let r = document.getElementById("sub-title")
		r.style.textShadow = "0 0 5px #ff7bac, 0 0 10px #ff7bac, 0 0 20px #ff7bac, 0 0 40px #ff7bac, 0 0 80px #ff7bac, 0 0 90px #ff7bac, 0 0 100px #ff7bac, 0 0 150px #ff7bac";
	}

	if(theme === "Green"){
		let e = document.getElementById("title")
		e.style.textShadow = "0 0 5px #0be600, 0 0 10px #0be600, 0 0 20px #0be600, 0 0 40px #0be600, 0 0 80px #0be600, 0 0 90px #0be600, 0 0 100px #0be600, 0 0 150px #0be600";

		let r = document.getElementById("sub-title")
		r.style.textShadow = "0 0 5px #005eff, 0 0 10px #005eff, 0 0 20px #005eff, 0 0 40px #005eff, 0 0 80px #005eff, 0 0 90px #005eff, 0 0 100px #005eff, 0 0 150px #005eff";
	}
}

setCloak()

function setCloak() {
	let icon = localStorage.getItem("tabCloak")
	if(!icon) icon = "Google Slides"
	var link = window.document.querySelector("link[rel~='icon']");
	if (!link) {
		link = window.document.createElement('link');
		link.rel = 'icon';
		window.document.getElementsByTagName('head')[0].appendChild(link);
	}

	if(icon === "Default"){
		link.href = 'sgs-favicon.png';
		document.title = "Syce's Game Shack"
	}

	if(icon === "Google Slides"){
		link.href = 'https://ssl.gstatic.com/docs/presentations/images/favicon5.ico';
		document.title = "Google Slides"
	}

	if(icon === "Google Docs"){
		link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
		document.title = "Google Docs"
	}

	if(icon === "Google Drive"){
		link.href = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';
		document.title = "My Drive - Google Drive"
	}

	if(icon === "Schoology"){
		link.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
		document.title = "Home | Schoology"
	}

	if(icon === "Desmos"){
		link.href = 'https://www.desmos.com/assets/img/touch-icon-192x192.png';
		document.title = "Desmos | Scientific Calculator"
	}
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

window.addEventListener("load", function(){
	var themeSelect = document.getElementById("themeSelect")
 	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 
 	var ddl = document.getElementById('themeSelect');
	if (ddl == null) {} else {
		var opts = ddl.options.length;
		for (var i=0; i<opts; i++){
			if (ddl.options[i].value == localStorage.getItem('theme')){
				ddl.options[i].selected = true;
				break;
			}
		} 
	}

	var cloakSelect = document.getElementById("cloakSelect")
 	if (localStorage.getItem('tabCloak') === null ){ localStorage.setItem('tabCloak', "Google Slides"); }
 	var ddl = document.getElementById('cloakSelect');
	if (ddl == null) {} else {
		var opts = ddl.options.length;
		for (var i=0; i<opts; i++){
			if (ddl.options[i].value == localStorage.getItem('tabCloak')){
				ddl.options[i].selected = true;
				break;
			}
		} 
	}
})


window.onload = (event) => {	
 	setTheme()
	
	var themeSelect = document.getElementById("themeSelect")
	themeSelect.addEventListener("change", function(event){
		if (localStorage.getItem('theme')===null ){ localStorage.setItem('theme', "Classic"); }
		localStorage.setItem('theme', event.target.value);
		setTheme()
	})

	setCloak()
	
	var cloakSelect = document.getElementById("cloakSelect")
	cloakSelect.addEventListener("change", function(event){
		if (localStorage.getItem('tabCloak')===null ){ localStorage.setItem('tabCloak', "Google Slides"); }
		localStorage.setItem('tabCloak', event.target.value);
		setCloak()
	})
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

	let two_player_games = [
		"Basketball Stars",
		"Basketbros.io",
		"Getaway Shootout",
		"Rooftop Snipers",
	]

	let adventure_games = [
		"Burrito Bisen",
		"CraftMine",
		"Duck Life 3",
		"Duck Life 4",
		"Getting Over It",
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
		"Crossy Road",
		"Draw The Hill",
		"Geometry Dash",
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

	let rougelike_games = [
		"Binding of Isaac",
	]

	let runner_games = [
		"Subway Surfers",
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
		"Cannon Basketball 4",
	]
  
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

		if(tag === "2_Player"){
			for(o = 0; o < two_player_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === two_player_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

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

		if(tag === "Rougelike"){
			for(o = 0; o < rougelike_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === rougelike_games[o].toLowerCase()) {
						console.log(a[i])
						a[i].style.display="inline-table";
					}
				}
			}
		}

		if(tag === "Runner"){
			for(o = 0; o < runner_games.length; o++){
				for (i = 0; i < a.length; i++) {
					if (a[i].id.toLowerCase() === runner_games[o].toLowerCase()) {
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