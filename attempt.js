html erb stuff - in the views directory
<button id="greet-user-button">Hello!</button>
<%= javascript_pack_tag 'hello'%>


---------------------------------------------------------------------------------------------------------

hello.js file stuff
 //this function is just going to generate an alert which says hello...
function hello(name) {
    let greeting = "Hello, " + name + "!";
    console.log(greeting);
    alert(greeting);
}

//now lets write a function that changes the font colour of a particular section of the code
function changeFontColour() {
	document.getElementById("INSERT NAME HERE").style.color = "blue";
}

function changeFontColour() {
	document.getElementById("INSERT NAME HERE").style.color = "blue";
}

//function addBackgroundImage() {
//	document.body.style.backgroundImage = "url('INSERT NAME HERE')";
//}

function changeBankName() {
	document.getElementById("INSERT THE ID HERE").innerHTML = "Pascal Bank"
	//need to find out where the title is that says Osprey Bank in the Navbar// 
}

function changeFontFamily() {
	document.getElementById("INSERT ID HERE").style.fontFamily = "Geneva, sans-serif, sans-serif";
}

function changeFontSize() {
	document.getElementById("insert ID here").style.fontSize = "x-large";
}


function changeFontStyle() {
	document.getElementById("insert ID here").style.fontStyle = "italic";
}


function addBackgroundColor() {
	document.body.style.backgroundColor = "red";
}

document.addEventListener('turbolinks:load', () => {
    const clickButton = document.getElementById("greet-user-button");
    clickButton.addEventListener('click', (event) => {
        hello('JavaScript')
    });
    clickButton.addEventListener('click', (event) => {changeFontColour()}); --> check that this is the correct call for the function
});



