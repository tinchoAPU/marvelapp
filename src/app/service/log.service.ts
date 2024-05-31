import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Log } from 'src/app/dto/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

   private baseUrl = 'http://localhost:8080/api/logs';

    getAllLogs(): Observable<Log[]> {
      const url = this.baseUrl;
      return this.http.get<Log[]>(url);
    }
}
