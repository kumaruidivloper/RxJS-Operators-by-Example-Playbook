import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { retryWhen, map, scan, takeWhile, tap, retry } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // retryWhen
  
  constructor () {
    let swallowError = true;
    interval(200)
        .pipe(
            map(x => {
              console.log('attempting:' + x);
              if(x=== 1 ) {
                  throw 'error processing:' + x;
              }
              return x;
            }),
            retryWhen(errors => {
                if (swallowError) {
                  return errors.pipe(
                    tap(err => console.log(err)),
                    scan(acc => acc + 1, 0),
                    tap(retryCount => {
                      if(retryCount === 2) {
                          console.log('Swallowing error and completing');
                      } else {
                          console.log('Retrying whole source - retry #' + retryCount)
                      }
                      return retryCount;
                    }),
                    takeWhile(errCount => errCount < 2)
                  );
                } else {
                  return errors.pipe(
                      tap(err => console.log(err)),
                      scan(acc => acc + 1, 0),
                      tap(retryCount => {
                          if (retryCount === 2) {
                              console.log('Failing');
                              throw 'oops';
                          } else {
                              console.log('Retrying whole source - retry #' + retryCount)
                          }
                      })
                  );
                }
            })
        )
        .subscribe(
              x => console.log('successfully processed:' + x),
              err => console.log('**********error:' + err),
              () => console.log('completed successfully')
        );
  }
}
