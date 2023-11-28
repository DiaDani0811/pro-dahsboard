import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
@Injectable({providedIn:"root"})
export class UserService {

  users: any;
  constructor(private apiService: ApiService, private jwtService: JwtService, private http: HttpClient, private router: Router) { }


  private testreplySub = new ReplaySubject<string>(5);
  public  replySub= this.testreplySub.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  clientMasterId: number = 0;

  clearSession() {
    this.jwtService.destroyToken();
    this.jwtService.destroygetUserAccountId();
    localStorage.clear();
    this.isAuthenticatedSubject.next(false);
  }

  populate() {
    if (this.jwtService.getToken()) {
      // this.getSession();
    }
  }
 
  testreplySubFun(value)
  {
    this.testreplySub.next(value)
  }
  //Login Credentials
  attemptAuth(credentials) {
    return this.apiService.post('/api/v1/auth/getReportToken')
      .pipe(map(
        data => {
          //console.log("auth", data)
          if (data.token) {
            this.jwtService.saveToken(data.token);
            this.getSession();
          }
          return data;
        }

      ));
  }

  // //Set Authentication
  getSession() {
    let x = window.localStorage['jwtToken']
      x = x.toString().replaceAll("\"","");
      this.apiService.getpost('/api/v1/auth/getsession', x).subscribe(data => {
            if (data.item.token) {
              this.jwtService.saveToken(data.item.token);
              this.isAuthenticatedSubject.next(true);
              this.router.navigate(['dashboard']);
              // this.currentUserSubject.next(data);
              // if(window.localStorage['baseData'])
              // this.BaseConfigSubject.next(JSON.parse(window.localStorage['baseData']))
            }
          },
          err => {
            this.router.navigate(['/login']);
            this.clearSession();
          }
        );
  }
  // getAllStaffs(obj) {
  //   return this.apiService.post(`/api/v1/reports/getAllStaffs`, obj);
  // }
  // getAllSurgeon(obj) {
  //   return this.apiService.post(`/api/v1/reports/getAllSurgeons`, obj);
  // }
  // getClientList() {
  //   return this.apiService.post('/api/v1/reports/getClientList');
  // }
  // getPayorList(obj) {
  //  return this.apiService.post('/api/v1/reports/getPayorType',obj);
  // }
  // getSosList(obj) {
  //   return this.apiService.post('/api/v1/reports/getSOSList',obj);
  // }
  // getReportCategoriesList(obj) {
  //   return this.apiService.post('/api/v1/reports/getReportCategories',obj);
  // }
  // getReportMasterList(masterCategoryId) {
  //   return this.apiService.post('/api/v1/reports/getReportMasterList', masterCategoryId);
  // }
  // getpriodsList(data) {
  //   return this.apiService.post('/api/v1/reports/getPeriodRanges', data);
  // }
  // getDashboardList(baseData) {
  //   return this.apiService.post('/api/v1/reports/getDashboardData', baseData);
  // }
}


