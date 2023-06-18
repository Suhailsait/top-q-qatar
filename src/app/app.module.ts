import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LayoutModule } from './modules/layout/layout.module';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactUsModule } from './modules/contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
