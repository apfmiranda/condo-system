import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    console.log("canActivate()");

    if (this.authService.isAuthenticated()) {
        console.log("isAuthenticated()");
        return true;
    } 

    this.router.navigate(['auth/login']);
    console.log("not Authenticated()");
    return false;
  }
}