import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PractitionerService } from '../services/practitioner.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  inputForm: FormGroup;

  info: any;

  get name(): string {
    if (this.info) {
      return ` ${this.info.Title} ${this.info.FirstName} ${this.info.SecondName} / MCRN ${this.info.MCRN}`;
    } else {
      return "";
    }
  }
  
  constructor(
    private dataService: PractitionerService,
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
      Title: ['', Validators.required],
      FirstName: ['', Validators.required],
      SecondName: [''],
      FamilyName: [''],
      MCRN: ['',Validators.required],
      PracticesAt: [''],
      Status: [''],
      OtherInfo: [''],
      GSRN: [''],
      PCRSID: [''],
      ContactDetails: this.fb.group({
        PersonalPhoneNumber: [''],
        PersonalEmail: ['']
      })
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

}
