import { Component } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // catchError
  // prevent the error from stopping the stream
  // replace the error with a new source
  
  constructor () {
    console.log('# catch then rethrow the error');
    throwError('error')
        .pipe(
            catchError(err => {
              console.log(`caught an error: ${err}`);
              return throwError(`rethrown: ${err}`);
            }),
            catchError(err => {
              console.log(err);
              return of(undefined);
            })
        )
        .subscribe(
            d => {
                if (d) {
                    console.log(d);
                }
            },
            err => console.log('oops'),
            () => console.log('complete')
        );

      // Output:
      // caught an error: error
      // rethrown: error!
      // complete


      console.log('\r\n*****************************\r\n');
      console.log('# catch something unexpected');
      of('a', 1)
            .pipe(
              map(v => v.toUpperCase()),
              catchError(err => {
                return of(undefined);
              })
            )
            .subscribe(
              d => {
                if (d) {
                  console.log(d);
                }
              },
              err => console.log('oops'),
              () => console.log('complete')
            );
        // OutPut
        // A
        // complete
  }  
}
