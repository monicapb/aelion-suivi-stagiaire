import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { POE } from 'src/app/core/models/poe';
import { POEService } from 'src/app/core/services/poe.service';

@Component({
  selector: 'app-poe-detail',
  templateUrl: './poe-detail.component.html',
  styleUrls: ['./poe-detail.component.scss']
})
export class POEDetailComponent implements OnInit {

  public poe: POE | null = null;

  constructor(public poeService : POEService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id : number = +paramMap.get('id')!;
        this.poe = this.poeService.findOne(id);
      }
    )
  }

}
