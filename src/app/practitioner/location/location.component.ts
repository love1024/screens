import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../services/practitioner.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  info:any;

  get name(): string {
    if (this.info) {
      return ` ${this.info.Title} ${this.info.FirstName} ${this.info.SecondName} / MCRN ${this.info.MCRN}`;
    } else {
      return "";
    }
  }
  
  constructor(private dataService: PractitionerService) { }

  ngOnInit() {
    this.dataService.getInfoEmitter().subscribe((info) => {
      if (info) {
        this.info = info;
      }
    })
  }
}
