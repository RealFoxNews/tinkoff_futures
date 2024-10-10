import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Share } from 'src/app/modules/shares/share.model';
import { environment } from 'src/environments/environment';
import { SettingsDropResponse } from '../models/drop.models';

@Injectable()
export class DropService {
  constructor(private http: HttpClient) {}

  getShares() {
    return this.http.get<Share[]>(environment.apiUrl + 'shares');
  }

  getSettings(): Observable<SettingsDropResponse> {
    return this.http.get<SettingsDropResponse>(environment.apiUrl + 'settings');
  }

  patchSettings(
    settings: SettingsDropResponse
  ): Observable<SettingsDropResponse> {
    // return of(settings);
    return this.http.patch<SettingsDropResponse>(
      environment.apiUrl + 'settings',
      settings
    );
  }
}
