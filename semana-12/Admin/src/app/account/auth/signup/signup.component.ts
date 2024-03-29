import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import { IS_CLAVE, IS_NAME } from '../../constans/const';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,private usuarioService:UsuarioService
   , private userService: UserProfileService) { }

  ngOnInit() {
    this.iniciarFormulario();

  }

  private iniciarFormulario():void{
    this.signupForm = this.formBuilder.group({
      nombre: ['', []],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(IS_CLAVE)]],
      repassword: ['', [Validators.required]],
    },{
      validators: this.claveSonIguales('password','repassword')
    });
  }

  claveSonIguales(pass1:string,pass2:string){
      return (formGroup:FormGroup)=>{
        const password = formGroup.controls[pass1];
        const repassword = formGroup.controls[pass2];
        if (password.value === repassword.value) {
          repassword.setErrors(null)
        }else{
          repassword.setErrors({noSonIguales:true});
        }
      }
  }

  crearUsuario(){
    this.submitted=true;
    if (this.signupForm.valid) {
        this.usuarioService.crearUsuario(this.signupForm.value).subscribe((resp)=>{
          this.router.navigate(['/account/login']);
          Swal.fire({
            position:'top-end',
            icon:'success',
            title:'Guardado con exito',
            showConfirmButton:false,
            timer:2000
          });
        },
        (err)=>{
          Swal.fire({
            icon:'error',
            title:'Error',
            text:err,
          })
        }
        )
    }else{
      Swal.fire({
        icon:'error',
        title:'Error',
        text:'Algo salio mal'
      })
    }
  }

  validatePassword() {
    return this.signupForm.get('password').value === this.signupForm.get('repassword').value;
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const repassword = control.get('repassword')?.value;

    if (password !== repassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }


  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      if (environment.defaultauth === 'firebase') {
        this.authenticationService.register(this.f.email.value, this.f.password.value).then((res: any) => {
          this.successmsg = true;
          if (this.successmsg) {
            this.router.navigate(['/dashboard']);
          }
        })
          .catch(error => {
            this.error = error ? error : '';
          });
      } else {
        this.userService.register(this.signupForm.value)
          .pipe(first())
          .subscribe(
            data => {
              this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/account/login']);
              }
            },
            error => {
              this.error = error ? error : '';
            });
      }
    }
  }


  onSignUp() {
    this.submitted = true;
    console.log(this.validatePassword())
    if(!this.validatePassword()){
      Swal.fire('error','error','error');
    }

  }

}
