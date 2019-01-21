import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angularmaterial.module';
import { SummaryComponent } from './summary/summary.component';
import { SiteComponent } from './site/site.component';
import { PractitionerComponent } from './practitioner/practitioner.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { HistoricalUpdateComponent } from './historical-update/historical-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [HomeComponent, SummaryComponent, SiteComponent, PractitionerComponent, OtherInfoComponent, HistoricalUpdateComponent, ServiceComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'site',
        component: HomeComponent
      }
    ])
  ]
})
export class SiteModule { }
