import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { UsuarioService } from '../../account/services/usuario.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router:Router,private usuarioService:UsuarioService,private authenticationService: AuthenticationService, private authfackservice: AuthfakeauthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.usuarioService.token;
      if (token) {
        req = req.clone({
          setHeaders:{
            Authorization: 'Autorization'+token
          }
        });
      }

      return next.handle(req).pipe(
        map((event:HttpEvent<any>)=>{
          if (event instanceof HttpResponse) {
            console.log('interceptado',event);
          }
          return event;
        }),
        catchError((error:HttpErrorResponse)=>{
          if (error.status === 401) {
            if (error.error.error === 'invalid_token') {
              this.usuarioService.validarToken().subscribe(()=>{
                location.reload();
              });
            }else{
              this.router.navigateByUrl('/account/login');
            }
          }
          return throwError(()=> new Error(error.error.error));
        })
      )


    }




    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     if (environment.defaultauth === 'firebase') {
    //         const currentUser = this.authenticationService.currentUser();
    //         if (currentUser && currentUser.token) {
    //             request = request.clone({
    //                 setHeaders: {
    //                     Authorization: `Bearer ${currentUser.token}`
    //                 }
    //             });
    //         }
    //     } else {
    //         // add authorization header with jwt token if available
    //         const currentUser = this.authfackservice.currentUserValue;
    //         if (currentUser && currentUser.token) {
    //             request = request.clone({
    //                 setHeaders: {
    //                     Authorization: `Bearer ${currentUser.token}`
    //                 }
    //             });
    //         }
    //     }
    //     return next.handle(request);
    // }
}
