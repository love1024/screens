import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../services/practitioner.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

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
