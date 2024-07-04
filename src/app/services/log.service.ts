import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log, Logs } from '../models/log.models';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private logServerUrl = environment.logApiUrl;

  constructor(private http: HttpClient) {}

  logInfo(message: string): void {
    this.log('info', message);
  }

  logWarning(message: string): void {
    this.log('warning', message);
  }

  logError(message: string): void {
    this.log('error', message);
  }

  private log(level: string, message: string): void {
      this.http
        .post(this.logServerUrl, { level, message })
        .subscribe(() => console.log(`[${level.toUpperCase()}]: ${message}`));
  }

  getLogs(): Observable<Logs> {
    return this.http.get<Logs>(this.logServerUrl);
  }
}
