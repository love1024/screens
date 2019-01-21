import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PharmacyService } from '../services/pharmacy.service';

@Component({
  selector: 'app-historical-update',
  templateUrl: './historical-update.component.html',
  styleUrls: ['./historical-update.component.css']
})
export class HistoricalUpdateComponent implements OnInit {

  displayedColumns = ['date', 'updatedBy', 'updates'];
  dataSource1 = new MatTableDataSource();
  dataSource2 = new MatTableDataSource();
  dataSource3 = new MatTableDataSource();

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
        this.getHistory();
      }
    })
  }

  getHistory() {
    this.dataService.getHistory(this.info['MCRN']).subscribe((res) => {
      const history = res['History'];
      if (history) {
        this.dataSource1 = new MatTableDataSource(history[0]['Updates']);
        this.dataSource2 = new MatTableDataSource(history[1]['Updates']);
        this.dataSource3 = new MatTableDataSource(history[2]['Updates']);
      }
    })
  }

}
