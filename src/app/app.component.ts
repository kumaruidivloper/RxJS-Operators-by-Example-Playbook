import { Component } from '@angular/core';
import { of } from 'rxjs';
import { bufferCount } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // bufferCount
  // add value into buffer until full
  // then emit the buffer

  constructor () {
    // #region example 1
    console.log ('# emit buffer of 2 values or when complete');
    of(1,2,3)
      .pipe(bufferCount(2))
      .subscribe(sequence => {
          console.log(sequence);
      });
    // Output:
    // [1,2]
    // [3]
    // #endregion



    // #region example 2
    console.log ();
    console.log ('# emit buffer of 2 values');
    console.log ('# start a new buffer when a new value emitted');
    console.log ('# multiple buffers can coexist!');
    
    of(1,2,3)
      .pipe(bufferCount(2,1))
      .subscribe(sequence => {
        console.log(sequence)
      });

    // Output:
    // [1,2]
    // [2,3]
    // [3]
    //#endregion
}}
