import { Injectable } from '@angular/core';
import { Logger } from 'src/app/core/helpers/logger';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any  [] = [
  {
    email: 'monica.gmail.com',
    pass: 'nikita'
  },
  {
    email: 'Zoto',
    pass: 'VIP'
  }
];
  private user: UserModel | null = null;

  constructor() { }
/**
 *
 * @param credentials il vient du form , espace login avec le mail et le mdp
 */
  public signin(credentials: any): void{
    Logger.info(JSON.stringify(credentials));
    for(const userIsExist of this.users) {
      if(userIsExist.email === credentials.email && userIsExist.pass === credentials.pass) {
        this.user = new UserModel();
        this.user.setEmail(credentials.email);
        this.user.setToken(credentials.email + '.2414845.184851151');
      }
    }



    // Approche old school
    for (let i: number = 0; i < this.users.length; i++) {
      const inUser: any = this.users[i];
      if (inUser.email === credentials.email && inUser.pass === credentials.pass) {
        this.user = new UserModel();
        this.user.setEmail(credentials.email);
        this.user.setToken(credentials.email + '.xxxxxx.yyyyyyy');
      }
    }


  }

  public signout(): void{

  }
/**
 *
 * @returns Si j'ai un user connected ou pas
 */
  public isAuthenticated(): boolean{
    return this.user !== null;
  }

}
