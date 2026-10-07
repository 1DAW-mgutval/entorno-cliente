'use strict'
{
    let fecha = new Date();
    console.log(fecha);

    let fecha2 = new Date('1999/02/30');
    console.log(fecha2);

    let fecha3 = new Date(1999,11,30,14,30,15);
    console.log(fecha3);

    let fecha4 = new Date(1999,11,30);
    console.log(fecha4);

    let fecha5 = new Date('1999/06/30 14:30:15.857');
    console.log(fecha5);
    console.log('Día de la semana: '+fecha5.getDay());
    console.log('Día de la fecha: '+fecha5.getDate());
    console.log('Mes: '+fecha5.getMonth());
    console.log('Año: '+fecha5.getFullYear());
    console.log('Año a partir del 1900: '+fecha5.getYear());
    console.log('Hora: '+fecha5.getHours());
    console.log('Minutos: '+fecha5.getMinutes());
    console.log('Segundos: '+fecha5.getSeconds());
    console.log('Milisegundos: '+fecha5.getMilliseconds());
    console.log('Hora en meridiano no se que, nadie lo usa: '+fecha5.getTimezoneOffset());
    console.log('Milisegundos desde 1 de enero del 90: '+fecha5.getTime());

    // también se puede hacer .set de todo

    console.log(fecha5.toDateString());
    console.log(fecha5.toLocaleDateString());
}