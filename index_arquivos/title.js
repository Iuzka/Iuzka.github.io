    	function loaded() {
		setInterval(loop, 250)
		}
		document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
		loaded()
		}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
		loaded()
		});
		var x = 0,
		titleText = ["$", "W|", "Wi", "Wis|", "Wise", "Wise |", "Wise N", "Wise No|", "Wise No ", "Wise No T|", "Wise No To", "Wise No Top|", "Wise No Topo", "Wise No Topo|","Wise No Topo", "Wise No Topo|", "Wise No Topo", "Wise No Topo|", "Wise No Topo"];
		
		function loop() {
		document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
        }
