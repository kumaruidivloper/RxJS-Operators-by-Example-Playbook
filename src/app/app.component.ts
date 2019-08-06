import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { windowWhen, take, mergeAll, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // windowWhen
  //    buffer values
  //    on receiving signals from the notifier
  //      send the buffer as an observable
  //    when the source complete
  //      send the last buffer as an observable
  
  constructor () {
    const source = timer(0,100).pipe(take(9));
    const notifier = () => timer(200);

    console.log('# emit buffer after 200 ms')
    source
        .pipe(
            windowWhen(notifier),
            tap(() => console.log('new buffer')),
            mergeAll()
        )
        .subscribe(v => console.log(v));
  }  
}
