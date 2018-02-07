import { ApplicationRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { EventReplayer } from 'preboot';
import { filter, take } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'yg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private replayer: EventReplayer,
    @Inject(PLATFORM_ID) private platformId: string,
    private appRef: ApplicationRef,
  ) {}


  ngOnInit() {
    console.log('AppComponent#ngOnInit');
    this.router.initialNavigation();
    if (isPlatformBrowser(this.platformId)) {
      // Reply user events. Normally Preboot would do it itself but for some reason it's replaying code
      // doesn't fire if ngUpgrade is used so we're doing that ourselves here.
      this.appRef.isStable
        .pipe(
          filter(stable => stable),
          take(1),
        ).subscribe(() => {
        this.replayer.replayAll();
      });
    }
  }
}
