import { Component, OnInit,Input } from '@angular/core';
import { EmpleadoService } from '../../service/empleado.service';
import { IEmpleado } from '../../interface/IEmpleado.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NAME_VALIDATE } from '../../constants/constants';

  @Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
  })

export class ModalComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  term:string = '';
  formularioGeneral!: FormGroup;
  @Input() leyenda!:string;
  @Input() validacion!:boolean;
  @Input() empleado!:IEmpleado;
  private isName: string=  NAME_VALIDATE;
  constructor(private fb:FormBuilder,private empleadoService:EmpleadoService,private modalService: NgbModal) {

   }

  ngOnInit(): void {
    this.formularioGeneral = this.iniciarFormulario();
    this.breadCrumbItems = [{ label: 'Empleado' }, { label: 'Mostrar', active: true }];
    this.Empleado();
  }

  private iniciarFormulario():FormGroup{
    return this.fb.group({
      id:[''],
      nombre: ['',[Validators.required,Validators.pattern(this.isName)]],
      apellido: ['',[Validators.required,Validators.pattern(this.isName)]],
      puntaje: ['',[Validators.required]]
    })
  }

  Empleado() {
    if (this.empleado) {
      this.formularioGeneral.reset({
        id: this.empleado.id,
        nombre: this.empleado.nombre,
        apellido: this.empleado.apellido,
        puntaje: this.empleado.puntaje,
      });
    }
  }

  guardar(){
    if (this.formularioGeneral.valid) {
      if (this.empleado?.id) {
        const empleado = this.formularioGeneral.value;
        this.empleadoService.editarEmpleado(empleado).subscribe((resp:any)=>{
          this.formularioGeneral.reset();
          this.modalService.dismissAll();
          this.empleadoService.getEmpleado();
        });
      }else{
        const empleado = this.formularioGeneral.value;
        this.empleadoService.nuevoEmpleado(empleado).subscribe((resp:any)=>{
        this.formularioGeneral.reset();
        this.modalService.dismissAll();
        this.empleadoService.getEmpleado();
      });
      }
    }else{
      return Object.values(this.formularioGeneral.controls).forEach((control)=> control.markAsTouched());
    }
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  esCampoValido(campo:string){
    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo.valid && validarCampo.touched ? 'is-invalid': validarCampo.touched ? 'is-valid': '';
  }

}
