import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ApplicationService} from '../../services/application.service';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  private subscriptions = new Subscription();
  constructor(
    private readonly applicationService: ApplicationService
  ) {}
  private errorMessageToken: boolean;
  submitted = false;

  ibanLength = 24;

  maxIban = '29';

  min = 1;

  max = 24;

  currency = ['RON', 'EUR', 'USD'];

  errorMessage = '';

  // set validators for each control [a-zA-Z0-9_ ] - alphanumeric regex
  paymentForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_ ]*$/),
      Validators.minLength(this.min),
      Validators.maxLength(this.ibanLength),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9_ ]*$/)),
      Validators.minLength(this.min),
      Validators.maxLength(this.max),
    ]),
  });

  submits() {
    this.applicationService.loginApi$(this.paymentForm.controls.username.value,
    this.paymentForm.controls.password.value)
      .subscribe();
  }

  // validate token input if is alphanumeric else errormessage
  validateTokenInput(field) {
    if (this.paymentForm.controls[field].status === 'VALID') {
      if (this.paymentForm.controls.username.status === 'VALID') {
        this.submitted = true;
      }

      this.paymentForm.patchValue({
        [field]: this.paymentForm.controls[field].value,
      });

      this.errorMessage = '';
      this.errorMessageToken = false;
    } else {
      this.submitted = false;
      this.errorMessage = 'Invalid token';
      this.errorMessageToken = true;
    }
  }
}
