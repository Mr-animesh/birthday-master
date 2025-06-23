const lights = document.getElementById("bg");
const button = document.getElementById("turn-on");
const bulbs = document.getElementById("bulbs");
const musicBtn = document.getElementById("play");
const song = document.getElementById('song');
const bannerBtn = document.getElementById("banner");
const banner = document.getElementById("banner-in")
const flyBallonsBtn = document.getElementById("ballons");
const ballons = document.getElementById("ballon")
const bulb = document.getElementById("bulb");
const cakeBtn = document.getElementById("cakeBtn");
const cake = document.getElementById("cake");
const candleBtn = document.getElementById("candleBtn");
const hpyBdyBtn = document.getElementById("hpyBdyBtn");
const msgBtn = document.getElementById("msgBtn");
const candle = document.getElementById("candle");
const setup = document.getElementById("setup");
const msg = document.getElementById("msg");

button.addEventListener('click', function(){
    lights.style.backgroundColor = "#f8f8ca";
    button.style.display = "none";
    bulbs.style.display ="inline";
    musicBtn.style.display= "inline";
})  

musicBtn.addEventListener('click', function(){
    musicBtn.style.display = "none";
    song.play();
    bannerBtn.style.display = "inline";
} )

bannerBtn.addEventListener('click', function(){
    bannerBtn.style.display = "none";
    banner.classList.add("banner-incoming");
    flyBallonsBtn.style.display = "inline";
})

flyBallonsBtn.addEventListener('click', function(){
    flyBallonsBtn.style.display = "none";
    ballons.classList.add("ballonClass");
    cakeBtn.style.display = "inline";
})

cakeBtn.addEventListener('click', function(){
    cakeBtn.style.display = "none";
    cake.classList.add("cakeClass1");
    candleBtn.style.display = "inline";
})

candleBtn.addEventListener('click', function(){
    candleBtn.style.display ="none";
    candle.classList.add("cakeClass2");
    hpyBdyBtn.style.display = "inline";
})

hpyBdyBtn.addEventListener('click', function(){
    hpyBdyBtn.style.display = "none";
    setup.classList.add("setup");
    msgBtn.style.display = "inline";
})

msgBtn.addEventListener('click', function(){
    msgBtn.style.display= "none";
    msg.classList.add("msgClass");
})