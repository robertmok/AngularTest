import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LandingRouteGuard implements CanActivate {

  constructor() {}

  canActivate() {
    console.log('Landing guard ...');
    return true;
  }
}
