import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';
import  {jsPDF} from 'jspdf';
import {QrService} from '../../core/services/Qr.service';
import { ChartType, Stat, Chat,  paiement, Inscription } from './dashboard.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { statData, revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions, paiements } from './data';
import {Code} from '../../core/models/codeQr.model'
import { HttpClient } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {

  term: any;
  chatData: Chat[];
  inscriptions: Inscription[];
  statData: Stat[];
//  CodeList: Code[];
ListCode: string[];
 Qrnum : number = 10;
 paiements: paiement[];
 loading: boolean = false;
 
data = []
  constructor(private modalService: NgbModal, private Qr:QrService, private http:HttpClient) {

    //   this.http.get('http://localhost:3000/qr_codes').subscribe(data =>{
    //    this.data.push(data);
    //    console.log(this.data);
    //  }, error=> console.error(error));
   
  }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  revenueChart: ChartType;
  salesAnalytics: ChartType;
  sparklineEarning: ChartType;
  sparklineMonthly: ChartType;
  ceramic:string="CERAMIC SERVICE";


  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 6,
    center: latLng(46.879966, -121.726909)
  };

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'CERAMIC' }, { label: 'Dashboard', active: true }];
    this._fetchData();
    this.Qr.getLastUser().subscribe({
      next: inscriptions => {
        this.inscriptions = inscriptions;
      }
    })
  
  }


 

  private _fetchData() {
    this.revenueChart = revenueChart;
    this.salesAnalytics = salesAnalytics;
    this.sparklineEarning = sparklineEarning;
    this.sparklineMonthly = sparklineMonthly;
    this.chatData = chatData;
    // this.transactions = transactions;
    // this.CodeList = [];
    this.ListCode=[];
    this.statData = statData;
    this.paiements = paiements;
  }


public LastPaiements: paiement;

 private characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
 public generateString(): string{
  var gen: string = '';
   for(let i = 0 ;i < 28; i++) {
     gen+= this.characters.charAt(Math.floor(Math.random() * this.characters.length))
   }

   return gen;
 }
//  public onSend(code: string){
//   //  console.log(code);
   
//   const formData : FormData = new FormData()
//   formData.set('title', code)
//   this.Qr.create(formData).subscribe(
//     res=>{console.log(res);
//     },
//     err=>{console.log(err);
//     }
//   )
// }


 public multiGeneration(nombre: number): string[]{
   var codes: string[]=[];
   console.log('creation de '+nombre+' codes');
   for (let j = 0 ;j < nombre; j++){
    let qrCode = this.generateString();
     codes.push(qrCode);
    //  this.loadFriends()
    //  this.onSend(this.generateString());
    //  saveQrCode() {;
    // const Code={
    //   qrCode : this.generateString()
    // }
     
      // this.Qr.create("Code")
      //   .subscribe(
      //     response => {
      //       console.log(response);
      //     },
      //     error => {
      //       console.log(error);
      //     });

      // this.Qr.getHotels().subscribe({
      //   next: hotels => {
      //    console.log(hotels);
         
      //   },
        // error: err => this.errorMsg = err
      // });

    
    this.Qr.create({
      qrCode : qrCode
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });

// }
   }
   return codes;  
 }




   /**
   * Open extra large modal
   * @param largeModal extra large modal data
   */
    extraLarge(largeModal: any) {
      this.modalService.open(largeModal, { size: 'lg',scrollable:true });
  //  this.multiGeneration(this.Qrnum);   
  this.ListCode = this.multiGeneration(this.Qrnum);

  }

  public closeModal(){
    this.modalService.dismissAll()
  }


  public createPdf():void{
    this.loading = true;
    const doc = new jsPDF('l', 'pt', 'a4', true);
var div = document.getElementById('div');
doc.html(div, {
  callback: (doc)=>{
    doc.save('Ticket-QR.pdf')
    this.closeModal();
    this.loading = false;
  }
});
  
  }
}