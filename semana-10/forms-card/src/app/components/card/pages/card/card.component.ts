import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MOUTH_VALIDATE, NAME_VALIDATE, NUMBER_VALIDATE } from 'src/app/constants/constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  formulario!: FormGroup;
  private isName: string = NAME_VALIDATE;
  private isNumber: string = NUMBER_VALIDATE;
  private isMouth: string = MOUTH_VALIDATE;
  validado: boolean = false;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();
  }
  

  private iniciarFormulario():FormGroup{
    return this.fb.group({
      nombre: ['',[Validators.required,Validators.pattern(this.isName)]],
      card: ['',[Validators.required,Validators.pattern(this.isNumber)]],
      month: ['',[Validators.required,Validators.pattern(this.isMouth)]],
      year: ['',[Validators.required,Validators.pattern(this.isNumber)]],
      cvc: ['',[Validators.required,Validators.pattern(this.isNumber)]]
    });
  }


  esCampoValido(campo: string) {
    const validarCampo = this.formulario.get(campo);
    return !validarCampo?.valid && validarCampo?.touched ? 'invalid' : validarCampo?.touched ? '' : '';
  }

  guardar(){
  
    if (this.formulario.valid) {
      console.log('Funciona');
      this.validado = true;
      
    }else{
      console.log('No funciona');
      
    }


    return Object.values(this.formulario.controls).forEach((control)=>control.markAsTouched());

   }

   get clickConfirm(){
    this.validado = false;
    return this.formulario.reset();
   }


  }

