import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Test2bComponent } from './test2b/test2b.component';
import { Observable } from 'rxjs';

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

export interface CanDeactivate<T> {
  canDeactivate(component: T): // , route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean>|Promise<boolean>|boolean;
}

// @Injectable()
// export class LeavingRouteGuard implements  CanDeactivate<CanComponentDeactivate>{

//   canDeactivate(component: CanComponentDeactivate) {
//     return component.canDeactivate ? component.canDeactivate() : true;
//   }
// }

@Injectable()
export class LeavingRouteGuard implements CanDeactivate<Test2bComponent> {

  canDeactivate(component: Test2bComponent) {
    return component.canDeactivate();
  }

}
