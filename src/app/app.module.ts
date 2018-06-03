import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LadderComponent } from './ladder/ladder.component';
import {DataService} from './data.service';
import { ClubComponent } from './club/club.component';
import { PlayerComponent } from './player/player.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LadderComponent,
    ClubComponent,
    PlayerComponent,
    FixturesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,AppRoutingModule, FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
