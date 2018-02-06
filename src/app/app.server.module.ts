import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { ServerPrebootModule } from 'preboot/server';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'yg-app'}),
    ServerModule,
    ServerPrebootModule.recordEvents({ appRoot: 'yg-root' }),
    AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
