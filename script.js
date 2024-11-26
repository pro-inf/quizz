


let puntaje = 0; 


function comenzarJuego() {
   
    document.getElementById('nivel-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    cargarPregunta();
}


function cargarPregunta() {
    let nivelSeleccionado = localStorage.getItem('nivel');
    let preguntas = getPreguntasPorNivel(nivelSeleccionado);
    let preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];

    
    document.getElementById('pregunta').textContent = preguntaActual.pregunta;
    document.getElementById('imagen').src = preguntaActual.imagen;
    document.getElementById('mensaje-respuesta').textContent = ''; 

   
    let inputRespuesta = document.getElementById('respuesta');
    inputRespuesta.value = ''; 
    inputRespuesta.focus();

    document.getElementById('respuesta').onchange = function() {
        let respuestaCorrecta = preguntaActual.respuesta;
        let respuestaUsuario = inputRespuesta.value.trim().toLowerCase();
        
        if (respuestaCorrecta === respuestaUsuario) {
            puntaje++;
            document.getElementById('mensaje-respuesta').textContent = "¡Respuesta correcta! Puntaje: " + puntaje;
        } else {
            document.getElementById('mensaje-respuesta').textContent = "Respuesta incorrecta. Puntaje: " + puntaje;
        }

        
        document.getElementById('puntaje').textContent = "Puntaje: " + puntaje;

        
        setTimeout(cargarPregunta, 2000); 
    };
}


function getPreguntasPorNivel(nivel) {
    let preguntas = {
        facil: [
            { pregunta: "¿Cuál es el componente principal de una PC?", respuesta: "procesador", opcionesValidas: ["procesador", "cpu"], imagen: "cpu.jpg" },
            { pregunta: "¿Qué componente almacena los datos permanentemente?", respuesta: "disco duro", opcionesValidas: ["disco duro", "hdd"], imagen: "disco druo.jpg" },
            { pregunta: "¿Qué es la RAM?", respuesta: "memoria volátil", opcionesValidas: ["memoria volatil", "Memoria Volatil"], imagen: "ram.jpg" },
            { pregunta: "¿Qué componente se usa para mostrar imágenes en la pantalla?", respuesta: "tarjeta gráfica", opcionesValidas: ["tarjeta grafica", "gpu"], imagen: "tarjeta grafica.jpg" },
            { pregunta: "¿Qué dispositivo se usa para almacenar archivos de forma externa?", respuesta: "USB", opcionesValidas: ["usb", "pendrive"], imagen: "USB.jpg" },
            { pregunta: "¿Qué dispositivo se usa para ingresar texto?", respuesta: "teclado", opcionesValidas: ["teclado", "keyboard"], imagen: "teclado.jpg" },
            { pregunta: "¿Qué es un sistema operativo?", respuesta: "software", opcionesValidas: ["software", "os"], imagen: "software.jpg" },
            { pregunta: "¿Qué componente se usa para enfriar la CPU?", respuesta: "ventilador", opcionesValidas: ["ventilador", "cooler"], imagen: "ventilador.jpg" },
            { pregunta: "¿Qué es una placa base?", respuesta: "motherboard", opcionesValidas: ["motherboard", "conector de cables"], imagen: "mode.jpg" },
            { pregunta: "¿Qué es una fuente de poder?", respuesta: "fuente de alimentación", opcionesValidas: ["fuente de alimentación", "psu"], imagen: "fuente.jpg" }
        ],
        medio: [
            { pregunta: "¿Qué significa GHz en un procesador?", respuesta: "gigahercios", opcionesValidas: ["gigahercios", "GHz"], imagen: "gigahercios.jpg" },
            { pregunta: "¿Qué es una memoria caché?", respuesta: "memoria rápida para datos frecuentes",  imagen: "cache.jpg" },
            { pregunta: "¿Qué componente se encarga del enfriamiento líquido?", respuesta: "refrigeración líquida", opcionesValidas: ["refrigeración líquida", "enfriamiento líquido"], imagen: "refri.jpg" },
            { pregunta: "¿Qué significa la sigla PSU?", respuesta: "power supply unit", opcionesValidas: ["power supply unit", "fuente de poder"], imagen: "fuente.jpg" },
            { pregunta: "¿Qué es la resolución de pantalla?", respuesta: "cantidad de píxeles", opcionesValidas: ["cantidad de píxeles", ], imagen: "pixeles.jpg" },
            { pregunta: "¿Qué es un overclocking?", respuesta: "aumentar frecuencia", opcionesValidas: ["aumentar frecuencia", "overclock"], imagen: "overw.jpg" },
            { pregunta: "¿Qué es un SSD?", respuesta: "disco sólido", opcionesValidas: ["disco sólido", "ssd"], imagen: "disoc solo.jpg" },
            { pregunta: "¿Cuál es la función principal de la placa base?", respuesta: "conectar componentes", opcionesValidas: ["conectar componentes", "interconectar"], imagen: "placa base.jpg" },
            { pregunta: "¿Qué es la BIOS?", respuesta: "sistema base de entrada", opcionesValidas: ["sistema base de entrada", "bios"], imagen: "bios.jpg" },
            { pregunta: "¿Qué es una tarjeta de sonido?", respuesta: "componente audio", opcionesValidas: ["componente audio", "sonido"], imagen: "sonido t.jpg" }
        ],
        dificil: [
            { pregunta: "¿Qué es un procesador multinúcleo?", respuesta: "procesador con varios núcleos", opcionesValidas: ["procesador multinúcleo", "varios núcleos"], imagen: "proce multi.jpg" },
            { pregunta: "¿Qué es la arquitectura x86?", respuesta: "arquitectura de 32 bits", opcionesValidas: ["32 bits", "x86"], imagen: "x86.jpg" },
            { pregunta: "¿Qué significa la sigla UEFI?", respuesta: "interfaz de firmware extensible unificada", opcionesValidas: ["uefi", "firmware unificado"], imagen: "ufi.jpg.jpg" },
            { pregunta: "¿Qué es la latencia de la memoria RAM?", respuesta: "tiempo de respuesta", opcionesValidas: ["latencia", "respuesta"], imagen: "ram.jpg" },
            { pregunta: "¿Cuál es la función de un RAID 0?", respuesta: "sin redundancia, velocidad", opcionesValidas: ["raid 0", "velocidad"], imagen: "raid.jpg" },
            { pregunta: "¿Qué significa PSU?", respuesta: "unidad de suministro de energía", opcionesValidas: ["psu", "power supply unit"], imagen: "fuente.jpg" },
            { pregunta: "¿Qué es la refrigeración líquida?", respuesta: "sistema de enfriamiento", opcionesValidas: ["enfriamiento líquido", "refrigeración"], imagen: "refri.jpg" },
            { pregunta: "¿Qué significa CPU?", respuesta: "unidad central de procesamiento", opcionesValidas: ["cpu", "procesador"], imagen: "cpu.jpg" },
            { pregunta: "¿Qué es el chipset?", respuesta: "conjunto de circuitos", opcionesValidas: ["chipset", "circuitos"], imagen: "chisep.jpg" },
            { pregunta: "¿Qué es la memoria virtual?", respuesta: "memoria de respaldo", opcionesValidas: ["ram"], imagen: "ram.jpg" }
        ]
    };
    return preguntas[nivel];
}

// Función para reiniciar el juego
function reiniciarJuego() {
    puntaje = 0; // Reiniciar puntaje
    document.getElementById('puntaje').textContent = "Puntaje: " + puntaje;
    document.getElementById('nivel-selection').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
}
