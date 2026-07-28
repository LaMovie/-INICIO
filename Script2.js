document.addEventListener("keyup", e => {

  // TILDES
  function Tildes(texto, preservarÑ = false) {
    let limpio = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (!preservarÑ) {
      limpio = limpio.replace(/ñ/g, "n");
    }
    return limpio;
  };

  var In = e.target.value.toLowerCase().trim();
  var incluyeÑ = In.includes("ñ");
  var Data = document.querySelectorAll(".Data");
  let foundMatch = false;
  var Input = Tildes(In.replace(/\s+/g, ' '), incluyeÑ);

  if (e.target.matches("#buscador")) {
    Lista.style.display = Input === '' ? "none" : "block";

    Data.forEach(item => {
      let itemText = Tildes(item.textContent.toLowerCase(), incluyeÑ);
      if (itemText.includes(Input)) {
        item.classList.remove("filtro");
        foundMatch = true;
      } else {
        item.classList.add("filtro");
      }
    });

    No.style.display = foundMatch ? "none" : "block";
  }

     // FUNCIÓN CENTRALIZADA
function procesarEnlace(matchedItem) {
  if (!matchedItem) return;

  var ENLACE = matchedItem.getAttribute("href") || matchedItem.href;
  var NN = matchedItem.textContent;
  
  var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var tituloLimpio = NN.replace(/🍿|🌐|📺|⚙️/g, '').trim();

 var CADENA = ['file', 'www.dropbox.com', 'play.vidyard', 'okpeliz.com'];
 
  if (CADENA.some(dominio => ENLACE.includes(dominio))) {
    window.location.href = `PLAY.html?titulo=${encodeURIComponent(tituloLimpio)}&url=${encodeURIComponent(ENLACE)}`;
  } else {
    if (!isMobile && ENLACE.includes("latino.solo")) {
      window.location.href = "https://www.google.com/search?q=site:sololatino.net+" + encodeURIComponent(tituloLimpio);
    } else if (NN.includes('🌐')) {
      window.location.href = `${ENLACE}?texto=${encodeURIComponent(tituloLimpio)}`;
    } else {
      window.location.href = ENLACE;
    }
  }
  
  var buscadorInput = document.getElementById("buscador");
  if (buscadorInput) {
    buscadorInput.value = '';
  }
}


       // MANEJO DEL ENTER
document.addEventListener("keydown", function(event) {
  if (event.target.matches("#buscador") && event.key === "Enter") {
    event.preventDefault();
    
    let textPre = event.target.value.trim();
    if (textPre === "") return;

    // 1. Asignar prefijo automáticamente si no lo tiene
    let prefijo = '🍿';
    const lowerText = textPre.toLowerCase();
    if (lowerText.includes('tv')) {
      prefijo = '📺';
    } else if (lowerText.includes('sofia')) {
      prefijo = '⚙️';
    }
    
    if (!textPre.startsWith('🍿') && !textPre.startsWith('📺') && !textPre.startsWith('⚙️') && !textPre.startsWith('🌐')) {
      event.target.value = prefijo + textPre;
    }

    var In = event.target.value.trim();
    var incluyeÑ = In.toLowerCase().includes("ñ");
    
    // Función interna para limpiar tildes y normalizar espacios
    function limpiarTexto(texto) {
      let limpio = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      if (!incluyeÑ) {
        limpio = limpio.replace(/ñ/g, "n");
      }
      return limpio.replace(/\s+/g, ' ').trim();
    }

    var InputLimpiado = limpiarTexto(In);
    var matchedItem = null;
    var elementosData = document.querySelectorAll(".Data"); 
    
    // 2. Recorrer elementos para buscar coincidencia exacta o parcial
    for (var i = 0; i < elementosData.length; i++) {
      var textoCrudo = elementosData[i].textContent;
      var textoSinEmojis = textoCrudo.replace(/🍿|🌐|📺|⚙️/g, '').trim();
      var textoItem = limpiarTexto(textoSinEmojis);
      
      // Comparamos si el texto coincide
      if (textoItem === limpiarTexto(textoSinEmojis)) { 
        // Si el input limpiado coincide con el item de la lista (o lo contiene exactamente)
        if (textoItem === InputLimpiado.replace(/🍿|🌐|📺|⚙️/g, '').trim()) {
          matchedItem = elementosData[i].tagName.toLowerCase() === 'a' ? elementosData[i] : elementosData[i].querySelector("a");
          if (matchedItem) {
            break; 
          }
        }
      }
    }

    // 3. Ejecutar acción o pasar a Check()
    if (matchedItem) {
      procesarEnlace(matchedItem);
    } else {
      if (typeof Check === "function") {
        Check();
      }
    }
  }
});


     // MANEJO DEL CLICK 
document.addEventListener("click", function(event) {
  var matchedItem = event.target.closest("a"); 
  
  if (matchedItem) {
    var href = matchedItem.getAttribute("href");
    if (href && href !== "#") {
      event.preventDefault();
      procesarEnlace(matchedItem);
    }
   }
 });
});


     function Check() {
  var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   
  
  var LIMPIO = buscador.value.replace('🍿', '');
          
  const urlDestino = `${'GOOGLE.html'}?texto=${LIMPIO}`;
      
     var domain = isMobile ? urlDestino : 'https://www.google.com/search?q=site:sololatino.net+' + encodeURIComponent(LIMPIO);
  
  window.location.href = domain;
  buscador.value = '';
};

      // SEARCH CLICK
