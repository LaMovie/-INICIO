document.body.style.background = 'linear-gradient(to right, black, red, red, black)';
Pre.addEventListener('click', function() {
     
  document.body.style.background = 'black';
      nav.style.background = 'black';
      
   color.style.border = '2px solid #4f9';
      color.style.boxShadow = '0 0 30px #4f9'; 
      nav.style.border = '2px solid #4f9';
      nav.style.boxShadow = '0 0 30px #4f9'; 
      Pre.style.border = '.5px solid gray';         
      
     var elementos =  document.querySelectorAll('.H3');
  for (var i = 0; i < elementos.length; i++){
   elementos[i].style.background = 'black'; 
     } 
    
    var elementos =       document.querySelectorAll('.N');
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.border = '2px solid #4f9';     
        elementos[i].style.boxShadow = '0 0 30px #4f9';
      } 
      
      var elementos =       document.querySelectorAll('.M');
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.border = '2px solid fuchsia';     
        elementos[i].style.boxShadow = '0 0 30px fuchsia';
      } 

     var elementos =       document.querySelectorAll('.A');
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.border = '2px solid blue';
        elementos[i].style.boxShadow = '0 0 30px blue';
      }  
          document.getElementById('main-video').style.border = '1px solid gray';
          
document.getElementById('main-video').style.boxShadow = 'none';
          
document.getElementById('main-video').style.animation = 'none';
    
});    


function playVideo(videoUrl) {
      var videoPlayer = document.getElementById('main-video');
      videoPlayer.src = videoUrl;
      videoPlayer.load();
      videoPlayer.play();
}


  function playP(){
      var audio = document.getElementById("P");
    audio.play();
}

function playA(){
      var audio = document.getElementById("A");
    audio.play();
}

function playB(){
      var audio = document.getElementById("B");
    audio.play();
}

function playC(){
      var audio = document.getElementById("C");
    audio.play();
}

function playSound(){
     var audio = document.getElementById("audio");
     audio.play();
}  

function galleryImg() {
  var gallery = document.querySelector('.gallery');
  var images = gallery.querySelectorAll('.image');
  var scrollCenter = gallery.scrollLeft + gallery.offsetWidth / 2;

  images.forEach(function(image) {
    var imageCenter = image.offsetLeft + image.offsetWidth / 2;

    var distanceFromCenter = Math.abs(scrollCenter - imageCenter);
    var scale = 1 - distanceFromCenter / 1000;

    image.style.transform = 'scale(' + scale + ')';

    if (scale > 1) {
      image.classList.add('centered');
    } else {
      image.classList.remove('centered');
    }
  });
}

    Gif.addEventListener('click', function() {
      var colores = ["linear-gradient(to left, black, red, red, black)", "radial-gradient(circle, black, rgb(255, 130, 0), purple, blue, black)", 
 "radial-gradient(circle, black, gold, red, orange, black)", "radial-gradient(circle, black, green, orange, purple, black)"];
      var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.background = colorAleatorio;
    });


    X.addEventListener('click', function() {
        
      var colores = ["linear-gradient(to left, black, red, red, black)", "radial-gradient(circle, black, rgb(255, 130, 0), purple, blue, black)", 
 "radial-gradient(circle, black, gold, red, orange, black)", "radial-gradient(circle, black, green, orange, purple, black)"];
 
      var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.background = colorAleatorio;
      
  nav.style.background = 'maroon';
       
        var elementos =  document.querySelectorAll('.H3');
      for (var i = 0; i < elementos.length; i++){
          
   elementos[i].style.background = 'radial-gradient(circle, red, red, orange, red)';
        
  }     
  
 
  color.style.border = 'none';
  color.style.boxShadow = 'none'; 
  nav.style.border = 'none';
  nav.style.boxShadow = 'none'; 
  
  document.getElementById('main-video').style.boxShadow = '0 0 10px purple';
          
document.getElementById('main-video').style.animation = 'Colors 2s linear infinite alternate running';
      
        
      var elementos =       document.querySelectorAll('.N, .M, .A');
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.border = 'none';     
        elementos[i].style.boxShadow = '0 0 30px #000';
      }    
                    
});

const slider = document.querySelector('.slider');

let isPaused = false;

slider.addEventListener('click', () => {
  if (!isPaused) {
    isPaused = true;
    slider.style.animationPlayState = 'paused';
    setTimeout(() => {
      isPaused = false;
      slider.style.animationPlayState = 'running';
    }, 5000);
  }
});
  
    
 