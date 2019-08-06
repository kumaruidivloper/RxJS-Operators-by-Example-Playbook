import { Component } from '@angular/core';
import { of, interval } from 'rxjs';
import { skipLast } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // skipLast
  // ignore the last n values
  
  constructor () {
    console.log('# skip the last 2 values');
    of(1, 2, 3)
        .pipe(skipLast(2))
        .subscribe(val => console.log(val));

    // Output
    // 1

    setTimeout(() => {
      // ^^^ delay untill previous example complete
      console.log('# Observable must complete');
      interval(100)
          .pipe(skipLast(1))
          .subscribe(val => console.log(val));

    }, 3000);
    // Output
    // (noting skipped - runs forever)
  }
}
