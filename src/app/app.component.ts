import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { window, take, switchMap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // Window
  
  constructor () {
    console.log('# emit the buffer after 1000 ms');
    interval(100)
        .pipe(
            window(interval(1000)),
            take(3), // <-- just to limit the life of the source Observable
            // switchMap(w => w.pipe(toArry()))

            switchMap(w => w.pipe(toArray()))
    )
    .subscribe(d => {
        console.log(d);
    });
  }
}
