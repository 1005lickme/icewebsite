import { Component, OnInit } from '@angular/core';
import {Fixture} from '../fixture';
import {DataService} from '../data.service';
@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadTableF();
  }

  loadTableF(){
    this.dataService.getTableF('450').subscribe(fixtures=> {this.fixtures = fixtures;
    console.log(fixtures);}
  );
  }

}
