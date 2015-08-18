// It boils down to this: A user selects a color and clicks on 
// pixels to paint them with the selected color.

// Here's the order of steps that I would implement:

// Get 10 or so small divs on the screen
// Add an event listener to each so that when I click on a pixel it 
// turns red
// Add a color palette div with 2 colors(red and purple)which allows 
// he user to set the current "paintbrush" color instead of it always 
// being set to red
// Add the rest of the standard rainbow colors to the color palette
// Add enough divs to fill up the entire screen

window.onload = function(){

console.log("check");


// Create divs
for(var i = 0; i < 2508; i++)
{
	// Create a div
	// Need to keep re-defining the div inside of a for-loop
	// so appendChild will recognize NEW divs, if not, appendChild
	// will only append only the 1 time i define it
	var div = document.createElement("div");

	//Add Style

	div.style.border = "1px solid";
	div.style.borderCollapse = "collapse";
	
	div.style.width = "15px";
	div.style.paddingBottom = "15px";
	div.style.cssFloat = "left";
	div.style.margin="1px";


	// Append to parent
	document.body.appendChild(div);
}


//Assign last 2 divs to be color palletes
colorPallete();

addListener();





}  // END ONLOAD

// An array of div elements
var divList = document.getElementsByTagName("div");

var currentColor = "black";

console.log(divList);
function addListener()
{
	for(var i=0; i < divList.length;i++)
	{
		if(divList[i].classList[0] === "colorPallete")
		{
			divList[i].addEventListener("click",colorSwap);
		}
		else
		{
			divList[i].addEventListener("click",changeColor);
		}
	}
}

function changeColor()
{

	//if currentColor = "purple"
	// this.style.backgroundColor = currentColor
	console.log(this);
	this.style.backgroundColor = currentColor;
}

function colorSwap()
{
	console.log(this.style.backgroundColor);
	currentColor = this.style.backgroundColor;
}



function colorPallete()
{
	// Turn off color changing mode listeners to bottom row
	//divList[divList.length - 1].removeEventListener("click",changeColor);
	//vList[divList.length - 2].removeEventListener("click",changeColor);
	


	//Create background pallete color
	divList[divList.length - 1].style.borderColor = "purple";
	divList[divList.length - 2].style.backgroundColor = "red";
	divList[divList.length - 3].style.backgroundColor = "green";
	divList[divList.length - 4].style.backgroundColor = "blue";
	divList[divList.length - 5].style.backgroundColor = "orange";
	divList[divList.length - 6].style.backgroundColor = "black";
	divList[divList.length - 7].style.backgroundColor = "yellow";
	divList[divList.length - 8].style.backgroundColor = "aqua";
	divList[divList.length - 9].style.backgroundColor = "brown";
	divList[divList.length - 10].style.backgroundColor = "burlywood";
	divList[divList.length - 11].style.backgroundColor = "darkseagreen";
	divList[divList.length - 12].style.backgroundColor = "white";
	divList[divList.length - 13].style.backgroundColor = "BlanchedAlmond";
	divList[divList.length - 14].style.backgroundColor = "BurlyWood";
	divList[divList.length - 15].style.backgroundColor = "Coral";
	divList[divList.length - 16].style.backgroundColor = "Chocolate";
	divList[divList.length - 17].style.backgroundColor = "DarkGoldenRod";
	divList[divList.length - 18].style.backgroundColor = "GreenYellow";
	divList[divList.length - 19].style.backgroundColor = "HotPink";
	divList[divList.length - 20].style.backgroundColor = "Indigo";
	divList[divList.length - 21].style.backgroundColor = "Khaki";
	divList[divList.length - 22].style.backgroundColor = "LightBlue";
	divList[divList.length - 23].style.backgroundColor = "LightSkyBlue";
	divList[divList.length - 24].style.backgroundColor = "Maroon";
	divList[divList.length - 25].style.backgroundColor = "MediumTurquoise";
	divList[divList.length - 26].style.backgroundColor = "MidnightBlue";
	
	//Add class values to indicate its a color swapper
	divList[divList.length - 1].classList.add("colorPallete");
	divList[divList.length - 2].classList.add("colorPallete");
	divList[divList.length - 3].classList.add("colorPallete");
	divList[divList.length - 4].classList.add("colorPallete");
	divList[divList.length - 5].classList.add("colorPallete");
	divList[divList.length - 6].classList.add("colorPallete");
	divList[divList.length - 7].classList.add("colorPallete");
	divList[divList.length - 8].classList.add("colorPallete");
	divList[divList.length - 9].classList.add("colorPallete");
	divList[divList.length - 10].classList.add("colorPallete");
	divList[divList.length - 11].classList.add("colorPallete");
	divList[divList.length - 12].classList.add("colorPallete");
	divList[divList.length - 13].classList.add("colorPallete");
	divList[divList.length - 14].classList.add("colorPallete");
	divList[divList.length - 15].classList.add("colorPallete");
	divList[divList.length - 16].classList.add("colorPallete");
	divList[divList.length - 17].classList.add("colorPallete");
	divList[divList.length - 18].classList.add("colorPallete");
	divList[divList.length - 19].classList.add("colorPallete");
	divList[divList.length - 20].classList.add("colorPallete");
	divList[divList.length - 21].classList.add("colorPallete");
	divList[divList.length - 22].classList.add("colorPallete");
	divList[divList.length - 23].classList.add("colorPallete");
	divList[divList.length - 24].classList.add("colorPallete");
	divList[divList.length - 25].classList.add("colorPallete");
	divList[divList.length - 26].classList.add("colorPallete");
}



