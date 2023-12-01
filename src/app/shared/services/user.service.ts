import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { BaseConfig } from '../modals/baseConfig.modal';
@Injectable({providedIn:"root"})
export class UserService {

  users: any;
  constructor(private apiService: ApiService, private jwtService: JwtService, private http: HttpClient, private router: Router) { }


  public currentUserSubject = new BehaviorSubject<any>([]);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public baseCongifSubject = new BehaviorSubject<BaseConfig>(new BaseConfig())
  public baseConfig = this.baseCongifSubject.asObservable().pipe(distinctUntilChanged())

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  

  clientMasterId: number = 0;

  clearSession() {
    localStorage.clear();
    this.isAuthenticatedSubject.next(false);
  }

  populate() {
    if (this.jwtService.getToken()) {
      this.getSession();
    }
    else{
      this.clearSession()
    }
  }
 
  //Login Credentials
  attemptAuth(credentials) {
    return this.apiService.post('/api/v1/auth/getReportToken')
      .pipe(map(
        data => {
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
      this.apiService.getpost('/api/v1/auth/getsession', x).subscribe({
        next:(data) => {
          if (data.item.token) {
                  this.jwtService.saveToken(data.item.token);
                  this.isAuthenticatedSubject.next(true);
                  this.currentUserSubject.next(data);
                  if(window.localStorage['baseData'])
                  this.baseCongifSubject.next(JSON.parse(window.localStorage['baseData']))
        }
      },
      error:(err) => {
        this.router.navigateByUrl("login")
        this.clearSession();
      },
    });
  }
  getClientList() {
    return this.apiService.post('/api/v1/reports/getClientList');
  }
  getReportMasterList(payload) {
    return this.apiService.post('/api/v1/reports/getReportMasterList', payload);
  }
  getAggregateDashboardData(payload){
    return this.apiService.post('/api/v1/reports/getAggregateDashboardData',payload)
  }
  getAllSurgeons(payload)
  {
    return this.apiService.post('/api/v1/reports/getAllSurgeons',payload)
  }
  getAllPatients(payload)
  {
    return this.apiService.post('/api/v1/reports/getAllPatients',payload)
  }
  // getAllStaffs(obj) {
  //   return this.apiService.post(`/api/v1/reports/getAllStaffs`, obj);
  // }
  // getAllSurgeon(obj) {
  //   return this.apiService.post(`/api/v1/reports/getAllSurgeons`, obj);
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
  // getpriodsList(data) {
  //   return this.apiService.post('/api/v1/reports/getPeriodRanges', data);
  // }
  // getDashboardList(baseData) {
  //   return this.apiService.post('/api/v1/reports/getDashboardData', baseData);
  // }
}


