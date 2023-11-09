window.onload = init;

function init() {
	createMagic();
	for (let j of document.querySelectorAll(".absolute")) {
		j.addEventListener("mouseover", colorMagic);
	}
}

function createMagic() {
	for (i = 4; i < 96; i += 10) {
		for (j = 12; j <= 92; j += 10) {
			const div = document.createElement("div");
			div.classList.add("absolute");
			const innerDiv = document.createElement("div");

			div.appendChild(innerDiv);
			// innerDiv.classList.add("bg-white");
			innerDiv.classList.add("w-40");
			innerDiv.classList.add("h-40");
			innerDiv.classList.add("rounded-full");
			innerDiv.classList.add("bg-pink-200");

			div.style.left = `${i}%`;
			div.style.top = `${j}%`;

			// var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
			// div.style.backgroundColor = color;

			document.getElementById("background").appendChild(div);
		}
	}
}

function colorMagic() {
	var magic = this.childNodes[0];
	// var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	var color = "#1e313b";

	magic.style.backgroundColor = color;
}
