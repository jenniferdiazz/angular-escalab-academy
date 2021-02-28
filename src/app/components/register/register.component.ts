import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { FirestoreService } from '../../services/firestore.service';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  get email(){return this.registerForm.get('email')};
  get pass(){return this.registerForm.get('pass')};

  public registerForm = new FormGroup({
    email : new FormControl('jennifer123@gmail.com', [Validators.required , Validators.email]),
    pass: new FormControl('', [Validators.required])
  })
  

  constructor(
    private firebaseService : FirebaseService,
    private firestoreService : FirestoreService
    ) { }

  ngOnInit() {
  }
  onRegister(){
    console.log('registerForm -->', this.registerForm.value);
    this.firebaseService.registerUser(this.registerForm.value.email, this.registerForm.value.pass)
    .then(resp =>{
      console.log('ok register');
      const newUser: User = {
        email:resp.email,
        name:'',
        phoneNumber :'',
        profile:'',
        uid: resp.uid
      }
      this.firestoreService.createUser(newUser).then(resp =>{
          console.log('new user register firestore -->', resp);

      }).catch(error =>{
        console.log('error register firestore -->', error);
      })
        })
  }

}
