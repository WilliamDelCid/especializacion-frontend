const funcionAsync1 = async () => {
  const promesa = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Eureka");
      }, 2500);
    } else {
      reject("Algo salio mal");
    }
  });
  return promesa;
};

funcionAsync1()
  .then((resp) => {
    console.log(`Respuesta ${resp}`);
  })
  .catch((error) => console.log("Error en la promesa", error));
