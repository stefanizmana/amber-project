import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {

  constructor(
    private readonly location: Location,
    private readonly router: Router,
    private authService: SocialAuthService
  ) {
  }
  title = 'amber-project';
  path = '';

  promptSubscription: Subscription;

  user: SocialUser;
  loggedIn: boolean;

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.path = this.location.path().substr(1);
    this.router.events
        .pipe(
          filter((event) => event instanceof NavigationStart),
          map((event) => event as NavigationStart)
        )
        .subscribe((event) => {
          this.path = event.url.substr(1);
        });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
