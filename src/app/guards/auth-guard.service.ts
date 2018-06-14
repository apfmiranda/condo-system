import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {

    if (this.authService.isAuthenticated()) {
        return true;
    } 

    this.router.navigate(['auth/login']);
    return false;
  }
}