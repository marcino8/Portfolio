import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {Project1Component} from "./component/project1/project1.component";
import {HomeComponent} from "./component/home/home.component";
import {Project2Component} from "./component/project2/project2.component";
import {Project3Component} from "./component/project3/project3.component";
import {Project4Component} from "./component/project4/project4.component";
import {Project5Component} from "./component/project5/project5.component";
import {Project6Component} from "./component/project6/project6.component";
import {Project7Component} from "./component/project7/project7.component";

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'project1', component : Project1Component},
  {path : 'project2', component : Project2Component},
  {path : 'project3', component : Project3Component},
  {path : 'project4', component : Project4Component},
  {path : 'project5', component : Project5Component},
  {path : 'project6', component : Project6Component},
  {path : 'project7', component : Project7Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
