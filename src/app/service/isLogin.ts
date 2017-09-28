import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';
import {ServiceService} from './service.service';
@Injectable()
export class UserInfo implements CanActivate {
  constructor (private server: ServiceService, private route: Router) {}
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(state);
    if (this.server.isLogin) {
      return true;
    } else {
      // return false;
      this.route.navigate(['reload']);
    }
  }
}
