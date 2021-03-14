import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import {DisplayItemComponent} from './components/display-item/display-item.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'dashboard/item/:id',
    component: DisplayItemComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload',  scrollPositionRestoration: 'enabled'  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
