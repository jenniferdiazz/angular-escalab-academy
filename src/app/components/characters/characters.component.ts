import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../interfaces/character';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public allCharacters: Character[];
  constructor(
    private rickAndMortyService: RickAndMortyService
  ) { 
    rickAndMortyService.getAllCharacters().subscribe(respAllCharacters =>{
      this.allCharacters = respAllCharacters;
  })
}

  ngOnInit() {
    console.log(this.allCharacters);
  }

}
