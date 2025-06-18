const button = document.getElementById("birthday-button");
const lights = document.getElementById("bg");
const lightBtn = document.getElementById("birthday-button");
const bulbs = document.getElementById("lights");
const bulb = document.getElementById("bulb");
button.addEventListener('click', function(){
    lights.style.backgroundColor = "#f8f8ca";
    lightBtn.style.display = "none";
    bulbs.style.display ="inline";
    bulb.classList.toggle= "active";

})  