import{Home} from './home';
import{Away} from './away';

export class Standing {
    constructor(public _links: string,
         public position: string,
          public goalDifference: string,
           public teamName: string,
           public crestURL: string,
           public points: string,
           public wins: string,
           public draws: string,
           public losses: string,
           public home: Home,
           public away: Away
           ) {}
}
