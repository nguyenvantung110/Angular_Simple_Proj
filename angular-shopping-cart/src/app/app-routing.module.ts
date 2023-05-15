import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailsUserComponent } from './details-user/details-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children: [
      {
        path:'cart',
        component: CartComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'details',
    component: DetailsUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
