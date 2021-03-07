import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { FirestoreService } from '../../services/firestore.service';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public profiles: any[]=['basic', 'medium', 'advanced'];
  get email(){return this.registerForm.get('email')};
  get pass(){return this.registerForm.get('pass')};
  get phones(){return this.registerForm.get('phones') as FormArray};

  public registerForm = new FormGroup({
    //formControl es input
    email : new FormControl('jennifer123@gmail.com', [Validators.required , Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl(''),
    profile: new FormControl(''),
    phones: new FormArray([]),
    newsletter : new FormControl(false)
  })
  

  constructor(
    private firebaseService : FirebaseService,
    private firestoreService : FirestoreService
    ) { }

  ngOnInit() {
  }
  addPhone(){
    const phoneGroup = new FormGroup({
      phone: new FormControl(''),
      description: new FormControl('')
    });
    this.phones.push(phoneGroup);
  }
  removePhone(index: number){
    this.phones.removeAt(index);
  }
  onRegister(){
    console.log('registerForm -->', this.registerForm.value);
    this.firebaseService.registerUser(this.registerForm.value.email, this.registerForm.value.pass)
    .then(resp =>{
      console.log('ok register');
      //usando interfaz
      const newUser: User = {
        email:resp.email,
        name:this.registerForm.value.name,
        phoneNumber :this.registerForm.value.phone,
        profile:this.registerForm.value.profile,
        newsletter: this.registerForm.value.newsletter,
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
