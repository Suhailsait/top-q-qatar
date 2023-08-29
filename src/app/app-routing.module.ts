import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home.component';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
{
  path:'',component:LayoutComponent,
  children:[
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'about-us',
      component:AboutUsComponent
    },
    {
      path:'contact-us',
      component:ContactUsComponent
    },
    {
      path:'services',
      loadChildren: () => import('./modules/product-service/product-service.module').then(m => m.ProductServiceModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
