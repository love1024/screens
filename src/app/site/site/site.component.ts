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
      Title: this.info['Title'],
      FirstName: this.info['FirstName'],
      SecondName: this.info['SecondName'],
      FamilyName: this.info['FamilyName'],
      MCRN: this.info['MCRN'],
      PracticesAt: this.info['PracticesAt'],
      Status: this.info['Status'],
      OtherInfo: this.info['OtherInfo'],
      GSRN: this.info['GSRN'],
      PCRSID: this.info['PCRSID'],
      ContactDetails: {
        PersonalPhoneNumber: this.info['ContactDetails']['PersonalPhoneNumber'],
        PersonalEmail: this.info['ContactDetails']['PersonalEmail']
      }
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
