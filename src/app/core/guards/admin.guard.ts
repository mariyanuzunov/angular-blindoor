import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { skip, switchMap } from 'rxjs/operators';
import { AuthSelectors } from 'src/app/auth/state';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(AuthSelectors.selectAuthUser).pipe(
      skip(1),
      switchMap((user) => {
        if (user && user.role == 'admin') {
          return of(true);
        }

        return of(false);
      })
    );
  }
}
