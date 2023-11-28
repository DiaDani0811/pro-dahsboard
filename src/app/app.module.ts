import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { ApiService } from './shared/services/api.service'; 
import { AuthGuard } from './shared/auth-gaurd/auth-guard.service.guard';
import { NoAuthGuard } from './shared/auth-gaurd/no-auth-guard.service.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UserService,ApiService,AuthGuard,NoAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
