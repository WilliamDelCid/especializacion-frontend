import { Component, ViewChild, OnInit, AfterViewInit,Input, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LibrosService } from '../../service/libros.service';
import { Biblioteca, ILibros } from '../../interface/ILibros.interface';
import { IEmpleado } from '../../../empleado/interface/IEmpleado.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formularioGeneral!: FormGroup;
  @Input() validacion!:boolean;

  libro!:ILibros;

  constructor(private modalService: NgbModal, private service: LibrosService) { }

  @ViewChild('content') addview !: ElementRef


  ngOnInit(): void {
    this.LoadDesignation();
  }


  errormessage = '';
  errorclass = '';
  saveresponse: any;
  editdata: any;
  destdata:any;

  empform = new FormGroup({
    id_libro: new FormControl({ value: 0, disabled: true }),
    nombre_libro: new FormControl(''),
    biblioteca_id: new FormControl(''),
  });

  SaveEmployee() {
    if (this.empform.valid) {
    const datosRecibidos = this.empform.getRawValue();

    const biblioteca : Biblioteca = {id:datosRecibidos.biblioteca_id};
      this.libro = {
        id:datosRecibidos.id_libro,
        nombre:datosRecibidos.nombre_libro,
        biblioteca: biblioteca
      }


      this.service.nuevoLibro(this.libro).subscribe(result => {
        Swal.fire(
          'Usuario Editado!','',            'success'
        )
        // this.formularioGeneral.reset();
        this.modalService.dismissAll();
        // this.empleadoService.getEmpleado();
      });


    } else {
      this.errormessage = "Please enter valid data";
      this.errorclass = "errormessage";
    }
  }


  LoadDesignation(){
    this.service.getBiblioteca().subscribe(result=>{
     this.destdata=result;
     console.log(this.destdata.id);

    });
  }

  LoadEditData(libro: ILibros) {
    this.open();
      this.empform.setValue({id_libro:libro.id,nombre_libro:libro.nombre,biblioteca_id:libro.biblioteca.id});
  }

  Clearform(){
    this.empform.setValue({id_libro:0,nombre_libro:'',biblioteca_id:''})
  }

  open() {
    this.Clearform();
    this.modalService.open(this.addview, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get name() {
    return this.empform.get("name");
  }
  get email() {
    return this.empform.get("email");
  }



}
