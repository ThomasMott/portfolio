window.onload = init;

function init() {
	createMagic();
	for (let j of document.querySelectorAll('.background-inner')) {j.addEventListener("mouseover", colorMagic)};
}

function createMagic() {
	var randClass = ["circle-s", "circle-m"];

	for (i = 0; i < 32; i++) {
		const div = document.createElement("div");
		div.classList.add("background-inner");
		const innerDiv = document.createElement("div");

		div.appendChild(innerDiv);
		innerDiv.classList.add("background-magic");
		innerDiv.classList.add(randClass[Math.round(Math.random())]);

		div.style.left = `${Math.floor(Math.random() * 70) + 15}%`;
		div.style.top = `${Math.floor(Math.random() * 70) + 15}%`;

		document.getElementById("background").appendChild(div);
	}
}

function colorMagic() {
	var magic = this.childNodes[0];
	var color = '#'+Math.floor(Math.random()*16777215).toString(16);

	magic.style.backgroundColor = color;
};

