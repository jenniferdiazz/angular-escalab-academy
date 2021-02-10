import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-single',
  templateUrl: './character-single.component.html',
  styleUrls: ['./character-single.component.css']
})
export class CharacterSingleComponent implements OnInit {
  public character: any;
  constructor(
    private rickAndMortyS : RickAndMortyService,
    private activatedRoute : ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params =>{
      console.log('params -->', params)
      this.character= rickAndMortyS.getCharacterById(params.id);
    })
   }

  ngOnInit() {
  }

}
