import { Component } from '@angular/core';
import { of } from 'rxjs';
import { onErrorResumeNext, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxJS-Operators-by-Example-Playbook';

  // onErrorResumeNext
  // - on error, skip the current stream
  // - use a new stream as a replacement
  
  constructor () {
    console.log('# on error, use another stream');
    const source = of('feed1', 'feed2', 'feed3');
    const backup = of(
      'handle error',
      'but dont complete original',
      'and dont get any info about thrown error',
      'Oh, **also called on COMPLETE!**'
    );
    source
        .pipe(
          map(feed => {
              if (feed === 'feed2') {
                throw new Error(`oops - but we'll never see this!`)
              }
              return feed;
          }),
          onErrorResumeNext(backup)
        )
        .subscribe(v => console.log(v))
  }  
}
