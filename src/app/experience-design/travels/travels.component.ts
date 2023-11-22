import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { MicroService } from 'src/app/models/micros/microservice';
import { MicroServiceService } from 'src/app/services/micro-service.service';



@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  services: MicroService[] = [];
  descriptions: string[] =[]
  constructor(private router: Router, 
    private microService: MicroServiceService
    ) {
  }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.microService.getAllServices().subscribe(
      (services) => {
        this.services = services;
        console.log(this.services)
        this.reduceCaracter();
      },
      (error) => {
        console.error('Error al obtener los servicios:', error);
      }
    );
  }

  reduceCaracter() {
    this.descriptions = this.services.map(travel => travel.description);

    this.descriptions = this.descriptions.map(description => {
      return description.length > 43 ? description.substring(0, 43) + '...' : description + '...';
    });
  }

  seeDetails(i:any){
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",i)
    this.router.navigate(["/travel-description"])
  }

}
