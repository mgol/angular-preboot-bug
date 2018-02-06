import { downgradeComponent } from '@angular/upgrade/static';
import { IAngularStatic } from 'angular';

// All components downgraded from Angular to AngularJS go here
import { AppComponent } from './app.component';

declare const angular: IAngularStatic;

export const legacyAppName = 'legacyApp';
export const downgradedAppName = 'downgradedApp';

// Don't initialize the AngularJS app on the server.
// tslint:disable-next-line:strict-type-predicates
if (typeof angular !== 'undefined') {
  angular
    .module(downgradedAppName, [legacyAppName])
    .directive('ygRoot', downgradeComponent({component: AppComponent}));
}

export const upgradedComponents = [];
