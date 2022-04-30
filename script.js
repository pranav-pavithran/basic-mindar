function loadFunction(params) {
    const urlParams = new URLSearchParams(window.location.search)
	let font = urlParams.get("font")
	let text = urlParams.get("text")

   // var sceneNode = document.getElementById("#scene");
    const markerDiv = document.createElement("a-troika-text");

    markerDiv.setAttribute("color", "red");
    markerDiv.setAttribute("font", `./fonts/${font}.ttf`);
    markerDiv.setAttribute("value", text);

    var element = document.getElementById("#modelEntity");
	element.appendChild(markerDiv);

}