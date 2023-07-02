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
