import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/service/marvel.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Character } from 'src/app/dto/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

   itemId: number | undefined;
   character: Character = {};

  ngOnInit(): void {
  this.route.paramMap.subscribe((params: ParamMap) => { // Tipar el parámetro `params`
        this.itemId = +params.get('characterId')!;
        this.obtenerDetalles(this.itemId); // Llama a un método para obtener los detalles del item
      });
  }

obtenerDetalles(id: number) {
    this.marvelService.getCharacterById(id).subscribe({
     next: (character) => {
        this.character = character;
        console.log("detail retrieved: " + this.character);
      },
      error: (error) => {
        console.error('Errors: ', error);
      }
  });

}
}
