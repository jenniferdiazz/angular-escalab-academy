import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpClient, HttpEvent,  HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }
  //viene de http intercept
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('Interceptor active', req);
    //se intercepta la peticion, se transforma y luego se vuelve a enviar
    req = req.clone({
      setHeaders : {'Authorization': environment.token}
    });
    return next.handle(req);
  }
}
