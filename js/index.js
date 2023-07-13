window.onload = init;

function init() {
	createMagic();
	for (let j of document.querySelectorAll(".absolute")) {
		j.addEventListener("mouseover", colorMagic);
	}
}

function createMagic() {
	for (i = 16; i < 84; i += 1) {
		for (j = 24; j <= 84; j += 2) {
			const div = document.createElement("div");
			div.classList.add("absolute");
			const innerDiv = document.createElement("div");

			div.appendChild(innerDiv);
			// innerDiv.classList.add("bg-white");
			innerDiv.classList.add("w-4");
			innerDiv.classList.add("h-4");

			div.style.left = `${i}%`;
			div.style.top = `${j}%`;

			var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
			div.style.backgroundColor = color;

			document.getElementById("background").appendChild(div);
		}
	}
}

function colorMagic() {
	var magic = this.childNodes[0];
	var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	// var color = '#fccd6b';

	magic.style.backgroundColor = color;
}
