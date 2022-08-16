import { Component } from '@angular/core';
import { Intern } from './core/models/intern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Hello Angular 13';

  public intern: Intern = {
    name: 'Aubert',
    firstname: 'Jean-Luc',
    email: 'jla.webprojet@gmail.com',
    phoneNumber: '+(33)6 45 78 96 32'
  }

  public interns: Intern[] = [
    this.intern,
    {
      name: 'Pina',
      firstname: 'Monica',
      email: 'cbien@hotmail.fr',
      phoneNumber: '+(33)6 45 78 96 32'
    },
    {
      name: 'Castanie',
      firstname: 'Piotr',
      email: 'pedrito@caramba.com',
      phoneNumber: '+(33)6 45 78 96 32'
    }
  ]
  public getTitle(): string {
    return this.title;
  }

  public onDelete(intern: Intern): void {
    /**
    const remainingInterns: Intern[] = [];

    for(let inArrayIntern of this.interns) {
      if (inArrayIntern !== intern) {
        remainingInterns.push(inArrayIntern);
      }
    }
    this.interns = remainingInterns;
    */

    this.interns.splice(
      this.interns.indexOf(intern),
      1
    );

  }
}
