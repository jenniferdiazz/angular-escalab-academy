import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private FirebaseS : FirebaseService
  ) { }

  ngOnInit() {
    
    this.FirebaseS.currentUser().then(resp =>{
      console.log('usuario actual -->', resp);
    })
    console.log('localStorage email', localStorage.getItem('email'));
  }

}
