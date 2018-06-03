import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Team } from '../team';
import { Clubs } from '../clubs';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  clubs: Clubs[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadTableT();
  }

  loadTableT() {
    this.dataService.getTableT('450').subscribe(club=> { this.clubs = club;
     console.log(this.clubs);}
   
   );
   }
  }

