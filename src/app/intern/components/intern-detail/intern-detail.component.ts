import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, RouterStateSnapshot } from '@angular/router';
import { Logger } from 'src/app/core/helpers/logger';
import { Intern } from 'src/app/core/models/intern';
import { InternService } from 'src/app/core/services/intern.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-intern-detail',
  templateUrl: './intern-detail.component.html',
  styleUrls: ['./intern-detail.component.scss']
})
export class InternDetailComponent implements OnInit {

  private _id!: number;
  public intern: Intern | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private internService: InternService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this._id = +paramMap.get('id')!;
        this.internService.findOne(this._id).pipe(
          take(1)
        ).subscribe((intern: Intern| null) => {
          this.intern = intern;
        });
      }
    )
  }

  public get id(): number {
    return this._id;
  }
  public navigate(): void {

    this.router.navigate(['/', 'interns']);

  }

}
