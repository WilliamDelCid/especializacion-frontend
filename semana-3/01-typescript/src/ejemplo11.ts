const solicitudRed1 = async () => {
  //Hacer una solicitud para user.json
  const respuesta = await fetch("https://api.github.com/users/williamdelcid");
  if (respuesta.ok) {
    const gitHubUser = await respuesta.json();
    let img = document.createElement("img");
    img.src = gitHubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.querySelector("#resultado")?.appendChild(img);
    setTimeout(() => {
      img.remove();
    }, 4000);
  }

  // .then((response) => response.json()) //Cargarlo como json
  // .then(
  //   (gitHubUser) =>
  //     new Promise((resolve, reject) => {
  //       let img = document.createElement("img");
  //       img.src = gitHubUser.avatar_url;
  //       img.className = "promise-avatar-example";
  //       document.querySelector("#resultado")?.appendChild(img);
  //       setTimeout(() => {
  //         img.remove();
  //         resolve(gitHubUser);
  //       }, 4000);
  //     })
  // )
  // .then((githubUser: any) => {
  //   console.log(`Termino de mostrar ${githubUser.name}`);
  // });
};
solicitudRed1();
