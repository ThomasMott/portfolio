var modal = document.getElementById("cover-js");

function openModal(n) {
	modal.style.display = "flex";
	document.getElementById(`p${n}-js`).style.display = "block";
}

function toggleVis() {
	modal.style.display = "none";
	document.getElementById("p1-js").style.display = "none";
	document.getElementById("p2-js").style.display = "none";
	document.getElementById("p3-js").style.display = "none";
}
