import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthActions } from './';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((data) =>
        this.authService
          .login({ email: data.email, password: data.password })
          .pipe(
            map((user) => AuthActions.loginSuccess({ user })),
            tap(() => this.router.navigate(['/'])),
            catchError((error) => of(AuthActions.loginFailure(error)))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((user) =>
        this.authService.register(user.data).pipe(
          map(() => AuthActions.registerSuccess()),
          tap(() => this.router.navigate(['/login'])),
          catchError((error) => of(AuthActions.registerFailure(error)))
        )
      )
    )
  );
}
