import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  formToggle : boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.formToggle = !this.formToggle
  }

}
