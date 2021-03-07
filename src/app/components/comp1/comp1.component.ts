import { Component, OnInit } from '@angular/core';
import { User, Group } from '../../interfaces/user';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  public name: string = 'Gustavo';
  public lastName : string = 'Gutierrez';
  public age: number = 22;
 
  //public myUser: User
  public myUser: any = {
    name:"Juan",
    email:"juan@gmail.com",
    phoneNumber: [] ,
    profile:"deadas",
    uid    : "dsaddasdaa",
    newsletter: false,
  }
  public myGroup: Group = {
    user: this.myUser,
    location:"maipu"
  }
 

  constructor() { 
    let name: string ="Pablo";
    let lastName : string = 'Escobar';
    let age: number = 44;
    console.log("constructor" + name+" "+ lastName+" "+age)
  }

  ngOnInit() {
    const name: string ="Luisa";
    const lastName : string = 'Sandoval';
    const age: number = 28;
    console.log("init" + name+" "+ lastName+" "+ age)
    console.log("fuera" + this.name+" "+ this.lastName+" "+ this.age)
  }

  getName(address?: string): string{
    let name: string = "Pedro"
    return name

  }

}
