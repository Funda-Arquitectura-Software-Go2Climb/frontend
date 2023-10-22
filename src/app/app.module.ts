import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './experience-design/header/header.component';
import { TravelsComponent } from './experience-design/travels/travels.component';
import { AgenciesComponent } from './experience-design/agencies/agencies.component';

// angular material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DevicesIotComponent } from './iot-managament/devices-iot/devices-iot.component';
import { TravelDescriptionComponent } from './experience-design/travel-description/travel-description.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './experience-design/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelsComponent,
    AgenciesComponent,
    DevicesIotComponent,
    TravelDescriptionComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
