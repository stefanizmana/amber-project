import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider  } from 'angularx-social-login';


@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent {

  constructor(private socialAuthService: SocialAuthService ) { }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
}
