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

    // Encontrar al principio
    console.log('¿Principio?')
    const r6 = /foo/y;
    let s = 'table footballfootbolin';
    console.log(r6.lastIndex);
    console.log(r6.test(s));
    console.log(r6.lastIndex);

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
    // [A-Za-z0-9] = /w (incluye el '_')
    // [^A-Za-z0-9] busca carácteres no alfanuméricos = /W (verifica que no incluya el '_')
    // [ \t\r\n] = \s
    // [^ \t\r\n] = \S

    const r11 = /^[A-Za-z0-9]$/;
    console.log(r11.test('a8'));

    // \b = texto con espacios o símbolos de puntuación. O que esté al principio o al final.
    // \B = lo contrario a \b.
    const r12 = /fo\b/i;
    console.log(r12.test('Esto es un párrafo'));

    // * => 0 o más ocurrencias
    // + => 1 o más ocurrencias
    // ? => el carácter que lo precede puede aparecer o no
    const r14= /a*/;
    console.log(r14.test(''));
    console.log(r14.test('a'));
    console.log(r14.test('aa'));
    console.log(r14.test('bbb'));

    const r15 = /a+/;
    console.log(r15.test(''));
    console.log(r15.test('a'));
    console.log(r15.test('aa'));
    console.log(r15.test('bbb'));

    const r16 = /disparos?/;
    console.log(r16.test('escuché disparos en la habitación'));
    console.log(r16.test('efectuó un disparo al aire'));
    console.log(r16.test('dispar'));

    // {n} => se repite n veces
    // {n,} => se repite n o más veces
    // {n,m} => se repite entre n y m veces
    const r17 = /[0-9]{2}/;
    console.log(r17.test(42));
    console.log(r17.test(88));
    console.log(r17.test(1));
    console.log(r17.test(125));

    const r18 = /^[0-9]{2}$/;
    console.log(r18.test(4));
    console.log(r18.test(55));
    console.log(r18.test(125));

    const r19 = /^[0-9]{3,}$/;
    console.log(r19.test(33));
    console.log(r19.test(345));
    console.log(r19.test(3450));

    const r20 = /^[0-9]{2,5}$/;
    console.log(r20.test(2));
    console.log(r20.test(444));
    console.log(r20.test(543213));

    const r21 = /^\D{2}$/;
    console.log(r21.test('aa3'));

    const r22 = /\w/;
    console.log(r22.test('jklhuhfrtd'));

    const r23 = /\b[a-z]{3}\b/gi;
    let t = 'la ola del mar es azul y tenía más sal que el salero';
    console.log(r23.lastIndex);
    console.log(r23.test(t));
    console.log(r23.lastIndex);
    console.log(r23.test(t));
    console.log(r23.lastIndex);

    let matchesArray = t.match(r23);
    console.table(matchesArray);
}