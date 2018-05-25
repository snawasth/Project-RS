import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grocery-list',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GroceryListComponent implements OnInit {

    commonService: any;
    groceryList: any;
    grocerylist: any;
    constructor(){

    }

    
    
    ngOnInit(){
        this.commonService.add_subject.subscribe(response => {
            this.groceryList = this.commonService.groceryList
        })
    }


}
