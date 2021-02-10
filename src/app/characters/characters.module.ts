import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSingleComponent } from './components/character-single/character-single.component';


@NgModule({
  declarations: [CharacterListComponent, CharacterSingleComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
