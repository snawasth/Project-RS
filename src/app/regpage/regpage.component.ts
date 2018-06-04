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
      fname: new FormControl("", Validators.required)
    });
  }
  onClickSubmit() {
       this.router.navigate(['thanku'])
    }

}
