import { Component, OnInit } from '@angular/core';
import { InternService } from './core/services/intern.service';
import { StringHelper } from './core/helpers/string-helper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  public title = 'Aélion Suivi des Stagiaires';

  public constructor(
    public internService: InternService
  ) {}

  ngOnInit(): void {
  this.internService.findAll().subscribe();
  const sanitized: string = StringHelper.sanitizePunctuation('Cc, u , how are you');
  console.log(sanitized);
  }


  public getTitle(): string {
    return this.title;
  }
}
