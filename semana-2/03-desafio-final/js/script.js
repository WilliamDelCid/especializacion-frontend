const $tbody = document.querySelector('tbody');
const $btnAgregar = document.querySelector('#btnAgregar');
const $btnCargar = document.querySelector('#btnCargar');
const $btnLimpiar = document.querySelector('#btnLimpiar');
const $btnJugar = document.querySelector('#btnJugar');
const $inputValue = document.querySelector('#tfEntrada');
const $inputAleatorio = document.querySelector('#tfCantidad');
const $idvalores = document.querySelector('#valores');
const $error = document.querySelector('#resultado');

const cargarDatos = async () => {
    await fetch('/data/data.json').then((response) =>
        response.json()
    ).then((data) =>
        cargarTabla(data)
    );
}

cargarDatos();

const cargarTabla = (json) => {

    for (let i = 0; i < json.length; i++) {
        cargarFilas(json[i].nombre);
    }


}


$btnAgregar.addEventListener('click', () => {
    if ($inputValue.value === "") {
        alert('Agregue un dato');
        return;
    }
    cargarFilas($inputValue.value);
    $inputValue.value = "";

})

$btnCargar.addEventListener('click', () => {
    $tbody.innerHTML = "";
    cargarDatos();
})

$btnLimpiar.addEventListener('click', () => {
    let filas = document.querySelectorAll('tr');
    for (let i = 1; i < filas.length; i++) {
        $tbody.removeChild(filas[i]);
    }
})

const cargarFilas = (dato) => {
    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');
    const $button = document.createElement('button');
    $button.classList.add('btn');
    $button.classList.add('btn-primary');
    $button.classList.add('click');
    $button.textContent = 'Borrar';
    $td1.textContent = dato;
    $td2.append($button);
    $tr.append($td1, $td2);
    return $tbody.append($tr);
}

$btnJugar.addEventListener('click', () => {
    const $value = parseInt($inputAleatorio.value);

    if (!Number.isInteger($value)) {
        return alert('Digite un numero.');
    }

    if ($tbody.children.length + 1 <= $value) {
        $error.textContent = "No hay suficientes datos en la tabla";
        return;
    }

    if ($value >= 2 && $value <= 5) {
        const resultado = random($value, $tbody.children.length - 1);
        console.log(resultado);
        if (resultado === "Duplicados") {
            return;
        }
        $idvalores.textContent = resultado;
        $error.textContent = "";

        return;
    } else {
        $idvalores.textContent = "";
        $error.textContent = "Numero entre 2 y 5";
    }


})

const random = (cantidad, numFilas) => {
    let dato = [];

    for (let i = 0; i < cantidad; i++) {
        dato.push(Math.floor((Math.random() * numFilas) + 1));
    }

    const hasDuplicates = (dato) => {
        return new Set(dato).size < dato.length;
    }



    if (hasDuplicates(dato) == true) {
        $error.textContent = "Numeros duplicados tirar de nuevo";
        return "Duplicados";
    }


    dato.map(element => {
        $tbody.children[element - 1].style.backgroundColor = 'rgb(153, 234, 230)';
    })

    return dato;
}


$tbody.addEventListener('click', (e) => {
    if (e.target.classList[2] == "click") {
        e.target.parentNode.parentNode.remove();
    }
})