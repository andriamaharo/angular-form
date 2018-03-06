import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({
        username : new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainsSpace,
        ],UsernameValidators.shouldBeUnique),
    }),
    password : new FormControl("",
    Validators.required
    ),
  });

  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    return this.form.setErrors({
      invalidForm : true
    });
  }
}
