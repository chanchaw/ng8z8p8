import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent implements OnInit {

  cars: Car[] = [
    { vin:"丰田",year:"1982",brand:"雷克萨斯",color:"白色"},
    { vin:"奔驰",year:"1984",brand:"S350",color:"黑色"},
    { vin:"宝马",year:"1949",brand:"750",color:"香槟色"},
    { vin:"特斯拉",year:"2008",brand:"Model S",color:"红色"},
  ];

  cols: any[];

  constructor() { }

  ngOnInit() {

      this.cols = [
          { field: 'vin', header: 'Vin' },
          {field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }

}


export class Car{
  vin:string;year:string;brand:string;color:string;
}