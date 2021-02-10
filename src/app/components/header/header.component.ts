import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private FirebaseS : FirebaseService
  ) { }

  ngOnInit() {
  }

  toLogout(){
      this.FirebaseS.logout().then(resp =>{
        console.log('logout exitoso -->', resp)

      }).catch(error =>{
        console.log('error logout -->', error)
      })
  }

}
