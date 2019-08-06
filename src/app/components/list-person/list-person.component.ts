import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Person } from '../../models/person';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.myForm = this.fb.group({
      people: this.fb.array([
        this.fb.group({
          id: ['', [Validators.required, Validators.min(0)]],
          name: ['', Validators.required],
          age: ['', [Validators.required, Validators.min(18)]],
        })
      ])
    });

    if (this.people.length === 1) {
      console.log("Vacio");
    }
  }


  get people() {
    return this.myForm.get('people') as FormArray;
  }

  addPerson () {
    // const person = <FormArray> this.myForm.controls['people'];
    // person.push(this.fb.group({people: []}));
    this.people.push(this.fb.control(''));
  }
}