Buscar.onclick = () => {
  if (buscador.value !== '') {
    Check();
  } 
};

    


function openMovie(titulo, urlArchivo) {
  const urlDestino = `PLAY2.html?titulo=${encodeURIComponent(titulo)}&url=${encodeURIComponent(urlArchivo)}`;
   
  window.location.href = urlDestino;
}



  var CANALES = ['.m3u8', 'bit.ly', 'stream', 'is.gd', 'lamovie.link'];  

         <!-- HTML -->
         
 var HTML =
  `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
section {
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {
    color: #fff;
    width: 100%;
    padding: 10px;
    outline: none;
    font-weight: 600;
    border-radius: 20px;
    background: linear-gradient(to right, blue, red);    
    border: 2px solid red;   
}
#Lista {
    scale: 90%;
    left: -3vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 60vh;
    overflow: scroll;
    border-radius: 20px;
}
li {
    margin: 5px 0;
}
.filtro {
    display: none;
}
a {
    color: #fff;
  &:hover {
     color: #4f9;
     text-shadow: 0 0 10px red;
 }
}
#No {
    scale: 70%;
    display: none;
    margin: 4vh -4vh;
    position: fixed; 
    border-radius: 50px;
  &:hover {
      filter: hue-rotate(90deg);
  }
}
</style>

<style>
:root {
  --bg: #110921;
  --purple: #3720b4;
  --green: #5ff8c2;
  --font: 'Roboto Mono', sans-serif;
}
h1 {
  font-size: 3vw;
}
</style>
</head>
<body>
<section id="contenedor-main">
    <div>
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
           <br/><br/>
     <ul id="Lista"></ul>
           </div>
</section>
<img id="No" src="https://is.gd/NjNew4"/>
`;

     Aux.innerHTML = HTML;

 
       No.alt = 'No EnCoNTraDO';
      No.style.color = '#fff';   
      
      No.onclick = () => {
         Check();
     };
      
      
        <!-- CLICK -->
   Lista.onclick = (event) => {
 if (event.target.tagName === 'A') {
    event.preventDefault(); 
  var ENLACE = event.target.href;
  
  if (CANALES.some(item => ENLACE.includes(item))) {
       Main.src = ENLACE; 
       buscador.value = '';          
    Lista.style.display = 'none';
    buscador.placeholder = event.target.textContent;  
buscador.classList.add('PlaceHolder');     
          audio.pause();
Main.style.background = 'black';
            } else {
   window.location.href = ENLACE;
      buscador.value = '';
          audio.pause();
    } 
  }
};   
     

     
       function Handle() {
  var orientation = (window.innerWidth > window.innerHeight) ? evento() : invento();
 };   
        function evento() {
  var style = document.createElement('style');
  style.innerHTML = `
    #Lista::-webkit-scrollbar {
        width: 6px;
        background: transparent;
    }
    #Lista::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #80808080;
    }
    #Lista::-webkit-scrollbar-track {
        background: transparent; 
    } 
  `;
  document.head.appendChild(style);
};


       function invento() {
  var style = document.createElement('style');
  style.innerHTML = `
    #Lista::-webkit-scrollbar {
        display: none;
    }
  `;
  document.head.appendChild(style);
};

   window.addEventListener("resize", Handle);   
           Handle();   
         
     
 if (!document.querySelector('#scroll-style')) {
  var style = document.createElement('style');
  style.id = 'scroll-style';
  style.innerHTML = `...`;
  document.head.appendChild(style);
};    
         
     
  <!-- Detectar cuando entra o sale de fullscreen -->
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    <!-- Si estamos en pantalla completa, bloquear orientación horizontal -->
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape');
    }
  } else {
    <!-- Si salimos de pantalla completa, volver a orientación vertical -->
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('portrait');
    }
  }
});     
     
// BUSCADORES
      const S = [
  "https://lamovie.github.io/Buscador/Buscador.js",
  "https://lamovie.github.io/Buscador/Buscador2.js",
  "https://lamovie.github.io/Buscador/Buscador3.js"
];

  S.forEach(src => {
  const scripts = document.createElement("script");
  scripts.src = src;
  document.body.appendChild(scripts);
});
  


    // https://bit.ly/3y2BVCO    
     
