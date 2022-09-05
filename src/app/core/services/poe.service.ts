import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICrud } from '../interfaces/i-crud';
import { POE } from '../models/poe';

@Injectable({
  providedIn: 'root'
})
export class POEService implements ICrud<POE>{


  constructor() {}

  add(item: POE): void {

  }

  update(item: POE): void {

  }
  delete(item: POE): void {

  }

  findAll(): Observable<POE[]> {
    return of([]);
  }

  findOne(id: number): Observable<POE | null> {
    return of(null);
  }

  public getNextId(): number {
    return 0;
  }
}
