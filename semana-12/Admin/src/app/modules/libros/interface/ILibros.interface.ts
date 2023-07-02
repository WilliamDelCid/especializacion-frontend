      export interface ILibros {
        id:         number;
        nombre:     string;
        biblioteca: Biblioteca;
      }

      export interface Biblioteca {
        id:     number;
        nombre?: string;
}
