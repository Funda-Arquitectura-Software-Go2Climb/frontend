import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from './travel.service';
import { TestBed } from '@angular/core/testing';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  travels: any[] = []; // Arreglo para almacenar los datos de viaje
  descriptions: any[] =[]
  constructor(private travelService: TravelService, private router: Router) {
  }

  ngOnInit() {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(
      (travels) => {
        this.travels = travels;
        console.log(this.travels)
        this.reduceCaracter();
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }

  reduceCaracter() {

    for(let i=0;i<this.travels.length; i++){
      this.descriptions.push(this.travels[i].descripcion)
    }

    console.log("Descripciones: ")
    console.log(this.descriptions)

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
  }

  condition(e: number, texto: string) {
    if(e>=47) return true;
    if(e>texto.length) return true;
    return false;
  }

  seeDetails(i:any){
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",i)
    this.router.navigate(["/travel-description"])
  }

}
