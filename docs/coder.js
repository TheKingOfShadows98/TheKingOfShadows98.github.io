// let archivo = document.getElementById("Archivo");
// archivo.addEventListener(onchange,ini);
// function ini(){
//     readTextFile(archivo.value);
//     alert("el archivo cambio");
// }

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        organizar(this.responseText);
      }
    };
    xhttp.open("GET", "stories/LHDH.txt", true);
    xhttp.send();
}
function organizar (texto_plano){

      console.log(texto_plano);
    let contenidos = texto_plano.split(';');

    contenidos.map(x => reemplazar(x));

}
function reemplazar(str) {
    let res = "";
    if(str.includes("Titulo:")){
        res = str.replace("Titulo:", '<h2 class= "titulo">')
        res += "</h2>";
    }else if(str.includes("dialogo:")){
        res = str.replace("dialogo:", '<p class = "dialogo-texto">');
        res += "</p>";
    }
    if(str.includes("acotacion:")){
      res = str.replace("acotacion:", '<p class = "acotacion-texto">');
      res += "</p>";
  }
  if(str.includes("narrador:")){
    res = str.replace("narrador:", '<p class = "narrador-texto">');
    res += "</p>";
}
    contenedor.innerHTML += res;
}

var contenedor = document.getElementById('demo');