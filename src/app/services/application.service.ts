import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as fromModel from './Properties.model';

import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {map, withLatestFrom} from 'rxjs/operators';

import { AuthService } from './auth.service';


@Injectable({ providedIn: 'root' })
export class ApplicationService {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  get propertiesItems$() {
    return this.propertiesSubject$.asObservable();
  }

  private readonly propertiesSubject$ = new BehaviorSubject<any>(
    [{
      currency: '',
      description: '',
      id: '',
      images: ['', ''],
      location: {coordinates: [0, 0], type: ''},
      name: '',
      sold_price: '',
      type: ''
    }]
  );

  loginApi$(username: string, password: string) {
    const credentials = {
      username,
      password
    };

    return this.authService.loginApi(credentials).pipe(
      map((data) => {
        for (const item of data) {
          if (item.username === username && item.password === password) {
            this.router.navigate(['/dashboard']);
            localStorage.setItem('userProfile', item.token);
          }
        }
      })
    );
  }

  properties$() {
    return this.authService.propertiesApi().pipe(
      map((data) => {
        if (data) {
          this.propertiesSubject$.next(data);
        }
      })
    ).subscribe();
  }
}
