import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { skipUntil, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // skipUntil
  // skip the value until the notifier sends signal
  
  constructor () {
    console.log('# ignore values before the notifier sends the signal at 3s');
    timer(0, 1000)
      .pipe(
        take(6),
        skipUntil(timer(3000))
      )
      .subscribe(val => console.log(val));

      // Output:
      // ignore values before the notifier sends the signal at 3s
      // 3
      // 4
      // 5
  }
}
