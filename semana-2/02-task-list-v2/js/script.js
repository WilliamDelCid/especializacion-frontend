let tarea;

const $btnAgregar = document.querySelector('#btnAgregar');
$btnAgregar.addEventListener('click', () => {
    obtenerDatos();
    const $tabla = document.querySelector("tbody");

    let numFila = $tabla.rows.length;
    $tabla.insertRow().innerHTML = crearFila(numFila);
})

const obtenerDatos = () => {
    tarea = document.querySelector('#tfEntrada').value;
    document.querySelector('#tfEntrada').value = "";
}

const crearFila = (numFila) => {
    let celda1 = "<td>" + numFila + "</td>";
    let celda2 = "<td>" + tarea + "</td>";
    let celda3 = "<td><button class='btnAccion' onClick='borrar(this)' type='button'>Borrar</button></td>";
    let celda4 = "<td><button class='btnAccion' onClick='finalizar(this)' type='button'>Finalizar</button></td>";
    let fila = celda1 + celda2 + celda3 + celda4;
    return fila;
}

const borrar = (btnBorrar) => {
    let filaABorrar = btnBorrar.parentNode.parentNode;
    let encabezadoTabla = btnBorrar.parentNode.parentNode.parentNode;
    encabezadoTabla.removeChild(filaABorrar);
}

const finalizar = (finalizarTarea) => {
    let finaFinalizada = finalizarTarea.parentNode.parentNode;
    finaFinalizada.classList.add("finalizada");
}

document.querySelector("#btnLimpiar").addEventListener('click', () => {
    limpiar();
})

const limpiar = () => {
    let tabla = document.querySelector("#tblTareas");
    let filas = tabla.querySelectorAll("tr");
    for (let i = 1; i < filas.length; i++) {
        filas[i].parentNode.removeChild(filas[i]);
    }
}