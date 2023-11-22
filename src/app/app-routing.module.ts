import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './experience-design/agencies/agencies.component';
import { TravelsComponent } from './experience-design/travels/travels.component';
import { TravelDescriptionComponent } from './experience-design/travel-description/travel-description.component';
import { SearchComponent } from './experience-design/search/search.component';
import { ProfileAgencyComponent } from './account-agency/profile-agency/profile-agency.component';
import {RegisterFormComponent} from "./auth/components/register-form/register-form.component";
import {PricingPageComponent} from "./experience-design/pages/pricing-page/pricing-page.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './xperience-desing/home/home.component';
import { SeguridadGuard } from './seguridad.guard';



const routes: Routes = [
  {path: 'register', component:RegisterFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-agencies', component:AgenciesComponent, canActivate: [SeguridadGuard]},
  {path: 'list-travels', component:TravelsComponent, canActivate: [SeguridadGuard]},
  {path: 'travel-description', component:TravelDescriptionComponent, canActivate: [SeguridadGuard]},
  {path: 'search-travels', component:SearchComponent, canActivate: [SeguridadGuard]},
  {path: 'profile-agency', component:ProfileAgencyComponent, canActivate: [SeguridadGuard]},
  {path: 'pricing', component:PricingPageComponent, canActivate: [SeguridadGuard]},
  {path: 'home', component: PricingPageComponent, canActivate: [SeguridadGuard]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
