/* 
const tfEntrada = document.querySelector("#tfEntrada");
const btnAgregar = document.querySelector("#btnAgregar");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnAccion = document.querySelector("#borrar");

const tabla = document.querySelector("#tblTareas");
const tbody = document.querySelector("tbody");


btnAgregar.addEventListener("click", () => {
    let html = `
    <td>1</td>
    <td>${tfEntrada.value}</td>
    <td id="borrar" class="btnAccion">Borrar</td>
    <td id="finalizar"  class="btnAccion">Finalizar</td>
    `;
    const theadNew = document.createElement('tr');
    theadNew.innerHTML += html;
    tbody.append(theadNew);
    tfEntrada.value = "";
    const btn = document.querySelector("#borrar");
    const btnfinalizar = document.querySelector("#finalizar");

    btn.addEventListener("click", () => {
        const a = btn.closest("tr");
        console.log(a);

    });

    btnfinalizar.addEventListener("click", () => {
        const a = btnfinalizar.parentNode;
        a.classList = 'finalizada';
    });

});



btnLimpiar.addEventListener("click", () => {
    tfEntrada.value = "";
    if (document.querySelector("td") === null) {
        return;
    }

    document.querySelector("tbody").innerHTML = "";



});

 */



const $tfEntrada = document.querySelector("#tfEntrada");
const $btnAgregar = document.querySelector("#btnAgregar");
const $btnLimpiar = document.querySelector("#btnLimpiar");
const $tbody = document.querySelector("tbody");
let contador = 0;

$btnAgregar.addEventListener("click", () => {

    if ($tfEntrada.value === "") {
        alert("No hay datos");
        return;
    }

    if ($tbody.children.length === 0) {
        contador = 0;
    }

    contador++;
    const $td1 = document.createElement("td");
    const $td2 = document.createElement("td");
    const $td3 = document.createElement("td");
    const $td4 = document.createElement("td");
    const $tr = document.createElement("tr");
    const $button1 = document.createElement("button");
    const $button2 = document.createElement("button");

    $button1.classList.add("buttonfull-1");
    $button2.classList.add("buttonfull-2");
    $button1.textContent = "Borrar";
    $button2.textContent = "Finalizar";
    $td1.textContent = contador;
    $td2.textContent = $tfEntrada.value;

    $td3.append($button1);
    $td4.append($button2);
    $tr.append($td1, $td2, $td3, $td4);
    $tbody.append($tr);
    $tfEntrada.value = "";

});

$tbody.addEventListener('click', () => {
    if (event.target.classList[0] === 'buttonfull-1') {
        event.target.parentNode.parentNode.remove()
    }

    if (event.target.classList.value === 'buttonfull-2') {
        event.target.parentNode.parentNode.classList.add("finalizada");
        event.target.classList.add("btnAccion");
        document.querySelector(".buttonfull-1").classList.add("btnAccion");
    }
});


$btnLimpiar.addEventListener("click", () => {
    $tfEntrada.value = "";
    document.querySelector("tbody").innerHTML = "";
    contador = 0;
});