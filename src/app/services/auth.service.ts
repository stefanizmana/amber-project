import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as fromModel from './Properties.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

   getBaseUrl() {
    if (environment.protocol === '' && environment.basePath === '') {
      return '/';
    }

    return `${environment.protocol}://${environment.basePath.replace(
      /(^\w+:|^)\/\//,
      ''
    )}/`;
  }

  loginApi(credentials) {
    const url = `${this.getBaseUrl()}login`;

    const payload = {
      ...credentials
    };

    return this.http.post<{username, password, token}[]>(url, payload, {
      withCredentials: true
    });
  }

  propertiesApi() {
    const url = `${this.getBaseUrl()}properties`;

    return this.http.get<fromModel.PropertiesModel[]>(url, {
      withCredentials: true
    });
  }
}

