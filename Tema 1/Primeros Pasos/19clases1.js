'use strict'
{
    class Punto {
        // Propiedades
        #cX;
        #cY;

        // Constructor
        constructor(cX=0, cY=0) {
            this.#cX = cX;
            this.#cY = cY;
        }

        set coordX(x) {
            this.#cX = x;
        }
        set coordY(y) {
            this.#cY = y;
        }

        get coordX(){
            return this.#cX;
        }
        get coordY(){
            return this.#cY;
        }

        static distancia(p1,p2) {
            let dx = p1.cX-p2.cX;
            let dy = p1.cY-p2.cY;
            return Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
        }

        multiplicaCoordenadas() {
            return this.#cX * this.#cY;
        }
    }

    let p1 = new Punto(10,10);
    console.log(p1);
    let d = Punto.distancia(new Punto(), new Punto(10,10));
    console.log(d);

    p1.coordX = 20;
    p1.coordY = 20;
    console.log(p1);
    console.log(p1.coordX+' - '+p1.coordY);
    console.log(p1);

    class Puntito extends Punto {
        #cZ;

        constructor(z=0,x=0,y=0) {
            super(x,y);
            this.#cZ = z;
        }

        set coordZ(z) {
            this.#cZ = z;
        }
        get coordZ(){
            return this.#cZ;
        }
    }

    let pi = new Puntito(1,2,3);
    console.log(pi);
    pi.coordX = 10;
    pi.coordY = 10;
    pi.coordZ = 10;
    console.log(pi);
}