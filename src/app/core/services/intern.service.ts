import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Logger } from '../helpers/logger';
import { ICrud } from '../interfaces/i-crud';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService implements ICrud<Intern> {
  public interns: Intern[] = [
    {
      id: 1,
      name: 'Aubert',
      firstname: 'Jean-Luc',
      email: 'jla.webprojet@gmail.com',
      phoneNumber: '+(33)6 23 56 89 54',
      birthDate: new Date(1968, 3, 30),
      address: '10 rue du Stade'
    },
    {
      id: 125,
      name: 'Pina',
      firstname: 'Monica',
      email: 'cbien@hotmail.fr',
      phoneNumber: '+(33)6 45 78 96 32',
      birthDate: new Date(1995, 10, 26),
      address: '15 place de la République'
    },
    {
      id: 3,
      name: 'Castanie',
      firstname: 'Piotr',
      email: 'pedrito@caramba.com',
      phoneNumber: '+(33)6 45 78 96 32',
      birthDate: new Date(1998, 8, 23),
      address: '1, place du Champ de Mars'
    }
  ];

  constructor() {
    Logger.info(`I'm a Singleton`);
  }

  findAll(): Intern[] {
    // Your logic here !
    return this.interns;
  }

  findOne(id: number): Intern | null {
    const intern: Intern | undefined = this.interns.find(
      (obj: Intern) => obj.id === id
    );

    return (intern === undefined) ? null : intern;

    /**
    if (intern === undefined) {
      return null;
    }
    return intern;
    **/

  }

  public getItemNumber(): number {
    return this.interns.length;
  }

  public delete(intern: Intern): void {
    this.interns.splice(
      this.interns.indexOf(intern),
      1
    );
  }

  public add(intern: Intern): void {
   if (this.findOne(intern.id!) === null) {
    this.interns.push(intern);
   }
  }

  public update(intern: Intern): void {
    let oldIntern: Intern | null = this.findOne(intern.id!);
    if (oldIntern !== null) {
      oldIntern = {id: oldIntern.id, ...intern};
    }
  }

  public getNextId(): number {

    return this.interns.sort(
      (intern1: Intern, intern2: Intern) => {
        return (intern1.id! - intern2.id!) * -1
      }
    )[0].id! + 1;
  }
}
