import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../services/pharmacy.service';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.css']
})
export class OtherInfoComponent implements OnInit {

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
