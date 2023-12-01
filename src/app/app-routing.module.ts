import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './shared/auth-guard/auth-guard.service.guard';
import { SwitchModeComponent } from './components/switch-mode/switch-mode.component';
const routes: Routes = [
  {path : '', pathMatch : "full", redirectTo: "switchMode"},
  {path : 'login', component : LoginComponent },
  {path:'switchMode',loadChildren:()=>import('./components/switch-mode/switch-mode.module').then(res=>res.SwitchModeModule), canActivate:[AuthGuard]},
  {path:'dashboard',loadChildren:()=>import('./components/dashboard/dashboard.module').then(res=>res.DashboardModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
