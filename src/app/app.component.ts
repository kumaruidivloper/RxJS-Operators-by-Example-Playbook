import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { windowCount, take, switchMap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // windowCount

  
  constructor () {
    //# Region example 1  
    const source = timer(0, 100).pipe(take(9));
    console.log('# buffer 2 times');
    source
      .pipe(
          windowCount(2),
          switchMap(w => w.pipe(toArray()))
      )
      .subscribe(v => console.log(v));

      // outPut:
      // [0, 1]
      // [2, 3]
      // [4, 5]
      // [6, 7]
      // [8]

      // # Endregion

    // #region example 2
    setTimeout(() => {
      console.log('# buffer 2 items then skip 1 item');
      source
          .pipe(
            windowCount(2, 3), // cut after 3 values but add only 2 values
            switchMap(w => w.pipe(toArray()))
          )
          .subscribe(v => console.log(v));
    }, 100);

    // # Endregion2
  }  
}
