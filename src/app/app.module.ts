import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgregarComponent } from './heroes/pages/agregar/agregar.component';
import { BuscarComponent } from './heroes/pages/buscar/buscar.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    BuscarComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
