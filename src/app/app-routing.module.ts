import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LayoutsComponent } from './components/main/layouts/layouts.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsComponent } from './components/main/metrics/metrics.component';
import { WidgetsComponent } from './components/main/widgets/widgets.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
   {
      path: '', redirectTo: 'login', pathMatch: 'full'
   },

   {
     path: 'login', component: LoginComponent 
   },
  
  { 
    path: 'signup', component: SignupComponent 
  },

  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'metrix', component:MetricsComponent
  },
  {
    path:'widget', component:WidgetsComponent
  },
  {
    path:'layout', component:LayoutsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
