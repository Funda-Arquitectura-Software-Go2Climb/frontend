import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MicroAgency } from 'src/app/models/micros/microagency';
import { MicroAgencyService } from 'src/app/services/micro-agency.service';
import { MicroServiceService } from 'src/app/services/micro-service.service';

@Component({
  selector: 'app-profile-agency',
  templateUrl: './profile-agency.component.html',
  styleUrls: ['./profile-agency.component.css']
})
export class ProfileAgencyComponent implements OnInit {
  agency: MicroAgency = {};

  indice: number = 0;

  constructor(private router: Router,
    public dialog: MatDialog,
    private microAgencyService: MicroAgencyService,
    private microServiceService: MicroServiceService
    ) { }

  ngOnInit() {
    this.getMicroAgency();
  }

  

  // getAgency() {
  //   this.agencyService.getByid(1).subscribe(
  //     (response) => {
  //       this.agency = response;
  //       console.log(this.agency);
  //     },
  //     (error) => {
  //       console.error('Error al obtener la agencia:', error);
  //     }
  //   );
  // }

  getMicroAgency() {
    this.microAgencyService.getAgencyById(6).subscribe(
      (response) => {
        this.agency = response;
        console.log(this.agency);
      },
      (error) => {
        console.error('Error al obtener la agencia:', error);
      }
    );
  }
  


  seeDetails(i:any){
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",i)
    console.log(i)
    this.router.navigate(["/travel-description"])
  }
}
