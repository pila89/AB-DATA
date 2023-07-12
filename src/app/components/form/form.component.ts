import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public userForm!: FormGroup;
  states: any;
  constructor() {}
  ngOnInit(): void {
    this.load();
    this.states = [
      { name: 'item 1' , code: 'NY'},
      { name: 'item 2', code: 'xx' },
      { name: 'item 3', code: 'xc'},
      { name: 'item 4', code: 'xcc'},
      { name: 'item 5', code: 'xccc' }
  ];
  }
  load() {
    this.userForm = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      webSiteOrDomainName: new FormControl('', Validators.required),
      projectDescription: new FormControl('',Validators.required),
    });
this.userForm.valueChanges.subscribe((xx)=>{

  console.log(this.userForm)
})
  }
  send(){}
}
