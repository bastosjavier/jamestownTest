import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-cars',
  templateUrl: './form-cars.component.html',
  styleUrls: ['./form-cars.component.css']
})
export class FormCarsComponent implements OnInit {

  form = {
    id: '',
    name: ''
  };
  error = false;
  msg = '';

  @Output() lists = new EventEmitter();

  constructor(public _cars: CarsService) { }

  ngOnInit() {
  }

  validateName() {
    const exist: any[] = this._cars.buscarVehiculo(this.form.name);
      if (exist.length !== 0) {
        this.error = true;
        this.msg = 'El vehiculo ya existe.';
        this.form.name = '';

        setTimeout(() => {
          this.error = false;
          this.msg = '';
        }, 1000);
      }
  }

  guardarVehiculo(forma: NgForm) {
    // console.log(forma);
    this._cars.guardarVehiculo({id: forma.controls.id.value, name: forma.controls.name.value});
    this.lists.emit('ok');
  }
}
