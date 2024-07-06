import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogService } from './services/log.service';
import { Log } from './models/log.models';
import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NgFor, UpperCasePipe, DatePipe],
  providers: [LogService],
})
export class AppComponent implements OnInit {
  title = 'Log App';
  logs: Log[] = [];

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  postLog(): void {
    this.logService.logInfo('App component initialized');
    this.logService.logWarning('App component initialized');
    this.logService.logError('App component initialized');
    this.getLogs();
  }

  getLogs(): void {
    this.logService.getLogs().subscribe((logs) => {
      // console.log(logs);
      this.logs = logs;
    });
  }
}
