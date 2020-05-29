import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Reminder} from '../shared/reminder';
import {reminders} from '../shared/reminders';
import {TimerService} from '../services/timer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = ' ';
  reminders:Reminder[]=[];
  constructor(public timerService:TimerService) {
     
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
    this.reminders.push(this.reminderForm.value);
    reminders.push(this.reminderForm.value);
    this.timerService.getTimer(this.reminderForm.value).subscribe();
    console.log(reminders);
    }
}
