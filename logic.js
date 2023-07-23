const songForm = document.getElementById("song-form");
const song = document.getElementById("song");

const cancionAzar = document.querySelector(".cancion-azar");

const emptyList = document.querySelector(".empty-list");
let songList=[];


let howto=document.querySelector(".howto");
let instructions= document.querySelector(".howto-instructions");

howto.addEventListener("mouseover", displayInstructions);
howto.addEventListener("mouseout", hideInstructions);

function displayInstructions(){
 
  instructions.style.transform="translateX(-270px)";
 
} 
function hideInstructions(){

  instructions.style.transform = "translateX(270px)"
}


songForm.addEventListener('submit', function(event){
    event.preventDefault();
    let chosenSong =  song.value
    if(song.value != ""){
    songList.push(chosenSong)
    }
    console.log(song.value)
    song.value= ""
    console.log(song.value)
       
})
cancionAzar.addEventListener('click', mostrarCancion);

function mostrarCancion(){
    if (songList.length != 0){
  emptyList.style.display = "none";
  const randomIndex =  Math.floor(Math.random() * songList.length);
  console.log(randomIndex)
  const selectedSong = songList[randomIndex];
  console.log(songList)
  console.log(selectedSong)
  
  window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedSong)}`);
  songList.splice(randomIndex, 1)
}else{
    emptyList.style.display = "block";
    console.log("No hay canciones en la lista")
}}



