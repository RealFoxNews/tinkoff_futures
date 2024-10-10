import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SettingsResponse } from '../models/settings.models';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) {}

  getSettings(): Observable<SettingsResponse> {
    return this.http.get<SettingsResponse>(environment.apiUrl + 'settings');
  }

  patchSettings(settings: SettingsResponse): Observable<SettingsResponse> {
    return this.http.patch<SettingsResponse>(
      environment.apiUrl + 'settings',
      settings
    );
  }

  getAvailableAccounts(): Observable<any> {
    return this.http.get<SettingsResponse>(environment.apiUrl + 'accounts');
  }
}
