import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeolpleService {

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44331/api/Person/people');
  }

  public addPeople(person:any): Observable<any>{
    return this.http.post<any>('https://localhost:44331/api/Person/create',person);
  }

}
