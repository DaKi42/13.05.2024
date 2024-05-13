import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';
import { AirplaneComponent } from './airplane/airplane.component';
import { ShipComponent } from './ship/ship.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarComponent, ShipComponent, AirplaneComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '13.05.2024';
  displayCar: boolean = false;
  displayAirplane: boolean = false;
  displayShip: boolean = false;

  showCar() {
    this.displayCar = true;
    this.displayAirplane = false;
    this.displayShip = false;
  }

  showAirplane() {
    this.displayCar = false;
    this.displayAirplane = true;
    this.displayShip = false;
  }

  showShip() {
    this.displayCar = false;
    this.displayAirplane = false;
    this.displayShip = true;
  }

  constructor(){}
  ngOnInit(): void{

  }
}
