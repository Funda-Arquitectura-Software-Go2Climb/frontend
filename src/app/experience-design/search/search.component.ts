import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicroService } from 'src/app/models/micros/microservice';
import { MicroAgencyService } from 'src/app/services/micro-agency.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  travelsAux: any[]=[];
  services: MicroService[] = [];
  descriptions: any[] =[]
  agency: any = {}; 
  agencyId: any = ""
  constructor(private router: Router,
    private microService: MicroAgencyService
    ) {
    this.agencyId = localStorage.getItem("name-agency")
    console.log("localstorage: ");
    console.log(this.agencyId);
  }

  ngOnInit() {
    this.getAgency();
  }
  
  getAgency() {
    this.microService.getAgencyById(this.agencyId).subscribe(
      (agency) => {
        this.agency = agency;
        this.travelsAux = this.agency.services;
        this.reduceCaracter();
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  reduceCaracter() {
    this.descriptions = this.travelsAux.map(travel => travel.description);
  
    this.descriptions = this.descriptions.map(description => {
      return description.length > 43 ? description.substring(0, 43) + '...' : description + '...';
    });
  }

  seeDetails(id:any){
    
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",id.toString())
    this.router.navigate(["/travel-description"])
  }

}


