"use strict";
const solicitudRed = () => {
    fetch("https://api.github.com/users/williamdelcid")
        .then((response) => response.json())
        .then((gitHubUser) => new Promise((resolve, reject) => {
        var _a;
        let img = document.createElement("img");
        img.src = gitHubUser.avatar_url;
        img.className = "promise-avatar-example";
        (_a = document.querySelector("#resultado")) === null || _a === void 0 ? void 0 : _a.appendChild(img);
        setTimeout(() => {
            img.remove();
            resolve(gitHubUser);
        }, 4000);
    }))
        .then((githubUser) => {
        console.log(`Termino de mostrar ${githubUser.name}`);
    });
};
solicitudRed();
