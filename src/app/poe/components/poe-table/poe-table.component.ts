import { Component, OnInit } from '@angular/core';
import { POE } from 'src/app/core/models/poe';
import { POEService } from 'src/app/core/services/poe.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-poe-table',
  templateUrl: './poe-table.component.html',
  styleUrls: ['./poe-table.component.scss']
})
export class POETableComponent implements OnInit {
  public poes: POE[] = [];
  constructor(public poeService : POEService) { }

  ngOnInit(): void {
    console.log('Before findall POES')
    this.poeService.findAll()
    .pipe(
      take(1)
    ).subscribe((poes: POE[]) => {
      console.log('After findall POES')
      this.poes = poes;
    })
  }

}
