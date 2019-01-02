import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  private url = 'https://healthdirectorydev.azurewebsites.net/';
  infoEmitter = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${this.url}api/Practitioner/1`).subscribe((info) => {
      this.infoEmitter.next(info);
    })
  }

  saveInfo(info) {
    return this.http.put(`${this.url}api/Practitioner/1`, info);
  }

  getHistory(MCRN) {
    return this.http.get(`${this.url}/api/Practitioner/History/${MCRN}`);
  }

  getInfoEmitter() {
    return this.infoEmitter;
  }
}
