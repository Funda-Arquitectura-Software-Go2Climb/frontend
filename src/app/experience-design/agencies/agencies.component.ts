import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicroAgencyService } from '../../services/micro-agency.service';
import { MicroAgency } from 'src/app/models/micros/microagency';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  microAgencies: MicroAgency[] = [];

  constructor(private router: Router,
    private microAgencyService: MicroAgencyService) { }

  ngOnInit() {
    this.getMicroAgencies();
  }


  getMicroAgencies() {
    this.microAgencyService.getAllAgencies().subscribe(
      (agencies) => {
        this.microAgencies = agencies;
        console.log(this.microAgencies)
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  search(id: any) {
    localStorage.setItem("name-agency", id)
    console.log("id: " + id)
    this.router.navigate(["/search-travels"])
  }

}
