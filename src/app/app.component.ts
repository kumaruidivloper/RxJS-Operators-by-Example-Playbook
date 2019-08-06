import { Component } from '@angular/core';
import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // takeWhile
  // take the value while the condition held true
  // once the condition becomes false, emit complete event
  
  constructor () {
    console.log('# take while condition is true');
    of(1, 2, 3, 1)
        .pipe(takeWhile(val => val < 3))
        .subscribe(val => console.log(val));
    // Output
    // 1
    // 2
  }
}
