import { Injectable } from '@angular/core';
import { ICrud } from '../interfaces/i-crud';
import { POE } from '../models/poe';

@Injectable({
  providedIn: 'root'
})
export class POEService implements ICrud<POE>{
  public poeiCollections: POE[] = [
    {
      id: 1,
      title: 'Java',
      createAt: new Date(2018, 8, 22),
      endDate: new Date(2019, 8, 22)

    },
    {
      id: 2,
      title: 'HelpDesk',
      createAt: new Date(2018, 8, 22),
      endDate: new Date(2019, 8, 22)

    },
    {
      id: 3,
      title: 'Abap',
      createAt: new Date(2018, 8, 22),
      endDate: new Date(2019, 8, 22)

    },

  ];

  constructor() {}

  add(item: POE): void {
    if (this.findOne(item.id!) === null) {
      this.poeiCollections.push(item);
     }
  }

  update(item: POE): void {
    let oldPoe: POE | null = this.findOne(item.id!);
    if (oldPoe !== null) {
      oldPoe = {id: oldPoe.id, ...item};
    }
  }
  delete(item: POE): void {
    this.poeiCollections.splice(
      this.poeiCollections.indexOf(item),
      1
    );
  }

  findAll(): POE[] {
    return this.poeiCollections;
  }

  findOne(id: number): POE | null {
    const poe: POE | undefined = this.poeiCollections.find(
      (obj: POE) => obj.id === id
    );

    return (poe === undefined) ? null : poe;
  }

  public getNextId(): number {
    return this.poeiCollections.sort(
      (poe1: POE, poe2: POE) => {
        return (poe1.id! - poe2.id!) * -1
      }
    )[0].id! + 1;
  }

  // public oldSchoolFindNextId(): number {
  //   let nextId: number = 0;
  //   for (const poe of this.poeiCollections) {
  //     if (poe.id! > nextId) {
  //       nextId = poe.id!;
  //     }
  //   }
  //   return nextId + 1;
  // }
}
