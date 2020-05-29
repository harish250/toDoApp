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
          console.log('now', new Date().toTimeString());
          console.log('curr', reminder.eventTime);
          const nowtimeArray = new Date().toTimeString().split(':');
          // tslint:disable-next-line:radix
          const nowHours = parseInt(nowtimeArray[0]);
          // tslint:disable-next-line:radix
          var nowMin = parseInt(nowtimeArray[1]);
   

        var countimeArray=reminder.eventTime.split(':');
        var countHours=parseInt(countimeArray[0]);
        var countMin=parseInt(countimeArray[1]);
        
        

          var hours = Math.abs(countHours-nowHours);
          var minutes = Math.abs(countMin-nowMin); 
          
            
            reminder.counter=` ${hours}hour ${minutes}minute`;
           
            if(hours==0 && minutes==0)
            {
              clearInterval(x);
              alert('ALERT YOUR TIME EXCEEDED');
            }
       },1000);
       
      
      });
    }
   
    return new Observable<Reminder>(()=>{
                 
                 
                  var x=setInterval(function(){
                   
                    var now = new Date().getTime();
                    var difference = countDate.getTime()-now;                    
                    var years=Math.floor(difference/(1000*60*60*24*12*31));
                    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    var months=Math.floor(difference/(1000*60*60*24*31));
                    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    

                      reminder.counter=`${years}years ${days}days ${months}month ${hours}hour ${minutes}minute `;

                      if(difference<0 && minutes==0 && hours==0 && days==0 && years==0 && months==0)
                      {
                        clearInterval(x);
                        alert('ALERT YOUR TIME EXCEEDED');
                      }
                 },1000);
                 
                
                 
    });
   }



}
