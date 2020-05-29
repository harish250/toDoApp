import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Reminder} from '../shared/reminder';
import {reminders} from '../shared/reminders';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = ' ';
  reminders:Reminder[]=[];
  constructor() {
     
   }
    
    
  reminderForm = new FormGroup(
    {
        eventTitle:new FormControl(''),
        eventDescription:new FormControl(''),
        eventDate:new FormControl(''),
        eventTime:new FormControl('')
    }
  );

  ngOnInit(): void {
  } 
  submitForm():void
  {
    console.log(this.reminderForm.value)
    this.reminders.push(this.reminderForm.value);
  }
}
