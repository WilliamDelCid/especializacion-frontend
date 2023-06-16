import { Injectable, NgZone,inject } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { ILoginUsuario, IRegistroUsuario } from '../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const base_url= environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  storage:Storage = window.localStorage;
  public usuario!:Usuario;
  private http = inject(HttpClient);
  constructor(
    private router: Router,
    private ngZone:NgZone,private cookies:CookieService
  ) { }

    crearUsuario(forData:IRegistroUsuario){
      return this.http.post(`${base_url}/usuarios`,forData).pipe(
        tap((resp:any)=>{
          this.guardarLocalStorage(resp.token,resp.menu);
        })
      )
    }

    guardarLocalStorage(token:string,menu:any){
        this.storage.setItem('token',token);
        this.storage.setItem('menu',JSON.stringify(menu));
    }

    get token():string{
      return this.storage.getItem("token")|| "";
    }

    login(formData:ILoginUsuario){
        return this.http
        .post(`${base_url}/login`,formData).pipe(
          tap((resp:any)=>{
            this.guardarLocalStorage(resp.token,resp.menu);
            // this.setTokenCookies(resp.token);
            const user = resp;
            return user;
          }),
          catchError(err=>{
            return throwError('Error inesperado');
          })
        )
    }

    logout(){
        this.storage.removeItem("token");
        this.storage.removeItem('menu');
        // this.cookies.deleteAll();
        this.ngZone.run(()=>{
          this.router.navigateByUrl('/account/login')
        })
    }

    private setTokenCookies(token:string){
      this.cookies.set('token',token);
    }
    private get TokenCookies(){
      return this.cookies.get("token");
    }


    validarToken():Observable<boolean>{
      return this.http.get(`${base_url}/login/renew`,{
        headers:{
          'x-token':this.token,
        },
      }).pipe(
        map((resp:any)=>{
          const {email,google,img,nombre,rol,uid}=resp.usuario;
          this.usuario = new Usuario(nombre,email,"",img,google,rol,uid);
          this.guardarLocalStorage(resp.token,resp.menu);
          return true;
        }),
        catchError((error)=> of(false))
      );
    }

    get rol(): "ADMIN_ROLE" | "USER_ROLE" | string{
      return this.usuario.rol;
    }


}
