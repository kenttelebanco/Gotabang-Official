import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  ngOnInit() {}

    canvas: any;
    ctx: any;
    @ViewChild('mychart') mychart:any;
    
    ngAfterViewInit(){ 
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'Current Value',
            data: [0, 20, 40, 50],
            backgroundColor: "rgb{115 185 243 / 65%)",
            borderColor: "#007ee7",
            fill: true,
          },
          {
          label: 'Invested Amount',
          data: [0, 20, 40, 60, 80],
          backgroundColor: "rgb{115 185 243 / 65%)",
          borderColor: "#007ee7",
          fill: true,
          

          }],
          labels: ['January 2023', 'Febraury 2023','March 2023','April 2023']
        }
      })
    }
  }
