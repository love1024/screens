import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { PractitionerModule } from './practitioner/practitioner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'practitioner', pathMatch: 'full'}
    ]),
    PractitionerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
