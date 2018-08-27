import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ElasticBoxComponent } from './elastic-box/elastic-box.component';
import { ChartComponent } from './chart/chart.component';

import { GetDataService } from './services/get-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ElasticBoxComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularDraggableModule,
    NgxLocalStorageModule.forRoot()
  ],
  providers: [GetDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
