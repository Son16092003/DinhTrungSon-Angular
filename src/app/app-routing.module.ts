import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  }, 
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  { 
    path: 'about-us',
    loadChildren: () => 
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule) 
  },
  { 
    path: 'logout', 
    loadChildren: () => 
      import('./pages/logout/logout.module').then((m) => m.LogoutModule) 
  },
  { 
    path: 'sign-up',
    loadChildren: () => 
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule)
  },
  { path: 'bill', loadChildren: () => import('./pages/bill/bill.module').then(m => m.BillModule) },
  // { 
  //   path: 'car',
  //   loadChildren: () => 
  //     import('./pages/car/car.module').then((m) => m.CarModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
