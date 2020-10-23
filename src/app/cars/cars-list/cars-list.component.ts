import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef : TotalCostComponent;
  totalCost : number;
  grossCost : number;
  cars : Car[] = [
    {
      id: 1,
      model: 'Mazda',
      plate: '123QWE789',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 1,
      model: 'Toyota',
      plate: '456LSE654',
      deliveryDate: '01-05-2016',
      deadline: '25-06-2017',
      client: {
        firstName: 'Karol',
        surname: 'Kowalewski'
      },
      cost: 400,
      isFullyDamaged: false
    },
    {
      id: 1,
      model: 'Mazda',
      plate: '123QWE789',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 600,
      isFullyDamaged: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.countTotalCost();
  }

  ngAfterViewInit() : void {
    this.totalCostRef.showGross();
  }

  showGross() : void {
    this.totalCostRef.showGross();
  }

  countTotalCost() : void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;
  }
}
