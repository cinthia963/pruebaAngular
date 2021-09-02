import { Component, OnInit } from '@angular/core';
import { BdService } from '../service/bd.service';
import { dato } from '../models/dato';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
section: dato[];
constructor(public bd: BdService){}


  ngOnInit() {
 this.bd.getSection().subscribe(section => { this.section =section;});
    
}
}