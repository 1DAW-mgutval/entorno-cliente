'use strict'
{
    let p = document.createElement('p');
    document.body.append(p);
    p.textContent = 'Mueve el ratón';

    document.body.addEventListener('mousemove', (event) => {
        p.textContent = 'Posición X: '+event.x+'\nPosición Y: '+event.y;
    });
}