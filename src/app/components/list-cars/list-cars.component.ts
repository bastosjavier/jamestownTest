import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  carros: any[] = [];
  modalRef: BsModalRef;

  constructor(public _cars: CarsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.carros = this._cars.verVehiculos();
  }

  eliminar(id) {
    this.modalRef = this.modalService.show(CarsComponent, {
      animated: true,
      ignoreBackdropClick: true
    });

    this.modalService.onHidden.subscribe(data => {
      if (this.modalRef.content) {
        this._cars.eliminarVehiculo(id);
        this.ngOnInit();
      }
    });
  }
}
