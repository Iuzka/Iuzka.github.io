    	function loaded() {
		setInterval(loop, 250)
		}
		document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
		loaded()
		}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
		loaded()
		});
		var x = 0,
		titleText = ["$", "M|", "Mo", "Mor|", "Morp", "Morph|", "Morphe", "Morpheu|", "Morpheus", "Morpheus N|", "Morpheus No", "Morpheus No T|", "Morpheus No To", "Morpheus No Top|", "Morpheus No Topo", "Morpheus No Topo|","Morpheus No Topo", "Morpheus No Topo|", "Morpheus No Topo", "Morpheus No Topo|", "Morpheus No Topo"];

		function loop() {
		document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
        }
