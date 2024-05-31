import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/dto/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {



  private baseUrl = 'http://localhost:8080/api/marvel';

  constructor(private http: HttpClient) {}

  getCharacterById(characterId: number): Observable<Character> {
    const url = `${this.baseUrl}/${characterId}`;
    return this.http.get<Character>(url);
  }

  getAllCharacters(): Observable<Character[]> {
    const url = this.baseUrl;
    return this.http.get<Character[]>(url);
  }
}
