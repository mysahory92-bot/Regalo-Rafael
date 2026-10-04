// 🏀 REGALO PARA RAFAEL 🏀

let regaloActual = 1;


// =========================
// ABRIR CAJA
// =========================

document.getElementById("caja").onclick = function () {

    document.getElementById("textoInicio").innerHTML = `
        🎉 ¡SORPRESA RAFAEL! 🎉
        <br><br>
        Preparé 10 regalos especialmente para ti. 🏀
        <br>
        Espero que te guste cada uno. 💙
    `;

    document.getElementById("musicaBox")
        .classList.remove("oculto");

    document.getElementById("juego")
        .classList.remove("oculto");

    mostrarRegalo();
};


// =========================
// MÚSICA
// =========================

function controlarMusica() {

    const musica = document.getElementById("musica");
    const boton = document.getElementById("botonMusica");

    if (musica.paused) {

        musica.play()
            .then(() => {

                boton.textContent =
                    "⏸️ Pausar música";

            })
            .catch(() => {

                alert(
                    "No se pudo reproducir la música. Revisa que el archivo se llame musica.mp3"
                );

            });

    } else {

        musica.pause();

        boton.textContent =
            "▶️ Reproducir música";
    }
}


// =========================
// MOSTRAR REGALOS
// =========================

