import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  private logged : boolean;
  constructor(
    private firebaseS : FirebaseService,
    private router : Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.firebaseS.currentUser().then(resp=>{
        if(resp.uid != null){
          console.log("guard passs!!")
          this.logged = true;
        } else{
          this.logged = false;
          window.alert('Ruta protegida');
          this.router.navigate(['/login']);
        }
      
      }).catch(error =>{
        console.log('error guard canActivate -->', error);
        this.logged = false;
        window.alert('Ruta protegida');
      })
    return this.logged;
  }
  
}
