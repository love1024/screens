import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../services/pharmacy.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
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
