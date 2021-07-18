import { Component, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  // endpoint:string='./assets/input.json';



  // constructor(private http:HttpClient) {}

  // type = 'bar';
  // data:any;
  // barchart:any;
  //          options = {
  //             responsive: true,
  //             maintainAspectRatio: false,
  //             scales: {
  //               yAxes: [{
  //                   barPercentage: 1.0,
  //                   gridLines: {
  //                       display: false
  //                   },
  //                   ticks: {
                        
  //                   beginAtZero: true,
  //                       fontSize: 10
  //                   }
  //               }],
  //               xAxes: [{
  //                   gridLines: {
  //                       display: false
  //                   },
  //                   ticks: {
                        
  //                       min: 0,
  //                       stepSize: 20,
  //                       fontSize: 10
                        
  //                   }
  //               }]
  //           },
  //           plugins: {
  //               datalabels: {
  //                 anchor: 'end',
  //                 align: 'top',
  //                 font: {
  //                   weight: 'bold'
  //                 }
  //               }
  //             }
  //         };
          
  //         ngOnInit(){


  //             this.http.get(this.endpoint).subscribe(x => {
  //                 this.barchart = x;
  //                 var a = [];
  //                 var values = []
                
  //               for(var i=0;i<this.barchart.length;i++){
  //                   if(this.barchart[i].FY!='FY-19' && this.barchart[i].FY!='FY-16'){
  //                   a[i] = this.barchart[i].FY;
  //                   values[i] = this.barchart[i].value;
  //                   }
                    
  //               }
  //               a = a.filter(function(x) {
  //                   return x !== undefined;
  //              });
  //              values= values.filter(function(x) {
  //               return x !== undefined;
  //          });
  //               this.data = {
                              
                
  //                   labels: a,
  //                   datasets: [{
  //                   label: "Volume Trend(In M)",
  //                   data: values,
  //                   backgroundColor: "#D55312",
                    
  //                   }]
  //              };
  //         });        
  // }
}