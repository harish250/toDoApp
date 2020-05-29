import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

  show: boolean;
  reminders: Reminder[] = [];
  constructor() {

   }

  reminderForm = new FormGroup(
    {
        eventTitle: new FormControl(''),
        eventDescription: new FormControl(''),
        eventDate: new FormControl(''),
        eventTime: new FormControl('')
    }
  );

  ngOnInit(): void {
    if (reminders.length > 0) {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }
  submitForm(): void
  {

    console.log(this.reminderForm.value);
    this.reminders.push(this.reminderForm.value);
    this.reminderForm.reset();
  }

}
