import { PassWordValidators } from './password.validators';
import { ValidationErrors, Validators,FormGroup, FormControl  } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.css']
})
export class ChangePassFormComponent {
  form = new FormGroup({
    oldPassword : new FormControl('', [Validators.required], [PassWordValidators.notValid]),
    newPassword : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', [Validators.required, PassWordValidators.notMatched)
  });

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
}
