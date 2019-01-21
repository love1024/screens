import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../services/pharmacy.service';

@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner..component.html',
  styleUrls: ['./practitioner..component.css']
})
export class PractitionerComponent implements OnInit {

  info:any;

  get name(): string {
    if (this.info) {
      return ` ${this.info.ServiceName} / Site ID ${this.info.SiteId}`;
    } else {
      return "";
    }
  }
  
  constructor(private dataService: PharmacyService) { }

  ngOnInit() {
    this.dataService.getInfoEmitter().subscribe((info) => {
      if (info) {
        this.info = info;
      }
    })
  }
}
