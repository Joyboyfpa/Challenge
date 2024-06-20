const tabla_encriptado = {
  a: "?",
  b: "!",
  c: "@",
  d: "#",
  e: "$",
  f: "%",
  g: "^",
  h: "&",
  i: "*",
  j: "(",
  k: ")",
  l: "-",
  m: "_",
  n: "=",
  o: "+",
  p: "[",
  q: "]",
  r: "{",
  s: "}",
  t: ";",
  u: ":",
  v: "'",
  w: "~",
  x: "<",
  y: ">",
  z: ",",
};
const tabla_desencriptado = {};
for (let letra in tabla_encriptado) {
  tabla_desencriptado[tabla_encriptado[letra]] = letra;
}
function Copiar() {
  if (texto_encriptado !== "") {
    navigator.clipboard
      .writeText(texto_encriptado)
      .then(() => {
        alert("Texto encriptado copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  } else {
    alert("No hay texto encriptado para copiar");
  }
}
const template = document.getElementById("caja-resultado");
template.innerHTML = `<div id="subcaja-resultado">
                  <img id="imagen-busqueda" src="./imagenes/Imagen1.jpg" alt="">
                  <h2>Ningún mensaje fue encontrado</h2>
                  <p>Ingresa el texto que desees encriptar o desencriptar.</p>
              </div id="subcaja-resultado">`;
console.log(template);
let texto_encriptado = "";
function Encriptar() {
  let texto = document.getElementById("input-texto");
  console.log(texto);
  texto = texto.value.toLowerCase();
  const texto_encriptar = texto;
  console.log(texto_encriptar);
  for (let letra of texto) {
    if (tabla_encriptado[letra]) {
      texto_encriptado += tabla_encriptado[letra];
    }
  }
  console.log(texto_encriptado);
  if (texto_encriptado != "") {
    template.innerHTML = `<div id="subcaja-resultado2">
          <p>${texto_encriptado}</p>
          <button id="button-copiar" type="submit" onclick="Copiar()">Copiar</button>
      </div id="subcaja-resultado2">
       `;
  } else {
    template.innerHTML = `<div id="subcaja-resultado">
                  <img id="imagen-busqueda" src="./imagenes/Imagen1.jpg" alt="">
                  <h2>Ningún mensaje fue encontrado</h2>
                  <p>Ingresa el texto que desees encriptar o desencriptar.</p>
              </div id="subcaja-resultado">`;
  }
  return texto_encriptado;
}
function Desencriptar() {
    let texto_desencriptado = "";  // Inicializar dentro de la función
    let texto = document.getElementById("input-texto").value;
    console.log(texto);
    
    for (let char of texto) {
        if (tabla_desencriptado[char]) {
            texto_desencriptado += tabla_desencriptado[char];
        } else {
            texto_desencriptado += char;  // Agregar el carácter tal cual si no está en la tabla de desencriptación
        }
    }
    console.log(texto_desencriptado);
    if (texto_desencriptado != "") {
        template.innerHTML = `<div id="subcaja-resultado2">
          <p>${texto_desencriptado}</p>
          <button id="button-copiar" type="submit" onclick="Copiar()">Copiar</button>
      </div id="subcaja-resultado2">
       `;
    } else {
        template.innerHTML = `<div id="subcaja-resultado">
            <img id="imagen-busqueda" src="./imagenes/Imagen1.jpg" alt="">
            <h2>Ningún mensaje fue encontrado</h2>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        </div>`;
    }
    return texto_desencriptado;
}
