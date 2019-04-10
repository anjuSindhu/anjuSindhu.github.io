function showSection(sectionName){//alert("show the section - " + sectionName);
	document.getElementById("main").style.display = "none";
	document.getElementById("demo1").style.display = "none";
	document.getElementById("table").style.display = "none";
	document.getElementById("form").style.display = "none";
	document.getElementById("svg_section").style.display = "none";
	document.getElementById("data_section").style.display = "none";
	document.getElementById(sectionName).style.display = "block";
	if(sectionName == "svg_section"){
showCanvas();
	}


}

function bindChangeColor(){alert("in init of randomcolor js");

	// Get a reference to every h3 tag
	var h1tags = document.getElementsByTagName("h1");
	
	// When the first h1 tag is clicked call the function changeColor
	h1tags[0].onclick = changeColor;

}

function changeColor(event){//alert("hello" + event);

	// this refers to the item clicked and changes the content in the tag to Click Again
	event.target.innerHTML = "Click Again";
	
	// Generates a random color hex code
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	
	// Change the color of the element to the random color
	event.target.style.color = randomcolor;

}

