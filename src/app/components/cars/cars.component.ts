import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  confirm(): void {
    this.bsModalRef.content = true;
    this.bsModalRef.hide();
  }
 
  decline(): void {
    this.bsModalRef.content = false;
    this.bsModalRef.hide();
  }

}
