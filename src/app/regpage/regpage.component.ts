import { Component, OnInit, SimpleChange, Input, OnChanges } from '@angular/core';
import { Router} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {
  form;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        // Validators.email,
        // Validators.pattern("[^ @]*@[^ @]*"),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
      ])),
      mobno: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ])),
      pwd: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      cpwd: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      
    });
  }
  onClickSubmit() {
       this.router.navigate(['thanku'])
    }

}