function mostrarRegalo() {

    document.getElementById("numeroRegalo").textContent =
        "Regalo " + regaloActual + " de 10";

    document.getElementById("progreso").style.width =
        (regaloActual * 10) + "%";


    // REGALO 1
    if (regaloActual === 1) {

        document.getElementById("titulo").textContent =
            "💌 Primer regalo";

        document.getElementById("descripcion").textContent =
            "Todo comienza con un pequeño mensaje.";

        document.getElementById("contenido").innerHTML = `

            <div class="regalo-grande">
                🎁
            </div>

            <p>
                Este es solamente el comienzo
                de esta aventura. 💙
            </p>

            <button onclick="siguienteRegalo()">
                Abrir regalo 2 ➡️
            </button>
        `;
    }


    // REGALO 2
    else if (regaloActual === 2) {

        document.getElementById("titulo").textContent =
            "💙 Un mensaje para ti";

        document.getElementById("descripcion").textContent =
            "Algo que quiero que recuerdes.";

        document.getElementById("contenido").innerHTML = `

            <div class="mensaje-especial">

                Gracias por todos los momentos,
                las risas y los recuerdos
                que hemos compartido.

                <br><br>

                Eres una persona muy especial
                para mí y siempre voy a creer en ti. 💙

            </div>

            <button onclick="siguienteRegalo()">
                Continuar ⭐
            </button>
        `;
    }


    // REGALO 3
    else if (regaloActual === 3) {

        document.getElementById("titulo").textContent =
            "🏀 Juego del balón";

        document.getElementById("descripcion").textContent =
            "Encuentra el balón de básquet.";

        document.getElementById("contenido").innerHTML = `

            <p>
                ¿Cuál es el balón correcto?
            </p>

            <button onclick="incorrecto()">
                ⚽
            </button>

            <button onclick="incorrecto()">
                🏐
            </button>

            <button onclick="correcto()">
                🏀
            </button>

            <button onclick="incorrecto()">
                🎾
            </button>

            <p id="resultadoJuego"></p>
        `;
    }


    // REGALO 4
    else if (regaloActual === 4) {

        document.getElementById("titulo").textContent =
            "🧩 Pregunta especial";

        document.getElementById("descripcion").textContent =
            "Una pequeña pregunta.";

        document.getElementById("contenido").innerHTML = `

            <p>
                ¿Qué quiero que siempre hagas?
            </p>

            <button onclick="correcto()">
                🌟 Creer en ti
            </button>

            <button onclick="incorrecto()">
                😭 Rendirme
            </button>

            <p id="resultadoJuego"></p>
        `;
    }


    // REGALO 5
    else if (regaloActual === 5) {

        document.getElementById("titulo").textContent =
            "📸 Nuestros recuerdos";

        document.getElementById("descripcion").textContent =
            "Momentos que siempre voy a recordar.";

        document.getElementById("contenido").innerHTML = `

            <div class="album">

                <div class="album-titulo">
                    🏀 MIS RECUERDOS FAVORITOS 🏀
                </div>


                <!-- FOTO GRANDE -->

                <div class="foto-principal">

                    <img src="foto1.jpeg">

                    <div class="texto-foto">
                        ✨ Un recuerdo especial
                    </div>

                </div>


                <!-- 3 FOTOS -->

                <div class="fotos-pequenas">

                    <div class="foto-card">

                        <img src="foto2.jpeg">

                        <p>
                            💙 Momentos inolvidables
                        </p>

                    </div>


                    <div class="foto-card">

                        <img src="foto3.jpeg">

                        <p>
                            🏀 Siempre juntos
                        </p>

                    </div>


                    <div class="foto-card">

                        <img src="foto4.jpeg">

                        <p>
                            😂 Muchas risas
                        </p>

                    </div>

                </div>


                <div class="frase-recuerdo">

                    "Los mejores recuerdos no se guardan
                    en una foto, se quedan para siempre
                    en el corazón." 💙

                </div>


                <button onclick="siguienteRegalo()">
                    🏀 Continuar la aventura ➡️
                </button>

            </div>
        `;
    }


    // REGALO 6
    else if (regaloActual === 6) {

        document.getElementById("titulo").textContent =
            "💌 El sobre secreto";

        document.getElementById("descripcion").textContent =
            "Abre el sobre.";

        document.getElementById("contenido").innerHTML = `

            <div
                id="sobre"
                class="sobre"
                onclick="abrirSobre()"
            >

                <div class="sobre-tapa">
                    💌
                </div>

                <div class="sobre-carta">
                    Para Rafael 💙
                </div>

            </div>

            <p id="textoSobre">
                Haz clic en el sobre.
            </p>
        `;
    }


    // REGALO 7
    else if (regaloActual === 7) {

        document.getElementById("titulo").textContent =
            "🔐 Regalo secreto";

        document.getElementById("descripcion").textContent =
            "Necesitas una contraseña.";

        document.getElementById("contenido").innerHTML = `

            <div class="candado">
                🔒
            </div>

            <p>
                Pista: es el nombre del cumpleañero.
            </p>

            <input
                id="password"
                type="password"
                placeholder="Escribe la contraseña"
            >

            <br>

            <button onclick="comprobarPassword()">
                🔓 Desbloquear
            </button>

            <p id="mensajePassword"></p>

            <div
                id="premio"
                class="premio-secreto oculto"
            >

                🎉 ¡LO LOGRASTE! 🎉

                <br><br>

                Eres una persona increíble.
                🏀💙

            </div>
        `;
    }


    // REGALO 8
    else if (regaloActual === 8) {

        document.getElementById("titulo").textContent =
            "🎮 Mini reto";

        document.getElementById("descripcion").textContent =
            "Una última pregunta.";

        document.getElementById("contenido").innerHTML = `

            <p>
                ¿Quién cumple años?
            </p>

            <button onclick="correcto()">
                Rafael 🎂
            </button>

            <button onclick="incorrecto()">
                El gato 🐱
            </button>

            <p id="resultadoJuego"></p>
        `;
    }


    // REGALO 9
    else if (regaloActual === 9) {

        document.getElementById("titulo").textContent =
            "🏆 Ya casi llegamos";

        document.getElementById("descripcion").textContent =
            "Solo falta un regalo.";

        document.getElementById("contenido").innerHTML = `

            <div class="regalo-grande">
                🏀🏆🏀
            </div>

            <p>
                ¡Llegaste hasta aquí!
            </p>

            <button onclick="siguienteRegalo()">
                Último regalo ➡️
            </button>
        `;
    }


    // REGALO 10
    else if (regaloActual === 10) {

        document.getElementById("titulo").textContent =
            "🎂 ¡ÚLTIMO REGALO!";

        document.getElementById("descripcion").textContent =
            "Completaste toda la aventura.";

        document.getElementById("contenido").innerHTML = `

            <div class="regalo-grande">
                🎂🏀🎁
            </div>

            <h3>
                ¡COMPLETASTE LOS 10 REGALOS! 🎉
            </h3>

            <p>
                Ahora viene la sorpresa final.
            </p>

            <button onclick="final()">
                🎉 SORPRESA FINAL
            </button>
        `;
    }
}


// =========================
// SIGUIENTE REGALO
// =========================

