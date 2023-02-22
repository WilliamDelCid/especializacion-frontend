const random = () => {
    return Math.floor(Math.random() * (6) + 1);
}

const jugar = document.querySelector('#btnJugar');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

jugar.addEventListener('click', () => {
    const jugador1 = random();
    const jugador2 = random();

    img1.src = `images/dado${jugador1}.png`;
    img2.src = `images/dado${jugador2}.png`;

    if (jugador1 > jugador2) {
        document.body.querySelector("h1").textContent = "Gano Jugador 1";
    } else if (jugador2 > jugador1) {
        document.body.querySelector("h1").textContent = "Gano Jugador 2";
    } else if (jugador1 === jugador2) {
        document.body.querySelector("h1").textContent = "Empate";

    }

});