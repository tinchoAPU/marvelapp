import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }


constructor(private http: HttpClient) {}

  getCharacterById(characterId: number): Observable<Person> {
    return this.http.get<Character>(`marvel/${characterId}`);
  }
}
