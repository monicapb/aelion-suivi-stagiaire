import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  /**
   * Un attribut privé on le met en maj et sera une constante
   */
  private readonly STORAGE_KEY: string = 'auto_token';


  constructor(
    private router : Router
  ) { }
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

        // Pour convertir un objet en string, on utilise JSON.stringify()
        // Dans mon cas je veux que mon instance de mon user soit converti en chaine de caractere
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.user));
      }
    }



    // Approche old school
    // for (let i: number = 0; i < this.users.length; i++) {
    //   const inUser: any = this.users[i];
    //   if (inUser.email === credentials.email && inUser.pass === credentials.pass) {
    //     this.user = new UserModel();
    //     this.user.setEmail(credentials.email);
    //     this.user.setToken(credentials.email + '.xxxxxx.yyyyyyy');
    //   }
    // }


  }

  public signout(): void{
    this.user = null;
    // On enleve mon item concerné avec sa valeur
    localStorage.removeItem(this.STORAGE_KEY);

    // redirectToRoute into signin
    this.router.navigateByUrl('/signin');


  }
/**
 *
 * @returns Si j'ai un user connected ou pas
 */
  public isAuthenticated(): boolean{
    return this.user !== null;
  }

  public getToken(): void {
    const userAsString: any | null = localStorage.getItem(this.STORAGE_KEY);
    if(userAsString !== null) {
      this.user = new UserModel();
      const persistentUser : any = JSON.parse(userAsString);
      this.user.setEmail(persistentUser.email);
      this.user.setToken(persistentUser.token);
    }

  }

}
