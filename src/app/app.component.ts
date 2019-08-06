import { Component } from '@angular/core';
import { of, interval } from 'rxjs';
import { takeLast } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // takeLast
  // emit the last n values and complete
  
  constructor () {
    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    console.log('# take the last 3 values');
    source.pipe(takeLast(3)).subscribe(d => console.log(d), null, () => console.log('complete'));

    // Output
    // 7
    // 8
    // 9
    // complete

    console.log('\r\n _________________________\r\n');
    console.log('# Only get 3 values, even though take specified 5');
    of(1, 2, 3)
        .pipe(takeLast(5))
        .subscribe(x => console.log(x));
    
    const source3 = interval(100);
    console.log('\r\n__________________________\r\n');
    console.log(`this will never emit anything and never end, because interval does't have a 'last' value`);
    source3.pipe(takeLast(5)).subscribe(d => console.log(d), null, () => console.log('complete'));

  }
}
