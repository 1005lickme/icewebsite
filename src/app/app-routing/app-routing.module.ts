import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LadderComponent} from '../ladder/ladder.component';
import {ClubComponent} from '../club/club.component';
import {PlayerComponent} from '../player/player.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {FixturesComponent} from '../fixtures/fixtures.component';

const routes: Routes =[
  {path:'ladder', component: LadderComponent},
  {path:'player', component: PlayerComponent},
  {path:'club', component: ClubComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'fixtures', component: FixturesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
