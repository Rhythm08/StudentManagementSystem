import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
signIn = new FormGroup(
  {
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  }
);
OnSubmit(){
  console.log(this.signIn.value)
}
}
