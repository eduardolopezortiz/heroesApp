import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {

    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
   // component: ErrorPageComponent
   redirectTo: '404'
  }

]




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )

  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
