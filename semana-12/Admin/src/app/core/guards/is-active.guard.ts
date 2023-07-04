import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/account/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class IsActiveGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService,private router:Router){}
  valorToken:boolean;

  canActivate():Observable<boolean> | boolean{
    // if (this.usuarioService.token!='') {
    //   if(this.usuarioService.login){
    //     if (this.valorToken) {
    //       this.router.navigate(['/dashboard']);
    //       console.log('else');
    //       return false;
    //     }else{
    //       console.log(this.usuarioService.token);
    //       console.log('if');
    //       return true;
    //     }
    //   }else{
    //     true;
    //   }
    // }else{
    //   return true
    // }
    const token = this.usuarioService.token;

    if(token!==''){
      return this.usuarioService.validarToken().pipe(
        tap((isAuth:boolean)=>{
          if(isAuth){
            this.router.navigateByUrl('/dashboard');
          }else{
            this.usuarioService.logout();
          }
        })
      )
    }
    return true;

  }

}
