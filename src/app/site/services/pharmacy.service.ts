import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const data = {
"SiteId": "31862",
"ServiceName": "Court Pharmacy",
"Address": "6 Clarendon Court, Kill, Co. Kildare",
"Telephone": "877474",
"County": "Kildare",
"CHO": "Area 7",
"ISA": "Dublin South West/Kildare/West Wicklow",
"LHO": "Kildare/West Wicklow",
"PCT": "Naas/Kill",
"Ed": "KILL",
"Location1": {
"type": "Point",
"coordinates": [
293942.5316,
222783.5159
]
},
"Location": {
"type": "Point",
"coordinates": [
-6.59251252,
53.24712246
]
},
"Location2": {
"type": "Point",
"coordinates": [
-733991.5198,
7028756.883
]
},
"id": "ce43a6af-272c-1daf-cf60-9d89185d924e",
"_rid": "sT0TAJxphVOMAwAAAAAAAA==",
"_self": "dbs/sT0TAA==/colls/sT0TAJxphVM=/docs/sT0TAJxphVOMAwAAAAAAAA==/",
"_etag": "2300247f-0000-0000-0000-5c3cc8b80000",
"_attachments": "attachments/",
"_ts": 1547487416
}

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private url = 'https://healthdirectorydev.azurewebsites.net/';
  infoEmitter = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${this.url}api/pharmacy/1`).subscribe((info) => {
      this.infoEmitter.next(info);
    }, (err) => {
      this.infoEmitter.next(data);
    })
  }

  saveInfo(info) {
    return this.http.put(`${this.url}api/pharmacy/1`, info);
  }

  getHistory(MCRN) {
    return this.http.get(`${this.url}/api/pharmacy/History/${MCRN}`);
  }

  getInfoEmitter() {
    return this.infoEmitter;
  }
}
