'use strict'
{
    function calcularRGB() {
        return Math.floor(Math.random() * 256);
    }
    document.body.addEventListener('click',(e) => {
        e.target.style.backgroundColor = 'rgb('+calcularRGB()+','+calcularRGB()+','+calcularRGB()+')';
    })
}