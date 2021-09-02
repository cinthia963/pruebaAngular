import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, observable } from 'rxjs';
import { dato } from '../models/dato';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BdService {
  
sectionUrl: string = 'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/campaign-groups/?id=1'
  constructor(private http: HttpClient) { }

  getSection():Observable <dato[]>{
    return this.http.get<dato[]>(`${this.sectionUrl}`);
   }
};





