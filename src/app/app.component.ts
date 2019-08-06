import { Component } from '@angular/core';
import { of } from 'rxjs';
import { retry, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // retry
  // resubscribe on error
  
  constructor () {
    console.log('# retry two times');
    of('a', 1)
        .pipe(
            map(x => x.toUpperCase()),
            retry(2)
        )
        .subscribe(x => console.log(x), e => console.log('error:', e.message));
  }  

  // OutPut
  // A    <-- original attempt
  // A    <-- retry #1
  // A    <-- retry #2
  // error: x.toUpperCase is not a function
}
