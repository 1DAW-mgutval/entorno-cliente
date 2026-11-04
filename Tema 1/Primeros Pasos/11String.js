"use strict"
{
    let s = 'Hoy parece que LLUEVE';
    console.log(s.toLowerCase());
    console.log(s);
    let s2 = new String("lo que sea");
    console.log(s.toUpperCase());
    console.log(s.concat(s2));
    console.log(s.indexOf("L"));
    console.log(s.charAt(0));
    console.log(s.lastIndexOf('e',15));
    console.log(s.replaceAll('L','H'));

    let datos = 'Juan:Pedro:Bernal:47';
    let todosLosTrozos = datos.split(':');
    console.table(todosLosTrozos);

    console.log(datos.substring(5,15));
    datos.includes('Ma')? console.log('si') : console.log('no');

    let datos2 = new String('                   con espacios             ');
    console.log(datos2);
    console.log(datos2.trim());

    console.log(datos.repeat(2));
}