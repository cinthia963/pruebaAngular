import { Component, OnInit } from '@angular/core';
import { BdService } from '../service/bd.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private service: BdService ) { }

  ngOnInit(): void {
  }

}
