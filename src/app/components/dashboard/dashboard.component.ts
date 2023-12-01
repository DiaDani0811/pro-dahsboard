import { Options } from '@angular-slider/ngx-slider';
import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  public dropdownFrom: FormGroup;
  mode = 'A';

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    var downbutton: any = document.getElementById("back-to-bottom");
    var topbutton: any = document.getElementById("back-to-top");
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

  scrolltoTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  scrolltoBottom() {
    document.body.scrollTop = document.body.scrollHeight
    document.documentElement.scrollTop = document.documentElement.scrollHeight
  }
  constructor(private user : UserService,private modalService:BsModalService) { }
  reportMasterList : masterList[];

  periodList: any;
  baseData : any ;
  comparision = {
		'enable': false,
		'fromRange': "",
		'toRange': ""
	}
  ngOnInit(): void {
        this.periodList = [
			{ periodId: 'Q', periodName: 'Quarter' },
			{ periodId: 'M', periodName: 'Month' },
			{ periodId: 'Y', periodName: 'Year' }]
      
      this.setForm();

    setTimeout(()=>{
      if(!localStorage.getItem('mode'))
      this.openModal(this.categoryTemplateRef)
      this.getReportMasterListFromApi();
    },1000)

  }

  getReportMasterListFromApi() {
    var payload = {
      "categoryId": 4,
      "clientId": localStorage.getItem('hospitalId') ? localStorage.getItem('hospitalId') : 0
    }
    this.user.getReportMasterList(payload).subscribe({
      next: (value) => {
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
    limitSelection: 3,
    clearSearchFilter: true,
    maxHeight: 150,
    itemsShowLimit: 3,
    searchPlaceholderText: 'search assesment',
    noDataAvailablePlaceholderText: 'No Data Available',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: true,
    defaultOpen: false,
  };

   
  selectedassesment : any = [];

  @ViewChild('multiSelect') multiSelect;


  public setForm() {
    this.dropdownFrom = new FormGroup({
      names : new FormControl(this.reportMasterList, Validators.required),
    });
    
  }

  
  
  get form() {
    return this.dropdownFrom.controls;
  }
  

  public onItemSelect(item: any) {
    //this.setForm()
    // this.selectedassesment.push(item);
    this.isActive = "";
    setTimeout(() => {
      this.isActive ="Aggregate";
    }, 0);
    console.log('*********************', this.dropdownFrom.value);
  }
  public onDeSelect(item: any) {
    // this.selectedassesment.forEach(data => {
    //   if(data.metricId == item.metricId) {

    //   }
    // }) 
    console.log(item);
  }
  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }


  @ViewChild('categoryTemplate') categoryTemplateRef:TemplateRef<any>
  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {backdrop : true, ignoreBackdropClick : true, animated : true, keyboard : false, class:'alignment'});
  }

  rangeModal : BsModalRef
  openRange(template: TemplateRef<any>) {
    var config = {
      backdrop: false,
      ignoreBackdropClick: false,
      class: 'modal-md range-popup'
    };
    this.rangeModal = this.modalService.show(template, config);

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

  periodJsonFromApi = {
    "quarter": "Q1-06,Q2-06,Q3-06,Q4-06,Q1-07,Q2-07,Q3-07,Q4-07,Q1-08,Q2-08,Q3-08,Q4-08,Q1-09,Q2-09,Q3-09,Q4-09,Q1-10,Q2-10,Q3-10,Q4-10,Q1-11,Q2-11,Q3-11,Q4-11,Q1-12,Q2-12,Q3-12,Q4-12,Q1-13,Q2-13,Q3-13,Q4-13,Q1-14,Q2-14,Q3-14,Q4-14,Q1-15,Q2-15,Q3-15,Q4-15,Q1-16,Q2-16,Q3-16,Q4-16,Q1-17,Q2-17,Q3-17,Q4-17,Q1-18,Q2-18,Q3-18,Q4-18,Q1-19,Q2-19,Q3-19,Q4-19,Q1-20,Q2-20,Q3-20,Q4-20,Q1-21,Q2-21,Q3-21,Q4-21,Q1-22,Q2-22,Q3-22,Q4-22,Q1-23",
    "month": "Jan-06,Feb-06,Mar-06,Apr-06,May-06,Jun-06,Jul-06,Aug-06,Sep-06,Oct-06,Nov-06,Dec-06,Jan-07,Feb-07,Mar-07,Apr-07,May-07,Jun-07,Jul-07,Aug-07,Sep-07,Oct-07,Nov-07,Dec-07,Jan-08,Feb-08,Mar-08,Apr-08,May-08,Jun-08,Jul-08,Aug-08,Sep-08,Oct-08,Nov-08,Dec-08,Jan-09,Feb-09,Mar-09,Apr-09,May-09,Jun-09,Jul-09,Aug-09,Sep-09,Oct-09,Nov-09,Dec-09,Jan-10,Feb-10,Mar-10,Apr-10,May-10,Jun-10,Jul-10,Aug-10,Sep-10,Oct-10,Nov-10,Dec-10,Jan-11,Feb-11,Mar-11,Apr-11,May-11,Jun-11,Jul-11,Aug-11,Sep-11,Oct-11,Nov-11,Dec-11,Jan-12,Feb-12,Mar-12,Apr-12,May-12,Jun-12,Jul-12,Aug-12,Sep-12,Oct-12,Nov-12,Dec-12,Jan-13,Feb-13,Mar-13,Apr-13,May-13,Jun-13,Jul-13,Aug-13,Sep-13,Oct-13,Nov-13,Dec-13,Jan-14,Feb-14,Mar-14,Apr-14,May-14,Jun-14,Jul-14,Aug-14,Sep-14,Oct-14,Nov-14,Dec-14,Jan-15,Feb-15,Mar-15,Apr-15,May-15,Jun-15,Jul-15,Aug-15,Sep-15,Oct-15,Nov-15,Dec-15,Jan-16,Feb-16,Mar-16,Apr-16,May-16,Jun-16,Jul-16,Aug-16,Sep-16,Oct-16,Nov-16,Dec-16,Jan-17,Feb-17,Mar-17,Apr-17,May-17,Jun-17,Jul-17,Aug-17,Sep-17,Oct-17,Nov-17,Dec-17,Jan-18,Feb-18,Mar-18,Apr-18,May-18,Jun-18,Jul-18,Aug-18,Sep-18,Oct-18,Nov-18,Dec-18,Jan-19,Feb-19,Mar-19,Apr-19,May-19,Jun-19,Jul-19,Aug-19,Sep-19,Oct-19,Nov-19,Dec-19,Jan-20,Feb-20,Mar-20,Apr-20,May-20,Jun-20,Jul-20,Aug-20,Sep-20,Oct-20,Nov-20,Dec-20,Jan-21,Feb-21,Mar-21,Apr-21,May-21,Jun-21,Jul-21,Aug-21,Sep-21,Oct-21,Nov-21,Dec-21,Jan-22,Feb-22,Mar-22,Apr-22,May-22,Jun-22,Jul-22,Aug-22,Sep-22,Oct-22,Nov-22,Dec-22,Jan-23,Feb-23,Mar-23",
    "year": "2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023"
  }

  fromRange: number = 0;
  tempfromRange : number = 0;
  TempToRange : number = 0;
  toRange: number = 0;
  options: Options = {
    floor: 0,
    ceil: 10,
  };
  fromValueChange(e) {
    this.tempfromRange = e
  }
  toValueChange(e) {
    this.TempToRange = e
  }
  savePeriodRange(){
    this.fromRange= this.tempfromRange
    this.toRange= this.TempToRange
    this.rangeModal.hide();
  }

  isActive : string = 'Aggregate'
  setActive(btnType){
    this.isActive = btnType
  }
}
