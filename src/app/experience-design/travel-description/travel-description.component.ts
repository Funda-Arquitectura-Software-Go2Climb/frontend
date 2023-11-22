/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MicroAgencyService } from 'src/app/services/micro-agency.service';
import { MicroServiceService } from 'src/app/services/micro-service.service';

declare var google: any;

@Component({
  selector: 'app-travel-description',
  templateUrl: './travel-description.component.html',
  styleUrls: ['./travel-description.component.css']
})
export class TravelDescriptionComponent implements OnInit {
  indice: number = -1;
  travel: any = {}
  agency: any = {};

  travelId: any = "";

  constructor(public dialog: MatDialog,
    public dialog2: MatDialog,
    private microServiceService: MicroServiceService
    ) {
      this.travelId = localStorage.getItem("indice-travel")
  }
  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.travelId = localStorage.getItem("indice-travel")
    this.microServiceService.getServiceById(this.travelId).subscribe(
      (service) => {
        this.travel = service;
        console.log(this.travel)
        this.iniciarMap();
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }

  
iniciarMap() {
  if (this.travel && this.travel.location) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': this.travel.location }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: results[0].geometry.location
        });
        new google.maps.Marker({
          position: results[0].geometry.location,
          map: map
        });
      } else {
        console.error('Geocode no fue exitoso por la siguiente razón: ' + status);
      }
    });
  } else {
    console.error('No hay información de ubicación disponible');
  }
}

}