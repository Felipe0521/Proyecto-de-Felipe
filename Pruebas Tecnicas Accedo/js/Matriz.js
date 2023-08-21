document.addEventListener("DOMContentLoaded", function () {
    const tablaBody = document.getElementById('tabla-body');
    const filas = 10;
    const columnas = 5;
    const colores = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "gray", "black", "burlywood", "chocolate", "aquamarine" ];
    let seleccionesRestantes = 5; 
    let celdasPintadas = [];

    
    function generarMatriz() {
        for (let i = 0; i < filas; i++) {
            const fila = document.createElement('tr');
            for (let j = 0; j < columnas; j++) {
                
                const celda = document.createElement('td');
                celda.id = `celda-${i}-${j}`;

                fila.appendChild(celda);
            }
            tablaBody.appendChild(fila);
        }
    }

    
    function cambiarColorFilaColumna(fila, columna, color) {
        for (let i = 0; i < filas; i++) {

            document.getElementById(`celda-${i}-${columna}`).style.backgroundColor = color;
        }
        for (let j = 0; j < columnas; j++) {
            document.getElementById(`celda-${fila}-${j}`).style.backgroundColor = color;
        }
    }

    
    function manejarClicCelda(event) {
        const celda = event.target;
        if (!celda.style.backgroundColor) {

            const id = celda.id.split('-');
            const fila = parseInt(id[1]);
            const columna = parseInt(id[2]);
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

            cambiarColorFilaColumna(fila, columna, colorAleatorio);
            celdasPintadas.push(celda);
            celda.removeEventListener('click', manejarClicCelda);
            seleccionesRestantes--;

            if (seleccionesRestantes === 0) {
                deshabilitarCeldas();
            }
        }
    }

    
    function deshabilitarCeldas() {
        const celdas = document.getElementsByTagName('td');
        for (const celda of celdas) {
            celda.removeEventListener('click', manejarClicCelda);
        }
    }

    
    function elegirCeldaAleatoriamente() {
        const celdasNoPintadas = obtenerCeldasNoPintadas();
        if (celdasNoPintadas.length > 0) {
            const celdaAleatoria = celdasNoPintadas[Math.floor(Math.random() * celdasNoPintadas.length)];
            const id = celdaAleatoria.id.split('-');
            const filaAleatoria = parseInt(id[1]);
            const columnaAleatoria = parseInt(id[2]);
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

            cambiarColorFilaColumna(filaAleatoria, columnaAleatoria, colorAleatorio);
            celdasPintadas.push(celdaAleatoria);
        }
    }


    function obtenerCeldasNoPintadas() {
        const celdas = document.getElementsByTagName('td');
        const celdasNoPintadas = [];
        for (const celda of celdas) {
            if (!celda.style.backgroundColor) {
                celdasNoPintadas.push(celda);
            }
        }
        return celdasNoPintadas;
    }

    
    const botonReiniciar = document.getElementById('botonReiniciar');
    const botonElegirAleatoriamente = document.getElementById('botonElegir');

    botonReiniciar.addEventListener('click', reiniciarTabla);
    botonElegirAleatoriamente.addEventListener('click', elegirCeldaAleatoriamente);

    // Función para reiniciar la tabla
    function reiniciarTabla() {
        const celdas = document.getElementsByTagName('td');
        for (const celda of celdas) {
            celda.style.backgroundColor = '';
            celda.addEventListener('click', manejarClicCelda);
        }
        seleccionesRestantes = 5;
        celdasPintadas = [];
    }

   
    function agregarEventosClic() {
        const celdas = document.getElementsByTagName('td');
        for (const celda of celdas) {
            celda.addEventListener('click', manejarClicCelda);
        }
    }

    
    generarMatriz();
    agregarEventosClic();
});
