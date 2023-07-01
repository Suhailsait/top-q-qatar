import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlindsComponent } from './blinds/blinds.component';
import { CurtainsComponent } from './curtains/curtains.component';
import { FlooringComponent } from './flooring/flooring.component';
import { FurnishingsComponent } from './furnishings/furnishings.component';
import { OutdoorfabricsComponent } from './outdoorfabrics/outdoorfabrics.component';
import { ProductServiceComponent } from './product-service.component';
import { WallpapersComponent } from './wallpapers/wallpapers.component';

const routes: Routes = [
  {path:'',component:ProductServiceComponent},
  {path:'blinds',component:BlindsComponent},
  {path:'curtains',component:CurtainsComponent},
  {path:'outdoor-fabric',component:OutdoorfabricsComponent},
  {path:'wooden-flooring',component:FlooringComponent},
  {path:'furnishing',component:FurnishingsComponent},
  {path:'wallpapers',component:WallpapersComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductServiceRoutingModule { }
