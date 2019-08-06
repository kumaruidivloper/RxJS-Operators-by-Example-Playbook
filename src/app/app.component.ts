import { Component } from '@angular/core';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // skip
  // ignore the first n values
  
  constructor () {
    console.log('# skip the first 2 values');

    of(1, 2, 3).pipe(
        skip(2)
    ).subscribe(val => console.log(val));

    // Output
    // 3
  }
}
