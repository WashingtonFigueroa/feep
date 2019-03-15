import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('fepp-token') !== null) {
          if (localStorage.getItem('fepp-token2') !== null) {
              let rutas = [];
              rutas = atob(localStorage.getItem('fepp-token2')).split(',');
              if (state.url === '/login') {
                  return true;
              }
              if (state.url === '/dashboard') {
                  return true;
              }
              if (rutas !== null) {
                  for (let i = 0; i < rutas.length; i++) {
                      if (rutas[i] === state.url) {
                          return true;
                      }
                  }
              }
          }
      }
      return false;
  }
}
