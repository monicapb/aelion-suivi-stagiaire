import { ISanitizePuntutionStrategy } from "./i-sanitize-puntuation-strategy";

export class SpaceBeforeAndAfterStrategy implements  ISanitizePuntutionStrategy {
  sanitize(index: number, stringAsArray: string[], output: string): string {
    let previousChar = stringAsArray[index - 1];
    let nextChar: string = '';

        nextChar = stringAsArray[index + 1];

        if (previousChar === ' ' && nextChar === ' ') {
          output += stringAsArray[index];
        } else {
          if (previousChar !== ' ') {
            output = output + ' ' + stringAsArray[index];
          }
          if (nextChar !== ' ') {
            output = output  + ' ';
          }
          return output = output + stringAsArray[index]
        }
     ;return output;
    //throw new Error("Method not implemeted");
  }
}

