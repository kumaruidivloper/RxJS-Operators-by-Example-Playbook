import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // timeout
  // The timeout is a number:
  //    Use it as a period in milliseconds
  //    The source must emit next or complete within the period
  //    Otherwise, a timeout error occurs
  
  constructor () {
    const source = Observable.create(observer => {
        observer.next('A');
        setTimeout(() => observer.next('B'), 100); // emitted at 100 ms
        setTimeout(() => observer.next('C'), 300); // emitted 200 ms later
        setTimeout(() => observer.complete(), 600); // emitted 300 ms later
    });

    console.log('# It takes less than 350 ms from A --> B, B --> C, and C --> complete');
    source.pipe(timeout(350)).subscribe(d => console.log(d), null, () => console.log('complete'));
    // OutPut
    // A
    // B
    // C
    // Complete
  }
}
