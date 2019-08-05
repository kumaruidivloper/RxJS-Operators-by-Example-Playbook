import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // bufferTime
  // determine the lifetime of a buffer
  // emit the created buffer after a given period

  constructor () {
    console.log ('# create a new buffer every 1 seconds');
    console.log('# and emit it after 2 second');
    interval(1000)
      .pipe(
        take(6),
        bufferTime(2000, 1000)
      )
      .subscribe(sequence => {
          console.log(sequence);
      });
      
    // Output:
    // [0]
    // [0, 1, 2]
    // [1, 2, 3]
    // [2, 3, 4]
    // [3, 4, 5]
    // [4, 5]
    // [5]
}}
