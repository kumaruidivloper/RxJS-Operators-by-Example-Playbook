import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap, bufferWhen } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // bufferWhen
  
  constructor () {
    // determine the closing point of a buffer
    console.log('# vary buffer clearing based on value from interval');
    let x = 0;
    interval(500)
      .pipe(
          take(10),
          tap(i => (x = i)),
          bufferWhen(() => {
              //vary buffer closing:
              if (x < 5) {
                return interval(1000);
              }
              return interval(500);
          })
      )
      .subscribe(values => {
        console.log(values);
      });
}
}
