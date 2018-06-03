import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {

    // this.loginForm = new FormGroup({
    //   'emailid': new FormControl(null, [Validators.required, Validators.email]),
    //   'pwd': new FormControl(null, [Validators.required]),
    // });
    }
  //   onSubmit() {
  //     console.log(this.loginForm)
  //     this.loginForm.controls['emailid'].markAsTouched()
  // }

}
