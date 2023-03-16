"use strict";
const solicitudRed1 = async () => {
    var _a;
    const respuesta = await fetch("https://api.github.com/users/williamdelcid");
    if (respuesta.ok) {
        const gitHubUser = await respuesta.json();
        let img = document.createElement("img");
        img.src = gitHubUser.avatar_url;
        img.className = "promise-avatar-example";
        (_a = document.querySelector("#resultado")) === null || _a === void 0 ? void 0 : _a.appendChild(img);
        setTimeout(() => {
            img.remove();
        }, 4000);
    }
};
solicitudRed1();
