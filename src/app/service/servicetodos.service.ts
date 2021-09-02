import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServicetodosService {
pruebaUrl: string= "https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/items/";

constructor(private http: HttpClient) {}

getPrueba():Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.pruebaUrl}`);
  }
addTodo(todo: Todo):Observable <Todo>{
    return this.http.post<Todo>(this.pruebaUrl, todo, httpOptions);
  }
}
