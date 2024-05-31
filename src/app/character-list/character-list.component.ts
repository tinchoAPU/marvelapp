import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/service/marvel.service';
import { Character } from 'src/app/dto/character';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'modified', 'resourceURI','detail'];
  dataSource = [];
  data: any;
  characters: Character[] = [];

  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe({
      next: (characters) => {
        this.characters = characters;
        console.log(characters);
      },
      error: (error) => {
        console.error('Error fetching characters', error);
      }
    });
  }

  navigateDetail(characterId: number) {
    console.log("param in:" + characterId);
    this.router.navigate(['/detail', characterId]);
  }

}
