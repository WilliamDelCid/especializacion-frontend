"use strict";
class Saludo {
    saludar(nombre) {
        console.log("Saludando" + nombre);
    }
    edad(edad) {
        if (edad >= 18) {
            console.log(`Es mayor de edad, tiene ${edad} anios`);
        }
        else {
            console.log(`Es menor de edad, tiene ${edad} anios`);
        }
    }
}
let saludo = new Saludo();
saludo.saludar("Juan");
saludo.edad(20);
