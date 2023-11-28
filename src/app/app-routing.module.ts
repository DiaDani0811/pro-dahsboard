import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './shared/auth-gaurd/auth-guard.service.guard';

const routes: Routes = [
  {path : '', pathMatch : "full", redirectTo: "login"},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', loadChildren:()=>import('../app/components/dashboard/dashboard.module').then(res=>res.DashboardModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
