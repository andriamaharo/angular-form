import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent{
  form = new FormGroup({
    courses : new FormArray([]),
  });

  addCourse(course : HTMLInputElement){
    this.courses.push(new FormControl(course.value));
    course.value = '';
  }

  removeCourse(course : FormControl){
    let index = this.courses.controls.indexOf(course);
    this.courses.removeAt(index);
  }

  get courses(){
    return (this.form.get('courses') as FormArray);
  }
}
