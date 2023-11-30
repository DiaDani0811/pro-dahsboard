import { Component, HostListener, OnInit, TemplateRef,ViewChild } from '@angular/core';
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

  mode= 'A';
  label: any = [];
	Mlabel: any = [];
	Ylabel: any = [];
  fromRange : string = 'Q1'
  toRange : string = 'Q12'
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
    var downbutton:any = document.getElementById("back-to-bottom");
    var topbutton:any = document.getElementById("back-to-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 150
    ) {
      downbutton.style.display = "block";
      topbutton.style.display = "none";
    } else {
      topbutton.style.display = "block";
      downbutton.style.display = "none";
    }
  }

  scrolltoTop(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  scrolltoBottom(){
    document.body.scrollTop = document.body.scrollHeight
    document.documentElement.scrollTop = document.documentElement.scrollHeight
  }
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
    this.modalRef = this.modalService.show(template, {backdrop : true, ignoreBackdropClick : true, animated : true, keyboard : false, class:'alignment'});
  }

  openRange(template: TemplateRef<any>) {
		var config = {
			backdrop: false,
			ignoreBackdropClick: false,
			class: 'modal-md range-popup'
		};
		this.modalRef = this.modalService.show(template, config);

	}

  hospitalId:any;
  hspchangeevent(e:any){
    this.hospitalId =  e.value 
  }
  launch(modeType){
    window.localStorage.setItem('mode', modeType);
    modeType == "PRESENTATION" ? window.localStorage.setItem("hospitalId",this.hospitalId) :  window.localStorage.setItem("hospitalId","0");   
    this.modalRef?.hide();
  }

  hospitalList : any = []
  getClientListFromApi(){
    this.user.getClientList().subscribe({
      next:(value)=> {
        this.hospitalList = value
    },})
  }
}
