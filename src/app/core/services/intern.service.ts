import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Logger } from '../helpers/logger';
import { ICrud } from '../interfaces/i-crud';
import { Intern } from '../models/intern';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InternService implements ICrud<Intern> {


  constructor(
    private httpClient: HttpClient
  ) {}

  findAll(): Observable<Intern[]> {
    return this.httpClient.get<any>(
      `${environment.apiRoot}intern`
    ).pipe(
      take(1),
      map((rawInterns: any) => {
        return rawInterns.map((rawIntern: any) => {
          const intern: Intern = new Intern();
          // mon ÇA rawInterns sera convertit en object dans la methode deserialize
          intern.deserialize(rawIntern);
          // intern.id = rawIntern.id;
          // intern.name = rawIntern.name;
          // intern.firstname = rawIntern.firstName;
          // intern.address = rawIntern.address;
          // intern.email = rawIntern.email;
          // intern.phoneNumber = rawIntern.phoneNumber;
          // intern.birthDate = new Date(rawIntern.birthDate);

          return intern;
        })
      })
    )
  }

  findOne(id: number): Observable<Intern | null> {
    return this.httpClient.get<any>(
      `${environment.apiRoot}intern/${id}`
    )
    .pipe(
      take(1),
      map((rawIntern: any) => {
        const intern: Intern = new Intern();
        intern.id = rawIntern.id;
        intern.name = rawIntern.name;
        intern.firstname = rawIntern.firstName;
        intern.address = rawIntern.address;
        intern.email = rawIntern.email;
        intern.phoneNumber = rawIntern.phoneNumber;
        intern.birthDate = new Date(rawIntern.birthDate);

        return intern;
      })
    )

  }

  public getItemNumber(): number {
    return 0;
  }

  public delete(intern: Intern): void {}

  public add(intern: Intern): Observable<Intern>  {
    return this.httpClient.post(`${environment.apiRoot}intern`, intern)
    .pipe(
      take(1),
      map((rawIntern: any) => {
        const intern: Intern = new Intern();
        intern.id = rawIntern.id;
        intern.name = rawIntern.name;
        intern.firstname = rawIntern.firstName;
        intern.address = rawIntern.address;
        intern.email = rawIntern.email;
        intern.phoneNumber = rawIntern.phoneNumber;
        intern.birthDate = new Date(rawIntern.birthDate);

        return intern;
      })
    )
  }

  public update(intern: Intern): void {}

  public getNextId(): number {

    return 0;
  }
}
