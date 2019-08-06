import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // timeoutWith
  // then, replace the source with a new source
  
  constructor () {
    const fallback = of('a', 'b', 'c');
    const source = Observable.create(observer => {
        observer.next('A');
        setTimeout(() => observer.next('B'), 100); // emitted at 100 ms
        setTimeout(() => observer.next('C'), 300); // emitted 200 ms later
        setTimeout(() => observer.complete(), 600); // emitted 300 ms later
    });
    
    console.log('# Timeout occur from B --> C');
    console.log('# So C is ignored, and a fallback source is emitted')
    source.pipe(timeoutWith(150, fallback)).subscribe(d => console.log(d), null)
    // OutPut
    // A
    // B
    // a
    // b
    // c
    // complete
  }
}
