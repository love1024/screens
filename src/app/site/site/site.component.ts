import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../services/pharmacy.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  inputForm: FormGroup;

  info: any;

  address: number = -1;

  get name(): string {
    if (this.info) {
      return ` ${this.info.ServiceName} / Site ID ${this.info.SiteId}`;
    } else {
      return "";
    }
  }
  
  constructor(
    private dataService: PharmacyService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.dataService.getInfoEmitter().subscribe((info) => {
      if (info) {
        this.info = info;
        this.updateForm();
      }
    })
  }

  createForm() {
    this.inputForm = this.fb.group({
      ServiceName: ['', Validators.required],
      Address: [''],
      XLocation: [''],
      YLocation: [''],
      Phone1: [''],
      Phone2: [''],
      Phone3: [''],
      Fax: [''],
      Telephone: [''],
      SiteWeb: [''],
      SiteEmail: [''],
      SiteStatus: [''],
    })
  }

  updateForm() {
    this.inputForm.patchValue({
      ServiceName: this.info['ServiceName'],
      Address: this.info['Address'],
      XLocation: this.info['Location']['coordinates'][0],
      YLocation: this.info['Location']['coordinates'][1],
      Phone1: this.info['Telephone'],
      Phone2: [''],
      Phone3: [''],
      Fax: [''],
      Telephone: this.info['Telephone'],
      SiteWeb: [''],
      SiteEmail: [''],
      SiteStatus: [''],
    })
  }

  onSubmit(valid) { 
    if (valid) {
      this.dataService.saveInfo(this.inputForm.value).subscribe((res) => {
        this.dataService.infoEmitter.next(res);
      })
    }
  }

  searchAddress(field)  {
    this.dataService.searchAddress(field).subscribe((res) => {
      if (res.value == 2) {
        this.inputForm.get('Address').setValue(res.address);
        this.inputForm.get('XLocation').setValue(res.locationx);
        this.inputForm.get('YLocation').setValue(res.locationy);
      } 
      this.address = res.value;
    })
  }

}
