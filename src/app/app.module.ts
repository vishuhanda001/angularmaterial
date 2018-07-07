import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import {MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatInputModule, DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppDateAdapter, APP_DATE_FORMATS } from '../appDateAdapter';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
  },
  {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
