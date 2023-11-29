import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { BsModalService ,BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/shared/services/user.service';

interface masterList {
    metricId: number,
    metricCategoryId: number,
    metricName: string,
    scoreType: string,
    scoreLabel: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  mode= 'A'
  constructor(private user : UserService,private modalService:BsModalService) { }
  reportMasterList : masterList[];
  ngOnInit(): void {
    setTimeout(()=>{
      if(!localStorage.getItem('mode'))
      this.openModal(this.categoryTemplateRef)
      this.getReportMasterListFromApi();
      this.getClientListFromApi();
    },1000)
  }
  getReportMasterListFromApi(){
    var payload = {
        "categoryId": 4,
        "clientId": 0
    }
    this.user.getReportMasterList(payload).subscribe({
      next:(value) => {
        this.reportMasterList = value
      },
    })
  }

  settings = {
    singleSelection: false,
    idField: 'metricId',
    textField: 'metricName',
    enableCheckAll: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    limitSelection: 6,
    clearSearchFilter: true,
    maxHeight: 150,
    itemsShowLimit: 3,
    searchPlaceholderText: 'search assesment',
    noDataAvailablePlaceholderText: 'No Data',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: true,
    defaultOpen: false,
  };


  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }
  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }


  @ViewChild('categoryTemplate') categoryTemplateRef:TemplateRef<any>
  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {backdrop : true, ignoreBackdropClick : false, animated : true, class:'alignment'});
  }

  launch(modeType){
    window.localStorage.setItem('mode', modeType)
   this.modalRef?.hide();
  }

  hospitalList : any = []
  getClientListFromApi(){
    this.user.getClientList().subscribe({
      next:(value)=> {
        this.hospitalList = value
    },})
  }
  hspchangeevent(e){
    console.log('eee',e.value);
  }
}
