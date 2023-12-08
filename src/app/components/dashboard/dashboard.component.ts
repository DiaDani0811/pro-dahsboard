import { LabelType, Options } from '@angular-slider/ngx-slider';
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
  selectedassesment:any = []
  dropdownSettings = {
    singleSelection: false,
      idField: 'metricId',
      textField: 'metricName',
      itemsShowLimit: 3,
      allowSearchFilter: false
  };
  reportMasterList : masterList[];
	Qlabel: any = []
	Mlabel: any = []
	Ylabel: any = []
  fromRangeQuarter: number = 0;
	toRangeQuarter: number = 0;
  fromRangeMonth: any = 3;
	toRangeMonth: any = 11;
  fromRangeYear: any = 1;
	toRangeYear: any = 2;
  showsec:any=false
  constructor(private user : UserService,private modalService:BsModalService) { }
  modalRef?: BsModalRef;
  ngOnInit(): void {
    this.selectedassesment = [
      {
             metricId: 12,
             metricCategoryId: 4,
             metricName: "HOOS JR.",
             scoreType: "score",
             scoreLabel: "Avg Score"
         },
         {
             metricId: 11,
             metricCategoryId: 4,
             metricName: "KOOS JR.",
             scoreType: "score",
             scoreLabel: "Avg Score"
         },
         {
             metricId: 14,
             metricCategoryId: 4,
             metricName: "PAIN",
             scoreType: "score",
             scoreLabel: "Avg Score"
         }
         ]
      this.getReportMasterListFromApi();
      this.getperiodsList()
      this.Qlabel.forEach((element,i)=>{
        if(i == this.fromRangeQuarter){
          this.quarter.fromRange = element
        }else if(i == this.toRangeQuarter){
          this.quarter.toRange = element
        }
      })
      this.quarter.period = "Q";
     
  }
   // ---------------Scroll Starts---------------------
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
  // ---------------Scroll Ends---------------------

  getperiodsList(){
    let payload = {
      "hospitalId" : localStorage.getItem('hospitalId')
    }
    this.user.getperiodsList(payload).subscribe(data=>{
      this.Qlabel = data.quarter.split(",");
			this.Mlabel = data.month.split(",");
			this.Ylabel = data.year.split(",");
      this.fromRangeQuarter = this.Qlabel.length -4 
      this.toRangeQuarter =this.Qlabel.length -1 
      this.optionsForQuarter.ceil=this.Qlabel.length -1 ;
      this.optionsForMonth.ceil=this.Mlabel.length - 1;
      this.optionsForYear.ceil=this.Ylabel.length - 1;
      this.fromRangeChange()
    })
  }
 
  getReportMasterListFromApi() {
    var payload = {
      "categoryId": 4,
      "clientId": localStorage.getItem('hospitalId') ? localStorage.getItem('hospitalId') : 0
    }
    this.user.getReportMasterList(payload).subscribe(data=>{
      this.reportMasterList = data
      this.selectedassesment=this.reportMasterList.filter(data=>[11,12,14].includes(data.metricId))
      this.reportMasterList.forEach(data=>{
        if(data.metricId==13)
        { 
          /*  ***declare temp metricid*** */
          if(data.scoreLabel.toLowerCase()=='physical score')
            data.metricId=100
          else
            data.metricId=101 
          /* ***metricName concatination*** */
          data.metricName=data.metricName+" - ("+data.scoreLabel+")"
        }
      })
    }  
    )
  }
  
  get form() {
    return this.dropdownFrom.controls;
  }
  isActivePeriodDropdown = "Q"
  setPeriodDropdown(active){
    this.isActivePeriodDropdown = active
    if(this.isActivePeriodDropdown == 'Q'){
      this.Qlabel.forEach((element,i)=>{
        if(i == this.fromRangeQuarter){
          this.quarter.fromRange = element
        }else if(i == this.toRangeQuarter){
          this.quarter.toRange = element
        }
      })
      this.quarter.period = "Q";
    }else if(this.isActivePeriodDropdown == 'M'){
      this.Mlabel.forEach((element,i)=>{
        if(i == this.fromRangeMonth){
          this.month.fromRange = element
        }else if(i == this.toRangeMonth){
          this.month.toRange = element
        }
      })
      this.month.period = "M";
    }else{
      this.Ylabel.forEach((element,i)=>{
        if(i == this.fromRangeYear){
          this.year.fromRange = element
        }else if(i == this.toRangeYear){
          this.year.toRange = element
        }
      })
      this.year.period = "Y";
    }    
  }

  onItemSelect(item: any) {
    this.selectedassesment = item
  }
  @ViewChild('categoryTemplate') categoryTemplateRef:TemplateRef<any>



  
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

  // ----------------Option for Range slider Starts----------------->
  value : string = ''
  fromRangePeriod : string = ""
  toRangePeriod : string = ""
  optionsForQuarter: Options = {
    floor: 0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {
      
      this.Qlabel.forEach((element,i)=>{
        if(i == value){
          this.value = element
        }else if(i== this.fromRangeQuarter){
            this.fromRangePeriod = element
        }else if(i== this.toRangeQuarter){
          this.toRangePeriod = element
      }})
      switch (label) {
        case LabelType.Low:        
          return this.value;
        case LabelType.High:
          return  this.value;
          case LabelType.Floor:
          return "";
        case LabelType.Ceil:
          return "";       
        default:
          return "";
      }
    }
  };
  optionsForMonth: Options = {
    floor:0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {  
      this.Mlabel.forEach((element,i)=>{
        if(i == value){
          this.value = element
        }})
      switch (label) {
        case LabelType.Low:        
          return this.value;
        case LabelType.High:
          return  this.value;
        case LabelType.Floor:
          return "";
        case LabelType.Ceil:
          return "";
        default:
          return "Q1-06" + value;
      }
    }
  };
  optionsForYear: Options = {
    floor: 0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {
      this.Ylabel.forEach((element,i)=>{
        if(i == value){
          this.value = element
        }})
      switch (label) {
        case LabelType.Low:        
          return this.value;
        case LabelType.High:
          return  this.value;
          case LabelType.Floor:
          return "";
        case LabelType.Ceil:
          return "";
        
        default:
          return "Q1-06" + value;
      }
    }
  };

  year :any = {}
  fromValueChangeInYear(e) {
    this.fromRangeYear = e;
    this.Ylabel.forEach((element,i)=>{
      if(i == e){
        this.year.fromRange = element
      }})
  }
  toValueChangeInYear(e) {
    this.toRangeYear = e
    this.Ylabel.forEach((element,i)=>{
      if(i == e){
        this.year.toRange = element
      }})
  }
  month : any = {} ;
  fromValueChangeInMonth(e){
    this.fromRangeMonth = e;
    this.Mlabel.forEach((element,i)=>{
      if(i == e){
        this.month.fromRange = element
      }})
  }
  toValueChangeInMonth(e){
    this.toRangeMonth = e
    this.Mlabel.forEach((element,i)=>{
      if(i == e){
        this.month.toRange = element
      }})
  }
  quarter:any = {
    fromRange: this.fromRangePeriod,
    toRange: this.toRangePeriod,
  }
  fromValueChangeInQuarter(e){
    this.fromRangeQuarter = e;
    this.Qlabel.forEach((element,i)=>{
      if(i == e){
        this.quarter.fromRange = element
      }})
  }
  toValueChangeInQuarter(e){
    this.toRangeQuarter = e
    this.Qlabel.forEach((element,i)=>{
      if(i == e){
        this.quarter.toRange = element
      }})
  }
   periodRange : any = []
  fromRangeChange(){
    let intialFromRange : string = ''
   let intialToRange:string = ''
   this.Qlabel.forEach((element,i)=>{
    (i == this.Qlabel.length-4 ) ?   intialFromRange = element : '';
    (i == this.Qlabel.length-1 ) ?   intialToRange = element : ''
    })
    this.periodRange = [
      {
        "fromRange": intialFromRange,
        "toRange": intialToRange,
        "period":"Q"
      }
    ]
  }

  
  savePeriodRange(){
    if(this.isActivePeriodDropdown == 'Q'){
      this.periodRange = []
      this.periodRange.push(this.quarter)
    }else if(this.isActivePeriodDropdown == 'M'){
      this.periodRange = []
      this.periodRange.push(this.month)
    }else{
      this.periodRange = []
      this.periodRange.push(this.year)
    }
    console.log('periodRange',this.periodRange);
    this.rangeModal.hide();
  }

  isActive : string = 'Aggregate'
  setActive(btnType){
    this.isActive = btnType
  }
}
