import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // take
  // the first n values and complete
  
  constructor () {
    const source = timer(0, 100);
    console.log('# take the first 5 values');
    source.pipe(
          take(5)
    ).subscribe(
        d => console.log(d),
        null,
        () => console.log('complete')
    );

    // Output
    // 0
    // 1
    // 2
    // 3
    // 4
    // complete
  }
}
