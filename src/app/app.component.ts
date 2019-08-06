import { Component } from '@angular/core';
import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // skipWhile
  // skip the value while the condition held true
  // once the condition becomes false, emit the coming values as
  // normal
  
  constructor () {
    console.log('# skip while the condition is true');
    of(1, 2, 3, 1, 2, 3, 4)
       //  ^ condition false
       .pipe(skipWhile(val => val < 3))
       .subscribe(val => console.log(val));

    // Output
    // 3
    // 1
    // 2
    // 3
    // 4
  }
}
