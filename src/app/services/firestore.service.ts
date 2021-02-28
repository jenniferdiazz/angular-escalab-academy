import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
//promesa: hacemos una consulta al servidor, le mandamos un peticion y obtenemos respuesta y el componente esperamos hasta que se ejecute
//el observable es similar pero queda laconexion abierta, queda escuchando
//rxjs: programacion reactiva

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public userBd : any

  constructor(
    private fireStore : AngularFirestore
  ) { }
  async createUser(newUser: User) : Promise<string>{
    try{
      const respnewUser = await this.fireStore.collection('users').add(newUser);
      console.log('response createUser -->', respnewUser);
      return respnewUser.id;
    }catch(error){
      console.log('response createUser -->',error);
    }
  }
  getUser(uid:string): Observable<User>{
    //retornamos un observable desde nuestro servicio estamos generando una conexion de nuestra base de datos y el front--end...quedamos suscritos
    return new Observable(observer =>{
      // querySnapshot da un formato de vista de la base de datos que estamos recorriendo
      this.fireStore.firestore.collection('users').where('uid', '==', uid).get().then(querySnapShot => {
        querySnapShot.forEach(resp =>{
          console.log('data from db -->', resp.data());
          //se obtiene un solo objeto
          this.userBd = resp.data();
        })
        observer.next(this.userBd);
        //.complete deja de ejecutar codigo y manda la ifo
        observer.complete();
      }).catch(error=>{
      console.log('error call service --->', error)
    observer.error(error);   
    observer.complete();
      });
    });
}
}
