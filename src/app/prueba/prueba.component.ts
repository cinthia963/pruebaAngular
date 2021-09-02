import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ServicetodosService } from '../service/servicetodos.service';




@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  prueba: Todo[];


  constructor(private service : ServicetodosService){}



  ngOnInit(){
    this.service.getPrueba().subscribe(prueba =>{ this.prueba =prueba});
  }
   
  addTodo(todo:Todo){
    this.service.addTodo(todo).subscribe( (todo: Todo) => {this.prueba.push(todo);
    });  
  }
}

