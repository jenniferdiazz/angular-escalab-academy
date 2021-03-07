import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { User } from '../../interfaces/user';
import { FirestoreService } from '../../services/firestore.service';
import { Subject } from 'rxjs';

import {takeUntil} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  //puclic Myuser:User ;
  public myUser: any ={
    email:'',
    phoneNumber:'',
    profile:'',
    name:'',
    uid:'',
  };
  public uid: string;
  //subject es un tipo especial de un observable que ayuda am enejar los eventos que pasen dentro de los observables a los que estamos uscrito
  private serviceSuscription : Subject<boolean> = new Subject();

  constructor(
    private FirebaseS : FirebaseService,
    private firestoreService : FirestoreService
  ) {
    this.FirebaseS.currentUser().then(resp =>{
      console.log('usuario actual -->', resp);
      this.uid = resp.uid;
     
      }).catch(error =>{
        console.log('error callbackhell -->', error);
      });
   }
//pipe: coloca instrucciones a la suscricion, operador que trata los datos de la suscripcion de las que nos vamos a sumar
 //takeuntil provee una notificacion para nuestra suscripcion,, notificamos la mmada ya sea desescribirla, etc
 //suscripcion es cuando escuchamos un observable 
async ngOnInit() { 
  //el ngOnInit nace cuando se contruia toda la vista y empezaba el render
    //lamamos al observable y ejecutamos el notificador, luego marcamos el observable al que estamos suscrito, nos suscrimos al observable, nos devolvera data
    this.firestoreService.getUser(this.uid)
    .pipe(takeUntil(this.serviceSuscription))
    .subscribe(data =>{
      console.log('firstore data home -->', data)
      //obtenemos la data que se mando en el .next de firestore.service.ts
      this.myUser={
        email: data.email,
        phoneNumber: data.phoneNumber,
        profile: data.profile,
        name: data.name,
        uid: data.uid,
      };
      console.log('myuser data -->', this.myUser);

    });
    console.log('localstorager email -->', localStorage.getItem('email'));
  }
  ngOnDestroy() {
    //ngOnDestroy sucede cuando salimos de la vista, en este caso de la vista HOME
    console.log('servicio desuscrito -->', this.serviceSuscription);
    //nos des-suscribimos del servicio, cerrando la conexion y deja de escuhar el servicio del cliente
    this.serviceSuscription.next(false);
    this.serviceSuscription.complete();

  } 
}

