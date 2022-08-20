import { Component, OnInit } from '@angular/core';
import { POEService } from 'src/app/core/services/poe.service';

@Component({
  selector: 'app-poe-table',
  templateUrl: './poe-table.component.html',
  styleUrls: ['./poe-table.component.scss']
})
export class POETableComponent implements OnInit {

  constructor(public poeService : POEService) { }

  ngOnInit(): void {
  }

}
