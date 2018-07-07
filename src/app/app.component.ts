import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
date:any;


ngOnInit(){

this.date = new Date();


}

addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  console.log(type, event.value);
  let dateselected = new Date(event.value);
  this.date = dateselected.getDate()+"/"+ (dateselected.getMonth()+1)+"/"+dateselected.getFullYear();
  console.log(this.date);
}


}
