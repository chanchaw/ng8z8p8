import { MessageService, SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptablerowedit',
  templateUrl: './ptablerowedit.component.html',
  styleUrls: ['./ptablerowedit.component.css']
})
export class PtableroweditComponent implements OnInit {

  cars1: Car[];

  cars2: Car[];

  brands: SelectItem[];

  clonedCars: { [s: string]: Car; } = {};

  constructor(
    private messageService:MessageService
    ) { }

  ngOnInit() {
      this.cars2 = this.getCars();

      this.brands = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];
  }

  onRowEditInit(car: Car) {
      this.clonedCars[car.vin] = {...car};
  }

  onRowEditSave(car: Car) {
      if (parseInt(car.year) > 0) {
          delete this.clonedCars[car.vin];
          this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
      }
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
      }
  }

  onRowEditCancel(car: Car, index: number) {
      this.cars2[index] = this.clonedCars[car.vin];
      delete this.clonedCars[car.vin];
  }


  getCars(){
    return [
      { vin:"dsad231ff",year:"2012",brand:"VW",color:"Orange"},
      { vin:"gwregre345",year:"2011",brand:"Audi",color:"Black"},
      { vin:"h354htr",year:"2005",brand:"Renault",color:"Gray"},
      { vin:"j6w54qgh",year:"2003",brand:"BMW",color:"Blue"},
      { vin:"hrtwy34",year:"1995",brand:"Mercedes",color:"Orange"},
      { vin:"jejtyj",year:"2005",brand:"Volvo",color:"Black"},
      { vin:"g43gr",year:"2012",brand:"Honda",color:"Yellow"}
    ]
  }
}


export class Car{
	vin:string;year:string;brand:string;color:string
}
