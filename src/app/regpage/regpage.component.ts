import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickSubmit() {
       this.router.navigate(['thanku'])
    }

}
