import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSingleComponent } from './components/character-single/character-single.component';


const routes: Routes = [
  {path: 'charactersList', component:CharacterListComponent,
  children:[
    {path:'characterSingle/:id', component: CharacterSingleComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
