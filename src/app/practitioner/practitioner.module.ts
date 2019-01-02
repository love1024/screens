import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angularmaterial.module';
import { SummaryComponent } from './summary/summary.component';
import { PersonalComponent } from './personal/personal.component';
import { LocationComponent } from './location/location.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { HistoricalUpdateComponent } from './historical-update/historical-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, SummaryComponent, PersonalComponent, LocationComponent, OtherInfoComponent, HistoricalUpdateComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'practitioner',
        component: HomeComponent
      }
    ])
  ]
})
export class PractitionerModule { }
