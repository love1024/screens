import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../services/pharmacy.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: PharmacyService,private router: ActivatedRoute) { }

  ngOnInit() {
    let id = this.router.snapshot.params['id'];
    this.dataService.getInfo(id);
  }

}
