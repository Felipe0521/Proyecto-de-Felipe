const codigoMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  };
  
  function encriptar() {
    const textoInput = document.getElementById('texto').value.toUpperCase();
    let mensajeEncriptado = '';
  
    for (let i = 0; i < textoInput.length; i++) {
      const caracter = textoInput[i];
      if (caracter in codigoMorse) {
        mensajeEncriptado += codigoMorse[caracter] + ' ';
      } else if (caracter === ' ') {
        mensajeEncriptado += '  ';
      }
    }

    if (mensajeEncriptado != 0) {
        document.getElementById('titulo-mensaje').innerText = 'Mensaje Encriptado en morse';
         document.getElementById("texto").value = mensajeEncriptado.trim();
        parrafo.textContent = "";
       
      } else {
        
        document.getElementById('titulo-mensaje').innerText = 'Ningun mensaje fue encontrado';
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal( "Debes ingresar un texto");
      }
  
   
    
  }
  
  function desencriptar() {
    const textoInput = document.getElementById('texto').value;
    const palabras = textoInput.split('   ');
    let mensajeDesencriptado = '';
  
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      const caracteres = palabra.split(' ');
      for (let j = 0; j < caracteres.length; j++) {
        for (const letra in codigoMorse) {
          if (codigoMorse[letra] === caracteres[j]) {
            mensajeDesencriptado += letra;
            break;
          }
        }
      }
      mensajeDesencriptado += ' ';
    }

    if (mensajeDesencriptado != 0) {
        document.getElementById('titulo-mensaje').innerText = 'Mensaje Desencriptado';
         document.getElementById("texto").value = mensajeDesencriptado;
         parrafo.textContent = "";
       
      } else {
        
        document.getElementById('titulo-mensaje').innerText = 'Ningun mensaje fue encontrado';
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal( "Debes ingresar un texto en morse");
      }
  
   
   
  }
  