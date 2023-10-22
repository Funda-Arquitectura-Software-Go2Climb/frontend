import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { Router } from '@angular/router';
import { Agency } from 'src/app/models/agency';
import { AgencyService } from '../agencies/agency.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  travels: any[] = []; // Arreglo para almacenar los datos de viaje
  travelsAux: any[]=[];
  descriptions: any[] =[]
  agency: any = {}; 
  agencyId: any = ""
  constructor(private travelService: TravelService, private router: Router, private agencyService: AgencyService) {
    
  }

  ngOnInit() {
    this.getTravels();
    this.getAgencies()
  }

  getTravels() {
    let indice: string|any = localStorage.getItem("name-agency")
    this.agencyId = parseInt(indice)
    this.travelService.getTravelsByAgencyId(this.agencyId).subscribe(
      (travels) => {
        
        this.travels = travels;
        this.reduceCaracter();
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }


  getAgencies() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agency = agencies[this.agencyId-1];
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }


  reduceCaracter() {

    for(let i=0;i<this.travels.length; i++){
      this.descriptions.push(this.travels[i].descripcion)
    }

    // console.log("Descripciones: ")
    // console.log(this.descriptions)

    for (let i = 0; i< this.travels.length; i++){
      let texto = this.descriptions[i]
      let aux: string = ""
      let e:number = 0
      while(!this.condition(e, texto)){
        aux = aux + texto[e]
        e++
      }
      this.descriptions[i] = aux + "..."
    }

    // console.log("Descripciones: ")
    // console.log(this.descriptions)
  }

  condition(e: number, texto: string) {
    if(e>=47) return true;
    if(e>texto.length) return true;
    return false;
  }

  seeDetails(id:any){
    
    localStorage.removeItem("indice-travel")
        localStorage.setItem("indice-travel",id.toString())
        this.router.navigate(["/travel-description"])
  }

}


