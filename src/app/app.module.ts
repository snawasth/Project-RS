import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CommonService } from './common.service';


import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { RouterModule, Routes } from '@angular/router';
import { RegpageComponent } from './regpage/regpage.component';
import { ThankuComponent } from './thanku/thanku.component';
import { HomepageComponent } from './homepage/homepage.component';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

const appRoutes: Routes = [
   { path: 'loginpage', component: LoginpageComponent },
   { path: 'regpage', component: RegpageComponent },
   { path: 'thanku', component: ThankuComponent },
   { path: '', component: HomepageComponent },

   
];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegpageComponent,
    ThankuComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

