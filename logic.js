const form = document.getElementById("form");
const input = document.getElementById("input");
const random = document.querySelector(".random");
const newGame = document.querySelector(".new-game");


const emptyList = document.querySelector(".empty-list");

let itemsList=[];


let howto=document.querySelector(".howto");
let instructions= document.querySelector(".howto-instructions");
let layer = document.querySelector(".body-layer");

//Muestra y esconde las instrucciones
howto.addEventListener("mouseover", displayInstructions);
howto.addEventListener("mouseout", hideInstructions);

function displayInstructions(){
  layer.classList.add("display-body");
  instructions.style.transform="translateX(-270px)";
 
} 
function hideInstructions(){
    layer.classList.remove("display-body");
  instructions.style.transform = "translateX(270px)"
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    let chosenItem =  input.value
    if(input.value != ""){
    itemsList.push(chosenItem)
    localStorage.setItem("Choices", itemsList.join(", "));
    }
    console.log(input.value)
    input.value= ""
    console.log(input.value)
       
})
random.addEventListener('click', showItem);



function showItem(){
    if (itemsList.length != 0){

  
  emptyList.style.display = "none";
  const randomIndex =  Math.floor(Math.random() * itemsList.length);
  console.log(randomIndex)
  const selectedItem = itemsList[randomIndex];
  console.log(itemsList)
  console.log(selectedItem)
  //------
 
  const apiKey = 'AIzaSyAVaBHWD19qKYWHRrPm1L4wkOHT6bwZ2UQ';
  
  const url = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(selectedItem)}&part=snippet&key=${apiKey}`;

  // Realiza la solicitud HTTP a la API de YouTube
  fetch(url)
    .then(response => response.json())
    .then(data => {

    
      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        if (videoId) {
          
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          
           
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
  
 
  itemsList.splice(randomIndex, 1)
}else{
    emptyList.style.display = "block";
    console.log("No hay nada en la lista")
}}

newGame.addEventListener('click', function(){
  localStorage.clear();
  itemsList = [];
});

/*--------*/

/*---------*/ 

/* var iframe = document.createElement('iframe');
            iframe.src = youtubeEmbedUrl;
            iframe.width = '560'; // Set the desired width
            iframe.height = '315'; // Set the desired height
            iframe.allowFullscreen = false; // Enable fullscreen
            document.getElementById('youtube-video').appendChild(iframe); */