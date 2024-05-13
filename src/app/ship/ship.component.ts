import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.css'
})
export class ShipComponent implements OnInit {
  name: string = '';
  type: string = '';
  length: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Принцесса Дахлия';
    this.type = 'Пассажирский корабль';
    this.length = 340;
  }
}
