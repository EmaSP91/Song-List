

const toggleContainer= document.querySelector(".toggle-container");

const toggleSwitch = document.querySelector(".toggle-switch");

const body = document.querySelector("body");
const title = document.querySelector(".title");
const music = document.querySelector(".music");
const question = document.querySelector(".question");
const film = document.querySelectorAll(".film");
const movie = document.querySelectorAll(".movie");
const green = document.querySelectorAll(".green");
const pink = document.querySelectorAll(".pink");




let darkMode = localStorage.getItem("darkmode") === "true";

console.log("Fuera de la funcion: "+darkMode)
updateDarkMode();
toggleContainer. addEventListener("click",function (){
  darkMode = !darkMode;
  console.log("Dentro de la funcion: "+darkMode)

  updateDarkMode();
});
function updateDarkMode(){
    if(darkMode){


  
body.classList.add("dark");

toggleSwitch.classList.add("active");  

title.textContent = "Agrega una película/serie";

music.src = "img/undraw_video.png"
question.src = "img/undraw_Faq_dark.png"
random.textContent ="P/S Aleatoria"
film.forEach(element => {
  element.src ="img/film.png"
  
});
movie.forEach(element => {
  element.src ="img/movie.png"
  
});
//console.log("Dark: "+darkMode)

    }else{
body.classList.remove("dark");

toggleSwitch.classList.remove("active");  
music.src = "img/undraw_happy_music.png"
question.src = "img/undraw_Faq.png" 
title.textContent = "Agrega una canción" 
random.textContent= "Canción Aleatoria"  
green.forEach(element => {
  element.src ="img/green.png"
  
});  
pink.forEach(element => {
  element.src ="img/pink.png"
  
});
 //console.log("Dark: "+darkMode)

    
 }

  
localStorage.setItem("darkmode", darkMode);
  
 }