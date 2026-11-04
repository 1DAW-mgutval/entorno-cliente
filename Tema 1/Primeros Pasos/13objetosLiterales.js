'use strict'
{
    let persona = {
        nombre: 'mayordomo',
        edad: 88,
        ciudad: 'la basura'
    }
    console.log(persona);

    console.log(persona.edad);
    persona.edad= 188;

    console.log(persona);
    console.log(persona['edad']);

    let animal = {
        tipo: 'gato',
        patas: 4,
        bigotes: true,
        dimensiones: {
            alto:40,
            ancho: 20,
            largo: 50
        },
        maullar () {
            console.log('Soy un '+this.tipo+' que dice: ¡MIAU!');
        }
    }

    console.log('----------------------');
    console.table(animal);
    console.table(animal.dimensiones);
    animal.dimensiones.alto = 20;
    console.table(animal.dimensiones.alto);

    animal.maullar();
    console.log('----------------------');
    console.table(Object.keys(animal));
    console.table(Object.values(animal));

    // DESESTRUCTURACIÓN
    // Asigna por copia
    const {tipo, bigotes, dimensiones:{alto}} = animal;
    console.log(tipo);
    console.log(bigotes);
    animal.tipo = 'perro';
    console.log(tipo);
    console.log(alto);

    const {alto:a, ancho, largo} = animal.dimensiones;
    console.log(a);

    // unir 2 objetos literales
    const producto = {
        nombreProducto: 'Reloj',
        tipo: 'bolsillo',
        tamanio: 'grande'
    }
    const colores = {
        esfera:'blanco',
        correa:'negro'
    }

    // Copia por referencia. Mantiene los objetos separados
    console.log('unir-------------------------------')
    const productoCompleto = {producto, colores};
    console.log(productoCompleto.producto.nombreProducto);
    producto.nombreProducto = 'anillo';
    console.log(productoCompleto.producto.nombreProducto);

    // Asignación por copia. Une los objetos en 1 solo
    const productoCompletoCopia = {...producto,...colores};
    console.log(productoCompletoCopia);
    producto.nombreProducto = 'Reloj';
    console.log(productoCompletoCopia);

}