import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  brand: string = '';
  model: string = '';
  year: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.brand = 'Toyota';
    this.model = 'Corolla';
    this.year = 2022;
  }
}
