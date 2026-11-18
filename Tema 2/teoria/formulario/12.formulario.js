'use strict'
{
    let formularioCompleto = document.querySelector('#idForm1');

    formularioCompleto.nTexto.value = 'GTA 6 es una mierda';
    formularioCompleto.nUrl.value = 'Zelda es el GOTY';

    
    let inputText1 = document.querySelector('#idTexto1');
    console.log(inputText1);
    console.log(inputText1.value);
    console.log(inputText1.name);

    inputText1.addEventListener('input', (e) => {
        console.log('----------------INPUT--------------------')
        console.log(e.data)
        console.log(e.target)
        console.log(e.target.value)
    })

    inputText1.addEventListener('change', (e) => {
        console.log('----------------CHANGE--------------------')
        // console.log(e.data)
        console.log(e.target.value)
        // console.log(inputText1.value)
    })


    let textArea1 = document.querySelector('#idtextArea1');
    console.log(textArea1.value);
    textArea1.oninput = (e) => {
        console.log('----------------oninput--------------------')
        console.log(e.data)
        console.log(e.target.value)
    }
    textArea1.onchange = (e) => {
        console.log('----------------onchange--------------------')
        console.log(e.target.value)
    }

    // Radio
    let radioButtons = document.getElementsByName('sino');
    console.log('hay '+radioButtons.length+' opciones');

    console.log('----------------botones--------------------')
    radioButtons.forEach(element => {
        console.log(element.value)
        console.log(element.previousElementSibling)
    });

    for (const element of radioButtons) {
        if (element.checked) {
            console.log('seleccionado: '+element.value)
        }
    }
}