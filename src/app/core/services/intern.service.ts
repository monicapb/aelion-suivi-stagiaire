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
      id: 125,
      name: 'Aubert',
      firstname: 'Jean-Luc',
      email: 'jla.webprojet@gmail.com',
      phoneNumber: '+(33)6 23 56 89 54',
      birthDate: new Date(1968, 3, 30),
      address: '10 rue du Stade'
    },
    {
      id: 2,
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

    /**
     * let internFound: Intern | undefined = undefined;
     *
     * for (const intern of this.interns) {
     *  if (intern.id === id) {
     *    internFound = intern;
     *    break;
     *  }
     * }
     *
     */
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
      oldIntern.name = intern.name;
      oldIntern.firstname = intern.firstname;
      oldIntern.address = intern.address;
      oldIntern.birthDate = intern.birthDate;
      oldIntern.email = intern.email;
      oldIntern.phoneNumber = intern.phoneNumber;

      // oldIntern = {...intern};
    }

  }

  public gotOne(): Intern[] {
    return this.interns;
  }

  public getOne(index: number): Intern {
    return this.interns[index];
  }
}
