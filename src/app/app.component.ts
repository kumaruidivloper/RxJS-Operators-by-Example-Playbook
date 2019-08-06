import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { windowToggle, take, switchMap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // windowToggle
  // open a new buffers whenever recevied an operating signal
  // after opened, the buffer stays untill a closing signal is received
  // then, send the buffer as a stream
  
  constructor () {
    console.log('# open a new buffer every 500ms');
    console.log('# close the buffer 200ms after opening');
    console.log('# hence, ignore those come between 200ms and 500ms');
    const openings = timer(0, 500);
    const closing = () => timer(200);

    timer(0,100)
        .pipe(
          take(36),
          windowToggle(openings, closing),
          switchMap(s => s.pipe(toArray()))
        )
        .subscribe(sequence => {
            console.log(sequence);
        });
  }  
}
