var Saludo = /** @class */ (function () {
    function Saludo() {
    }
    Saludo.prototype.saludar = function (nombre) {
        console.log("Saludando" + nombre);
    };
    Saludo.prototype.edad = function (edad) {
        if (edad >= 18) {
            console.log("Es mayor de edad, tiene ".concat(edad, " anios"));
        }
        else {
            console.log("Es menor de edad, tiene ".concat(edad, " anios"));
        }
    };
    return Saludo;
}());
var saludo = new Saludo();
saludo.saludar("Juan");
saludo.edad(20);
