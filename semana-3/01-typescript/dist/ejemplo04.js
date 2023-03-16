"use strict";
const miFuncion = (valorA, valorB, activar, objeto = "sumando") => {
    if (activar) {
        console.log(`Se activo, ${objeto} ${valorA} + ${valorB} = ${valorA + valorB}`);
    }
    else {
        console.log(`${objeto} ${valorA} + ${valorB} = ${valorA + valorB}`);
    }
};
miFuncion(5, 2);
miFuncion(5, 5, "Relizando la suma", "activo");
miFuncion(5, 10, "activo");
