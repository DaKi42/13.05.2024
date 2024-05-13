import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-airplane',
  standalone: true,
  imports: [],
  templateUrl: './airplane.component.html',
  styleUrl: './airplane.component.css'
})
export class AirplaneComponent implements OnInit {
  model: string = '';
  manufacturer: string = '';
  year: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.model = 'Boeing 747';
    this.manufacturer = 'Boeing';
    this.year = 1969;
  }

}