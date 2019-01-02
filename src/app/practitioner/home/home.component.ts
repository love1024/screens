import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../services/practitioner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: PractitionerService) { }

  ngOnInit() {
    this.dataService.getInfo();
  }

}
