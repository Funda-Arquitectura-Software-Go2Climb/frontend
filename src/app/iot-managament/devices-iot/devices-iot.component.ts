import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/models/card";
import { DevicesIotService } from "./devices-iot.service";


@Component({
  selector: 'app-devices-iot',
  templateUrl: './devices-iot.component.html',
  styleUrls: ['./devices-iot.component.css']
})
export class DevicesIotComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: DevicesIotService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getCards().subscribe(
      (data: Card[]) => this.cards = data,
      error => console.error('Error fetching cards', error)
    );
  }
}
