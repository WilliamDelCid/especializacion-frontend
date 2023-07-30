import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  FormGroup,FormBuilder, Validators }   from '@angular/forms';
import Swal from 'sweetalert2';
import { AsignacionService } from '@asignacion/service/asignacion.service';
@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.scss'],
})
export class AsignacionComponent implements OnInit {

  formularioGeneral!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder,private asignacionServive:AsignacionService) {
    this.formularioGeneral= this.iniciarFormulario();
  }

  ngOnInit(): void {}

  openModal(content: any) {
    this.modalService.open(content, { centered: true ,size:'lg'});
  }

  private iniciarFormulario() {
    return this.fb.group({
      cantidad: ['', [Validators.required]],
      pedido: [null, [Validators.required]],
      producto: [null, [Validators.required]]
    })
  }

  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  guardar() {
    if (this.formularioGeneral.valid) {
    console.log('guardar')
    }


    return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched())
  }

  esCampoValido(campo: string) {

    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo?.valid && validarCampo?.touched ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';

  }

  close(){
    this.formularioGeneral.reset();
    this.modalService.dismissAll();
  }

  delete(data:number){
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
