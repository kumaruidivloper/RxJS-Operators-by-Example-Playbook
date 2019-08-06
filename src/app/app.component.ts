import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // takeUntil
  // take the value until the notifier sends signal
  
  constructor () {
    console.log('# take the values until the notifier sends the signal at 300ms')
    timer(0, 100).pipe(
      takeUntil(timer(300))
    ).subscribe(
        val => console.log(val),
        null,
        () => console.log('complete')
    );
    
    // Output:
    // 0
    // 1
    // 2
    // complete
  }
}
