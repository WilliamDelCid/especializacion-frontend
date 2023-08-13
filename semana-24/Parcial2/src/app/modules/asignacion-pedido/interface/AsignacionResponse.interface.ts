export interface AsignacionResponse {
  content: IAsignacion[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IAsignacion {
  idAsignacionProducto?: number;
  pedidos: IPedidos;
  producto: IProducto;
  cantidad: number;
}

export interface IPedidos{
  idPedido:number;
  fecha_pedido:Date;
}

export interface IProducto{
  idProducto:number;
  nombreProducto:string;
  esAlcoholica:boolean;
  precio:number;
  medida:string;
  stock:number;
}


interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
