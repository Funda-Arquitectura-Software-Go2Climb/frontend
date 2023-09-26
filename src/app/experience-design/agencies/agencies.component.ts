import { Component, OnInit } from '@angular/core';import { AgencyService } from './agency.service';
import { Agency } from 'src/app/models/agency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  agencies: Agency[] = [];

  constructor(private agencyService: AgencyService, private router: Router) { }

  ngOnInit() {
    this.getAgencies();
  }

  getAgencies() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agencies = agencies;
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  search(name: any) {
    localStorage.setItem("name-agency", name)
    this.router.navigate(["/search-travels"])
  }

}
