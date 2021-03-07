import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty.service';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public allCharacters: Character[];

  constructor(
    private  rickAndMortyService :RickAndMortyService
  ) {
    //this.allCharacters = rickAndMortyService.getAllCharacters();
    rickAndMortyService.getAllCharacters().subscribe(respAllCharacters =>{
      this.allCharacters = respAllCharacters;

    })
   }

  ngOnInit() {
    console.log(this.allCharacters);
  }

}
