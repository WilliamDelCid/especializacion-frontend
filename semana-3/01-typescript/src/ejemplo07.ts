const funcionAsync = async () => {
  return "Devolviendo una promesa";
};

funcionAsync().then((resp) => {
  console.log(`Respuesta ${resp}`);
});
