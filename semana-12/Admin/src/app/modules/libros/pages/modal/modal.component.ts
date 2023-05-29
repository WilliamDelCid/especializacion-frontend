import { Component, ViewChild, OnInit, AfterViewInit,Input, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb:FormBuilder,private modalService: NgbModal, private service: LibrosService) { }

  @ViewChild('content') addview !: ElementRef


  ngOnInit(): void {
    this.LoadDesignation();
    this.formularioGeneral = this.iniciarFormulario();
  }

  private iniciarFormulario():FormGroup{
    return this.fb.group({
      id_libro:[''],
      nombre_libro: ['',[Validators.required]],
      biblioteca_id: ['',[Validators.required]],
    })
  }




  errormessage = '';
  errorclass = '';
  saveresponse: any;
  editdata: any;
  destdata:any;



  SaveEmployee() {
    if (this.formularioGeneral.valid) {
    const datosRecibidos = this.formularioGeneral.getRawValue();

    const biblioteca : Biblioteca = {id:datosRecibidos.biblioteca_id};
      this.libro = {
        id:datosRecibidos.id_libro,
        nombre:datosRecibidos.nombre_libro,
        biblioteca: biblioteca
      }


      if (this.libro?.id == 0) {
        this.service.nuevoLibro(this.libro).subscribe((resp:any)=>{
          Swal.fire(
            'Usuario Agregado!','',            'success'
          )
          this.formularioGeneral.reset();
          this.modalService.dismissAll();
          this.service.getLibros();
        });
      }else{
        this.service.nuevoLibro(this.libro).subscribe((resp:any)=>{
          Swal.fire(
            'Usuario Editado!','', 'success'
          )
        this.formularioGeneral.reset();
        this.modalService.dismissAll();
        this.service.getLibros();

      });
      }




      // this.service.nuevoLibro(this.libro).subscribe(result => {
      //   Swal.fire(
      //     'Usuario Editado!','',            'success'
      //   )
      //   // this.formularioGeneral.reset();
      //   this.modalService.dismissAll();
      //   // this.empleadoService.getEmpleado();
      // });


    }else{
      return Object.values(this.formularioGeneral.controls).forEach((control)=> control.markAsTouched());
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
      this.formularioGeneral.setValue({id_libro:libro.id,nombre_libro:libro.nombre,biblioteca_id:libro.biblioteca.id});
  }

  Clearform(){
    this.formularioGeneral.setValue({id_libro:0,nombre_libro:'',biblioteca_id:''})
  }

  open() {
    this.Clearform();
    this.modalService.open(this.addview, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }




  esCampoValido(campo:string){
    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo.valid && validarCampo.touched ? 'is-invalid': validarCampo.touched ? 'is-valid': '';
  }


}
