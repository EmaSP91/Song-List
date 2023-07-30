const songForm = document.getElementById("song-form");
const song = document.getElementById("song");

const cancionAzar = document.querySelector(".cancion-azar");

const emptyList = document.querySelector(".empty-list");
let songList=[];


let howto=document.querySelector(".howto");
let instructions= document.querySelector(".howto-instructions");
let body = document.querySelector("body");

howto.addEventListener("mouseover", displayInstructions);
howto.addEventListener("mouseout", hideInstructions);

function displayInstructions(){
  body.classList.add("display-body");
  instructions.style.transform="translateX(-270px)";
 
} 
function hideInstructions(){
    body.classList.remove("display-body");
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

cancionAzar.addEventListener('click', mostrarCancion);

function mostrarCancion(){
    if (songList.length != 0){
  emptyList.style.display = "none";
  const randomIndex =  Math.floor(Math.random() * songList.length);
  console.log(randomIndex)
  const selectedSong = songList[randomIndex];
  console.log(songList)
  console.log(selectedSong)
  //------
 
  const apiKey = 'AIzaSyAVaBHWD19qKYWHRrPm1L4wkOHT6bwZ2UQ';
  
  const url = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(selectedSong)}&part=snippet&key=${apiKey}`;

  // Realizar la solicitud HTTP a la API de YouTube
  fetch(url)
    .then(response => response.json())
    .then(data => {

      const startMinutes = 1; // Replace with the desired start minute
      const startSeconds = 5; // Replace with the desired start second
      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        if (videoId) {
          
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}&t=${startMinutes}m${startSeconds}s`;
          
           
        window.open(videoUrl);
        } else {
          alert('No se encontraron resultados.');
        }
      } else {
        alert('No se encontraron resultados.');
      }
    })
    .catch(error => {
      console.error('Error al realizar la búsqueda:', error);
    });

  //------
  
 /* window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedSong)}`);*/
  songList.splice(randomIndex, 1)
}else{
    emptyList.style.display = "block";
    console.log("No hay canciones en la lista")
}}


/* var iframe = document.createElement('iframe');
            iframe.src = youtubeEmbedUrl;
            iframe.width = '560'; // Set the desired width
            iframe.height = '315'; // Set the desired height
            iframe.allowFullscreen = false; // Enable fullscreen
            document.getElementById('youtube-video').appendChild(iframe); */