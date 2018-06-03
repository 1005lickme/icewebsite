import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Standing } from './Standing';
import { Player } from './Player';
import { Team } from './team';
import { Clubs } from './clubs';
import { Fixture } from './fixture';

const httpOptionsA = {
	headers: new HttpHeaders ({
		'X-Auth-Token': '1d389ccd24584194ad289240e356e817'
	})
	};


@Injectable()
export class DataService {

	

  constructor(private http: HttpClient) {
  	 
   }


  getTable (leagueID : string) : Observable <Standing[]>
  { // pass in the league ID


  		var urlPrefix = "http://api.football-data.org/v1/competitions/";
		var urlSuffix = "/leagueTable";
		//http://api.football-data.org/v1/competitions/450/leagueTable
		
		return this.http.get<Standing[]>(urlPrefix+leagueID+urlSuffix, httpOptionsA); 
		
  		
  }
  getTableP (id: number) : Observable <Player[]>
  {
	  var urlPrefix = "http://api.football-data.org/v1/teams/";
	  var urlSuffix = "/players";

	  return this.http.get<Player[]>(urlPrefix+id+urlSuffix, httpOptionsA)
  }
  getTableT (leagueID: string) : Observable <Clubs[]>
  {
	  var urlPrefix = "http://api.football-data.org/v1/competitions/";
	  var urlSuffix = "/teams/";
	  return this.http.get<Clubs[]>(urlPrefix+leagueID+urlSuffix, httpOptionsA)
  }
  getTableF (leagueID: string) : Observable <Fixture[]>
  {
	  var urlPrefix = "http://api.football-data.org/v1/competitions/"
	  var urlSuffix = "/fixtures";
	  return this.http.get<Fixture[]>(urlPrefix + leagueID + urlSuffix, httpOptionsA)
  } 
}
