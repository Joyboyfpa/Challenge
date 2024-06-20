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
    " ": "|",
  };
  const tabla_desencriptado = {};
  for (let letra in tabla_encriptado) {
    tabla_desencriptado[tabla_encriptado[letra]] = letra;
  }
  
  let texto_resultado = ""; // Variable global para almacenar el texto encriptado/desencriptado
  
  function Copiar() {
    if (texto_resultado !== "") {
      navigator.clipboard
        .writeText(texto_resultado)
        .then(() => {
          alert("Texto copiado al portapapeles");
        })
        .catch((err) => {
          console.error("Error al copiar al portapapeles: ", err);
        });
    } else {
      alert("No hay texto para copiar");
    }
  }
  
  const template = document.getElementById("caja-resultado");
  template.innerHTML = `<div id="subcaja-resultado">
                    <img id="imagen-busqueda" src="./imagenes/Imagen1.jpg" alt="">
                    <h2>Ningún mensaje fue encontrado</h2>
                    <p>Ingresa el texto que desees encriptar o desencriptar.</p>
                </div>`;
  console.log(template);
  
  function Encriptar() {
    let texto_encriptado = "";
    let texto = document.getElementById("input-texto");
    console.log(texto);
    texto = texto.value.toLowerCase();
    const texto_encriptar = texto;
    console.log(texto_encriptar);
  
    for (let letra of texto) {
      if (tabla_encriptado[letra]) {
        texto_encriptado += tabla_encriptado[letra];
      } else {
        texto_encriptado += letra;
      }
    }
    console.log(texto_encriptado);
  
    if (texto_encriptado != "") {
      template.innerHTML = `<div id="subcaja-resultado2">
            <p>${texto_encriptado}</p>
            <button id="button-copiar" type="submit" onclick="Copiar()">Copiar</button>
        </div>`;
      texto_resultado = texto_encriptado; // Actualizar la variable global
    } else {
      template.innerHTML = `<div id="subcaja-resultado">
                    <img id="imagen-busqueda" src="./imagenes/Imagen1.jpg" alt="">
                    <h2>Ningún mensaje fue encontrado</h2>
                    <p>Ingresa el texto que desees encriptar o desencriptar.</p>
                </div>`;
      texto_resultado = ""; // Resetear la variable global
    }
  
    document.getElementById("input-texto").value = "";
    return texto_encriptado;
  }
  
  function Desencriptar() {
    let texto_desencriptado = "";
    let texto = document.getElementById("input-texto").value;
    console.log(texto);
  
    for (let char of texto) {
      if (tabla_desencriptado[char]) {
        texto_desencriptado += tabla_desencriptado[char];
      } else {
        texto_desencriptado += char;
      }
    }
    console.log(texto_desencriptado);
  
    if (texto_desencriptado != "") {
      template.innerHTML = `<div id="subcaja-resultado2">
            <p>${texto_desencriptado}</p>
            <button id="button-copiar" type="submit" onclick="Copiar()">Copiar</button>
        </div>`;
      texto_resultado = texto_desencriptado; // Actualizar la variable global
    } else {
      template.innerHTML = `<div id="subcaja-resultado">
              <img id="imagen-busqueda" src="./imagenes/Imagen1.jpg" alt="">
              <h2>Ningún mensaje fue encontrado</h2>
              <p>Ingresa el texto que desees encriptar o desencriptar.</p>
          </div>`;
      texto_resultado = ""; // Resetear la variable global
    }
  
    document.getElementById("input-texto").value = "";
    return texto_desencriptado;
  }
  