function siguienteRegalo() {

    regaloActual++;

    mostrarRegalo();
}


// =========================
// RESPUESTAS
// =========================

function correcto() {

    const resultado =
        document.getElementById("resultadoJuego");

    if (resultado) {

        resultado.textContent =
            "✅ ¡CORRECTO! 🎉";

    }

    setTimeout(() => {

        siguienteRegalo();

    }, 1000);
}


function incorrecto() {

    const resultado =
        document.getElementById("resultadoJuego");

    if (resultado) {

        resultado.textContent =
            "❌ Casi... ¡intenta otra vez!";

    }
}


// =========================
// SOBRE
// =========================

function abrirSobre() {

    document
        .getElementById("sobre")
        .classList.add("abierto");

    document.getElementById("textoSobre").innerHTML = `

        💌 <strong>Para Rafael:</strong>

        <br><br>

        Gracias por tantos momentos,
        risas y recuerdos.

        <br><br>

        Siempre voy a creer en ti.
        🏆💙

        <br><br>

        <button onclick="siguienteRegalo()">
            Continuar ➡️
        </button>
    `;
}


// =========================
// CONTRASEÑA
// =========================

function comprobarPassword() {

    let password =
        document
            .getElementById("password")
            .value
            .toLowerCase()
            .trim();


    if (password === "rafael") {

        document.getElementById(
            "mensajePassword"
        ).textContent =
            "🎉 ¡CONTRASEÑA CORRECTA!";


        document.getElementById(
            "premio"
        ).classList.remove("oculto");


        setTimeout(() => {

            siguienteRegalo();

        }, 2000);

    } else {

        document.getElementById(
            "mensajePassword"
        ).textContent =
            "❌ Incorrecta. Pista: es su nombre.";
    }
}


// =========================
// FINAL
// =========================

function final() {

    document
        .getElementById("paginaPrincipal")
        .classList.add("oculto");


    document
        .getElementById("pantallaFinal")
        .classList.remove("oculto");


    confeti();

    // Si la música estaba pausada,
    // intenta continuarla en la pantalla final.

    const musica =
        document.getElementById("musica");

    if (musica && musica.paused) {

        musica.play().catch(() => {});

    }
}


// =========================
// CONFETI
// =========================

function confeti() {

    const emojis = [
        "🏀",
        "🎉",
        "🎊",
        "🏆",
        "⭐",
        "💙",
        "🎂"
    ];


    const contenedor =
        document.getElementById("confeti");


    for (let i = 0; i < 80; i++) {

        let pieza =
            document.createElement("span");


        pieza.className =
            "confeti-pieza";


        pieza.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        pieza.style.left =
            Math.random() * 100 + "%";


        pieza.style.animationDelay =
            Math.random() * 2 + "s";


        contenedor.appendChild(pieza);
    }
}


// =========================
// CUENTA REGRESIVA
// =========================

function cuentaRegresiva() {

    const ahora =
        new Date();


    // 14 DE OCTUBRE DE 2026
    // Mes 9 = octubre porque enero = 0

    const cumpleaños =
        new Date(
            2026,
            9,
            14,
            0,
            0,
            0
        );


    const diferencia =
        cumpleaños - ahora;


    if (diferencia <= 0) {

        document.getElementById(
            "dias"
        ).textContent = "🎉";


        document.getElementById(
            "horas"
        ).textContent = "🎂";


        document.getElementById(
            "minutos"
        ).textContent = "🏀";


        document.getElementById(
            "segundos"
        ).textContent = "💙";


        document.getElementById(
            "mensajeCumple"
        ).textContent =
            "🎉 ¡HOY ES EL CUMPLEAÑOS DE RAFAEL! 🎉";


        return;
    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia /
                (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferencia /
                (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferencia /
                1000) % 60
        );


    document.getElementById(
        "dias"
    ).textContent =
        String(dias).padStart(2, "0");


    document.getElementById(
        "horas"
    ).textContent =
        String(horas).padStart(2, "0");


    document.getElementById(
        "minutos"
    ).textContent =
        String(minutos).padStart(2, "0");


    document.getElementById(
        "segundos"
    ).textContent =
        String(segundos).padStart(2, "0");
}


// INICIAR CUENTA REGRESIVA

cuentaRegresiva();

setInterval(
    cuentaRegresiva,
    1000
);