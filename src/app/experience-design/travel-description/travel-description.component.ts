import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { Travel } from 'src/app/models/travel';
import { Agency } from 'src/app/models/agency';
import { AgencyService } from '../agencies/agency.service';

@Component({
  selector: 'app-travel-description',
  templateUrl: './travel-description.component.html',
  styleUrls: ['./travel-description.component.css']
})
export class TravelDescriptionComponent implements OnInit {
  indice: number = -1
  travel: any = {}
  agency: any = {};
  
  constructor(private travelService: TravelService, private agencyService: AgencyService,) {

  }
  ngOnInit(): void {
    this.getTravels()
    this.getAgencies()
  }

  getTravels() {
    this.travelService.getTravels().subscribe(
      (travels) => {
        let aux: any = localStorage.getItem("indice-travel")
        this.indice = parseInt(aux)
        this.travel = travels[this.indice-1];
        console.log("indice llegado: "+ this.indice)
        console.log("descripcion: " +travels[this.indice].titulo)
        console.log("el arreglo: ")
        console.log(travels)
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }

  getAgencies() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agency = agencies[this.travel.agencyId-1];
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }
}
