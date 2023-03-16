/* const desestructurar = () => {
  //Definir el objeto Avenger
  //   const avenger = {
  //     nombre: "Steve",
  //     clave: "Capitan America",
  //     poder: "Su poder",
  //   };
  const persona = {
    nombre: "Steve",
    profesion: "Capitan America",
    pasatiempo: "Su poder",
  };
  //   console.log("como objeto " + avenger.nombre);
  //   //Desestructurar el objeto
  //   const { nombre, clave, poder } = avenger;
  //   console.log(nombre);
  //   console.log(clave);
  //   console.log(poder);

  const extraer = ({ nombre, profesion, pasatiempo }: any) => {
    console.log(nombre);
    console.log(profesion);
    console.log(pasatiempo);
  };
  extraer(persona);
};

desestructurar();
 */

/* const desestructuracionArray = () => {
  const persona: string[] = [
    "Juan Morales",
    "Licenciado",
    "Jugar Tenis",
    "UES",
    "Doy Clases",
  ];
  const [nombre, profesion, ...datos] = persona;
  console.log(nombre);
  console.log(profesion);
  console.log(datos);
};

desestructuracionArray(); */

/* const desestructurarObjeto = () => {
  const persona = {
    nombre: "Juan Morales",
    profesion: "Licenciado",
    pasatiempo: "Jugar Tenis",
    empresa: "UES",
    ocupacion: "Doy Clases",
  };

  const { nombre, profesion, ...datos } = persona;
  console.log(nombre);
  console.log(profesion);
  console.log(datos);
};
desestructurarObjeto(); */

const estructurar = (nombre: string, ...todo: any) => {
  console.log(nombre);
  console.log(todo);
};

estructurar(
  "Armando Paredes",
  25,
  "7485-6985",
  "Col. La itaya San Salvador",
  "UES"
);
