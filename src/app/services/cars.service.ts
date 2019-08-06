import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: any[] = [{ id: 123, name: 'corsa' }];

  constructor() { }

  guardarVehiculo(car) {
    this.cars.push(car);
  }

  verVehiculos() {
    return this.cars;
  }

  buscarVehiculo(nombre: string) {
    nombre.toLowerCase();
    return this.cars.filter(element => element.name === nombre);
  }

  eliminarVehiculo(id) {
    this.cars = this.cars.filter(element => element.id !== id);
  }
}
