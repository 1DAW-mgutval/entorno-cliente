'use strict'
{
    // console.log(window.location);
    console.log('href: '+window.location.href);
    console.log('\norigin: '+window.location.origin);
    console.log('\nprotocol: '+window.location.protocol);
    console.log('\nhost: '+window.location.host);
    console.log('\nhostname: '+window.location.hostname);
    console.log('\nport: '+window.location.port);
    console.log('\npathname: '+window.location.pathname);

    // Historial
    console.log('\nhistory: '+window.history);

    // Para volver a la página anterior
    let back = document.createElement('button');
    back.textContent = 'Volver';
    document.body.append(back);

    back.addEventListener('click', () => {
        // window.history.back();
        window.history.go(-1);
    })

    // Para volver a la página siguiente
    let siguiente = document.createElement('button');
    siguiente.textContent = 'Siguiente';
    document.body.append(siguiente);

    siguiente.addEventListener('click', () => {
        // window.history.forward();
        window.history.go(1);
    })

    // Para recargar la página actual
    let recargar = document.createElement('button');
    recargar.textContent = 'Recargar';
    document.body.append(recargar);

    recargar.addEventListener('click', () => {
        // window.history.forward();
        window.history.go(0);
    })

    console.log('\nnavigator: '+window.navigator);
    console.log('\nuserAgent: '+window.navigator.userAgent);
    console.log('\nconnection: '+window.navigator.connection);


    // Geolocalización
    let geo = document.createElement('button');
    geo.textContent = 'Geolocalizar';
    document.body.append(geo);

    const opciones = {
        enableHighAccuracy: true,
        timeout: 2000, //tiempo máximo de espera para obtener la geolocalización.
        maximumAge: 0 //Para que no coja el dato de la caché del navegador.
    };

    geo.addEventListener('click', () => {
        // window.navigator.geolocation.getCurrentPosition(exito,error,opciones);
        window.navigator.geolocation.getCurrentPosition((pos)=> {
            let coordenadas = pos.coords;
            console.log('\n\n MANDANDO MISIL A SU UBICACIÓN:');
            console.log('\nLatitud: '+coordenadas.latitude);
            console.log('\nLatitud: '+coordenadas.longitude);
            console.log('\n'+coordenadas.accuracy+' metros');
        }, (er) => {
            console.log(er.code + " - "+ er.message);
        }, opciones);
    })
}