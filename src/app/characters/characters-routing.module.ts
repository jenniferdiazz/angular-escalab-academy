import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSingleComponent } from './components/character-single/character-single.component';


const routes: Routes = [
  //cargamos vacio: lo que te invoque desde la ruta lo ponemos como url, que en este caso es characters
  //metemos las rutas hijas (characterlist-Single) dentro de una ruta padre que no esta vacias sino que es characters (ubicado en app-routing.module, donde se hace la carga del modulo)
  {path:'', children:[
    { 
      path: 'charactersList', component:CharacterListComponent,
    children:[
      {path:'characterSingle/:id', component: CharacterSingleComponent},
    ]},
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
