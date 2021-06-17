function openModal(n) {
	var x = document.getElementById(`p${n}-js`);
	var y= document.getElementById(`p${n}-img-js`);
	var z = sessionStorage.getItem(n);

	if (z == "true") {
		x.removeAttribute('style');
		y.removeAttribute('style');
		sessionStorage.removeItem(n);
	}
	if (z == "false" || z === null) {
		x.style.display = "flex";
		y.style.opacity = 1;
		y.style.filter = "none";
		sessionStorage.setItem(n, true);
	}
}
