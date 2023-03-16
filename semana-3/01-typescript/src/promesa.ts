const promesa = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Eureka");
    }, 2500);
  } else {
    reject("Algo salio mal");
  }
});

promesa
  .then((res) => {
    console.log(`Respuesta ${res}`);
  })
  .catch((error) => console.log("Error en la promesa", error));
