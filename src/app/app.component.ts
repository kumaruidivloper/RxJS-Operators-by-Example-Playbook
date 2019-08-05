import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { windowTime, take, switchMap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // windowTime

  
  constructor () {
    const source = timer(0, 100).pipe(take(9));
    console.log('# emit buffer after 200 ms');
    source
        .pipe(
            windowTime(200),
            switchMap(w => w.pipe(toArray()))
        )
        .subscribe(v => console.log(v));
  }  

  // outPut:
  // [0,1]
  // [2,3]
  // [4,5]
  // [6,7]
  // [8]
}
