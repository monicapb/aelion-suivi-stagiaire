import { Expose, plainToInstance, Type } from "class-transformer";
import { Serializable } from "./interfaces/serializable";
import 'reflect-metadata';

export class Intern  implements Serializable <Intern> {
  @Expose()
  public id?: number;

  @Expose()
  public name: string;

  @Expose()
  public firstname?: string;

  @Expose()
  public phoneNumber?: string;

  @Expose()
  public email?: string;

  @Expose()
  @Type(() => Date)
  public birthDate?: Date;

  @Expose()
  public address?: string;

  public constructor() {
    this.name = '';
  }

  public deserialize (myInter: any ) : Intern {

    //const poe a l'interieur je converti mon ÇA en objet
      const intern: Intern = plainToInstance(Intern, myInter, {
        excludeExtraneousValues: true
      });
      return intern;

    }
}
