import { Injectable } from '@angular/core';
import {reminders} from '../shared/reminders';
import {Observable} from 'rxjs';
import { Reminder } from '../shared/reminder';
@Injectable({
  providedIn: 'root'
})
export class TimerService {

   
  constructor() {

   }

   getTimer(reminder: Reminder):Observable<Reminder>
   {
    return new Observable<Reminder>(()=>{
                 var countDate=new Date(reminder.eventDate).getTime();
                 var x=setInterval(function(){
                    var now = new Date().getTime();
                    var difference = countDate-now;
                    var newDate = new Date(difference);
                    console.log(newDate);
                    var years=Math.floor(difference/(1000*60*60*24*12*31));
                    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    var months=Math.floor(difference/(1000*60*60*24*31));
                    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

                      reminder.eventDate=`${years}years ${days}days ${months}month ${hours}hour ${minutes}minute ${seconds}seconds`;

                      if(difference<0 && minutes==0 &&seconds==0 && hours==0 && days==0 && years==0 && months==0)
                      {
                        clearInterval(x);
                        alert("ALERT YOUR TIME EXCEEDED");
                      }
                 },1000);
    });
   }



}
