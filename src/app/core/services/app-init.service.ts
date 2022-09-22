import { APP_INITIALIZER, Injectable } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { Logger } from '../helpers/logger';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private userService : UserService
  ) { }

  public init(): Promise<void>{
    this.userService.getToken();
    // reselve method ce que tient la promise donc ce que contient ma promise
    return new Promise((resolve) => {
      Logger.info('Je prends une promese ici, vanat de charger app')
      resolve()
    }
      );

  }


}

export const initializeApp = (appInitService : AppInitService): any => {
  return (): Promise<void> => {
    return appInitService.init();
  }
}

export const appInit = {
  // Ce que j'ai a faire au moment que l'app charge
  provide: APP_INITIALIZER,
  // Fabrique quelque chose useFactory et utilise initializeApp
  useFactory: initializeApp,
  // Ici on met le parametre de function initializeApp et on les appelle deps
  deps: [
    AppInitService
  ],
  multi: true,

}
