import { Component, OnInit,Input } from '@angular/core';
import { IEmpleado } from '../../interface/IEmpleado.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() ListEmpleado!:IEmpleado[];
  @Input() queryString:string;
  empleado:IEmpleado;
  p:any;
  constructor(private modalService: NgbModal,private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
  }

  openModal(content: any,empleado:IEmpleado) {
    this.empleado = empleado;
    this.modalService.open(content, { centered: true });
  }

  borrarRegistro(empleado:IEmpleado){
    this.empleadoService.borrarEmpleado(empleado).subscribe((resp:any)=>{
      this.empleadoService.getEmpleado();

    })
  }

}
