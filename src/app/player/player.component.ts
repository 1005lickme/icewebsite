import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { DataService } from '../data.service';
import { Team } from '../team';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

players: Player[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
this.loadTableP();

  }

loadTableP() {
  this.dataService.getTableP(66).subscribe(player=> {this.players = player;
  console.log(this.players);}
);
}


}
