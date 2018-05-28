import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CommonService } from './common.service';


import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
// import { GroceryAddComponent } from './groceryadd/groceryadd.component'
// import { GroceryListComponent } from './grocerylist/grocerylist.component'

import { RouterModule, Routes } from '@angular/router';
import { RegpageComponent } from './regpage/regpage.component';

const appRoutes: Routes = [
   { path: 'loginpage', component: LoginpageComponent },
   { path: 'regpage', component: RegpageComponent },
   
];


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegpageComponent,
    // GroceryAddComponent,
    // GroceryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

