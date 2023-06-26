import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductServiceComponent } from './product-service.component';

const routes: Routes = [
  {path:'',component:ProductServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductServiceRoutingModule { }
