import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap, bufferToggle } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // bufferToggle
  
  constructor () {
    // define our open/close signals
    const opening = interval(400).pipe(tap(() => console.log('open')));
    const closing = () => interval(300).pipe(tap(() => console.log('close')));

    //each buffer closes 300 ms after opening
    interval(100)
      .pipe(
          tap(x => console.log(x)),
          bufferToggle(opening, closing),
          take(3) // <-- just to limit the life of the source Observable
      )
      .subscribe(sequence => {

        console.log(sequence);
      });
  }

  // Check the Output in console
}
