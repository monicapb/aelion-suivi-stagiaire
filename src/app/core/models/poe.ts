import { Expose, plainToInstance, Type } from "class-transformer";
import 'reflect-metadata';
import { Serializable } from "../models/interfaces/serializable";

export class POE implements Serializable <POE>  {

  @Expose()
  public id?: number;

  @Expose()
  public  name!: string;

  @Expose()
  @Type(() => Date)
  public  beginDate?: Date;

  @Expose()
  @Type(() => Date)
  public  endDate?: Date;

  public deserialize (myPOE: any ) : POE {

  //const poe a l'interieur je converti mon ÇA en objet
    const poe: POE = plainToInstance(POE, myPOE, {
      excludeExtraneousValues: true
    });
    return poe;

  }


}
