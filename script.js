// Hooking into my submit button, and creating variable for inputValue:

var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");

// Creating variables for the information that will be pulled from the API and displayed to the User:

var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

// Click Listener and 

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +inputValue.value+ "&appid=2c6356638316e418322dd5160cce5cd2")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => alert("City Not Found"))
})




