import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //esto sera traspasado all hijo
  public subTitleAPP: string = "perrito guau";
  public titleSon:String;

  //crear funcion que escucha al hijo
  fatherFunxx(param:any){
    console.log('event -->', param);
    this.titleSon = param
  }
}
