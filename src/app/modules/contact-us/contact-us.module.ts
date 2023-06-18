import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ContactUsModule { }
