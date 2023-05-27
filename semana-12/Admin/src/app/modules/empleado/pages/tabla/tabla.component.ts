import { Component, OnInit,Input } from '@angular/core';
import { IEmpleado } from '../../interface/IEmpleado.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoService } from '../../service/empleado.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.borrarEmpleado(empleado).subscribe((resp:any)=>{
          this.empleadoService.getEmpleado();
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

}
