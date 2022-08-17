import { Injectable } from '@angular/core';
import { Logger } from '../helpers/logger';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  public interns: Intern[] = [
    {
      name: 'Aubert',
      firstname: 'Jean-Luc',
      email: 'jla.webprojet@gmail.com',
      phoneNumber: '+(33)6 23 56 89 54'
    },
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
  ];

  constructor() {
    Logger.info(`I'm a Singleton`);
  }

  public getItemNumber(): number {
    return this.interns.length;
  }
}
