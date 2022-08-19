import { Component } from '@angular/core';
import { InternService } from './core/services/intern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Aélion Suivi des Stagiaires';

  public constructor(
    public internService: InternService
  ) {}

  public getTitle(): string {
    return this.title;
  }
}
