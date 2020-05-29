import { Injectable } from '@angular/core';
import {reminders} from '../shared/reminders';
import {Observable} from 'rxjs';
import { Reminder } from '../shared/reminder';
import { parse } from 'path';
import { SelectControlValueAccessor } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  constructor() {

   }

   getTimer(reminder: Reminder): Observable<Reminder>
   {
    const countDate = new Date(reminder.eventDate);
    const now = new Date();
    if (countDate.getFullYear() === now.getFullYear() &&
    countDate.getMonth() === now.getMonth() && countDate.getDate() === countDate.getDate())
    {
      return new Observable<Reminder>(() => {
        const x = setInterval(() => {
          // tslint:disable-next-line:no-shadowed-variable
          const now = new Date().getTime();
          const difference = new Date(reminder.eventTime).getTime() - now;
          console.log('now', new Date().toTimeString());
          console.log('curr', reminder.eventTime);
          const nowtimeArray = new Date().toTimeString().split(':');
          // tslint:disable-next-line:radix
          const nowHours = parseInt(nowtimeArray[0]);
          // tslint:disable-next-line:radix
          const nowMin = parseInt(nowtimeArray[1]);


          const countimeArray = reminder.eventTime.split(':');
          // tslint:disable-next-line:radix
          const countHours = parseInt(countimeArray[0]);
          // tslint:disable-next-line:radix
          const countMin = parseInt(countimeArray[1]);

          const hours = Math.abs(countHours - nowHours);
          const minutes = Math.abs(countMin - nowMin);
          if (hours === 0)
         {
           reminder.counter = `${minutes}minute`;
         }
         else if (minutes === 0)
         {reminder.counter = `${hours}hour`;
         }
         else if (minutes === 0 && hours === 0)
         {
           reminder.counter = 'Completed';
         }
          reminder.counter = ` ${hours}hour ${minutes}minute`;

          if (hours === 0 && minutes === 0)
            {
              clearInterval(x);
              alert('ALERT YOUR TIME EXCEEDED');
            }
       }, 1000);


      });
    }

    return new Observable<Reminder>(() => {


                  const x = setInterval(() => {

                    // tslint:disable-next-line:no-shadowed-variable
                    const now = new Date().getTime();
                    const difference = countDate.getTime() - now;
                    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 12 * 31));
                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));


                    reminder.counter = `${years}years ${days}days ${months}month ${hours}hour ${minutes}minute `;

                    if (difference < 0 && minutes === 0 && hours === 0 && days === 0 && years === 0 && months === 0)
                      {
                        clearInterval(x);
                        alert('ALERT YOUR TIME EXCEEDED');
                      }
                 }, 1000);



    });
   }



}
