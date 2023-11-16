import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  {path : '', pathMatch : "full", redirectTo: "login"},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', loadChildren:()=>import('../app/components/dashboard/dashboard.module').then(res=>res.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
