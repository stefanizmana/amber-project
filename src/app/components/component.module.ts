import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DisplayItemComponent } from './display-item/display-item.component';
import {MatIconModule} from '@angular/material/icon';
import {AgmCoreModule} from '@agm/core';
import { AuthButtonComponent } from './auth-button/auth-button.component';

const importsExports = [
  FormsModule,
  LoginFormComponent,
  DashboardComponent
];

const declarationsAndExport = [
  LoginFormComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSortModule,
    MatButtonToggleModule,
    MatIconModule,
    AgmCoreModule
  ],
  exports: [...importsExports],
  declarations: [...declarationsAndExport, DisplayItemComponent, AuthButtonComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
