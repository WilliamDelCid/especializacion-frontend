import { ISumergible } from "./interface";

export class Reloj implements ISumergible {
  tiempoBajoAgua: number;
  profundidadMaxima: number;
  constructor(tiempoBajoAgua: number, profundidadMaxima: number) {
    this.tiempoBajoAgua = tiempoBajoAgua;
    this.profundidadMaxima = profundidadMaxima;
  }
  mostrarInformacion(): void {
    console.log(`Este reloj soporta ${this.tiempoBajoAgua}
        minutos bajo el agua a una profundidad de ${this.profundidadMaxima} metros`);
  }
  agregar(): void {
    throw new Error("Method not implemented.");
  }

  modificar(): void {
    throw new Error("Method not implemented.");
  }
  borrar(): void {
    throw new Error("Method not implemented.");
  }
  listarElementos(): void {
    throw new Error("Method not implemented.");
  }
}
