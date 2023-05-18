import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../service/empleado.service';
import { IEmpleado } from '../../interface/IEmpleado.interface';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  listaEmpleado: IEmpleado[] = [];
  term:string = '';
  constructor(private empleadoService:EmpleadoService) {

   }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Empleado' }, { label: 'Mostrar', active: true }];
    this.empleadoService.getEmpleado();
  }

  get returnList(){
    return this.empleadoService.ListEmpleados;
  }







}
