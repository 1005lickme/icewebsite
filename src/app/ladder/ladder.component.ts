import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
import { Standing } from '../Standing';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {

standings : Standing[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.loadTable();

  }


  loadTable() {
   this.dataService.getTable('398').subscribe(standing=> {this.standings = standing;
    console.log(standing);}
  
  );
  }


}
