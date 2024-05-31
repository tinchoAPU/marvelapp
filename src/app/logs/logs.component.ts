import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Log } from 'src/app/dto/log';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'endpoint', 'date'];
    dataSource = [];
    data: any;
    logs: Log[] = [];

  constructor(private logService: LogService, private router: Router) { }

  ngOnInit(): void {
    this.logService.getAllLogs().subscribe({
          next: (logs) => {
            this.logs = logs;
            console.log(logs);
          },
          error: (error) => {
            console.error('Error fetching characters', error);
          }
        });
  }

}
