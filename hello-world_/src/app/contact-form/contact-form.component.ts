import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  public contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];
  
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    // f.value
  }

}