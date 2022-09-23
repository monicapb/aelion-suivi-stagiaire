import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICrud } from '../interfaces/i-crud';
import { POE } from '../models/poe';

@Injectable({
  providedIn: 'root'
})
export class POEService implements ICrud<POE>{


  constructor(
    private httpClient: HttpClient
  ) {}

  findAll(): Observable<POE[]> {
    return this.httpClient.get<any>(
      `${environment.apiRoot}poe`
    ).pipe(
      take(1),
      map((rawPoe: any) => {
        return rawPoe.map((rawPoe: any) => {
          const poe: POE= new POE();
          poe.id = rawPoe.id;
          poe.beginDate = new Date(rawPoe.beginDate);
          poe.endDate = new Date (rawPoe.endDate);
          poe.name = rawPoe.name;


          return poe;
        })
      })
    )
  }

  public add(poe: POE): Observable<POE>  {
    return this.httpClient.post(`${environment.apiRoot}poe`, poe
    ).pipe(
      take(1),
      map((rawPoe: any) => {
          const poe: POE= new POE();
            poe.deserialize(rawPoe);
          // poe.id = rawPoe.id;
          // poe.beginDate = new Date(rawPoe.beginDate);
          // poe.endDate= new Date (rawPoe.endDate);
          // poe.name = rawPoe.name;
          return poe;
        })
      )

  }

  update(item: POE): void {

  }
  delete(item: POE): void {

  }

  findOne(id: number): Observable<POE | null> {
    return of(null);
  }

  public getNextId(): number {
    return 0;
  }
}
