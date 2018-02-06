import { BrowserModule } from '@angular/platform-browser';
import { PrebootModule } from 'preboot';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { isPlatformBrowser } from '@angular/common';

import { upgradedComponents, downgradedAppName } from './legacy-app-setup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    ...upgradedComponents,
  ],
  imports: [
    // .withServerTransition() is needed to support Universal rendering.
    BrowserModule.withServerTransition({appId: 'yg-app'}),
    PrebootModule.withConfig({appRoot: 'yg-root'}),
    UpgradeModule,
    AppRoutingModule,
    HomeModule,
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [],
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {}

  ngDoBootstrap() {
    console.log('AppModule#ngDoBootstrap', isPlatformBrowser(this.platformId));
    if (isPlatformBrowser(this.platformId)) {
      this.upgrade.bootstrap(document.body, [downgradedAppName], {strictDi: true});
    }
  }
}
