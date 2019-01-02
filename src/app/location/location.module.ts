import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { PractitionersComponent } from './practitioners/practitioners.component';
import { ServicesComponent } from './services/services.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { HistoricalUpdatesComponent } from './historical-updates/historical-updates.component';

@NgModule({
  declarations: [HomeComponent, SummaryComponent, SiteDetailComponent, PractitionersComponent, ServicesComponent, OtherInfoComponent, HistoricalUpdatesComponent],
  imports: [
    CommonModule
  ]
})
export class LocationModule { }
