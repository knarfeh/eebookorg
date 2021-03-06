import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.http.request('/ajax/auth/logout', {
      method: 'get'
    }).then(({ result }) => {
    }).catch(errors => {
      if (errors instanceof Array) {
        console.log(errors);
      }
    }).then(() => {
    });
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // TODO: use ngrx/store
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
