const solicitudRed = () => {
  //Hacer una solicitud para user.json
  fetch("https://api.github.com/users/williamdelcid")
    .then((response) => response.json()) //Cargarlo como json
    .then(
      (gitHubUser) =>
        new Promise((resolve, reject) => {
          let img = document.createElement("img");
          img.src = gitHubUser.avatar_url;
          img.className = "promise-avatar-example";
          document.querySelector("#resultado")?.appendChild(img);
          setTimeout(() => {
            img.remove();
            resolve(gitHubUser);
          }, 4000);
        })
    )
    .then((githubUser: any) => {
      console.log(`Termino de mostrar ${githubUser.name}`);
    });
};
solicitudRed();
