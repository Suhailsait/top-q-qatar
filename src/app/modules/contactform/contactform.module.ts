import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactformComponent } from './contactform.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormComponent } from './form/form.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContactformComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports:[ContactformComponent]
})
export class ContactformModule { }
