
function playVideo(videoUrl) {
      var videoPlayer = document.getElementById('Main');
      videoPlayer.src = videoUrl;
      videoPlayer.load();
      videoPlayer.play();
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
        <!-- FONDO -->

    Gif.addEventListener('click', function() {
        if(isNeon){
          Fondo();  
        LookFondo();
   } else {
          Neon();
        LookNeon();
   }
        isNeon = !isNeon;
});
    X.addEventListener('click', function() {
       if(isNeon){
          Fondo();  
        LookFondo();
   } else {
          Neon();
        LookNeon();
   }
        isNeon = !isNeon;
});

       
      function LookNeon(){
           buscador.style.filter = 'hue-rotate(90deg)';
   buscador.style.background = 'linear-gradient(to right, blue, red)';
   buscador.style.color = '#fff';
   No.style.color = '#fff';
       }
       
       function LookFondo(){
 buscador.style.filter = 'none';
  buscador.style.background = 'gold';
  buscador.style.color = '#000';
  No.style.color = '#000';
       }

     Pre.addEventListener('click', function() {     
       Neon();
     LookNeon();
});
       let isNeon = true;
    
      function Fondo(){   
      document.body.style.animation = 'Back';  document.body.style.animationTimeline = 'view()'; 
   nav.style.background = 'maroon';    
          var elemento =  document.querySelectorAll('.H3');
      for (var i = 0; i < elemento.length; i++){
          
   elemento[i].style.background = 'radial-gradient(circle, red, red, orange, red)';        
}        
    Main.style.boxShadow = '0 0 10px purple';
          
Main.style.animation = 'Colors 2s linear infinite alternate running';
              
      var element =       document.querySelectorAll('.N, .M, .A, #color, #nav');
      for (var i = 0; i < element.length; i++) {
        element[i].style.border = 'none';     
        element[i].style.boxShadow = '0 0 30px #000';
}    
 
  var elementos = document.querySelectorAll('.baa');
      for (var i = 0; i < elementos.length; i++) {
  elementos[i].style.color = 'blue';
  elementos[i].style.background = '#000';
  };
};
     Neon();

      <!-- BLACK & NEON -->
     
        function Neon() {
  document.body.style.cssText = "";
       var elementos =       document.querySelectorAll('.N, .M, .A, .H3, .Unic');
      for (var i = 0; i < elementos.length; i++) {
 elementos[i].style.cssText = '';            
   } 
 
     var elementos = document.querySelectorAll('.baa');
      for (var i = 0; i < elementos.length; i++) {
  elementos[i].style.color = 'transparent';
  elementos[i].style.background = 'linear-gradient(to right, red, blue)';
  elementos[i].style.backgroundClip= 'text';
  };    
};    


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
  
         <!-- Window -->

window.onload = function() {
       Modal.style.display = 'none';
};
     
        <!-- FULL SCREEN -->

document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    Main.style.scale = '100%';
  } else {   
    Main.style.cssText = '';
  }
});

Main.addEventListener('click', function() {
  if (Main.requestFullscreen) {
    Main.requestFullscreen();
  } else if (Main.mozRequestFullScreen) { // Firefox
    Main.mozRequestFullScreen();
  } else if (Main.webkitRequestFullscreen) { // Chrome, Safari and Opera
    Main.webkitRequestFullscreen();
  } else if (Main.msRequestFullscreen) { // IE/Edge
    Main.msRequestFullscreen();
  }
});

       <!-- HORIZONTAL -->

        function Handle() {
     (window.innerWidth > window.innerHeight) ? evento() : invento();
};
        function evento() {
   Fix.style.position = 'relative';
   Fix.style.zIndex = '0';
   Fix.style.scale = '100%'; 
   Fix.style.width = '120%'; 
   Fix.style.top = '-40vh'; 
   Fix.style.left = '-30vh'; 
   Pre.style.scale = '50%'; 
   Pre.style.width = '85%';
   Pre.style.left = '10vh';  
   Hea.style.left = '-70vh';  
   Hea.style.top = '5vh';  
   Hea.style.scale = '110%'; 
   Gif.style.width = '35%'; 
   Aux.style.top = '10vh'; 
   Aux.style.left = '65vh';  
}        
       function invento() {
   Fix.style.position = 'fixed';
   Fix.style.scale = '100%'; 
   Fix.style.zIndex = '4444';
   Fix.style.width = '90%'; 
   Fix.style.top = '0'; 
   Fix.style.left = '10%'; 
   Pre.style.scale = ''; 
   Pre.style.width = '';
   Pre.style.left = '';  
   Hea.style.left = '';  
   Hea.style.top = '';  
   Hea.style.scale = ''; 
   Gif.style.width = ''; 
   Aux.style.top = '2vh';  
   Aux.style.left = '20vh';         
}

window.addEventListener("resize", Handle);

           Handle();

        <!-- BUSCADOR -->
        
   Buscar.addEventListener('click', function() {
  if(Aux.style.display == 'block') {
     Aux.style.display = 'none';
   } else {
     Aux.style.display = 'block';
   }
});

function mostrarHora() {
 var Hora = new Date().getHours();

   if (Hora >= 7 && Hora < 20) {
        Fondo();
            } else {
        Neon(); 
  }
};
        mostrarHora();

           <!-- PC -->
                 
window.onload = function() {
       if (!/Mobi|Android/i.test(navigator.userAgent)) {
   window.location = 'lamovievive.blogspot.com';
  }
};    







