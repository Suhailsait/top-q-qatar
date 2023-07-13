import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductServiceRoutingModule } from './product-service-routing.module';
import { ProductServiceComponent } from './product-service.component';
import { CurtainsComponent } from './curtains/curtains.component';
import { FurnishingsComponent } from './furnishings/furnishings.component';
import { OutdoorfabricsComponent } from './outdoorfabrics/outdoorfabrics.component';
import { FlooringComponent } from './flooring/flooring.component';
import { BlindsComponent } from './blinds/blinds.component';
import { WallpapersComponent } from './wallpapers/wallpapers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LightgalleryModule } from 'lightgallery/angular';

@NgModule({
  declarations: [
    ProductServiceComponent,
    CurtainsComponent,
    FurnishingsComponent,
    OutdoorfabricsComponent,
    FlooringComponent,
    BlindsComponent,
    WallpapersComponent,
  ],
  imports: [
    CommonModule,
    ProductServiceRoutingModule,
    MatDialogModule,
    LightgalleryModule
  ]
})
export class ProductServiceModule { }
