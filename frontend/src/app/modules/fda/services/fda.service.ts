import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IShortFDA } from '../models/fda.models';

@Injectable()
export class FdaService {
  constructor(private readonly http: HttpClient) {}

  getFDA(): Observable<IShortFDA[]> {
    return this.http.get<IShortFDA[]>(environment.apiUrl + 'support/fda');
  }
}
