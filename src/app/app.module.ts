import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { DinamicaComponent } from './components/dinamica/dinamica.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    DinamicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
