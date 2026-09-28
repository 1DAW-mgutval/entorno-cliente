"use strict"
{
    // La 'i' del final es IgnoreCase
    const r1 = /.a.o/i;

    const r2 = new RegExp('.a.o','i');
    const r3 = new RegExp(/.a.o/,'i');

    console.log(r1.test('GATO'));
    console.log(r1.test('Pato'));
    console.log(r1.test('Perro'));

    // ^ => al principio
    // m => multiline. Busca al principio de cada línea
    const r4 = new RegExp('^fútbol','m');
    console.log(r4.test('no me gusta el fútbol'));
    console.log(r4.test('fútbol sala'));
    console.log(r4.test('Sevilla\nfútbol'));

    // Mira si la cadena tiene contenido o está vacía
    const r5 = /./;
    console.log(r5.test('x'));
    console.log(r5.test('abc'));
    console.log(r5.test(''));

    // 
    // const r6 = /foo/y;
    // let s = 'table footballfootbolin';
    // console.log(r6.lastIndex);
    // console.log(r6.test(s));

    // \ => busca carácteres extraños
    const r7 = /\.a.o/i;
    console.log(r7.test('.ato'));
    console.log(/\.a.o/i.test('.ATO'));

    // . => cualquier carácter
    console.log(/A./.test('A.'));
    console.log(/A./.test('AB'));

    // Mira que exista algún parámetro del corchete.
    // $ => Mira que termine con eso.
    const r8 = /^[^aeiou]$/i;
    console.log(r8.test('BI'));

    const r9 = /[^aeiou]|.$/i;
    console.log(r9.test('ib'));

    const r10 = /[^ca|ma]/i;
    console.log(r10.test('mapas'));

    // [0-9] = /d
    // [^0-9] = /D
    // [A-Z] (ni Ñ ni tildes)
    // [a-z]
    // [A-Za-z0-9]
    // [^A-Za-z0-9] busca carácteres raros
    // [ \t\r\n] = \s
    // [^ \t\r\n] = \S

    const r11 = /^[A-Za-z0-9]$/;
    console.log(r11.test('a8'));

    // \b = texto con espacios o símbolos de puntuación. O que esté al principio o al final.
    // \B = lo contrario a \b.
    const r12 = /fo\b/i;
    console.log(r12.test('Esto es un párrafo'));
}