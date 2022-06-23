import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {CarouselModule} from "primeng/carousel";
import {DividerModule} from "primeng/divider";
import { Project1Component } from './component/project1/project1.component';
import { HomeComponent } from './component/home/home.component';
import { Project2Component } from './component/project2/project2.component';
import { Project3Component } from './component/project3/project3.component';
import { Project4Component } from './component/project4/project4.component';
import { Project5Component } from './component/project5/project5.component';
import { Project6Component } from './component/project6/project6.component';
import { Project7Component } from './component/project7/project7.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    HomeComponent,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    Project7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    CarouselModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
