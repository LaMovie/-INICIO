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

  // Manejo del Enter
  if (e.key === "Enter") {
    var Int = e.target.value.toLowerCase().trim();
    var incluyeÑ = Int.includes("ñ");
    var inputValue = Tildes(Int.replace(/\s+/g, ' '), incluyeÑ);

    var matchedItem = [...document.querySelectorAll(".Data")].find(
      item => Tildes(item.textContent.toLowerCase(), incluyeÑ) === inputValue
    );

    if (matchedItem) {
      window.location.href = matchedItem.href;
    } else {
      buscador.value = '';
      Lista.style.display = 'none';
      No.style.display = "none";
    }
  }
});

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
    width: 100%;
    padding: 10px;
    outline: none;
    font-weight: 600;
    border-radius: 20px;
    background: gold;
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
    scale: 80%;
    display: none;
    position: fixed;
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
         <ul id="Lista">
  <li><a href="https://drive.google.com/file/d/1EhJMQdYh_gIpk_miJOW6QHBH-e3XSDCr/view?usp=drivesdk" class="Data">🍿Heretic</a></li>
  <li><a href="https://drive.google.com/file/d/1vB26ttiNlde0NKHoA6937WfswdKZVDQ3/view?usp=drivesdk" class="Data">🍿Red One</a></li>
  <li><a href="https://drive.google.com/file/d/1a674Ccso4wS99zKICv6e83qWdtR8qVS3/view?usp=drivesdk" class="Data">🍿57 Segundos</a></li>
  <li><a href="https://drive.google.com/file/d/1OHtD9EJsNpzq9f3enjUwNobqWAZrGzRm/view?usp=drivesdk" class="Data">🍿Nosferatu</a></li>
  <li><a href="https://drive.google.com/file/d/1noIE34Zh0QDTfJAzTD9bzyG_6dMVyxj0/view?usp=drivesdk" class="Data">🍿Kraven</a></li>
  <li><a href="https://drive.google.com/file/d/1DecN2-1vYkdwLbqG83F95kGM9mWggN14/view?usp=drivesdk" class="Data">🍿Compañera Perfecta</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ahKbN0K3IdhEIWs9p1xbvfxalSECTQrh" class="Data">🍿Desencanto 5</a></li>
  <li><a href="https://drive.google.com/file/d/1eSDfIDWjKOqDaRX4U0eG53obfR3zSw-1/view?usp=drivesdk" class="Data">🍿Los Horrores De Caddo Lake</a></li>
  <li><a href="https://archive.org/download/strario-tv-y-deportes-v-1.0.2-estable/Strario%20-%20TV%20y%20Deportes%20-%20v1.0.2%20Estable.apk" class="Data">📺Strario Tv</a></li>
  <li><a href="https://drive.google.com/drive/folders/1KC_t3WcbLaF3INgIfZcW5I7uXZ7nAxmU" class="Data">🍿La Rueda Del Tiempo 3</a></li>
  <li><a href="https://drive.google.com/file/d/1nrGqoPR0FhL5kRN7GXjsdCImWN5kx0bT/view?usp=drivesdk" class="Data">🍿Novocaine</a></li>
  <li><a href="https://drive.google.com/file/d/1HLFGCKgev_X63xZHSBVIdaEGlg54k_6m/view?usp=drivesdk" class="Data">🍿Rescate Implacable</a></li>
  <li><a href="https://drive.google.com/file/d/1w7AixkBlI-4L4zESr1cNeO7Imkq7YP2O/view?usp=drivesdk" class="Data">🍿Capitan America</a></li>
  <li><a href="https://drive.google.com/file/d/19CabyollA3QZ4rrfIhb_o_PAh21zZsIG/view?usp=drivesdk" class="Data">🍿De Vuelta A La Accion</a></li>
  <li><a href="https://drive.google.com/file/d/1XHOXk8HuR0SiecPzuzyxfzrnv2QfDdnM/view?usp=drivesdk" class="Data">🍿Buenos Vecinos 1</a></li>
  <li><a href="https://drive.google.com/file/d/1UUobDqUFglgXO8Q62R9LevqPmHEEgDbo/view?usp=drivesdk" class="Data">🍿Buenos Vecinos 2</a></li>
  <li><a href="https://h5.swplayer.com" class="Data">📺SeeKee Tv</a></li>
  <li><a href="https://drive.google.com/file/d/185RuQOH2eZerthlAMzg_-1SzPB5yOGvn/view?usp=drivesdk" class="Data">🍿Constantine</a></li>
  <li><a href="https://drive.google.com/drive/folders/1AM2MxJzkCanL7iYXJQLrQWHmdT7A-pPn" class="Data">🍿Invencible 3</a></li>
  <li><a href="https://lamovie.github.io/Sport-Tv/" class="Data">📺Sport Tv</a></li>
  <li><a href="https://drive.google.com/file/d/1U_91j6dWT23QHnhca5wm8tP_ZnYATw0T/view?usp=drivesdk" class="Data">🍿La Mujer En Las Sombras</a></li>
  <li><a href="https://drive.google.com/file/d/1lqTiLDezenKB_6ZKfYO1MX22hLkBA-sH/view?usp=drivesdk" class="Data">🍿911</a></li>
  <li><a href="https://drive.google.com/file/d/18-Gw04kF5JE6vBN0b2EKiQDKUstOQp8r/view?usp=drivesdk" class="Data">🍿Tierra Plana</a></li>
  <li><a href="https://drive.google.com/drive/folders/1QHu4Br2gxdwj66KrlGPO-oE5vuuJugEp" class="Data">🍿El Juego Del Calamar 2</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
    </ul>
           </div>
</section>
<img id="No" src="https://bit.ly/3y2BVCO"/>
`;

     Aux.innerHTML = HTML;

 buscador.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') { 
                event.preventDefault(); 
  var TextPre = buscador.value.toLowerCase().trim(); 
  let Prefijo;
 
 if (TextPre.includes('tv')) {
         Prefijo = '📺';
     } else if(TextPre.includes('sofia')){
         Prefijo = '⚙️';
     } else {
         Prefijo = '🍿';
     }   
   var Texto = Prefijo + TextPre;       
   buscador.value = Texto; 
  }
});    
       No.alt = 'No EnCoNTraDO';
      No.style.color = '#fff';   


     
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
         
     
     
     
     
     
