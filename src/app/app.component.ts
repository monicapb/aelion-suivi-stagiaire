import { Component } from '@angular/core';
import { InternService } from './core/services/intern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Hello Angular 13';

  public constructor(
    public internService: InternService
  ) {}

  public getTitle(): string {
    return this.title;
  }
}
