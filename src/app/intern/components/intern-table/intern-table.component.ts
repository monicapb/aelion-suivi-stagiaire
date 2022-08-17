import { Component, OnInit } from '@angular/core';
import { Logger } from './../../../core/helpers/logger';
import { Intern } from './../../../core/models/intern';

@Component({
  selector: 'app-intern-table',
  templateUrl: './intern-table.component.html',
  styleUrls: ['./intern-table.component.scss']
})
export class InternTableComponent implements OnInit {
  private static sortOrder: number = 1;

  public interns: Intern[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(intern: Intern): void {
    this.interns.splice(
      this.interns.indexOf(intern),
      1
    );

  }

  public sortByName(): void {
    Logger.info(`Before sort, sortOrder is : ${InternTableComponent.sortOrder}`);
    this.interns.sort(
      InternTableComponent.sortName
    );
    InternTableComponent.sortOrder = InternTableComponent.sortOrder * -1;
    console.log(`After sort, sortOrder is : ${InternTableComponent.sortOrder}`);
  }

  private static sortName(intern1: Intern, intern2: Intern): number {
    if (intern1.name > intern2.name) {
      return 1 * InternTableComponent.sortOrder;
    } else if (intern1.name < intern2.name) {
      return -1 * InternTableComponent.sortOrder;
    } else {
      return 0;
    }
  }
}
