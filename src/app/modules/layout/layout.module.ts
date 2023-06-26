import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { ContactformModule } from '../contactform/contactform.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule,
    ContactformModule
  ]
})
export class LayoutModule { }
