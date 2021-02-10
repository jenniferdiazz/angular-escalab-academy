import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public character: any;

  constructor(
    private rickAndMortyS: RickAndMortyService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params =>{
      console.log('params -->', params)
      this.character= rickAndMortyS.getCharacterById(params.id);
    })
    
   }

  ngOnInit() {
  }

}
