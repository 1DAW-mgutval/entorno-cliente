'use strict'
{
    // Todas las funciones devuelven null si hay algún error, por ejemplo con el tipo de dato.



    // Función para ver si un nombre es válido o no.
    function validarNombre(nombre) {
        if (typeof nombre == 'string') {
            let reg = /^[A-Z][a-zA-Z]*$/;
            return reg.test(nombre.replace(' ', ''));
        }
        return false;
    }

    // Función para ver si hay que seguir jugando o no.
    function seguirJugando(puntos) {
        if (puntos instanceof Array) {
            if (calcularRondas(puntos) < 5) {
                // Uno de los dos ha ganado 3.
                if (puntos[1] == 3 || puntos[2] == 3) {
                    return false;
                } else if (puntos[0] == 2 && puntos[1] == 2) {
                    return false;
                } else if (puntos[0] == 2 && puntos[2] == 2) {
                    return false;
                }
            } else {
                // Llevan 5 rondas
                return false;
            }
            return true;
        }
        return null;
    }

    // Ver si la elección del jugador es válida.
    function eleccionValida(eleccion) {
        if (typeof eleccion == 'string') {
            let posibilidades = ['R', 'P', 'S'];
            return posibilidades.includes(eleccion);
        }
        return null;
    }

    // Función para calcular cuántas rondas se han jugado.
    function calcularRondas(puntos) {
        if (puntos instanceof Array) {
            return puntos.reduce((acc, val) => acc + val);
        }
        return null;
    }

    // Función para calcular quién gana cada ronda.
    function calcularGanador(jugada1, jugada2) {
        if (typeof jugada1 == 'string' && typeof jugada2 == 'string') {
            if (jugada1 == jugada2) {
                return 0;
            } else if (jugada1 == 'R' && jugada2 == 'S') {
                return 1;
            } else if (jugada1 == 'P' && jugada2 == 'R') {
                return 1;
            } else if (jugada1 == 'S' && jugada2 == 'P') {
                return 1;
            }
            return 2;
        }
        return null;
    }

    // Función para calcular el ganador final
    function ganadorFinal(puntos) {
        if (puntos instanceof Array) {
            if ((puntos[0] > puntos[1] && puntos[0] > puntos[2] || puntos[1] == puntos[2])) {
                return 0;
            } else if (puntos[1] > puntos[2]) {
                return 1;
            } else {
                return 2;
            }
        }
        return null;
    }


    // ---------------- Empieza el Juego-----------------
    // Inicialización de variables
    let jugador1 = {
        nombre: '',
        jugada: ''
    };
    let jugador2 = {
        nombre: '',
        jugada: ''
    };
    let puntos = [0, 0, 0];
    let ganador = '';

    // Validación de nombres.
    do {
        jugador1.nombre = prompt('Escriba el nombre de Jugador 1');
    } while (!validarNombre(jugador1.nombre));
    do {
        jugador2.nombre = prompt('Escriba el nombre de Jugador 2');
    } while (!validarNombre(jugador2.nombre));

    // Cada ronda:
    while (seguirJugando(puntos)) {
        do {
            jugador1.jugada = prompt(jugador1.nombre + ' elige tu jugada');
        } while (!eleccionValida(jugador1.jugada));

        do {
            jugador2.jugada = prompt(jugador2.nombre + ' elige tu jugada');
        } while (!eleccionValida(jugador2.jugada));

        switch (calcularGanador(jugador1.jugada, jugador2.jugada)) {
            case 1:
                ganador = jugador1.nombre;
                puntos[1]++;
                break;
            case 2:
                ganador = jugador2.nombre;
                puntos[2]++;
                break;
            case 0:
                ganador = 'EMPATE';
                puntos[0]++;
                break;
        }
        alert('Número de jugadas: ' + calcularRondas(puntos) + '\n' +
            'Elección de ' + jugador1.nombre + ': ' + jugador1.jugada + '\n' +
            'Elección de ' + jugador2.nombre + ': ' + jugador2.jugada + '\n' +
            'Ganador: ' + ganador + '\n' +
            jugador1.nombre + ' lleva ' + puntos[1] + ' rondas ganadas' + '\n' +
            jugador2.nombre + ' lleva ' + puntos[2] + ' rondas ganadas' + '\n'
        );
    }

    // Resumen final.
    switch (ganadorFinal(puntos)) {
        case 1:
            ganador = 'Ganador final: ' + jugador1.nombre;
            break;
        case 2:
            ganador = 'Ganador final: ' + jugador2.nombre;
            break;

        default:
            ganador = 'Ha habido un empate';
            break;
    }
    alert('---RESUMEN DE LA PARTIDA---' + '\n' +
        'Número de jugadas: ' + calcularRondas(puntos) + '\n' +
        jugador1.nombre + ' ha ganado ' + puntos[1] + ' rondas' + '\n' +
        jugador2.nombre + ' ha ganado ' + puntos[2] + ' rondas' + '\n' +
        'Jugadas que han terminado en empate: ' + puntos[0] + '\n' +
        ganador
    );
}