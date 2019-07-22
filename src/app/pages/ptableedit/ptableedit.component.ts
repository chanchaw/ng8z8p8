import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptableedit',
  templateUrl: './ptableedit.component.html',
  styleUrls: ['./ptableedit.component.css']
})
export class PtableeditComponent implements OnInit {

  tableData:Model[] = [
    { category:"flr",categoryName:"法兰绒",goodsname:"双面法兰绒",qty:10,price:2.5,sum:25,date:new Date(),remark:"AAABBB"},
    { category:"shr",categoryName:"珊瑚绒",goodsname:"北极绒",qty:20,price:3,sum:60,date:new Date(),remark:"这里是珊瑚绒"},
    { category:"cr",categoryName:"超柔",goodsname:"麂皮绒",qty:35,price:2,sum:70,date:new Date(),remark:"很贵的哦"}
  ];

  categories:Category[] = [
    { sid:"shr",name:"珊瑚绒"},
    { sid:"flr",name:"法兰绒"},
    { sid:"cr",name:"超柔"},
  ];

  displayedCols:any;

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(this.tableData);
  }


  onCategoryChange(rowData){
    let categoryId = rowData.category;
    let categoryName = this.categories.filter(
      item => {
        return item.sid === categoryId;
      }
    );
      
    rowData.categoryName = categoryName[0].name;
    
  }

  calSum(rowData,rowIndex:number){
    // console.log("rowData.price/qty = " + rowData.price.toString() + "/" + rowData.qty.toString());
    // console.log("this.tableData[rowIndex].price/qty = " + this.tableData[rowIndex].price.toString()+ "/"
    //   + this.tableData[rowIndex].qty.toString());

    this.tableData[rowIndex].sum = this.tableData[rowIndex].price 
      * this.tableData[rowIndex].qty;
  }

}


export class Model{
  category:string;goodsname:string;qty:number;price:number;sum:number;
  date:Date;remark:string;
  categoryName:string;
}

export class Category{
  sid:string;name:string;
}